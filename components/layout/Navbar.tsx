"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Problem", hash: "#problem" },
  { label: "Solution", hash: "#solution" },
  { label: "Features", hash: "#features" },
  { label: "Team", hash: "#team" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const basePath = pathname === "/" ? "" : "/";
  const ctaHref = `${basePath}#cta`;

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="flex items-center gap-2"
        >
          <Image
            src={siteConfig.logoPath}
            alt={`${siteConfig.name} logo`}
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-xl font-bold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.hash}>
              <Link
                href={`${basePath}${link.hash}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <Button asChild size="sm">
            <Link href={ctaHref}>Get early access</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-4" role="list">
              {navLinks.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={`${basePath}${link.hash}`}
                    className="block text-sm font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Button asChild className="w-full">
                  <Link href={ctaHref} onClick={() => setOpen(false)}>
                    Get early access
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
