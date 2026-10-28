import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages, UIMessage } from "ai";
import * as cv from "@/data/cv";
import * as projects from "@/data/projects";
import * as skills from "@/data/skills";

export const maxDuration = 30;

const context = JSON.stringify({ cv, projects, skills }, null, 2);
const hits = new Map<string, { count: number; reset: number }>();
const LIMIT = 15; // messages per hour per visitor
const WINDOW = 60 * 60 * 1000;

function limited(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now > rec.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW });
    return false;
  }
  rec.count++;
  return rec.count > LIMIT;
}

export async function POST(req: Request) {
const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
if (limited(ip)) {
  return new Response("Demo limit reached. Please try again later.", {
    status: 429,
  });
}
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
