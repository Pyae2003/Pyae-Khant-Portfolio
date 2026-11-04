
"use client";

import {
  Flame,
  GitCommit,
  Activity,
  Cloud,
  Container,
  Terminal,
  GitBranch,
  Code2,
  Database,
  ArrowUpRight,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const weeks = Array.from({ length: 26 }, (_, week) =>
  Array.from(
    { length: 7 },
    (_, day) => (week * 3 + day * 2 + (week % 4)) % 5,
  ),
);

const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    description: "Cloud platforms and infrastructure",
    skills: ["AWS", "EC2", "VPC", "IAM", "ECR", "ECS"],
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    description: "Containerization and orchestration",
    skills: ["Docker", "Compose", "Kubernetes", "Helm", "Podman"],
  },
  {
    title: "Linux & Systems",
    icon: Terminal,
    description: "System administration and scripting",
    skills: ["Linux", "Bash", "SSH", "Nginx", "Systemd", "UFW"],
  },
  {
    title: "DevOps & Automation",
    icon: GitBranch,
    description: "Version control and automation",
    skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "GitOps"],
  },
  {
    title: "Backend Engineering",
    icon: Code2,
    description: "Application development and APIs",
    skills: ["Node.js", "Next.js", "NestJS", "TypeScript", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Data storage and management",
    skills: ["PostgreSQL", "MySQL", "Redis", "Prisma"],
  },
];

const stats = [
  { icon: Flame, value: "—", label: "Current streak", suffix: "days" },
  { icon: GitCommit, value: "—", label: "Contributions", suffix: "total" },
  { icon: Activity, value: "—", label: "Active repositories", suffix: "repos" },
];

const levels = [
  "bg-primary/[0.07]",
  "bg-primary/[0.20]",
  "bg-primary/[0.38]",
  "bg-primary/[0.62]",
  "bg-primary",
];

export function GithubStats() {
  return (
    <section
      className="section-shell relative overflow-hidden"
      aria-labelledby="github-stats-title"
    >
      <div className="container relative">
        <SectionHeading
          eyebrow="GitHub & Technologies"
          title="Building, learning, and improving every day."
          description="A snapshot of my development activity and the technologies I use while exploring software engineering, cloud infrastructure, and DevOps."
        />

        {/* Main dashboard */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">

          {/* Contribution activity */}
          <Reveal className="lg:col-span-7">
            <Card className="group relative h-full overflow-hidden rounded-3xl border-border/60 bg-card/60 p-6 transition-all duration-500 hover:border-primary/30 sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Development activity
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    Contribution overview
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Last 26 weeks of activity
                  </p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/70 p-3 text-primary">
                  <Activity className="size-5" />
                </div>
              </div>

              <div className="mt-10 overflow-x-auto pb-3">
                <div
                  className="grid min-w-[530px] grid-flow-col grid-rows-7 gap-[5px]"
                  aria-label="Contribution activity visualization"
                >
                  {weeks.flat().map((level, index) => (
                    <span
                      key={index}
                      title={`Activity level ${level + 1}`}
                      className={`aspect-square w-full max-w-[15px] rounded-[4px] ${levels[level]} transition-all duration-200 hover:scale-125 hover:ring-1 hover:ring-primary/50`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-5">
                <span className="text-xs text-muted-foreground">
                  Less activity
                </span>

                <div className="flex items-center gap-1.5">
                  {levels.map((level, index) => (
                    <span
                      key={index}
                      className={`size-3 rounded-[3px] ${level}`}
                    />
                  ))}
                </div>

                <span className="text-xs text-muted-foreground">
                  More activity
                </span>
              </div>

              <div className="pointer-events-none absolute -bottom-24 -right-16 size-56 rounded-full bg-primary/[0.04] blur-3xl transition-all duration-700 group-hover:bg-primary/[0.09]" />
            </Card>
          </Reveal>

          {/* Technical skills */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <Card className="h-full rounded-3xl border-border/60 bg-card/60 p-6 transition-all duration-500 hover:border-primary/30 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    My expertise
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    Technical stack
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tools and technologies I work with
                  </p>
                </div>

                <Code2 className="size-6 text-primary" />
              </div>

              <div className="mt-8 space-y-1">
                {skillGroups.map((group, index) => (
                  <div
                    key={group.title}
                    className="group/skill border-b border-border/50 py-4 first:pt-0 last:border-0 last:pb-0"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/[0.08] text-primary transition-all duration-300 group-hover/skill:bg-primary/[0.15]">
                        <group.icon className="size-4" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold tracking-tight">
                          {group.title}
                        </h4>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {group.description}
                        </p>
                      </div>

                      <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5 pl-12">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-border/50 bg-background/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.08] hover:text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Statistics */}
        <Reveal delay={0.15} className="mt-5">
          <Card className="overflow-hidden rounded-3xl border-border/60 bg-card/60">
            <div className="grid divide-y divide-border/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group flex items-center gap-5 p-6 transition-colors duration-300 hover:bg-primary/[0.03] sm:p-7"
                >
                  <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-border/60 bg-background/70 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/30">
                    <stat.icon className="size-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-semibold tracking-tight tabular-nums">
                        {stat.value}
                      </p>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {stat.suffix}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>

                  <ArrowUpRight className="ml-auto size-4 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

      </div>
    </section>
  );
}
