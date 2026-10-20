"use client"

import { useState } from "react"

const ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_URL ?? "https://formspree.io/f/mwlpanpw"

type Status = "idle" | "sending" | "success" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("sending")
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        form.reset()
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const field =
    "w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-6 rounded-xl space-y-4"
    >
      <input type="text" name="name" placeholder="Your Name" required className={field} />
      <input type="email" name="email" placeholder="Your Email" required className={field} />
      <textarea name="message" placeholder="Your Project Idea..." required rows={4} className={field} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-cyan-400 text-slate-900 font-bold py-3 rounded hover:bg-cyan-300 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      <div aria-live="polite">
        {status === "success" && (
          <p className="text-cyan-400">Thanks! Your message was sent. I will reply soon.</p>
        )}
        {status === "error" && (
          <p className="text-red-300">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </div>
    </form>
  )
}
