import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/data/site";

const contactItems = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "GitHub", value: "github.com/pyae-khant", href: siteConfig.links.github, icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/pyae-khant", href: siteConfig.links.linkedin, icon: Linkedin },
  { label: "Location", value: siteConfig.location, href: "https://www.google.com/maps/search/?api=1&query=Mandalay%2C%20Myanmar", icon: MapPin },
] as const;

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build dependable software together."
            description="Have a backend role, infrastructure challenge, or product idea? Send a message and include the context that matters most."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal delay={0.08}>
            <Card className="h-full p-7 sm:p-8">
              <h3 className="text-xl font-semibold">Contact details</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Open to junior backend, DevOps, infrastructure, and collaborative project opportunities.</p>
              <div className="mt-7 space-y-3">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-background/40 p-4 transition hover:border-primary/30 hover:bg-accent"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-muted-foreground">{item.label}</span>
                      <span className="mt-0.5 block truncate text-sm font-medium group-hover:text-primary">{item.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.16}>
            <Card className="p-7 sm:p-8">
              <h3 className="text-xl font-semibold">Send a message</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">This zero-backend form validates your input and opens a pre-filled message in your default email application.</p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
