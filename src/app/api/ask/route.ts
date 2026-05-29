import { auth } from "@clerk/nextjs/server";
import OpenAI from "openai";
import { retrieveChunks, formatChunksAsContext } from "@/lib/retrieval";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `You are a curriculum assistant for CodeBrave's Computer Science programme in Lebanon.
Answer the teacher's question using ONLY the curriculum excerpts provided below.
Cite sources inline using the reference numbers (e.g. [1], [2]).
If the answer is not found in the excerpts, say exactly: "I couldn't find that in the curriculum materials."
Do not guess or use outside knowledge.`;

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const { question } = await req.json();
  if (!question?.trim()) {
    return Response.json({ error: "Question is required" }, { status: 400 });
  }

  // Embed the question
  const embeddingRes = await openai.embeddings.create({
    model: process.env.OPENAI_EMBEDDING_MODEL ?? "text-embedding-3-small",
    input: question,
  });
  const queryEmbedding = embeddingRes.data[0].embedding;

  // Retrieve relevant chunks
  const chunks = await retrieveChunks(queryEmbedding);

  if (chunks.length === 0) {
    return Response.json({
      answer: "I couldn't find that in the curriculum materials.",
      citations: [],
    });
  }

  const context = formatChunksAsContext(chunks);
  const citations = chunks.map((c, i) => ({
    index: i + 1,
    sourceFile: c.sourceFile,
    grade: c.grade,
    unit: c.unit,
    lesson: c.lesson,
    page: c.page,
  }));

  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      {
        role: "user",
        content: `CURRICULUM EXCERPTS:\n${context}\n\nQUESTION: ${question}`,
      },
    ],
  });

  const answer = completion.choices[0].message.content ?? "";

  return Response.json({ answer, citations });
}
