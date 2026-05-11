"use client";

// Placeholders: [PARTNER_LOGO]

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { socialProofContent } from "@/data/content";

export function SocialProofSection() {
  return (
    <section
      id="social-proof"
      className="bg-muted/40 px-6 py-24"
      aria-labelledby="social-proof-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-20 grid grid-cols-1 gap-8 text-center sm:grid-cols-3"
        >
          {socialProofContent.metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <p className="text-5xl font-black tracking-tight">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <h2
          id="social-proof-heading"
          className="sr-only"
        >
          What people say
        </h2>
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {socialProofContent.testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <Quote
                size={20}
                className="mb-4 text-primary"
                aria-hidden="true"
              />
              <p className="mb-6 text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={`${t.author} avatar`}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <cite className="not-italic font-semibold">{t.author}</cite>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 opacity-50 grayscale">
          {socialProofContent.partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-10 w-32 items-center justify-center rounded border border-border bg-card text-xs text-muted-foreground"
              aria-label={partner.name}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={40}
                className="h-6 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
