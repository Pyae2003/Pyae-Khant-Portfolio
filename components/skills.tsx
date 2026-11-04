"use client"
import {
  ArrowUpRight,
  Cloud,
  Container,
  Database,
  GitBranch,
  Laptop,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import { StaggerGrid, StaggerItem } from "@/components/stagger-grid";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    description:
      "Exploring cloud platforms, infrastructure provisioning, networking, and scalable deployment architectures.",
    icon: Cloud,
    status: "Currently Learning",
    featured: true,
    skills: ["AWS", "EC2", "VPC", "S3", "IAM", "ECR", "ECS"],
  },
  {
    title: "Linux & System Administration",
    description:
      "Managing Linux environments, server services, permissions, and system operations.",
    icon: Terminal,
    status: "Hands-on Practice",
    skills: ["Linux", "Bash Script", "SSH", "Systemd", "Web Server", "Firewall"],
  },
  {
    title: "DevOps & Automation",
    description:
      "Learning automated build, test, deployment pipelines, and modern DevOps workflows.",
    icon: GitBranch,
    status: "Currently Learning",
    skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "GitOps","Kubernetes", "Helm", "Podman"],
  },
  {
    title: "Backend Development",
    description:
      "Developing REST APIs, server-side applications, and database-driven services.",
    icon: Server,
    status: "Project Experience",
    skills: ["Node.js", "NestJS", "Next.js", "TypeScript", "REST APIs"],
  },
  {
    title: "Databases & Networking",
    description:
      "Working with relational databases and understanding the networking behind distributed applications.",
    icon: Database,
    status: "Practical Learning",
    skills: ["PostgreSQL", "MySQL", "Redis", "TCP/IP", "DNS", "HTTP/HTTPS",],
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Security First",
    description: "Understanding access control, permissions, and secure configurations.",
  },
  {
    icon: Network,
    title: "System Thinking",
    description: "Understanding how applications, servers, and networks work together.",
  },
  {
    icon: Laptop,
    title: "Continuous Learning",
    description: "Improving through practical projects and real-world experiments.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools and technologies"
          description="A growing toolkit across cloud infrastructure, DevOps, Linux administration, backend development, and database systems."
        />

        {/* Skills Grid */}
        <StaggerGrid className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <StaggerItem
                key={group.title}
                className={cn(
                  group.featured && "md:col-span-2 xl:col-span-2"
                )}
              >
                <Card
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border-border/70 bg-card p-6 transition-all duration-300",
                    "hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/[0.04]",
                    group.featured && "bg-gradient-to-br from-primary/[0.06] via-card to-card"
                  )}
                >
                  {/* Top Section */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                      <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>

                    <ArrowUpRight className="size-4 text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold tracking-tight">
                        {group.title}
                      </h3>

                      {group.featured && (
                        <Badge variant="secondary" className="text-[10px]">
                          Core Focus
                        </Badge>
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {group.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border/70 bg-background/70 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-7">
                    <div className="flex items-center gap-2 border-t border-border/60 pt-4">
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          group.featured
                            ? "bg-primary"
                            : "bg-emerald-500"
                        )}
                      />
                      <span className="text-[11px] font-medium text-muted-foreground">
                        {group.status}
                      </span>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        {/* Engineering Mindset */}
        <div className="mt-16">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Engineering Mindset
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">
              More than just knowing the tools.
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              The principles that guide how I learn, build, and approach engineering challenges.
            </p>
          </div>

          <StaggerGrid className="grid gap-3 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.title}>
                  <div className="flex h-full gap-4 rounded-2xl border border-border/70 bg-card/50 p-5 transition-colors hover:border-primary/30">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>

      </div>
    </section>
  );
}
