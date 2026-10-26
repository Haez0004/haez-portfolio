import Link from "next/link"

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 md:px-12 py-24 text-center">
      <h1 className="text-6xl font-bold text-cyan-400">404</h1>
      <p className="mt-4 text-slate-300">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="inline-block mt-6 bg-cyan-400 text-black px-5 py-2.5 rounded font-semibold"
      >
        Back home
      </Link>
    </section>
  )
}
