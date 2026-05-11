import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerContent } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <span className="text-lg font-bold">{siteConfig.name}</span>

          <nav aria-label="Legal navigation">
            <ul className="flex gap-6 text-sm text-muted-foreground" role="list">
              <li>
                <Link href={footerContent.legal.privacyUrl} className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={footerContent.legal.termsUrl} className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href={footerContent.legal.cookiesUrl} className="hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4" aria-label="Social links">
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={18} />
              </a>
            )}
            {siteConfig.social.twitter && (
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          {footerContent.copyright}
        </p>
      </div>
    </footer>
  );
}
