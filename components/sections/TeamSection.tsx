"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { teamContent } from "@/data/content";

export function TeamSection() {
  return (
    <section
      id="team"
      className="mx-auto max-w-7xl px-6 py-24"
      aria-labelledby="team-heading"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          {teamContent.sectionLabel}
        </p>
        <h2
          id="team-heading"
          className="text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          {teamContent.headline}
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="flex flex-wrap justify-center gap-8"
      >
        {teamContent.members.map((member) => (
          <motion.article
            key={member.name}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex w-72 flex-col items-center rounded-2xl border border-border bg-card p-8 text-center"
          >
            <Image
              src={member.image}
              alt={`${member.name} portrait`}
              width={80}
              height={80}
              className="mb-4 h-20 w-20 rounded-full object-cover"
            />
            <h3 className="font-bold">{member.name}</h3>
            <p className="mb-3 text-sm text-primary">{member.role}</p>
            <p className="mb-5 text-sm text-muted-foreground">{member.bio}</p>

            <div className="flex gap-3">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on Twitter`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter size={16} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
