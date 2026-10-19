export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 mt-16 border-t border-slate-800 text-sm text-slate-400 flex flex-col sm:flex-row justify-between gap-2">
      <p>© 2026 HAEZ. Built with Next.js, Tailwind and Termux.</p>
      <a
        href="https://github.com/Haez0004"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400"
      >
        GitHub
      </a>
    </footer>
  )
}
