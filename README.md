# HAEZ Portfolio

Personal portfolio of **Haez**, a frontend developer from Abuja, Nigeria. Built with the Next.js App Router, TypeScript and Tailwind CSS, entirely on a phone using Termux.

**Live site:** https://haez-portfolio.vercel.app

## Performance

Mobile PageSpeed Insights on the live site:

| Performance | Accessibility | Best Practices | SEO |
|:-----------:|:-------------:|:--------------:|:---:|
| 100 | 98 | 100 | 100 |

## Features

- Five routes: Home, About, Projects, Project detail and Contact
- Dynamic project pages (`/projects/[slug]`) built ahead of time with `generateStaticParams`
- Per-page metadata with `generateMetadata`, plus Open Graph and Twitter share previews (photo and title show on WhatsApp)
- Typed project and skills data (`data/projects.ts`, `data/skills.ts`) rendered with `.map()`
- Server Components by default, with no client JavaScript where it is not needed
- `next/image` for the hero photo and `next/font` for Inter
- Custom 404 page
- Contact form powered by Formspree
- Responsive, mobile-first layout with a dark theme

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Formspree
- Vercel

## Project structure

~~~
app/
  layout.tsx          shared navbar, footer, fonts and metadata
  page.tsx            home page
  about/page.tsx      skills and learning journey
  projects/page.tsx   all projects
  projects/[slug]/    one page per project
  contact/page.tsx    contact form
  not-found.tsx       custom 404
components/           Navbar, Footer, ProjectCard
data/                 projects.ts, skills.ts
public/               photo, CV and share image
~~~

## Run locally

Requires Node.js 20.9 or newer.

~~~
git clone https://github.com/Haez0004/haez-portfolio.git
cd haez-portfolio
npm install
npm run dev
~~~

Open http://localhost:3000.

### Running on Termux (Android)

Turbopack has no Android build, so start the dev server with Webpack:

~~~
npx next dev --webpack
~~~

Tailwind v4 also needs the PostCSS plugin (`@tailwindcss/postcss`) and a `postcss.config.mjs`, both already set up in this repo.

## What I learned

- When to use a Server Component and when a Client Component is needed
- How folders become routes, and how `[slug]` serves many pages from one file
- Why `priority` belongs only on the main image at the top of a page
- Why optimized images and fonts matter for performance scores

## Contact

I am open to freelance work and to full-time or part-time remote jobs.

- Email: hakurie146@gmail.com
- GitHub: https://github.com/Haez0004
