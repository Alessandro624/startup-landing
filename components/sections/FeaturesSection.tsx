"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { featuresContent } from "@/data/content";

type IconName = keyof typeof Icons;

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = Icons[name as IconName] as React.FC<LucideProps> | undefined;
  if (!Icon) return null;
  return <Icon {...props} />;
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-24"
      aria-labelledby="features-heading"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          {featuresContent.sectionLabel}
        </p>
        <h2
          id="features-heading"
          className="text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          {featuresContent.headline}
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {featuresContent.features.map((feature) => (
          <motion.article
            key={feature.title}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
            }}
            className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-2.5">
              <DynamicIcon
                name={feature.icon}
                size={20}
                className="text-primary"
                aria-hidden="true"
              />
            </div>
            <h3 className="mb-2 font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
