
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
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    percentage: 60,
    skills: ["AWS", "EC2", "VPC", "IAM", "ECR", "ECS"],
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    percentage: 60,
    skills: ["Docker", "Compose", "Kubernetes", "Helm", "Podman"],
  },
  {
    title: "Linux & Systems",
    icon: Terminal,
    percentage: 60,
    skills: ["Linux", "Bash", "SSH", "Nginx", "Systemd", "UFW"],
  },
  {
    title: "DevOps & Automation",
    icon: GitBranch,
    percentage: 70,
    skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "GitOps"],
  },
  {
    title: "Backend Engineering",
    icon: Code2,
    percentage: 80,
    skills: ["Node.js", "Next.js", "NestJS", "TypeScript", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    percentage: 70,
    skills: ["PostgreSQL", "MySQL", "Redis", "Prisma"],
  },
];

const stats = [
  { icon: Flame, value: "100", label: "Current streak", suffix: "days" },
  { icon: GitCommit, value: "3", label: "Contributions", suffix: "total" },
  { icon: Activity, value: "20", label: "Active repositories", suffix: "repos" },
];

export function GithubStats() {
  return (
    <section
      className="section-shell relative"
      aria-labelledby="github-stats-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="GitHub & Technologies"
          title="Building, learning, and improving every day."
          description="A snapshot of my development journey and the technologies I use while exploring software engineering, cloud infrastructure, and DevOps."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">

          {/* Technical Skills */}
          <Reveal className="lg:col-span-8">
            <Card className="h-full rounded-2xl border-border/60 bg-card/60 p-6 sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Technical Skills
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Technologies and tools I work with
                  </p>
                </div>

                <Code2 className="size-6 text-primary" />
              </div>

              <div className="space-y-7">
                {skillGroups.map((group, index) => (
                  <div key={group.title}>
                    {/* Skill heading */}
                    <div className="mb-3 flex items-center gap-3">
                      <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                        <group.icon className="size-4" />
                      </div>

                      <h4 className="text-sm font-semibold">
                        {group.title}
                      </h4>

                      <span className="ml-auto text-sm font-medium tabular-nums text-muted-foreground">
                        {group.percentage}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div
                      className="h-2 overflow-hidden rounded-full bg-muted"
                      role="progressbar"
                      aria-label={`${group.title} progress`}
                      aria-valuenow={group.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                        style={{
                          width: `${group.percentage}%`,
                          transitionDelay: `${index * 100}ms`,
                        }}
                      />
                    </div>

                    {/* Skills */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-border/60 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
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

          {/* GitHub Overview */}
          <Reveal delay={0.1} className="lg:col-span-4">
            <Card className="h-full rounded-2xl border-border/60 bg-card/60 p-6 sm:p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold tracking-tight">
                  GitHub Overview
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  My development activity
                </p>
              </div>

              <div className="space-y-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4"
                  >
                    <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <stat.icon className="size-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-semibold tracking-tight tabular-nums">
                          {stat.value}
                        </span>

                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {stat.suffix}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-border/60 pt-6">
                <p className="text-sm font-medium">
                  Always learning. Always building.
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Focused on improving my engineering skills through practical
                  projects, continuous learning, and hands-on experience.
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
