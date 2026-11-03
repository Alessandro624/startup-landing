import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Shared limiter: 20 requests per IP per minute across all API routes
let ratelimit: Ratelimit | undefined;

export async function checkRateLimit(ip: string) {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    throw new Error("API rate limiting is not configured");
  }
  ratelimit ??= new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(20, "1 m"),
    prefix: "rl:api",
  });
  const { success } = await ratelimit.limit(ip);
  return success;
}
