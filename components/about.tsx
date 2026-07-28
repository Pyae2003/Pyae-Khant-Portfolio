import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { highlights } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Engineering dependable systems from API to server."
            description="I enjoy the part of software engineering where application code meets infrastructure: clear service boundaries, predictable deployments, and systems that remain understandable as they grow."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal delay={0.08}>
            <Card className="h-full p-7 sm:p-9">
              <p className="text-pretty text-lg leading-8 text-muted-foreground">
                I am a Software Engineering student focused on backend development, Linux administration, Docker containerization, and practical DevOps. I build secure REST APIs with Node.js frameworks, design database-backed services, and package applications for consistent deployment. My goal is to grow into an infrastructure-minded backend engineer who can improve the complete delivery path—from source control and automated checks to reverse proxies, queues, caching, and production servers.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-border bg-background/40 p-4">
                    <item.icon className="size-5 text-primary" aria-hidden="true" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.16}>
            <Card className="h-full p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Working principles</p>
              <ul className="mt-6 space-y-5">
                {[
                  "Prefer simple, observable architecture.",
                  "Automate repeatable operational work.",
                  "Treat security and reliability as core features.",
                  "Document decisions for the next engineer.",
                ].map((principle) => (
                  <li key={principle} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    {principle}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
