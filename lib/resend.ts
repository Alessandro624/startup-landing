import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY!);

export async function notifyNewSignup(email: string, name?: string) {
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.RESEND_NOTIFY_EMAIL!,
    subject: "New waitlist signup",
    text: `New signup:\nEmail: ${email}\nName: ${name ?? "—"}`,
  });
}
