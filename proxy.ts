import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

const CSP = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://app.posthog.com https://connect.facebook.net https://va.vercel-scripts.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self'",
    "frame-src 'none'",
    "form-action 'self'",
    "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://app.posthog.com https://region1.posthog.com https://www.facebook.com https://vitals.vercel-insights.com",
    "object-src 'none'",
    process.env.NODE_ENV === "production" ? "upgrade-insecure-requests" : "",
]
    .filter(Boolean)
    .join("; ");

export async function proxy(request: NextRequest) {
    // Rate limit all /api/* routes
    if (request.nextUrl.pathname.startsWith("/api/")) {
        const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
        let allowed;
        try {
            allowed = await checkRateLimit(ip);
        } catch {
            return NextResponse.json({ error: "API temporarily unavailable" }, { status: 503 });
        }
        if (!allowed) {
            return NextResponse.json({ error: "Too many requests" }, { status: 429 });
        }
    }

    const response = NextResponse.next();

    response.headers.set("Content-Security-Policy", CSP);
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set(
        "Permissions-Policy",
        "camera=(), microphone=(), geolocation=()"
    );
    response.headers.set(
        "Strict-Transport-Security",
        "max-age=63072000; includeSubDomains; preload"
    );

    return response;
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
