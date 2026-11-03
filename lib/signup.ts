export type Signup = { email: string; name?: string };
type InsertResult = { error: { code?: string } | null };

/** A duplicate signup must not generate another notification. */
export async function saveSignup(
  signup: Signup,
  insert: (signup: Signup) => PromiseLike<InsertResult>,
  notify: (email: string, name?: string) => Promise<void>,
  reportNotificationFailure: () => void,
) {
  const { error } = await insert(signup);
  if (error?.code === "23505") return { created: false };
  if (error) throw new Error("Waitlist storage failed");
  try {
    await notify(signup.email, signup.name);
  } catch {
    // The signup is durable. Do not return a misleading failure after insertion.
    reportNotificationFailure();
  }
  return { created: true };
}
