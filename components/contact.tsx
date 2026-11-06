
"use client";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  // Sparkles,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/data/site";

const contactItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    description: "Drop me an email",
  },
  {
    label: "GitHub",
    value: "github.com/pyae-khant",
    href: siteConfig.links.github,
    icon: Github,
    description: "Explore my projects",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pyae-khant",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    description: "Let's connect professionally",
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: "https://www.google.com/maps/search/?api=1&query=Mandalay%2C%20Myanmar",
    icon: MapPin,
    description: "Based in Myanmar",
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="section-shell relative overflow-hidden"
    >
      <div className="container relative">
        <Reveal>
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's make something meaningful."
            description="Have an opportunity, an interesting infrastructure challenge, or an idea worth building? I'd love to hear from you."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">

          {/* Contact information */}
          <Reveal className="lg:col-span-5">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-7 sm:p-9">

              {/* Background decoration */}
              <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/[0.06] blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-3 py-1.5">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-50" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-xs font-medium text-primary">
                    Open to opportunities
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Have a project
                  <br />
                  in mind?
                  <br />
                  <span className="text-primary">
                    Let&aposs talk.
                  </span>
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
                  I&aposm interested in junior backend, cloud engineering,
                  DevOps, infrastructure, and collaborative software
                  development opportunities.
                </p>

                <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="grid size-10 place-items-center rounded-xl border border-border/60 bg-background/60 text-primary">
                    <MessageCircle className="size-4" />
                  </div>
                  <span>
                    Usually happy to discuss new ideas and opportunities.
                  </span>
                </div>
              </div>

              {/* Contact links */}
              <div className="relative mt-10 border-t border-border/60 pt-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Find me online
                  </span>
                </div>

                <div className="space-y-2">
                  {contactItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-3 rounded-2xl p-3 transition-all duration-300 hover:bg-primary/[0.06]"
                    >
                      <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-border/60 bg-background/60 text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:text-primary">
                        <item.icon className="size-4" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-0.5 truncate text-sm font-medium transition-colors group-hover:text-primary">
                          {item.value}
                        </p>
                      </div>

                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Message form */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <Card className="relative h-full overflow-hidden rounded-3xl border-border/60 bg-card/60 p-7 backdrop-blur-sm sm:p-9">

              <div className="pointer-events-none absolute -bottom-24 -right-24 size-64 rounded-full bg-primary/[0.05] blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Send a message
                    </span>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      Let&apos;s start a conversation.
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                      Tell me a little about your project, opportunity,
                      or what you have in mind. I&apos;ll be happy to connect.
                    </p>
                  </div>

                  <div className="hidden size-12 shrink-0 place-items-center rounded-2xl border border-primary/15 bg-primary/[0.08] text-primary sm:grid">
                    <Mail className="size-5" />
                  </div>
                </div>

                <div className="my-8 border-t border-border/60" />

                <div className="relative">
                  <ContactForm />
                </div>

                <div className="mt-7 flex items-center gap-2 border-t border-border/60 pt-5">
                  <Mail className="size-3.5 text-primary" />
                  <p className="text-xs leading-5 text-muted-foreground">
                    Your message will open in your default email application.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

        </div>

        {/* Bottom decoration */}
        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-muted-foreground">
              Have a great idea? I am just one message away.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-2 text-xs font-medium text-primary transition-colors hover:text-primary/80"
            >
              Let&apos;s connect
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
