import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto">
      <Link href="/" className="text-xl font-bold text-cyan-400">
        HAEZ
      </Link>
      <div className="flex gap-6 text-sm">
        <Link href="/projects" className="hover:text-cyan-400">Projects</Link>
        <Link href="/contact" className="hover:text-cyan-400">Contact</Link>
      </div>
    </nav>
  )
}
