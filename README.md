# Startup Landing - Next.js Template

A clean landing page template for startups. Replace placeholders, deploy, done.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)

---

## Who this is for

- Early-stage founders and teams
- Agencies and freelancers building startup landing pages
- Product marketing teams that need a fast, editable site

---

## What you get

- Hero with CTA
- Problem, solution, features, social proof, team
- Waitlist form with client and server validation
- Supabase storage and Resend notification hooks
- Rate limiting on API routes (Upstash)
- SEO metadata, Open Graph, Twitter card, sitemap, robots
- Security headers with CSP
- Framer Motion animations

---

## Tech stack

| Layer | Tech |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + CSS variables |
| UI | shadcn/ui primitives (Button, Input) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Validation | Zod + React Hook Form |
| Data | Supabase |
| Email | Resend |
| Rate limiting | Upstash Redis |
| Fonts | Geist (Vercel) |
| Deployment | Vercel |

---

## Demo (Vercel)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<YOUR_REPO_URL>)

Replace `<YOUR_REPO_URL>` with your GitHub repo URL to enable 1-click deploy.

---

## Quick start

```bash
# 1. Install
npm install

# 2. Configure env
cp .env.example .env.local

# 3. Dev server
npm run dev

# 4. Type check
npm run type-check

# 5. Production build
npm run build
```

---

## Replace placeholders (required)

All placeholders use the `[PLACEHOLDER]` format.
Full list: PLACEHOLDERS.md.

1. **Brand and SEO**
   - `config/site.ts` -> name, URL, email, socials, analytics
   - `app/layout.tsx` -> SEO keywords
   - `app/robots.ts` and `app/sitemap.ts` -> use `siteConfig.url`
2. **Copy**
   - `data/content.ts` -> text, stats, proof, team
3. **Brand color**
   - `styles/globals.css` -> update `--primary`
4. **Assets**
   - `public/` -> logo, hero image, team photos, partner logos, OG image

Important: `siteConfig.url` must be a valid URL or the build will fail.

---

## Waitlist API

`POST /api/waitlist` validates input with Zod. Connect your database or email provider (Resend, Loops, etc.).

---

## Env vars

Required for the waitlist API:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_NOTIFY_EMAIL`
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

Optional analytics:

- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_META_PIXEL_ID`

Server-side env vars must not use the `NEXT_PUBLIC` prefix.

---

## Project structure

```text
/app                   -> Pages and API routes
/components/layout     -> Navbar, Footer
/components/sections   -> Landing sections
/components/ui         -> UI primitives
/config/site.ts        -> Global config
/data/content.ts       -> All copy
/lib/validations.ts    -> Zod schemas
/styles/globals.css    -> Design tokens
proxy.ts               -> Security headers
```
