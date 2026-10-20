import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact | HAEZ",
  description:
    "Get in touch about freelance work or a full-time or part-time remote role.",
}

export default function ContactPage() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-2xl font-bold mb-6">Contact Me</h1>
      <ContactForm />
      <p className="mt-6 text-slate-300">
        Or email me:{" "}
        <a
          href="mailto:hakurie146@gmail.com"
          className="text-cyan-400 hover:underline"
        >
          hakurie146@gmail.com
        </a>
      </p>
    </section>
  )
}
