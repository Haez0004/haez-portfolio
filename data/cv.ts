export interface CvProject {
  title: string
  tech: string
  year: string
  live: string
  code?: string
  bullets: string[]
}

export interface CvJob {
  role: string
  place: string
  period: string
  bullets: string[]
}

export const cv = {
  name: "HAKURI EZEKIEL",
  headline: "Frontend Developer | React, TypeScript, Next.js | Open to remote roles",
  location: "Abuja, Nigeria",
  email: "hakurie146@gmail.com",
  portfolio: "https://haez-portfolio.vercel.app",
  github: "https://github.com/Haez0004",
  linkedin: "https://www.linkedin.com/in/hakuri-ezekiel-787a34336",
  summary:
    "Frontend developer based in Abuja, Nigeria, building fast, responsive websites and web apps with React, TypeScript, Next.js and Tailwind CSS. Built and deployed eight projects, including a Next.js portfolio and a remote jobs board that score 100 on mobile PageSpeed. All projects were built entirely on a phone using Termux, which taught me to write lean code and test on real devices. Background in teaching, team management and music instruction adds strong communication, organization and teamwork. Open to freelance work and to full-time or part-time remote roles.",
  skills: [
    ["Frontend", "HTML5, CSS3, JavaScript (ES6+), TypeScript, React, React Router, Next.js (App Router), Tailwind CSS, Vite"],
    ["Web and quality", "PWA and service workers, REST APIs, responsive design, SEO and Open Graph, performance optimization, accessibility, HTML sanitizing"],
    ["Tools", "Git and GitHub, Vercel, GitHub Pages, Formspree, Termux"],
    ["Digital and office", "Microsoft Office Suite, digital literacy, website maintenance"],
    ["Professional", "Team leadership, teaching, communication, problem solving, piano instruction and music theory"],
  ] as [string, string][],
  projects: [
    
    {
      title: "TaskFlow",
      tech: "Next.js 16, React 19, TypeScript, Tailwind CSS, dnd-kit, PWA",
      year: "2026",
      live: "https://taskflow-coral-delta.vercel.app",
      code: "https://github.com/Haez0004/taskflow-",
      bullets: [
        "Built an accessible task board with drag and drop that works by keyboard and screen reader, using useReducer and Context, with tasks saved on the device",
        "Added live announcements, focus management, search and empty states; scores 100 on Accessibility, Best Practices and SEO on Lighthouse",
        "Made it an installable PWA with offline support, covered by Vitest tests",
      ],
    },

    {
      title: "RemoteJobs Board",
      tech: "Next.js 16, TypeScript, Tailwind CSS, PWA",
      year: "2026",
      live: "https://remotejobs-liard.vercel.app",
      code: "https://github.com/Haez0004/remotejobs",
      bullets: [
        "Built a server-rendered jobs board with URL-based search, filters and pagination, using cached data from the Remotive API with a fallback copy",
        "Added job detail pages with sanitized HTML descriptions, saved jobs (client component and localStorage), loading, error and 404 states, plus sitemap, robots and Open Graph metadata",
        "Made it an installable PWA with a service worker and offline fallback, deployed on Vercel, and scored 100 / 100 / 100 / 100 on Lighthouse mobile",
      ],
    },
    {
      title: "Portfolio v2",
      tech: "Next.js, TypeScript, Tailwind CSS",
      year: "2026",
      live: "https://haez-portfolio.vercel.app",
      code: "https://github.com/Haez0004/haez-portfolio",
      bullets: [
        "Rebuilt my portfolio with the Next.js App Router, using Server Components and Client Components only where needed",
        "Built dynamic project pages with generateStaticParams and per-page metadata, plus Open Graph share previews",
        "Scores 100 on mobile PageSpeed for Performance, Accessibility, Best Practices and SEO",
        "Deployed on Vercel with source on GitHub",
      ],
    },
    {
      title: "Hk Movies",
      tech: "React, TypeScript, Vite, React Router, Tailwind CSS",
      year: "2026",
      live: "https://haez0004-movie-app.vercel.app",
      code: "https://github.com/Haez0004/movie-app",
      bullets: [
        "Built a movie discovery app using the TMDB API with search, genre filters, load more, trailers and cast details",
        "Added a watchlist that is saved on the device",
      ],
    },
    {
      title: "HAEZ SHOP E-Commerce",
      tech: "React, TypeScript, React Router, Tailwind CSS",
      year: "2026",
      live: "https://e-commerce-ten-wine-53.vercel.app",
      code: "https://github.com/Haez0004/e-commerce-",
      bullets: [
        "Built an online store with product search, category filters, basket, checkout, order history with cancel, account page and help center",
        "Installable as a PWA with offline support, redesigned with a dark theme",
      ],
    },
    {
      title: "Expense Tracker",
      tech: "React, TypeScript, React Router, Tailwind CSS, PWA",
      year: "2026",
      live: "https://expense-tracker-7455.vercel.app",
      code: "https://github.com/Haez0004/expense-tracker",
      bullets: [
        "Built a multi-page expense tracker with React Router (Dashboard, Transactions, Analytics, Budgets, Settings and About pages), with search, budget setting, multi-currency, filter and edit/delete",
        "Monthly budget limit with a progress bar, month and date-range filters, and data saved on the device. Installable as a PWA that works offline",
      ],
    },
    {
      title: "Weather PWA",
      tech: "JavaScript, OpenWeatherMap API",
      year: "2025",
      live: "https://haez0004.github.io/weather-app/",
      code: "https://github.com/Haez0004/weather-app",
      bullets: [
        "Built a weather app with live city search, dynamic icons, humidity and wind details",
        "Installable as a PWA with an offline cache",
      ],
    },
    {
      title: "Portfolio v1",
      tech: "HTML, Tailwind CSS, PWA",
      year: "2025",
      live: "https://haez0004.github.io/mywebsite/",
      code: "https://github.com/Haez0004/mywebsite",
      bullets: [
        "Designed and deployed a responsive portfolio from a mobile phone using Termux",
        "Hosted on GitHub Pages using Git version control, with a downloadable CV for recruiters",
      ],
    },
  ] as CvProject[],
  experience: [
    {
      role: "Manager",
      place: "HK Enterprise Ltd, Abuja",
      period: "2024 - Present",
      bullets: [
        "Oversee daily operations and manage a team to ensure business targets are met",
        "Implemented systems that improved customer service and staff productivity",
      ],
    },
    {
      role: "Teacher",
      place: "Piano Maestro Limited, Abuja",
      period: "2024 - 2025",
      bullets: [
        "Delivered piano lessons to students of all ages, preparing them for music examinations",
        "Created engaging practice routines that increased student retention by 35%",
      ],
    },
    {
      role: "Teacher",
      place: "New Age Academy, Nasarawa",
      period: "2023 - 2025",
      bullets: [
        "Taught Math, Agriculture and Computer Studies to secondary school students",
        "Improved average class test scores by 25% through interactive teaching methods",
      ],
    },
    {
      role: "Sports Master",
      place: "Presentation Brothers Secondary School, Tafawa Balewa",
      period: "2019 - 2022",
      bullets: [
        "Coordinated inter-house sports and trained students for inter-school competitions",
        "Promoted physical fitness and discipline among 300+ students",
      ],
    },
  ] as CvJob[],
  education: [
    ["NCE in Agricultural Science and Education", "Federal College of Education (Technical), Gombe", "2020"],
    ["Senior School Certificate", "Government College, Azare, Bauchi State", "2014"],
    ["First School Leaving Certificate", "Central Primary School, Tafawa Balewa, Bauchi", "2007"],
  ] as [string, string, string][],
}
