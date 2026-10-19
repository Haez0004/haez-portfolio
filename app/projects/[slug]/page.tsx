import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} | HAEZ`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-16">
      <Link href="/projects" className="text-sm text-cyan-400 hover:underline">
        ← All projects
      </Link>
      <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
      <p className="text-slate-300 mt-4">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs text-cyan-400 bg-slate-800 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-400 text-black px-4 py-2 rounded font-semibold"
        >
          Live site
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded"
        >
          View code
        </a>
      </div>
    </section>
  )
}
