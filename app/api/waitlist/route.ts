import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validations";
import { getSupabase } from "@/lib/supabase";
import { notifyNewSignup } from "@/lib/resend";
import { saveSignup } from "@/lib/signup";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  try {

    // Server-side validation (never trust client)
    const parsed = waitlistSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 422 }
      );
    }

    const supabase = getSupabase();
    await saveSignup(
      parsed.data,
      (signup) => supabase.from("waitlist").insert(signup),
      notifyNewSignup,
      () => console.error("Waitlist signup saved, but notification was not delivered"),
    );

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Waitlist temporarily unavailable" }, { status: 503 });
  }
}
