export interface Project {
  slug: string
  title: string
  description: string
  tech: string[]
  live: string
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
    slug: "portfolio-pwa",
    title: "Portfolio PWA",
    description: "Tailwind CSS + PWA + SEO, built 100% in Termux.",
    tech: ["Tailwind", "PWA", "SEO"],
    live: "https://haez0004.github.io/mywebsite/",
    code: "https://github.com/Haez0004/mywebsite",
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    description:
      "Offline Expense Tracker with Search, Monthly Filter, Edit/Delete. Installable, works without internet.",
    tech: ["React", "Vite", "PWA"],
    live: "https://expense-tracker-7455.vercel.app",
    code: "https://github.com/Haez0004/expense-tracker",
  },
  {
    slug: "haez-shop",
    title: "HAEZ SHOP E-Commerce",
    description:
      "Search, category filter, basket, checkout, order history with cancel, account page, help center. Installable and works offline.",
    tech: ["React", "TypeScript", "Tailwind"],
    live: "https://e-commerce-ten-wine-53.vercel.app",
    code: "https://github.com/Haez0004/e-commerce-",
  },
  {
    slug: "hk-movies",
    title: "Hk Movies",
    description:
      "Search, genre filters, load more, trailers and cast, watchlist saved on device. Powered by TMDB.",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    live: "https://haez0004-movie-app.vercel.app",
    code: "https://github.com/Haez0004/movie-app",
  },
]
