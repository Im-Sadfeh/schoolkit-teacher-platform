import { sql } from "drizzle-orm";
import { db } from "@/db";
import { curriculumChunks } from "@/db/schema";

export interface ChunkResult {
  id: string;
  content: string;
  course: string | null;
  grade: string | null;
  unit: string | null;
  lesson: string | null;
  page: number | null;
  sourceFile: string;
  similarity: number;
}

export async function retrieveChunks(
  queryEmbedding: number[],
  topK = 5,
  similarityThreshold = 0.3
): Promise<ChunkResult[]> {
  const embeddingLiteral = `[${queryEmbedding.join(",")}]`;

  const results = await db
    .select({
      id: curriculumChunks.id,
      content: curriculumChunks.content,
      course: curriculumChunks.course,
      grade: curriculumChunks.grade,
      unit: curriculumChunks.unit,
      lesson: curriculumChunks.lesson,
      page: curriculumChunks.page,
      sourceFile: curriculumChunks.sourceFile,
      similarity: sql<number>`1 - (embedding <=> ${sql.raw(`'${embeddingLiteral}'`)}::vector)`,
    })
    .from(curriculumChunks)
    .orderBy(sql`embedding <=> ${sql.raw(`'${embeddingLiteral}'`)}::vector`)
    .limit(topK);

  return results.filter((r) => r.similarity >= similarityThreshold);
}

export function formatChunksAsContext(chunks: ChunkResult[]): string {
  return chunks
    .map((chunk, i) => {
      const parts = [
        chunk.sourceFile,
        chunk.grade,
        chunk.unit,
        chunk.lesson,
        chunk.page != null ? `p.${chunk.page}` : null,
      ].filter(Boolean);
      return `[${i + 1}] ${parts.join(" › ")}\n${chunk.content}`;
    })
    .join("\n\n");
}
