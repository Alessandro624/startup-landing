"use client";

// Placeholders: [HERO_IMAGE]

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center"
      aria-labelledby="hero-headline"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,hsl(var(--primary)/0.12),transparent)]"
      />

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
      >
        Introducing
      </motion.p>

      <motion.h1
        id="hero-headline"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl"
      >
        {heroContent.headline}
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
      >
        {heroContent.subheadline}
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        <Button asChild size="lg" className="gap-2">
          <Link href="#cta">
            {heroContent.primaryCta}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#solution">{heroContent.secondaryCta}</Link>
        </Button>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.45}
        className="mx-auto mt-16 w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        style={{ aspectRatio: "16/9" }}
        aria-label="Product screenshot"
      >
        <div className="relative h-full w-full">
          <Image
            src={heroContent.image}
            alt="Product screenshot"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
