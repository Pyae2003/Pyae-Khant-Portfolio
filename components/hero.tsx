"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Server } from "lucide-react";
import Link from "next/link";

import { FloatingParticles } from "@/components/floating-particles";
import { ImageWithLoader } from "@/components/image-with-loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const entrance = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: reduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="home" className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-32">
      <FloatingParticles />
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[32rem] max-w-5xl rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" />
      <div className="container grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10">
          <motion.div {...entrance(0)}>
            <Badge className="gap-2 py-1.5">
              <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(250,204,21,0.8)]" aria-hidden="true" />
              Available for backend and DevOps opportunities
            </Badge>
          </motion.div>

          <motion.h1
            {...entrance(0.08)}
            className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-primary">Pyae Khant</span>
          </motion.h1>

          <motion.p {...entrance(0.16)} className="mt-5 text-xl font-medium text-foreground/90 sm:text-2xl">
            Junior Backend Engineer &amp; Junior DevOps Engineer
          </motion.p>

          <motion.p {...entrance(0.24)} className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            I build scalable backend systems and practical infrastructure workflows using Linux, Docker, modern Node.js or Nest.js frameworks,  and production-minded engineering practices.
          </motion.p>

          <motion.div {...entrance(0.32)} className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/pyae-khant-resume.pdf" download>
                <Download aria-hidden="true" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div {...entrance(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Pyae Khant on GitHub"
              className="social-link"
            >
              <Github aria-hidden="true" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Pyae Khant on LinkedIn"
              className="social-link"
            >
              <Linkedin aria-hidden="true" />
            </a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email Pyae Khant" className="social-link">
              <Mail aria-hidden="true" />
            </a>
            <span className="ml-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" /> {siteConfig.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, x: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-primary/15 blur-2xl" aria-hidden="true" />
          <div className="relative animate-float rounded-[2.25rem] border border-white/10 bg-card/75 p-4 shadow-card backdrop-blur-xl">
            <ImageWithLoader
              src="/profile1.jpg"
              alt="Illustrated profile placeholder for Pyae Khant"
              width={720}
              height={780}
              priority
              unoptimized
              wrapperClassName="aspect-[4/4.3] rounded-[1.75rem]"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-background/80 p-4 shadow-xl backdrop-blur-xl">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Server aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Systems-first engineering</p>
                <p className="mt-0.5 text-xs text-muted-foreground">APIs · Linux · Containers · Automation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
