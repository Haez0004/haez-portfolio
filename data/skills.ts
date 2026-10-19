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
    items: ["map, filter, reduce", "async/await and fetch", "REST APIs", "localStorage", "Debouncing"],
  },
  {
    title: "React",
    items: ["Components and props", "useState and useEffect", "useContext and useReducer", "Custom hooks", "React Router", "Vite"],
  },
  {
    title: "TypeScript and Next.js",
    items: ["Types and interfaces", "Typed React apps", "Next.js App Router", "Server and Client Components", "Dynamic routes"],
  },
  {
    title: "Quality",
    items: ["PWA and offline support", "Service workers", "SEO and Open Graph", "Performance", "Accessibility basics"],
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
      "Rebuilt my portfolio with Tailwind, SEO and Open Graph, and a real contact form. Built an offline Expense Tracker with search, filters and edit, then learned Git branching.",
  },
  {
    period: "Month 2",
    title: "JavaScript and React",
    detail:
      "Learned async JavaScript and shipped a Weather PWA with a live API. Moved into React with Vite, hooks and routing, and rebuilt my tracker as a React app.",
  },
  {
    period: "Month 3",
    title: "TypeScript and Next.js",
    detail:
      "Converted my apps to TypeScript, then built an e-commerce store and a movie app. Rebuilt this portfolio in Next.js with Server Components and dynamic routes.",
  },
]
