import Image from "next/image"
import Link from "next/link"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"

const offers = [
  {
    title: "Fast websites",
    text: "Clean, responsive sites built for speed and for small phone screens.",
  },
  {
    title: "React + TypeScript apps",
    text: "Stores, trackers and movie apps with search, filters and saved data.",
  },
  {
    title: "Installable PWAs",
    text: "Apps you can install on a phone that keep working offline.",
  },
]

export default function Home() {
  const featured = projects.slice(-3)

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 space-y-16 pb-8">
      <section className="pt-8 md:pt-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block text-xs text-cyan-400 border border-cyan-400/40 rounded-xl px-3 py-1">
            Open to freelance and remote jobs, full or part time
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            I build ultra
            <br />
            <span className="text-cyan-400">fast websites</span>
          </h1>
          <p className="mt-4 text-slate-300">
            Frontend developer from Abuja. Tailwind + JS + React + Next.js.
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

      <section className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-slate-800 rounded-xl py-4">
          <p className="text-2xl font-bold text-cyan-400">{projects.length}</p>
          <p className="text-xs text-slate-400 mt-1">Projects built</p>
        </div>
        <div className="bg-slate-800 rounded-xl py-4">
          <p className="text-2xl font-bold text-cyan-400">100%</p>
          <p className="text-xs text-slate-400 mt-1">Built in Termux</p>
        </div>
        <div className="bg-slate-800 rounded-xl py-4">
          <p className="text-2xl font-bold text-cyan-400">PWA</p>
          <p className="text-xs text-slate-400 mt-1">Works offline</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">What I build</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {offers.map((o) => (
            <div key={o.title} className="border border-slate-700 rounded-xl p-5">
              <h3 className="font-bold text-cyan-400">{o.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{o.text}</p>
            </div>
          ))}
        </div>
        <Link href="/about" className="inline-block mt-4 text-sm text-cyan-400 hover:underline">
          More about me and my skills →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Latest projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <Link href="/projects" className="inline-block mt-4 text-sm text-cyan-400 hover:underline">
          See all {projects.length} projects →
        </Link>
      </section>

      <section className="bg-slate-800 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold">Have a project in mind?</h2>
        <p className="mt-2 text-slate-400">
          Tell me what you need and I will get back to you.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <Link
            href="/contact"
            className="bg-cyan-400 text-black px-5 py-2.5 rounded font-semibold"
          >
            Contact me
          </Link>
          <a
            href="/my-cv.pdf"
            download
            className="border border-slate-600 px-5 py-2.5 rounded"
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  )
}
