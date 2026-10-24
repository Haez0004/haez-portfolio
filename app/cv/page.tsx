import type { Metadata } from "next"
import { cv } from "@/data/cv"
import PrintButton from "@/components/PrintButton"

export const metadata: Metadata = {
  title: "CV",
  robots: { index: false, follow: false },
}

function Heading({ children }: { children: string }) {
  return (
    <h2 className="mt-6 mb-2 border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wide text-slate-900">
      {children}
    </h2>
  )
}

export default function CvPage() {
  return (
    <div className="px-4 py-8">
      <div className="no-print mx-auto mb-4 max-w-3xl">
        <PrintButton />
      </div>
      <article
        id="cv-sheet"
        className="mx-auto max-w-3xl rounded bg-white p-6 text-sm leading-relaxed text-slate-800 md:p-10"
      >
        <header>
          <h1 className="text-2xl font-bold text-slate-900">{cv.name}</h1>
          <p className="mt-1 font-medium text-slate-700">{cv.headline}</p>
          <p className="mt-2 text-slate-700">
            {cv.location} | {cv.email}
          </p>
          <p className="text-slate-700">
            <a href={cv.portfolio} className="underline">Portfolio</a>
            {" | "}
            <a href={cv.github} className="underline">GitHub</a>
            {" | "}
            <a href={cv.linkedin} className="underline">LinkedIn</a>
          </p>
        </header>

        <Heading>Professional summary</Heading>
        <p>{cv.summary}</p>

        <Heading>Skills</Heading>
        <ul className="space-y-1">
          {cv.skills.map(([label, items]) => (
            <li key={label}>
              <span className="font-semibold">{label}:</span> {items}
            </li>
          ))}
        </ul>

        <Heading>Projects</Heading>
        <div className="space-y-4">
          {cv.projects.map((p) => (
            <section key={p.title}>
              <h3 className="font-semibold text-slate-900">
                {p.title} <span className="font-normal text-slate-700">({p.tech}) | {p.year}</span>
              </h3>
              <p className="text-xs text-slate-600">
                <a href={p.live} className="underline">{p.live}</a>
                {p.code && (
                  <>
                    {" | "}
                    <a href={p.code} className="underline">Code</a>
                  </>
                )}
              </p>
              <ul className="mt-1 list-disc space-y-0.5 pl-5">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <Heading>Work experience</Heading>
        <div className="space-y-3">
          {cv.experience.map((j) => (
            <section key={j.role + j.place}>
              <h3 className="font-semibold text-slate-900">
                {j.role} | {j.place} | {j.period}
              </h3>
              <ul className="mt-1 list-disc space-y-0.5 pl-5">
                {j.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <Heading>Education</Heading>
        <ul className="space-y-1">
          {cv.education.map(([award, school, year]) => (
            <li key={award}>
              <span className="font-semibold">{award}</span> | {school} | {year}
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}
