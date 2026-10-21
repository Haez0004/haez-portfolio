# haez-portfolio: Progress Tracker

**Goal:** Rebuild my HTML/Tailwind portfolio in Next.js (App Router + TypeScript) as a fast, deployed, recruiter-ready project.
**Live site:** https://haez-portfolio.vercel.app
**Repo:** https://github.com/Haez0004/haez-portfolio
**Built on:** a phone, in Termux
**Status:** Deployed (Oct 2026)

## Results

| Mobile PageSpeed | Score |
|------------------|-------|
| Performance | 100 |
| Accessibility | 98 |
| Best Practices | 100 |
| SEO | 100 |

## Theory

- [x] Folders = URLs, `page.tsx` is what shows
- [x] `layout.tsx` wraps pages
- [x] Server Components by default, `"use client"` only when needed
- [x] `metadata`, `next/image`, `next/font`
- [x] Dynamic routes `[slug]`, `.find()`, `notFound()`

## Build

- [x] Next.js 16 project running on Webpack (Turbopack has no Android build)
- [x] Tailwind v4 fixed with `@tailwindcss/postcss` and `postcss.config.mjs`
- [x] Routes: `/`, `/about`, `/projects`, `/projects/[slug]`, `/contact`
- [x] Navbar and Footer in `layout.tsx`
- [x] Custom `not-found.tsx` (404)
- [x] Typed project data in `data/projects.ts`, skills in `data/skills.ts`
- [x] `ProjectCard` as a Server Component
- [x] `generateStaticParams` and `generateMetadata` for project pages
- [x] Open Graph and Twitter metadata with a 63 KB share image
- [x] `next/image` for the hero photo, `next/font` (Inter)
- [x] Contact form wired to Formspree
- [x] Richer home page with stats, services and latest projects
- [x] Custom app icon

## Deploy

- [x] Pushed to GitHub
- [x] Deployed to Vercel
- [x] WhatsApp share preview tested (photo and title show)
- [x] PageSpeed run on the live site
- [x] Old portfolio now links to the new site

## Related work done on the way

- [x] Dark cyan theme for the E-Commerce app (feature branch, then merge)
- [x] New dark icons for Shop and HaezTrack, plus service worker cache bumps

## Still open

- [ ] Send a real test message through the live contact form
- [ ] Fix the 98 in Accessibility
- [ ] Add `sitemap.ts` and `robots.ts`
- [ ] Move the Formspree ID into an environment variable
- [ ] Write the README (screenshot, live link, scores, stack, how to run)
- [ ] Update LinkedIn and CV with live links
- [ ] Mock interview: explain every project out loud

## Problems and fixes

| Problem | Fix |
|---------|-----|
| Turbopack not supported on Android | `npx next dev --webpack` |
| Page unstyled | Install `@tailwindcss/postcss` and add `postcss.config.mjs` |
| Navbar squashed in flex layout | Add `w-full` to centered elements |
| Share image over 1 MB | Resized copy `og.jpg` (63 KB) |
| Old icon on installed PWA | Update the right manifest files and bump the cache name |

## Lessons

- `mx-auto` behaves differently inside a flex container
- `priority` is for the one image at the top, not every image
- Check what the manifest points to before changing icons

## Update: Oct 20, 2026

- [x] Contact form sends in the background with an on-site success message
- [x] Formspree URL moved into NEXT_PUBLIC_FORMSPREE_URL on Vercel
- [x] Hero, About page and descriptions now feature TypeScript
- [x] README, LinkedIn and CV updated with live links
- [ ] Tracker categories (Day 11) are not built yet
- [ ] Mock interviews (Days 56-60)
