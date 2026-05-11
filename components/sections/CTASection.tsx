"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { waitlistSchema, type WaitlistSchema } from "@/lib/validations";
import { ctaContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistSchema>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistSchema) => {
    setServerError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Something went wrong. Please try again.");
      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Unexpected error");
    }
  };

  return (
    <section
      id="cta"
      className="bg-primary px-6 py-24 text-primary-foreground"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="cta-heading"
            className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl"
          >
            {ctaContent.headline}
          </h2>
          <p className="mb-10 text-lg opacity-80">{ctaContent.subheadline}</p>

          {submitted ? (
            <p className="rounded-xl bg-white/20 px-6 py-4 text-lg font-semibold">
              You&apos;re on the list! We&apos;ll be in touch soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="Waitlist sign-up"
              className="flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <div className="flex-1">
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  aria-label="Email address"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                  className="bg-white/10 border-white/30 placeholder:text-white/50 text-white focus-visible:ring-white"
                />
                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-1 text-left text-xs text-white/70"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="secondary"
                size="default"
                className="gap-2 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                    Submitting...
                  </>
                ) : (
                  <>
                    {ctaContent.buttonLabel}
                    <ArrowRight size={16} aria-hidden="true" />
                  </>
                )}
              </Button>
            </form>
          )}

          {serverError && (
            <p role="alert" className="mt-4 text-sm text-white/70">
              {serverError}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
