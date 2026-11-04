
import { Award, ArrowUpRight, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { StaggerGrid, StaggerItem } from "@/components/stagger-grid";
import { Card } from "@/components/ui/card";
import { certificates } from "@/data/portfolio";

export function Certificates() {
  return (
    <section id="certificates" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications & Learning"
          title="Learning today. Building for tomorrow."
          description="A collection of certifications and technical training that reflects my continuous growth in software engineering, cloud computing, and infrastructure."
        />

        <StaggerGrid className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <StaggerItem key={certificate.title}>
              <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-start justify-between gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-primary/15 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                    <certificate.icon
                      className="size-5"
                      aria-hidden="true"
                    />
                  </div>

                  <span className="font-mono text-xs text-muted-foreground/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6 flex-1">
                  <h3 className="text-base font-semibold leading-6 tracking-tight">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {certificate.provider}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <Award className="size-4 text-primary" />
                    <span>Professional Learning</span>
                  </div>

                  {certificate.url ? (
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${certificate.title} certificate`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/70"
                    >
                      View
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-muted-foreground/50">
                      Details soon
                    </span>
                  )}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
