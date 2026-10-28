import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages, UIMessage } from "ai";
import * as cv from "@/data/cv";
import * as projects from "@/data/projects";
import * as skills from "@/data/skills";

export const maxDuration = 30;

const context = JSON.stringify({ cv, projects, skills }, null, 2);

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-3.6-flash"),
    system: `You answer questions about the portfolio owner.
Use only the info below. If it isn't covered, say you don't know.
Keep answers short. Use plain text only: no markdown, no asterisks, no bullet symbols.

${context}`,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse({
  onError: (e) => (e instanceof Error ? e.message : String(e)),
});
}
