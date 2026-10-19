import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I build ultra
          <br />
          <span className="text-cyan-400">fast websites</span>
        </h1>
        <p className="mt-4 text-slate-300">
          Frontend developer from Abuja. Tailwind + JS + React.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/projects"
            className="bg-cyan-400 text-black px-5 py-2.5 rounded font-semibold"
          >
            See My Work
          </Link>
          <Link
            href="/contact"
            className="border border-slate-600 px-5 py-2.5 rounded"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-[70px] opacity-30"></div>
        <Image
          src="/haez.jpg"
          alt="Haez, frontend developer"
          width={288}
          height={288}
          priority
          className="relative w-72 h-72 rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-400/30 object-cover"
        />
      </div>
    </section>
  )
}
