import { StaggerGrid, StaggerItem } from "@/components/stagger-grid";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A practical toolkit for product and infrastructure work."
          description="Technologies I use to design services, manage data, ship containers, and build polished interfaces around backend capabilities."
        />

        <StaggerGrid className="mt-12 grid auto-rows-fr gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <StaggerItem key={group.title} className={cn(group.className)}>
              <Card className="group h-full overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-glow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{group.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{group.description}</p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition group-hover:rotate-3 group-hover:scale-105">
                    <group.icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-background/55 px-3 py-1.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
