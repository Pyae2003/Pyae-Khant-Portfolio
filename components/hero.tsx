"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useAnimationControls,
  useReducedMotion,
  Variants,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Cloud,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Terminal,
} from "lucide-react";

import { FloatingParticles } from "@/components/floating-particles";
import { ImageWithLoader } from "@/components/image-with-loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const SKILLS = [
  "Linux Administration",
  "AWS",
  "Docker",
  "CI/CD",
  "Node.js",
  "NestJS",
  "NextJs",
  "MERN",
  "Podman",
  "bash script",
  "ORM",
  "Kubernetes (current Learning)",
] as const;

const HERO_NAME = "Hi, I'm Pyae Khant";

// Animation Variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const characterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(3px)",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const nameControls = useAnimationControls();

  useEffect(() => {
    let cancelled = false;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, ms));

    async function animateName() {
      if (reduceMotion) {
        await nameControls.set("visible");
        return;
      }

      while (!cancelled) {
        await nameControls.start("visible");
        if (cancelled) break;
        await wait(2000);
        if (cancelled) break;
        await nameControls.start("hidden");
        if (cancelled) break;
        await wait(800);
      }
    }

    void animateName();

    return () => {
      cancelled = true;
      nameControls.stop();
    };
  }, [nameControls, reduceMotion]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <FloatingParticles />

      {/* Ambient background glow elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[30rem] max-w-5xl rounded-full bg-primary/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 -z-10 size-80 rounded-full bg-primary/5 blur-[120px]"
      />

      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* LEFT COLUMN: Main Briefing */}
        <div className="relative z-10 min-w-0">
          {/* Status Badge */}
          <motion.div
            variants={fadeUpVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
          >
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2.5 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm backdrop-blur-md"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Open to Cloud & DevOps InternShip
            </Badge>
          </motion.div>

          {/* Animated Heading */}
          <motion.h1
            variants={containerVariants}
            initial={reduceMotion ? "visible" : "hidden"}
            animate={nameControls}
            className="mt-6 flex min-h-[5.5rem] flex-wrap items-center text-4xl font-extrabold tracking-tight text-foreground sm:min-h-[6.5rem] sm:text-6xl lg:min-h-[7.5rem] lg:text-7xl"
          >
            <span className="sr-only">{HERO_NAME}</span>
            <span aria-hidden="true" className="inline-flex flex-wrap">
              {Array.from(HERO_NAME).map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  variants={characterVariants}
                  className={`inline-block whitespace-pre ${index >= 8 ? "text-primary" : ""
                    }`}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subtitle & Role */}
          <motion.div
            variants={fadeUpVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            transition={{ delay: 0.15 }}
            className="mt-2 space-y-1"
          >
            <p className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Junior DevOps & Cloud Engineer
            </p>
            <p className="text-sm font-medium text-muted-foreground sm:text-base">
              Architecting reliable server operations and automated
              infrastructure.
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            transition={{ delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Computer Science student specializing in High Performance. Focused
            on constructing high-availability backend APIs, streamlining CI/CD
            pipelines, and managing Linux infrastructure.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            variants={fadeUpVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            transition={{ delay: 0.35 }}
            className="mt-8 space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <Code2 className="size-4 text-primary" />
              <span>Core Technologies</span>
            </div>

            <div className="flex max-w-xl flex-wrap gap-2">
              {SKILLS.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={
                    reduceMotion ? false : { opacity: 0, scale: 0.95, y: 6 }
                  }
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: reduceMotion ? 0 : 0.4 + index * 0.04,
                  }}
                  className="inline-flex items-center rounded-md border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 sm:text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Call To Actions */}
          <motion.div
            variants={fadeUpVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            transition={{ delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA */}
            <motion.div
              initial={false}
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-xl px-6 font-semibold shadow-lg shadow-primary/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/30"
              >
                <Link href="#projects">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />

                  <span className="relative flex items-center">
                    View Projects
                    <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              initial={false}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-xl border-border/80 bg-background/40 px-6 font-medium backdrop-blur-md transition-colors duration-300 hover:border-primary/40 hover:bg-primary/[0.05]"
              >
                <a href="/pyae-khant-resume.pdf" download>
                  <Download className="mr-2 size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
          {/* Social Links & Location */}
          <motion.div
            variants={fadeUpVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            transition={{ delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex size-9 items-center justify-center rounded-lg border border-border/60 bg-background/50 transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Github className="size-4" />
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex size-9 items-center justify-center rounded-lg border border-border/60 bg-background/50 transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Linkedin className="size-4" />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email Contact"
                className="flex size-9 items-center justify-center rounded-lg border border-border/60 bg-background/50 transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Mail className="size-4" />
              </a>
            </div>

            <div className="h-4 w-px bg-border" />

            <div className="flex items-center gap-1.5 text-xs font-medium">
              <MapPin className="size-3.5 text-primary" />
              <span>{siteConfig.location}</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Profile Showcase */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: reduceMotion ? 0 : 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Subtle Ambient Frame Glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-1 rounded-[2rem] bg-gradient-to-b from-primary/20 via-border/50 to-transparent blur-xl opacity-75"
          />

          <div className="relative rounded-2xl border border-border/80 bg-card/80 p-3 shadow-xl backdrop-blur-xl sm:p-4">
            {/* Terminal Window Top Bar */}
            <div className="flex items-center justify-between border-b border-border/40 pb-3 px-2 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-500/80" />
                <span className="size-2.5 rounded-full bg-amber-500/80" />
                <span className="size-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
                pyae_khant.ts
              </span>
            </div>

            {/* Profile Image Wrap */}
            <div className="group relative mt-3 overflow-hidden rounded-xl border border-border/50 bg-muted/20">
              <ImageWithLoader
                src="/profile1.jpg"
                alt="Pyae Khant"
                width={720}
                height={780}
                priority
                unoptimized
                wrapperClassName="aspect-[4/4.2]"
                className="h-full w-full object-cover"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
              />

              {/* Status Badge overlay */}
              <div className="absolute left-3 top-3">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/80 px-2.5 py-1 text-[11px] font-mono text-foreground backdrop-blur-md">
                  <Terminal className="size-3 text-primary" />
                  BUILD & DEPLOY
                </span>
              </div>

              {/* Floating Engineering Identity Tag */}
              <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-border/60 bg-background/90 p-3 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                    <Server className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-foreground">
                      Systems Engineer
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      APIs · Infrastructure · DevOps
                    </p>
                  </div>
                  <ArrowDownRight className="ml-auto size-4 shrink-0 text-primary" />
                </div>
              </div>
            </div>

            {/* Bottom Card Highlights */}
            <div className="grid grid-cols-2 gap-2.5 pt-3">
              <div className="rounded-lg border border-border/50 bg-muted/30 p-2.5">
                <Cloud className="mb-1.5 size-4 text-primary" />
                <p className="text-xs font-semibold text-foreground">
                  Cloud Architecture
                </p>
                <p className="text-[11px] text-muted-foreground">
                  AWS, Docker & CI/CD
                </p>
              </div>

              <div className="rounded-lg border border-border/50 bg-muted/30 p-2.5">
                <Code2 className="mb-1.5 size-4 text-primary" />
                <p className="text-xs font-semibold text-foreground">
                  Backend API
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Node.js, NestJS & SQL
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
