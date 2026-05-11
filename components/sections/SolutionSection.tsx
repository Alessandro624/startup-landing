"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { solutionContent } from "@/data/content";

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="bg-muted/40 px-6 py-24"
      aria-labelledby="solution-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            {solutionContent.sectionLabel}
          </p>
          <h2
            id="solution-heading"
            className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl"
          >
            {solutionContent.headline}
          </h2>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-6 md:grid-cols-3"
          role="list"
        >
          {solutionContent.coreFeatures.map((feature) => (
            <motion.li
              key={feature.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-8"
            >
              <CheckCircle2
                size={22}
                className="text-primary"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold">{feature.label}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
