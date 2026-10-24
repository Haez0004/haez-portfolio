export interface SkillGroup {
  title: string
  items: string[]
}

export interface JourneyStep {
  period: string
  title: string
  detail: string
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Foundations",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Flexbox and Grid", "Responsive design"],
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "Mobile-first layouts", "Dark UI design"],
  },
  {
    title: "JavaScript",
    items: ["map, filter, reduce", "Promises and async/await", "fetch and REST APIs", "localStorage", "Debouncing"],
  },
  {
    title: "React",
    items: ["Components and props", "useState and useEffect", "useContext and useReducer", "Custom hooks", "React Router", "Vite"],
  },
  {
    title: "TypeScript and Next.js",
    items: ["Types and interfaces", "Typed React apps", "Next.js App Router", "Server and Client Components", "Dynamic routes", "Metadata and next/image", "Data caching and revalidation", "Loading, error and 404 states"],
  },
  {
    title: "Quality",
    items: ["PWA and offline support", "Service workers", "SEO and Open Graph", "PageSpeed optimization", "Accessibility basics", "HTML sanitizing"],
  },
  {
    title: "Tools",
    items: ["Git and GitHub", "Branching and merging", "Vercel deployment", "Formspree", "Termux"],
  },
]

export const journey: JourneyStep[] = [
  {
    period: "Month 1",
    title: "Foundations",
    detail:
      "Rebuilt my portfolio with Tailwind, Flexbox and Grid, SEO and Open Graph, and a real contact form. Built an offline Expense Tracker with search, filters and edit, added a service worker, then learned Git branching.",
  },
  {
    period: "Month 2",
    title: "JavaScript and React",
    detail:
      "Learned async JavaScript and shipped a Weather PWA with a live API. Moved into React with Vite, hooks and React Router, and rebuilt my tracker as a multi-page app with budgets and analytics.",
  },
  {
    period: "Month 3",
    title: "TypeScript and Next.js",
    detail:
      "Converted my expense tracker to TypeScript, then built an e-commerce store and a movie app. Rebuilt this portfolio in Next.js with Server Components and dynamic routes, and scored 100 on mobile PageSpeed for Performance.",
  },
  {
    period: "Month 4",
    title: "Production Next.js",
    detail:
      "Built a remote jobs board in Next.js 16 with cached API data, URL-based search and filters, sanitized job pages, saved jobs, an installable offline PWA and a 100/100/100/100 Lighthouse score.",
  },
]
