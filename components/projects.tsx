import { ExternalLink, Github } from "lucide-react";
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
        <SectionHeading
          eyebrow="Featured projects"
          title="Systems built around real engineering problems."
          description="Representative projects that combine backend architecture, real-time communication, container operations, and usable interfaces."
        />

        <StaggerGrid className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <Card className="group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-glow">
                <div className="relative p-3 pb-0">
                  <ImageWithLoader
                    src={project.image}
                    alt={`${project.title} interface placeholder`}
                    width={1200}
                    height={720}
                    unoptimized
                    wrapperClassName="aspect-[16/10] rounded-[1.25rem] border border-white/5"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                  <span className="absolute left-7 top-7 grid size-11 place-items-center rounded-2xl border border-white/10 bg-background/80 text-primary shadow-lg backdrop-blur">
                    <project.icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <Badge key={technology} variant="outline">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub repository`}>
                        <Github aria-hidden="true" /> GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm" className="flex-1">
                      <Link href={project.demo} aria-label={`Open ${project.title} live demo`}>
                        Live demo <ExternalLink aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
