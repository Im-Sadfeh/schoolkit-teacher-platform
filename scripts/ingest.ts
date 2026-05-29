import "dotenv/config";
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { curriculumChunks } from "../src/db/schema";
// pdf-parse v1 — CJS default export
import pdfParse from "pdf-parse";

const CHUNK_SIZE = 400; // words per chunk
const CHUNK_OVERLAP = 40; // words of overlap between chunks
const SUPPORTED_EXTENSIONS = [".pdf", ".txt", ".md"];
const BATCH_SIZE = 20; // embeddings per API call

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

// ── Helpers ──────────────────────────────────────────────────────────────────

function chunkText(text: string): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const chunks: string[] = [];
  let start = 0;
  while (start < words.length) {
    chunks.push(words.slice(start, start + CHUNK_SIZE).join(" "));
    start += CHUNK_SIZE - CHUNK_OVERLAP;
  }
  return chunks.filter((c) => c.trim().length > 0);
}

async function extractText(filePath: string): Promise<{ text: string; pages: number[] }> {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".pdf") {
    const buffer = fs.readFileSync(filePath);
    const parsed = await pdfParse(buffer);
    return { text: parsed.text, pages: [] };
  }
  return { text: fs.readFileSync(filePath, "utf-8"), pages: [] };
}

// Derive metadata from relative path: course/grade/unit/lesson.ext
function parsePathMetadata(relativePath: string) {
  const parts = relativePath.replace(/\\/g, "/").split("/");
  const filename = path.basename(parts[parts.length - 1], path.extname(parts[parts.length - 1]));
  return {
    course: parts[0] !== filename ? parts[0] : null,
    grade: parts.length > 2 ? parts[1] : null,
    unit: parts.length > 3 ? parts[2] : null,
    lesson: filename,
  };
}

async function embedBatch(texts: string[]): Promise<number[][]> {
  const res = await openai.embeddings.create({
    model: process.env.OPENAI_EMBEDDING_MODEL ?? "text-embedding-3-small",
    input: texts,
  });
  return res.data.map((d) => d.embedding);
}

// ── Setup ─────────────────────────────────────────────────────────────────────

async function setupDatabase() {
  // Enable pgvector and create table via raw SQL
  await sql`CREATE EXTENSION IF NOT EXISTS vector`;
  await sql`
    CREATE TABLE IF NOT EXISTS curriculum_chunks (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      content TEXT NOT NULL,
      embedding vector(1536),
      course TEXT,
      grade TEXT,
      unit TEXT,
      lesson TEXT,
      page INTEGER,
      source_file TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await sql`
    CREATE INDEX IF NOT EXISTS curriculum_chunks_embedding_idx
    ON curriculum_chunks USING hnsw (embedding vector_cosine_ops)
  `;
  console.log("Database ready.");
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const curriculumDir = path.join(process.cwd(), "curriculum");
  if (!fs.existsSync(curriculumDir)) {
    console.error("curriculum/ directory not found.");
    process.exit(1);
  }

  // Walk directory recursively
  const files: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (SUPPORTED_EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) {
        files.push(full);
      }
    }
  };
  walk(curriculumDir);

  if (files.length === 0) {
    console.log("No files found in curriculum/. Add PDFs, .txt, or .md files.");
    process.exit(0);
  }

  console.log(`Found ${files.length} file(s).`);
  await setupDatabase();

  // Process each file
  for (const filePath of files) {
    const relativePath = path.relative(curriculumDir, filePath);
    const meta = parsePathMetadata(relativePath);
    console.log(`\nProcessing: ${relativePath}`);

    const { text } = await extractText(filePath);
    const chunks = chunkText(text);
    console.log(`  ${chunks.length} chunks`);

    // Embed in batches
    for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
      const batch = chunks.slice(i, i + BATCH_SIZE);
      const embeddings = await embedBatch(batch);

      const rows = batch.map((content, j) => ({
        content,
        embedding: embeddings[j],
        course: meta.course,
        grade: meta.grade,
        unit: meta.unit,
        lesson: meta.lesson,
        page: null,
        sourceFile: relativePath,
      }));

      await db.insert(curriculumChunks).values(rows);
      process.stdout.write(`  embedded ${Math.min(i + BATCH_SIZE, chunks.length)}/${chunks.length}\r`);
    }
    console.log(`  done.`);
  }

  console.log("\nIngestion complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
