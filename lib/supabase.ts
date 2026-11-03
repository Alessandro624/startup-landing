import { createClient } from "@supabase/supabase-js";

// Service role key - server-side only, never expose to client
export function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Waitlist storage is not configured");
  return createClient(url, key, { auth: { persistSession: false } });
}
