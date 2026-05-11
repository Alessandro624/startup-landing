"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock } from "lucide-react";
import { problemContent } from "@/data/content";

const icons = [AlertTriangle, TrendingDown, Clock];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="mx-auto max-w-7xl px-6 py-24"
      aria-labelledby="problem-heading"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          {problemContent.sectionLabel}
        </p>
        <h2
          id="problem-heading"
          className="text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          {problemContent.headline}
        </h2>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-8 md:grid-cols-3"
      >
        {problemContent.painPoints.map((point, i) => {
          const Icon = icons[i] ?? AlertTriangle;
          return (
            <motion.article
              key={point.id}
              variants={item}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <Icon
                size={28}
                className="mb-4 text-destructive"
                aria-hidden="true"
              />
              <p className="mb-2 text-4xl font-black text-foreground">
                {point.stat}
              </p>
              <h3 className="mb-3 text-lg font-bold">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
