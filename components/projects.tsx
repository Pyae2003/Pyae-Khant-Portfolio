import { ArrowUpRight, ExternalLink, Github, Layers3 } from "lucide-react";
import Link from "next/link";

import { ImageWithLoader } from "@/components/image-with-loader";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGrid, StaggerItem } from "@/components/stagger-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Selected Projects"
          title="Turning engineering ideas"
          description="A selection of projects where I explore backend architecture, application development, cloud infrastructure, and practical engineering solutions."
        />

        {/* Project Grid */}
        <StaggerGrid className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <StaggerItem key={project.title}>
                <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.04]">
                  {/* Project Preview */}

                  {/* Project Information */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Title */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>

                      <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                    </div>

                    {/* Description */}
                    <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Technology Stack */}
                    <div className="mt-6">
                      <div className="mb-3 flex items-center gap-2">
                        <Layers3 className="size-3.5 text-primary" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Technologies
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((technology) => (
                          <Badge
                            key={technology}
                            variant="outline"
                            className="rounded-lg border-border/70 bg-background/50 px-2.5 py-1 text-[11px] font-medium"
                          >
                            {technology}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-7 grid grid-cols-2 gap-3 border-t border-border/60 pt-5">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-xl"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} GitHub repository`}
                        >
                          <Github className="size-4" />
                          Source Code
                        </a>
                      </Button>

                      <Button asChild size="sm" className="rounded-xl">
                        <Link
                          href={project.demo}
                          aria-label={`Open ${project.title} live demo`}
                        >
                          Live Preview
                          <ExternalLink className="size-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        {/* Bottom Note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
          <div className="h-px w-12 bg-border" />
          <p className="text-sm text-muted-foreground">
            More projects and engineering experiments coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
