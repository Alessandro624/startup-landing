import { createClient } from "@supabase/supabase-js";

// Service role key — server-side only, never expose to client
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
