export interface Project {
  slug: string
  title: string
  description: string
  tech: string[]
  live?: string
  code: string
}

export const projects: Project[] = [
  {
    slug: "weather-pwa",
    title: "Weather PWA",
    description:
      "Live city search, dynamic icons, humidity/wind, installable PWA + offline cache. Built 100% on phone with Termux.",
    tech: ["JavaScript", "API", "PWA"],
    live: "https://Haez0004.github.io/weather-app/",
    code: "https://github.com/Haez0004/weather-app",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1 (HTML + Tailwind)",
    description:
      "My first portfolio: plain HTML, Tailwind CSS, PWA and SEO, built 100% in Termux. Replaced by the Next.js version below.",
    tech: ["HTML", "Tailwind", "PWA", "SEO"],
    live: "https://haez0004.github.io/mywebsite/",
    code: "https://github.com/Haez0004/mywebsite",
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    description:
      "Multi-page React app with dashboard, transactions, analytics, monthly budget and settings. Search, month and date filters, edit/delete, multi-currency. Installable PWA that works offline.",
    tech: ["React", "TypeScript", "React Router", "Tailwind", "PWA"],
    live: "https://expense-tracker-7455.vercel.app",
    code: "https://github.com/Haez0004/expense-tracker",
  },
  {
    slug: "haez-shop",
    title: "HAEZ SHOP E-Commerce",
    description:
      "Search, category filter, basket, checkout, order history with cancel, account page, help center. Installable and works offline.",
    tech: ["React", "TypeScript", "React Router", "Tailwind"],
    live: "https://e-commerce-ten-wine-53.vercel.app",
    code: "https://github.com/Haez0004/e-commerce-",
  },
  {
    slug: "hk-movies",
    title: "Hk Movies",
    description:
      "Search, genre filters, load more, trailers and cast, watchlist saved on device. Powered by TMDB.",
    tech: ["React", "TypeScript", "Vite", "React Router", "Tailwind"],
    live: "https://haez0004-movie-app.vercel.app",
    code: "https://github.com/Haez0004/movie-app",
  },
  {
    slug: "portfolio-v2",
    title: "Portfolio v2 (Next.js)",
    description:
      "My portfolio rebuilt in Next.js with the App Router. Server Components by default with Client Components only where needed, typed project data, dynamic project pages with their own metadata, Open Graph share previews with an optimized image, next/font, a custom 404 and an About page. Built 100% in Termux.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Server Components"],
    live: "https://haez-portfolio.vercel.app",
    code: "https://github.com/Haez0004/haez-portfolio",
  },
  {
    slug: "remotejobs",
    title: "RemoteJobs Board",
    description:
      "Remote software jobs board with search, category and type filters, pagination, job detail pages and saved jobs on device. Installable PWA that works offline. Lighthouse 99/100/100/100. Powered by Remotive. Built 100% in Termux.",
    tech: ["Next.js", "TypeScript", "Tailwind", "PWA"],
    live: "https://remotejobs-liard.vercel.app",
    code: "https://github.com/Haez0004/remotejobs",
  },
]
