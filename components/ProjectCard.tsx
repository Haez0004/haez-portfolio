import Link from "next/link"
import type { Project } from "@/data/projects"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h3 className="text-white font-bold">
        <Link href={`/projects/${project.slug}`} className="hover:text-cyan-400">
          {project.title}
        </Link>
      </h3>
      <p className="text-slate-400 text-sm mt-2">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs text-cyan-400 bg-slate-900 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-400 text-black px-3 py-1 rounded text-sm"
        >
          Live
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cyan-400 text-cyan-400 px-3 py-1 rounded text-sm"
        >
          Code
        </a>
      </div>
    </div>
  )
}
