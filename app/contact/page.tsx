export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-2xl font-bold mb-6">Contact Me</h1>
      <form
        action="https://formspree.io/f/mwlpanpw"
        method="POST"
        className="bg-slate-800 p-6 rounded-xl space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Project Idea..."
          required
          rows={4}
          className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"
        />
        <button
          type="submit"
          className="w-full bg-cyan-400 text-slate-900 font-bold py-3 rounded hover:bg-cyan-300"
        >
          Send Message
        </button>
      </form>
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
