import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validations";
import { supabase } from "@/lib/supabase";
import { notifyNewSignup } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Server-side validation (never trust client)
    const parsed = waitlistSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 422 }
      );
    }

    const { email, name } = parsed.data;

    // Idempotent insert - ignore duplicate emails
    const { error } = await supabase
      .from("waitlist")
      .insert({ email, name })
      .select()
      .single();

    if (error && error.code !== "23505") {
      // 23505 = unique_violation (email already exists) - not an error for us
      throw error;
    }

    // Notify founder via email (fire-and-forget - don't fail the request if this errors)
    notifyNewSignup(email, name).catch(console.error);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
