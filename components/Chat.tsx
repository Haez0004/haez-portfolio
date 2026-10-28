"use client";
import { useChat } from "@ai-sdk/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SUGGESTIONS = [
  "What projects has Haez built?",
  "What are his skills?",
  "Is he open to work?",
];

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat();
  const listRef = useRef<HTMLDivElement>(null);
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, status]);

  function send(text: string) {
    if (!text.trim() || busy) return;
    sendMessage({ text });
    setInput("");
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-900 text-slate-100">
      <header className="flex items-center gap-3 px-4 py-3 border-b border-slate-700 bg-slate-800">
        <Link href="/" aria-label="Back" className="text-2xl text-cyan-400 px-1">
          ←
        </Link>
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div className="leading-tight">
          <p className="font-semibold">Haez&apos;s assistant</p>
          <p className="text-xs text-slate-400">
            {busy ? "typing…" : "online"}
          </p>
        </div>
      </header>

      <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.length === 0 && (
          <div className="space-y-3">
            <p className="text-slate-400">
              Hi! Ask me anything about Haez&apos;s work, skills, or CV.
            </p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="px-3 py-2 rounded-full border border-slate-600 text-cyan-300"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m) => {
          const isUser = m.role === "user";
          const text = m.parts
            .map((p) => (p.type === "text" ? p.text : ""))
            .join("");
          if (!text) return null;
          return (
            <div
              key={m.id}
              className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 whitespace-pre-wrap leading-relaxed ${
                  isUser
                    ? "bg-cyan-400 text-black rounded-br-sm"
                    : "bg-slate-800 border border-slate-600 rounded-bl-sm"
                }`}
              >
                {text}
              </div>
            </div>
          );
        })}

        {status === "submitted" && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-sm border border-slate-600 bg-slate-800 px-4 py-3 flex gap-1">
              <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" />
              <span
                className="h-2 w-2 rounded-full bg-slate-400 animate-bounce"
                style={{ animationDelay: "0.15s" }}
              />
              <span
                className="h-2 w-2 rounded-full bg-slate-400 animate-bounce"
                style={{ animationDelay: "0.3s" }}
              />
            </div>
          </div>
        )}

        {error && (
          <p className="text-sm text-red-400">
            Something went wrong. Please try again in a moment.
          </p>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 p-3 border-t border-slate-700 bg-slate-800 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      >
        <input
          className="min-w-0 flex-1 rounded-full bg-slate-900 border border-slate-600 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my projects..."
          disabled={busy}
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="shrink-0 rounded-full bg-cyan-400 text-black font-semibold px-5 py-3 disabled:opacity-40"
        >
          Send
        </button>
      </form>
    </div>
  );
}