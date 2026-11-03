import { Resend } from "resend";

export async function notifyNewSignup(email: string, name?: string) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_NOTIFY_EMAIL;
  if (!key || !from || !to) throw new Error("Notifications are not configured");
  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: "New waitlist signup",
    text: `New signup:\nEmail: ${email}\nName: ${name ?? "-"}`,
  });
  if (error) throw new Error("Notification delivery failed");
}
