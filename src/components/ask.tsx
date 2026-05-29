"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Citation {
  index: number;
  sourceFile: string;
  grade: string | null;
  unit: string | null;
  lesson: string | null;
  page: number | null;
}

interface AskResponse {
  answer: string;
  citations: Citation[];
}

export function Ask() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState<AskResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) throw new Error(`Error ${res.status}`);
      const data: AskResponse = await res.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Curriculum Search</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-4 pt-0">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question about the curriculum..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading || !question.trim()}>
            {isLoading ? "Searching..." : "Ask"}
          </Button>
        </form>

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        {result && (
          <div className="flex flex-col gap-3">
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {result.answer}
            </p>
            {result.citations.length > 0 && (
              <div className="border-t pt-3">
                <p className="text-xs font-medium text-muted-foreground mb-2">
                  Sources
                </p>
                <ul className="flex flex-col gap-1">
                  {result.citations.map((c) => (
                    <li key={c.index} className="text-xs text-muted-foreground">
                      [{c.index}]{" "}
                      {[c.sourceFile, c.grade, c.unit, c.lesson, c.page != null ? `p.${c.page}` : null]
                        .filter(Boolean)
                        .join(" › ")}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
