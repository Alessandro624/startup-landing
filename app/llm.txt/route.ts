import { NextResponse } from "next/server";

const content = `# Startup Landing

Purpose: Next.js landing page template for startups.

Key files:
- config/site.ts: brand and SEO config
- data/content.ts: page copy and section data
- styles/globals.css: design tokens
- app/api/waitlist/route.ts: waitlist API
- proxy.ts: security headers and rate limiting

Setup:
- npm install
- cp .env.example .env.local
- npm run dev

Environment:
- Required for waitlist: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_NOTIFY_EMAIL, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
- Optional analytics: NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_POSTHOG_KEY, NEXT_PUBLIC_META_PIXEL_ID

Placeholders:
- See PLACEHOLDERS.md for the full list.
`;

export function GET() {
    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}
