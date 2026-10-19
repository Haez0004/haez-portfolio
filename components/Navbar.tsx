import Link from "next/link"

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2 px-4 md:px-12 py-5">
      <Link
        href="/"
        className="text-lg font-bold text-cyan-400 border border-cyan-400 rounded-lg px-3 py-1.5 hover:bg-cyan-400 hover:text-slate-900"
      >
        HAEZ
      </Link>
      <div className="flex gap-2 text-sm">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="border border-cyan-400/60 rounded-lg px-3 py-1.5 hover:bg-cyan-400 hover:text-slate-900"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
