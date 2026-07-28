import { Award, ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { StaggerGrid, StaggerItem } from "@/components/stagger-grid";
import { Card } from "@/components/ui/card";
import { certificates } from "@/data/portfolio";

export function Certificates() {
  return (
    <section id="certificates" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Certificates"
          title="Continuous learning across software and infrastructure."
          description="A certificate-ready layout for verified training, course links, issue dates, and credential IDs as the portfolio grows."
        />

        <StaggerGrid className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <StaggerItem key={certificate.title}>
              <Card className="group flex h-full items-start gap-4 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <certificate.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold leading-6">{certificate.title}</h3>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{certificate.provider}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-primary">
                    <Award className="size-3.5" aria-hidden="true" /> Credential placeholder
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
