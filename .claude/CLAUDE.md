# Apex Growth Web — Claude Instructions

## Project Overview
- **Framework:** Next.js 16 (App Router), React 19, TypeScript 5 (strict)
- **Styling:** Tailwind CSS v4
- **CMS:** Sanity v5 — studio at `/studio`, queries in `src/sanity/`
- **Deploy target:** Vercel

## Stack Rules
- Always use `npm` (not yarn or bun)
- TypeScript strict mode is on — no `any` unless absolutely unavoidable
- Use the `@/*` path alias (maps to `src/*`) for all imports
- Tailwind only for styling — no inline `style={}` except for dynamic values (e.g. `transitionDelay`)
- Server components by default; add `'use client'` only when needed

## Code Conventions
- Prefer editing existing files over creating new ones
- No default exports for utility/helper files — named exports only
- Page components (`page.tsx`) may use default exports (Next.js requirement)
- No comments unless the logic is non-obvious
- No docstrings or JSDoc
- Keep components focused — split into separate files if a component grows large

## Sanity
- Queries live in `src/sanity/queries.ts`
- Schemas (studio) live in `src/sanity/schemas/`
- Client config in `src/sanity/client.ts`
- All pages have fallback data — Sanity errors should never crash the page
- Slugs are always `{ current: string }` from Sanity — access as `slug.current`

## Animations
- Above-fold elements use CSS keyframe classes: `hero-in hero-in-1` through `hero-in-5`
- Below-fold elements use `reveal` or `reveal-scale` classes (triggered by `ScrollReveal.tsx`)
- Stagger delay via inline `style={{ transitionDelay: \`${i * 80}ms\` }}`
- `ScrollReveal` is mounted in `layout.tsx` and uses `usePathname` to re-observe on navigation

## Brand / Design
- Color palette: `#F6F7FB` (bg), `#EEF2FF` (surface), `#0B0F14` (text), `#2563EB` (accent blue)
- No purple — old purple values (`rgba(192,132,252,...)`) are stale and should be replaced with blue
- Font: Plus Jakarta Sans (display + body), system sans fallback
- Positioning: full-service creative agency (brand, web, campaigns, print)

## Git
- Never auto-commit — always wait for explicit instruction
- Never force push to master
- Never skip hooks (`--no-verify`)
- Commit messages should be concise and descriptive (imperative mood)

## CI / Scripts
- `npm run lint` — ESLint
- `npm run build` — Next.js production build
- No test runner installed yet

## Do Not
- Do not create documentation files (README, etc.) unless asked
- Do not add error handling for impossible scenarios
- Do not add features beyond what is explicitly requested
- Do not use emojis in code or commit messages
