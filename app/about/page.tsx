import type { Metadata } from "next"
import Link from "next/link"
import { skillGroups, journey } from "@/data/skills"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "About | HAEZ",
  description:
    "Frontend developer from Abuja. Skills in React, TypeScript, Next.js and Tailwind, all learned and built on a phone with Termux.",
}

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-16">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold">
          About <span className="text-cyan-400">me</span>
        </h1>
        <p className="mt-4 text-slate-300 leading-relaxed">
          I am a frontend developer based in Abuja, Nigeria. I build fast,
          clean websites and web apps with React, TypeScript, Next.js and
          Tailwind CSS.
        </p>
        <p className="mt-3 text-slate-300 leading-relaxed">
          I learned and built everything on my phone using Termux. That
          taught me to write lean code, test on real devices, and ship
          projects that work offline. I am open to freelance work and to full-time or part-time remote jobs.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/my-cv.pdf"
            download
            className="bg-cyan-400 text-black px-5 py-2.5 rounded font-semibold"
          >
            Download CV
          </a>
          <Link
            href="/contact"
            className="border border-slate-600 px-5 py-2.5 rounded"
          >
            Hire me
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-slate-800 p-5 rounded-xl">
              <h3 className="font-bold text-cyan-400">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs bg-slate-900 text-slate-300 px-2 py-1 rounded"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">My journey</h2>
        <ol className="border-l border-slate-700 space-y-8 ml-2">
          {journey.map((step) => (
            <li key={step.period} className="pl-6 relative">
              <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-cyan-400"></span>
              <p className="text-xs text-cyan-400 font-semibold">{step.period}</p>
              <h3 className="font-bold mt-1">{step.title}</h3>
              <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-slate-800 p-6 rounded-xl">
        <h2 className="text-xl font-bold">
          {projects.length} projects built and deployed
        </h2>
        <p className="mt-2 text-slate-400 text-sm">
          From a weather PWA to a TMDB-powered movie app, each one has live
          code you can open and a repo you can read.
        </p>
        <Link
          href="/projects"
          className="inline-block mt-4 bg-cyan-400 text-black px-4 py-2 rounded font-semibold text-sm"
        >
          See all projects
        </Link>
      </section>
    </div>
  )
}
