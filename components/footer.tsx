import { ArrowUp, Github, Linkedin, Mail, Terminal } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="inline-flex items-center gap-2 font-semibold">
            <Terminal className="size-4 text-primary" aria-hidden="true" /> Designed &amp; Developed by Pyae Khant
          </p>
          <p className="mt-1 text-sm text-muted-foreground">© {year} Pyae Khant. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <Github aria-hidden="true" />
          </a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <Linkedin aria-hidden="true" />
          </a>
          <a href={`mailto:${siteConfig.email}`} className="social-link" aria-label="Email">
            <Mail aria-hidden="true" />
          </a>
          <Link href="#home" className="social-link ml-2" aria-label="Back to top">
            <ArrowUp aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
