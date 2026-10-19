import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-2xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
