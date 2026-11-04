
import {
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Container,
  Database,
  GitBranch,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const focusAreas = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "AWS, cloud infrastructure, networking, and scalable architecture.",
    tag: "Learning & Building",
  },
  {
    icon: Container,
    title: "Containerization",
    description: "Docker, Kubernetes, container orchestration, and deployment workflows.",
    tag: "Hands-on Practice",
  },
  {
    icon: Terminal,
    title: "Linux & Systems",
    description: "Linux administration, Bash scripting, server management, and troubleshooting.",
    tag: "Hands-on Practice",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description: "GitHub Actions, automated pipelines, GitOps, and deployment automation.",
    tag: "Currently Exploring",
  },
];

const principles = [
  "Build simple and maintainable systems.",
  "Automate repetitive engineering tasks.",
  "Prioritize security, reliability, and scalability.",
  "Keep learning through practical projects.",
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title="Building beyond the application layer."
            description="Exploring the intersection of cloud infrastructure, and devOps Engineering."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Introduction */}
          <Reveal delay={0.08}>
            <Card className="relative h-full overflow-hidden rounded-3xl border-border/70 bg-card p-7 sm:p-9">
              <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/[0.06] blur-3xl" />

              <div className="relative">
                <div className="mb-7 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    My Introduction
                  </span>
                </div>

                <h3 className="max-w-xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  Computing student with a passion for Cloud & DevOps.
                </h3>

                <p className="mt-6 text-pretty text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  I am a computing student interested in building
                  reliable applications and understanding the infrastructure
                  behind them. My focus is growing beyond backend development
                  into cloud computing, Linux system administration,
                  containerization, and DevOps practices.
                </p>

                <p className="mt-4 text-pretty text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  I enjoy working with Linux servers, building REST APIs,
                  containerizing applications with Docker, and exploring
                  cloud infrastructure on AWS. I am also learning Kubernetes,
                  CI/CD automation, and infrastructure management through
                  practical projects and hands-on experimentation.
                </p>

                <p className="mt-4 text-pretty text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  My goal is to become a Cloud / DevOps Engineer who can
                  design, automate, deploy, and maintain reliable systems
                  from development to production.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Cloud Engineering", "DevOps", "Backend", "Linux"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Focus Areas */}
          <Reveal delay={0.16}>
            <div className="flex h-full flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <p className="text-sm font-semibold tracking-tight">
                  What I am Focused On
                </p>
                <span className="text-xs text-muted-foreground">
                  Areas of interest
                </span>
              </div>

              <div className="grid flex-1 gap-3 sm:grid-cols-2">
                {focusAreas.map((area, index) => (
                  <Card
                    key={area.title}
                    className="group rounded-2xl border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/[0.04]"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-muted/50 transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                      <area.icon
                        className="size-5 text-muted-foreground transition-colors group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-5 text-sm font-semibold">
                      {area.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-muted-foreground">
                      {area.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      <span className="text-[10px] font-medium text-muted-foreground">
                        {area.tag}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Engineering Principles */}
        <Reveal delay={0.2}>
          <Card className="mt-6 overflow-hidden rounded-3xl border-border/70 bg-card p-7 sm:p-9">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">

              <div>
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                  <ShieldCheck className="size-5 text-primary" />
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  How I Approach Engineering
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                  Good engineering is not just about making things work.
                  It is about building systems that are reliable,
                  understandable, and easier to maintain.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {principles.map((principle) => (
                  <div
                    key={principle}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <p className="text-sm leading-6 text-muted-foreground">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
