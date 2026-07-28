import { Flame, GitCommit, Languages, Activity } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const weeks = Array.from({ length: 26 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => (week * 3 + day * 2 + (week % 4)) % 5),
);

export function GithubStats() {
  return (
    <section className="section-shell" aria-labelledby="github-stats-title">
      <div className="container">
        <div id="github-stats-title">
          <SectionHeading
            eyebrow="GitHub stats"
            title="A visual space for open-source activity."
            description="Static, privacy-friendly placeholders that can later be connected to the GitHub API or a trusted stats service."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Card className="h-full p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">Contribution activity</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    26-week placeholder graph
                  </p>
                </div>
                <Activity className="size-5 text-primary" aria-hidden="true" />
              </div>
              <div
                className="mt-7 overflow-x-auto pb-2"
                aria-label="GitHub contribution graph placeholder"
              >
                <div className="grid min-w-[620px] grid-flow-col grid-rows-7 gap-1.5">
                  {weeks.flat().map((level, index) => (
                    <span
                      key={index}
                      className="size-3 rounded-[3px] border border-white/5"
                      style={{
                        backgroundColor: `rgba(250, 204, 21, ${0.07 + level * 0.18})`,
                      }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                Less
                {[0.08, 0.25, 0.45, 0.65, 0.9].map((opacity) => (
                  <span
                    key={opacity}
                    className="size-3 rounded-[3px] bg-primary"
                    style={{ opacity }}
                    aria-hidden="true"
                  />
                ))}
                More
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Top languages</p>
                <Languages className="size-5 text-primary" aria-hidden="true" />
              </div>
              <div className="mt-7 space-y-5">
                {[
                  ["JavaScript", "80%"],

                  ["TypeScript", "76%"],
                  ["Linux Administartion", "70%"],
                  ["Docker", "65%"],
                ].map(([language, value]) => (
                  <div key={language}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{language}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-6">
          <Card className="grid gap-4 p-6 sm:grid-cols-3 sm:p-7">
            {[
              { icon: Flame, value: "—", label: "Current streak" },
              { icon: GitCommit, value: "—", label: "Total contributions" },
              { icon: Activity, value: "—", label: "Active repositories" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-background/40 p-5 text-center"
              >
                <stat.icon
                  className="mx-auto size-5 text-primary"
                  aria-hidden="true"
                />
                <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
