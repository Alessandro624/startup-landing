import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Shared limiter: 20 requests per IP per minute across all API routes
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(20, "1 m"),
  prefix: "rl:api",
});

export async function checkRateLimit(ip: string) {
  const { success } = await ratelimit.limit(ip);
  return success;
}
