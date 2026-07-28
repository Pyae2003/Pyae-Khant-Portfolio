# Pyae Khant Portfolio — Complete Source Code

This document contains every text-based project file with its exact path and full contents. The generated PDF resume is a binary asset, so it is listed with its checksum rather than embedded as text.

## Project files

```text
.eslintrc.json
.gitignore
README.md
app/error.tsx
app/globals.css
app/icon.tsx
app/layout.tsx
app/loading.tsx
app/manifest.ts
app/not-found.tsx
app/opengraph-image.tsx
app/page.tsx
app/robots.ts
app/sitemap.ts
components/about.tsx
components/certificates.tsx
components/contact-form.tsx
components/contact.tsx
components/floating-particles.tsx
components/footer.tsx
components/github-stats.tsx
components/hero.tsx
components/image-with-loader.tsx
components/navbar.tsx
components/projects.tsx
components/reveal.tsx
components/section-heading.tsx
components/skills.tsx
components/stagger-grid.tsx
components/theme-provider.tsx
components/theme-toggle.tsx
components/ui/badge.tsx
components/ui/button.tsx
components/ui/card.tsx
components/ui/input.tsx
components/ui/textarea.tsx
components.json
data/portfolio.ts
data/site.ts
lib/utils.ts
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
public/profile-placeholder.svg
public/project-ai.svg
public/project-deploy.svg
public/project-monitoring.svg
public/pyae-khant-resume.pdf
tailwind.config.ts
tsconfig.json
```

## `.eslintrc.json`

```json
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}
```

## `.gitignore`

```gitignore
# dependencies
/node_modules
/.pnp
.pnp.*

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# local env files
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# system
.DS_Store
```

## `README.md`

````markdown
# Pyae Khant — Developer Portfolio

A production-ready personal portfolio for a Backend Engineer and Junior DevOps Engineer, built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui-style components, Framer Motion, Lucide React, and next-themes.

## Installation

### Option A: use the included project

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Option B: recreate the base project manually

```bash
npx create-next-app@15 pyae-khant-portfolio --use-npm --typescript --tailwind --eslint --app --no-src-dir --import-alias="@/*"
cd pyae-khant-portfolio
npx shadcn@latest init
npm install framer-motion lucide-react next-themes class-variance-authority clsx tailwind-merge @radix-ui/react-slot
```

Then replace the generated files with the files in this repository.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

### Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

### Vercel dashboard

1. Push this folder to a GitHub, GitLab, or Bitbucket repository.
2. Sign in to Vercel and select **Add New → Project**.
3. Import the repository.
4. Keep the detected framework as **Next.js** and use the default build settings.
5. Select **Deploy**.

No environment variables are required.

## Important personalisation points

Update these files before publishing:

- `data/site.ts`: site URL, email, GitHub, and LinkedIn links
- `data/portfolio.ts`: project repository and live-demo URLs, certificate details, and displayed content

Replace:

- `public/profile-placeholder.svg`
- `public/pyae-khant-resume.pdf` with your final verified resume
- Certificate placeholders with verified credential links and dates
- GitHub stats placeholders with live data when desired

## Contact form behaviour

The contact form intentionally uses a zero-backend `mailto:` flow, so the site deploys without secrets or third-party services. For server-side delivery, connect a provider such as Resend and add a Server Action or Route Handler.

## Folder structure

```text
app/
  error.tsx
  globals.css
  icon.tsx
  loading.tsx
  layout.tsx
  manifest.ts
  not-found.tsx
  opengraph-image.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  ui/
    badge.tsx
    button.tsx
    card.tsx
    input.tsx
    textarea.tsx
  about.tsx
  certificates.tsx
  contact-form.tsx
  contact.tsx
  floating-particles.tsx
  footer.tsx
  github-stats.tsx
  hero.tsx
  image-with-loader.tsx
  navbar.tsx
  projects.tsx
  reveal.tsx
  section-heading.tsx
  skills.tsx
  stagger-grid.tsx
  theme-provider.tsx
  theme-toggle.tsx
data/
  portfolio.ts
  site.ts
lib/
  utils.ts
public/
  profile-placeholder.svg
  project-ai.svg
  project-deploy.svg
  project-monitoring.svg
  pyae-khant-resume.pdf
```

## Performance notes

- Most content is rendered as Server Components.
- Client Components are limited to theme controls, navigation, animation wrappers, image loading state, and the contact form.
- `next/image`, local assets, reduced-motion support, static metadata routes, and dynamic OG assets are included.
- No analytics, remote fonts, or third-party runtime scripts are required.
````

## `app/error.tsx`

```tsx
"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container grid min-h-screen place-items-center py-24">
      <div className="max-w-xl text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
          <AlertTriangle aria-hidden="true" />
        </span>
        <h1 className="mt-7 text-4xl font-semibold tracking-tight">Something went wrong.</h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">The page encountered an unexpected error. Try rendering it again.</p>
        <Button type="button" className="mt-8" onClick={reset}>
          <RefreshCw aria-hidden="true" /> Try again
        </Button>
      </div>
    </main>
  );
}
```

## `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --background: 210 40% 98%;
    --foreground: 222 47% 11%;
    --card: 0 0% 100%;
    --card-foreground: 222 47% 11%;
    --primary: 47 96% 53%;
    --primary-foreground: 222 47% 11%;
    --secondary: 214 32% 91%;
    --secondary-foreground: 222 47% 11%;
    --muted: 214 32% 91%;
    --muted-foreground: 215 16% 42%;
    --accent: 210 40% 94%;
    --accent-foreground: 222 47% 11%;
    --border: 214 24% 83%;
    --input: 214 24% 83%;
    --ring: 47 96% 45%;
    --radius: 1rem;
  }

  .dark {
    --background: 222 47% 11%;
    --foreground: 210 40% 98%;
    --card: 215 28% 17%;
    --card-foreground: 210 40% 98%;
    --primary: 47 96% 53%;
    --primary-foreground: 222 47% 11%;
    --secondary: 215 25% 22%;
    --secondary-foreground: 210 40% 98%;
    --muted: 215 25% 22%;
    --muted-foreground: 215 20% 70%;
    --accent: 215 25% 22%;
    --accent-foreground: 210 40% 98%;
    --border: 215 22% 27%;
    --input: 215 22% 27%;
    --ring: 47 96% 53%;
  }

  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
  }

  body {
    @apply bg-background text-foreground antialiased;
    min-height: 100vh;
    background-image:
      radial-gradient(circle at 15% 15%, rgba(250, 204, 21, 0.055), transparent 26rem),
      radial-gradient(circle at 85% 35%, rgba(56, 189, 248, 0.04), transparent 30rem);
  }

  ::selection {
    background: rgba(250, 204, 21, 0.75);
    color: #0f172a;
  }

  :focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 3px;
  }
}

@layer components {
  .section-shell {
    @apply relative py-20 sm:py-24 lg:py-28;
  }

  .section-shell::before {
    content: "";
    @apply pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent;
  }

  .social-link {
    @apply inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring;
  }

  .social-link svg {
    @apply size-4;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

## `app/icon.tsx`

```tsx
import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
          color: "#FACC15",
          fontSize: 190,
          fontWeight: 800,
          letterSpacing: -16,
        }}
      >
        PK
      </div>
    ),
    size,
  );
}
```

## `app/layout.tsx`

```tsx
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Backend & DevOps Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Pyae Khant",
    "Backend Engineer",
    "Junior DevOps Engineer",
    "Node.js Developer",
    "NestJS Developer",
    "Linux Administrator",
    "Docker",
    "Mandalay Myanmar",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} — Backend & DevOps Engineer`,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Backend & DevOps Engineer`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  jobTitle: "Backend Engineer and Junior DevOps Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mandalay",
    addressCountry: "MM",
  },
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  knowsAbout: ["Node.js", "NestJS", "Linux", "Docker", "DevOps", "PostgreSQL", "Next.js"],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <a href="#main-content" className="sr-only z-[100] rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
```

## `app/loading.tsx`

```tsx
export default function Loading() {
  return (
    <main className="container min-h-screen py-24" aria-busy="true" aria-label="Loading portfolio">
      <div className="animate-pulse">
        <div className="h-7 w-56 rounded-full bg-secondary" />
        <div className="mt-7 h-16 max-w-3xl rounded-2xl bg-secondary" />
        <div className="mt-4 h-7 max-w-xl rounded-xl bg-secondary" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-52 rounded-[1.75rem] border border-border bg-card" />
          ))}
        </div>
      </div>
    </main>
  );
}
```

## `app/manifest.ts`

```typescript
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pyae Khant — Backend & DevOps Engineer",
    short_name: "Pyae Khant",
    description: "Personal developer portfolio for Pyae Khant.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#FACC15",
    icons: [{ src: "/icon", sizes: "512x512", type: "image/png" }],
  };
}
```

## `app/not-found.tsx`

```tsx
import { ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container grid min-h-screen place-items-center py-24">
      <div className="max-w-xl text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Terminal aria-hidden="true" />
        </span>
        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">This route is not in the deployment.</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">The page may have moved, or the URL may be incorrect.</p>
        <Button asChild className="mt-8">
          <Link href="/">
            <ArrowLeft aria-hidden="true" /> Back to portfolio
          </Link>
        </Button>
      </div>
    </main>
  );
}
```

## `app/opengraph-image.tsx`

```tsx
import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Backend & DevOps Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 84px",
          background: "#0F172A",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: 999, background: "rgba(250,204,21,0.12)", right: -100, top: -180 }} />
        <div style={{ display: "flex", color: "#FACC15", fontSize: 26, fontWeight: 700, letterSpacing: 2 }}>BACKEND · DEVOPS · INFRASTRUCTURE</div>
        <div style={{ marginTop: 28, fontSize: 82, lineHeight: 1, fontWeight: 800, letterSpacing: -4 }}>{siteConfig.name}</div>
        <div style={{ marginTop: 26, fontSize: 38, color: "#CBD5E1" }}>Backend Engineer & Junior DevOps Engineer</div>
        <div style={{ marginTop: 50, display: "flex", gap: 16, fontSize: 24, color: "#94A3B8" }}>
          <span>Node.js</span><span>•</span><span>Linux</span><span>•</span><span>Docker</span><span>•</span><span>Mandalay, Myanmar</span>
        </div>
      </div>
    ),
    size,
  );
}
```

## `app/page.tsx`

```tsx
import { About } from "@/components/about";
import { Certificates } from "@/components/certificates";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { GithubStats } from "@/components/github-stats";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

## `app/robots.ts`

```typescript
import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
```

## `app/sitemap.ts`

```typescript
import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
```

## `components/about.tsx`

```tsx
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
```

## `components/certificates.tsx`

```tsx
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
```

## `components/contact-form.tsx`

```tsx
"use client";

import { Loader2, Send } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/site";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState("");

  function updateField(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => {
      setSubmitting(false);
      setStatus("Your email application should now have a drafted message ready to send.");
    }, 450);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <Input id="name" name="name" autoComplete="name" required value={form.name} onChange={updateField} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <Input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={updateField} placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <Textarea id="message" name="message" required minLength={10} value={form.message} onChange={updateField} placeholder="Tell me about the role, project, or system you are building." />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Send aria-hidden="true" />}
          Send message
        </Button>
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}
```

## `components/contact.tsx`

```tsx
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
```

## `components/floating-particles.tsx`

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = [
  { left: "8%", top: "16%", size: 5, duration: 7, delay: 0 },
  { left: "22%", top: "72%", size: 3, duration: 8, delay: 1.4 },
  { left: "43%", top: "22%", size: 4, duration: 9, delay: 0.8 },
  { left: "69%", top: "68%", size: 5, duration: 10, delay: 2.2 },
  { left: "84%", top: "20%", size: 3, duration: 8, delay: 0.5 },
  { left: "94%", top: "54%", size: 4, duration: 11, delay: 1.7 },
] as const;

export function FloatingParticles() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-primary/50 shadow-[0_0_18px_rgba(250,204,21,0.4)]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={
            reduceMotion
              ? { opacity: 0.35 }
              : { y: [0, -18, 0], x: [0, index % 2 === 0 ? 8 : -8, 0], opacity: [0.25, 0.8, 0.25] }
          }
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
```

## `components/footer.tsx`

```tsx
import { ArrowUp, Github, Linkedin, Mail, Terminal } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="inline-flex items-center gap-2 font-semibold">
            <Terminal className="size-4 text-primary" aria-hidden="true" /> Designed &amp; Developed by Pyae Khant
          </p>
          <p className="mt-1 text-sm text-muted-foreground">© {year} Pyae Khant. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <Github aria-hidden="true" />
          </a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <Linkedin aria-hidden="true" />
          </a>
          <a href={`mailto:${siteConfig.email}`} className="social-link" aria-label="Email">
            <Mail aria-hidden="true" />
          </a>
          <Link href="#home" className="social-link ml-2" aria-label="Back to top">
            <ArrowUp aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
```

## `components/github-stats.tsx`

```tsx
import { Flame, GitCommit, Languages, Activity } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const weeks = Array.from({ length: 26 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => ((week * 3 + day * 2 + (week % 4)) % 5)),
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
                  <p className="mt-1 text-sm text-muted-foreground">26-week placeholder graph</p>
                </div>
                <Activity className="size-5 text-primary" aria-hidden="true" />
              </div>
              <div className="mt-7 overflow-x-auto pb-2" aria-label="GitHub contribution graph placeholder">
                <div className="grid min-w-[620px] grid-flow-col grid-rows-7 gap-1.5">
                  {weeks.flat().map((level, index) => (
                    <span
                      key={index}
                      className="size-3 rounded-[3px] border border-white/5"
                      style={{ backgroundColor: `rgba(250, 204, 21, ${0.07 + level * 0.18})` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                Less
                {[0.08, 0.25, 0.45, 0.65, 0.9].map((opacity) => (
                  <span key={opacity} className="size-3 rounded-[3px] bg-primary" style={{ opacity }} aria-hidden="true" />
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
                  ["TypeScript", "76%"],
                  ["JavaScript", "14%"],
                  ["Shell", "6%"],
                  ["Other", "4%"],
                ].map(([language, value]) => (
                  <div key={language}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{language}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-primary" style={{ width: value }} />
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
              <div key={stat.label} className="rounded-2xl border border-border bg-background/40 p-5 text-center">
                <stat.icon className="mx-auto size-5 text-primary" aria-hidden="true" />
                <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
```

## `components/hero.tsx`

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Server } from "lucide-react";
import Link from "next/link";

import { FloatingParticles } from "@/components/floating-particles";
import { ImageWithLoader } from "@/components/image-with-loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const entrance = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: reduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="home" className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-32">
      <FloatingParticles />
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[32rem] max-w-5xl rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" />
      <div className="container grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10">
          <motion.div {...entrance(0)}>
            <Badge className="gap-2 py-1.5">
              <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(250,204,21,0.8)]" aria-hidden="true" />
              Available for backend and DevOps opportunities
            </Badge>
          </motion.div>

          <motion.h1
            {...entrance(0.08)}
            className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-primary">Pyae Khant</span>
          </motion.h1>

          <motion.p {...entrance(0.16)} className="mt-5 text-xl font-medium text-foreground/90 sm:text-2xl">
            Backend Engineer &amp; Junior DevOps Engineer
          </motion.p>

          <motion.p {...entrance(0.24)} className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            I build scalable backend systems and practical infrastructure workflows using Linux, Docker, modern Node.js frameworks, and production-minded engineering practices.
          </motion.p>

          <motion.div {...entrance(0.32)} className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/pyae-khant-resume.pdf" download>
                <Download aria-hidden="true" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div {...entrance(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Pyae Khant on GitHub"
              className="social-link"
            >
              <Github aria-hidden="true" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Pyae Khant on LinkedIn"
              className="social-link"
            >
              <Linkedin aria-hidden="true" />
            </a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email Pyae Khant" className="social-link">
              <Mail aria-hidden="true" />
            </a>
            <span className="ml-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" /> {siteConfig.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, x: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-primary/15 blur-2xl" aria-hidden="true" />
          <div className="relative animate-float rounded-[2.25rem] border border-white/10 bg-card/75 p-4 shadow-card backdrop-blur-xl">
            <ImageWithLoader
              src="/profile-placeholder.svg"
              alt="Illustrated profile placeholder for Pyae Khant"
              width={720}
              height={780}
              priority
              unoptimized
              wrapperClassName="aspect-[4/4.3] rounded-[1.75rem]"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-background/80 p-4 shadow-xl backdrop-blur-xl">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Server aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Systems-first engineering</p>
                <p className="mt-0.5 text-xs text-muted-foreground">APIs · Linux · Containers · Automation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

## `components/image-with-loader.tsx`

```tsx
"use client";

import Image, { type ImageProps } from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

interface ImageWithLoaderProps extends ImageProps {
  wrapperClassName?: string;
}

export function ImageWithLoader({ className, wrapperClassName, alt, ...props }: ImageWithLoaderProps) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-secondary", wrapperClassName)}>
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-10 animate-pulse bg-gradient-to-br from-secondary via-muted to-secondary transition-opacity duration-500",
          loaded && "pointer-events-none opacity-0",
        )}
      />
      <Image
        alt={alt}
        className={cn("transition duration-700", loaded ? "scale-100 opacity-100" : "scale-[1.03] opacity-0", className)}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
}
```

## `components/navbar.tsx`

```tsx
"use client";

import { Menu, Terminal, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("resize", closeOnResize);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary navigation">
        <Link href="#home" className="group inline-flex items-center gap-2 font-semibold tracking-tight" aria-label="Pyae Khant home">
          <span className="grid size-9 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition group-hover:rotate-3 group-hover:scale-105">
            <Terminal className="size-4" aria-hidden="true" />
          </span>
          <span>Pyae Khant</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="icon"
            size="icon"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden border-t border-border/60 bg-background/95 transition-[grid-template-rows,opacity] duration-300 md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <div className="container flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
```

## `components/projects.tsx`

```tsx
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
```

## `components/reveal.tsx`

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

## `components/section-heading.tsx`

```tsx
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Badge className="mb-4">{eyebrow}</Badge>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  );
}
```

## `components/skills.tsx`

```tsx
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
```

## `components/stagger-grid.tsx`

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
}

export function StaggerGrid({ children, className }: StaggerGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: reduceMotion ? {} : { opacity: 0, y: 22 },
        visible: reduceMotion
          ? {}
          : { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
```

## `components/theme-provider.tsx`

```tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}
```

## `components/theme-toggle.tsx`

```tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <Button
      type="button"
      variant="icon"
      size="icon"
      aria-label={mounted && resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && resolvedTheme === "light" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
    </Button>
  );
}
```

## `components/ui/badge.tsx`

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-primary/20 bg-primary/10 text-primary",
        secondary: "border-border bg-secondary text-secondary-foreground",
        outline: "border-border bg-background/40 text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
```

## `components/ui/button.tsx`

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary px-5 py-2.5 text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-glow",
        outline:
          "border border-border bg-background/60 px-5 py-2.5 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent",
        ghost: "px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground",
        icon: "size-10 border border-border bg-background/60 p-0 text-muted-foreground backdrop-blur hover:border-primary/50 hover:text-primary",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

## `components/ui/card.tsx`

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[1.75rem] border border-border/70 bg-card/75 dark:border-white/10 text-card-foreground shadow-card backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-semibold tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm leading-6 text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

## `components/ui/input.tsx`

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-12 w-full rounded-xl border border-border bg-background/60 px-4 py-2 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground/70 focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
```

## `components/ui/textarea.tsx`

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-36 w-full resize-y rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground/70 focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
```

## `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

## `data/portfolio.ts`

```typescript
import {
  Boxes,
  Braces,
  Cloud,
  Code,
  Container,
  Database,
  GitBranch,
  Globe,
  KeyRound,
  Layers,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";

import { siteConfig } from "@/data/site";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  {
    title: "Backend",
    description: "Reliable application services, secure APIs, and asynchronous workloads.",
    icon: Server,
    className: "lg:col-span-2",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "Authentication & Authorization",
      "Prisma ORM",
      "Redis",
      "BullMQ",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    description: "Practical infrastructure skills for repeatable and observable deployments.",
    icon: Cloud,
    className: "lg:row-span-2",
    skills: [
      "Linux Administration",
      "Docker",
      "Podman",
      "Git & GitHub",
      "Nginx",
      "CI/CD Basics",
      "VPS Deployment",
    ],
  },
  {
    title: "Databases",
    description: "Relational and document data modelling for production applications.",
    icon: Database,
    className: "",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Redis"],
  },
  {
    title: "Frontend",
    description: "Fast, accessible interfaces that complement robust backend systems.",
    icon: Code,
    className: "",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
] as const;

export const projects = [
  {
    title: "AI Interview Platform",
    description:
      "An AI-assisted interview evaluation platform with role-based administration, queued scoring jobs, structured feedback, and candidate analytics.",
    image: "/project-ai.svg",
    icon: Braces,
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "BullMQ", "Docker"],
    github: siteConfig.links.github,
    demo: "#contact",
  },
  {
    title: "Server Monitoring Dashboard",
    description:
      "A real-time dashboard that streams CPU, memory, disk, and uptime metrics from Linux hosts through a lightweight WebSocket service.",
    image: "/project-monitoring.svg",
    icon: Network,
    stack: ["Next.js", "WebSocket", "Docker", "Linux"],
    github: siteConfig.links.github,
    demo: "#contact",
  },
  {
    title: "Container Deployment Tool",
    description:
      "A focused deployment interface for shipping containerized services to a VPS with environment configuration and Nginx reverse-proxy templates.",
    image: "/project-deploy.svg",
    icon: Container,
    stack: ["Node.js", "Docker", "Nginx"],
    github: siteConfig.links.github,
    demo: "#contact",
  },
] as const;

export const certificates = [
  { title: "Linux Administration", provider: "Infrastructure Fundamentals", icon: Terminal },
  { title: "Docker", provider: "Container Engineering", icon: Container },
  { title: "Podman", provider: "Daemonless Containers", icon: Boxes },
  { title: "MERN Stack", provider: "Full-Stack Development", icon: Layers },
  { title: "Next.js", provider: "Modern React Applications", icon: Globe },
  { title: "Web Security", provider: "Application Security Basics", icon: ShieldCheck },
] as const;

export const highlights = [
  { label: "API design", icon: Workflow },
  { label: "Container workflows", icon: Container },
  { label: "Linux operations", icon: Terminal },
  { label: "Secure access", icon: KeyRound },
  { label: "Version control", icon: GitBranch },
] as const;
```

## `data/site.ts`

```typescript
export const siteConfig = {
  name: "Pyae Khant",
  title: "Backend Engineer | Junior DevOps Engineer",
  description:
    "Backend Engineer and Junior DevOps Engineer based in Mandalay, Myanmar, focused on scalable APIs, Linux infrastructure, containers, automation, and cloud-native systems.",
  url: "https://pyae-khant-portfolio.vercel.app",
  email: "hello@pyaekhant.dev",
  location: "Mandalay, Myanmar",
  links: {
    github: "https://github.com/pyae-khant",
    linkedin: "https://www.linkedin.com/in/pyae-khant",
  },
} as const;
```

## `lib/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## `next-env.d.ts`

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited.
// See https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

## `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
```

## `package.json`

```json
{
  "name": "pyae-khant-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@radix-ui/react-slot": "^1.2.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.24",
    "lucide-react": "^0.507.0",
    "next": "^15.5.0",
    "next-themes": "^0.4.6",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "@types/node": "^22.10.2",
    "@types/react": "^19.1.0",
    "@types/react-dom": "^19.1.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.1",
    "eslint-config-next": "^15.5.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2"
  }
}
```

## `postcss.config.mjs`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## `public/profile-placeholder.svg`

```xml
<svg width="720" height="780" viewBox="0 0 720 780" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="720" height="780" rx="48" fill="#111C31"/>
<circle cx="582" cy="134" r="164" fill="#FACC15" fill-opacity="0.08"/>
<circle cx="120" cy="660" r="210" fill="#38BDF8" fill-opacity="0.05"/>
<path d="M83 109H637" stroke="#334155" stroke-dasharray="8 12"/>
<path d="M83 671H637" stroke="#334155" stroke-dasharray="8 12"/>
<circle cx="360" cy="279" r="111" fill="#1E293B" stroke="#475569" stroke-width="3"/>
<path d="M174 662C174 525.586 254.514 438 360 438C465.486 438 546 525.586 546 662" fill="#1E293B" stroke="#475569" stroke-width="3"/>
<circle cx="360" cy="279" r="72" fill="#FACC15" fill-opacity="0.14"/>
<path d="M327 278L350 301L398 253" stroke="#FACC15" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="86" y="70" width="156" height="43" rx="21.5" fill="#FACC15" fill-opacity="0.1" stroke="#FACC15" stroke-opacity="0.35"/>
<circle cx="111" cy="91.5" r="5" fill="#FACC15"/>
<text x="128" y="98" fill="#F8FAFC" font-family="Arial, sans-serif" font-size="18" font-weight="700">Pyae Khant</text>
<text x="360" y="719" text-anchor="middle" fill="#94A3B8" font-family="Arial, sans-serif" font-size="19">Replace with a professional profile photo</text>
</svg>
```

## `public/project-ai.svg`

```xml
<svg width="1200" height="720" viewBox="0 0 1200 720" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="720" fill="#101A2D"/>
<circle cx="1040" cy="90" r="250" fill="#FACC15" fill-opacity="0.08"/>
<rect x="110" y="92" width="980" height="536" rx="28" fill="#172337" stroke="#334155" stroke-width="2"/>
<rect x="110" y="92" width="980" height="68" rx="28" fill="#1E293B"/>
<circle cx="151" cy="126" r="8" fill="#FACC15"/>
<circle cx="179" cy="126" r="8" fill="#64748B"/>
<circle cx="207" cy="126" r="8" fill="#64748B"/>
<rect x="148" y="204" width="246" height="376" rx="20" fill="#111C31"/>
<circle cx="271" cy="306" r="64" fill="#FACC15" fill-opacity="0.14"/>
<path d="M235 385H307" stroke="#475569" stroke-width="12" stroke-linecap="round"/>
<path d="M207 423H335" stroke="#334155" stroke-width="10" stroke-linecap="round"/>
<rect x="442" y="204" width="610" height="164" rx="20" fill="#111C31"/>
<rect x="478" y="244" width="312" height="16" rx="8" fill="#FACC15" fill-opacity="0.7"/>
<rect x="478" y="278" width="476" height="12" rx="6" fill="#475569"/>
<rect x="478" y="306" width="390" height="12" rx="6" fill="#334155"/>
<rect x="442" y="396" width="290" height="184" rx="20" fill="#111C31"/>
<rect x="762" y="396" width="290" height="184" rx="20" fill="#111C31"/>
<path d="M489 535L541 481L585 513L670 438" stroke="#FACC15" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="849" cy="488" r="44" stroke="#FACC15" stroke-width="13" stroke-dasharray="92 42"/>
</svg>
```

## `public/project-deploy.svg`

```xml
<svg width="1200" height="720" viewBox="0 0 1200 720" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="720" fill="#101A2D"/>
<circle cx="140" cy="610" r="260" fill="#38BDF8" fill-opacity="0.04"/>
<rect x="102" y="92" width="996" height="536" rx="30" fill="#172337" stroke="#334155" stroke-width="2"/>
<rect x="102" y="92" width="996" height="72" rx="30" fill="#1E293B"/>
<circle cx="148" cy="128" r="8" fill="#FACC15"/>
<circle cx="176" cy="128" r="8" fill="#64748B"/>
<circle cx="204" cy="128" r="8" fill="#64748B"/>
<rect x="146" y="206" width="435" height="374" rx="22" fill="#111C31"/>
<text x="185" y="251" fill="#94A3B8" font-family="monospace" font-size="20">deployment.yml</text>
<text x="185" y="310" fill="#FACC15" font-family="monospace" font-size="20">service:</text>
<text x="219" y="348" fill="#CBD5E1" font-family="monospace" font-size="20">name: api</text>
<text x="219" y="386" fill="#CBD5E1" font-family="monospace" font-size="20">image: app:latest</text>
<text x="219" y="424" fill="#CBD5E1" font-family="monospace" font-size="20">port: 3000</text>
<text x="185" y="486" fill="#FACC15" font-family="monospace" font-size="20">proxy:</text>
<text x="219" y="524" fill="#CBD5E1" font-family="monospace" font-size="20">nginx: enabled</text>
<rect x="624" y="206" width="430" height="154" rx="22" fill="#111C31"/>
<rect x="662" y="246" width="236" height="16" rx="8" fill="#F8FAFC" fill-opacity="0.8"/>
<rect x="662" y="282" width="344" height="12" rx="6" fill="#475569"/>
<circle cx="975" cy="248" r="14" fill="#FACC15" fill-opacity="0.8"/>
<rect x="624" y="392" width="430" height="188" rx="22" fill="#111C31"/>
<path d="M684 486H756" stroke="#FACC15" stroke-width="12" stroke-linecap="round"/>
<path d="M808 486H880" stroke="#FACC15" stroke-width="12" stroke-linecap="round"/>
<path d="M932 486H994" stroke="#FACC15" stroke-width="12" stroke-linecap="round"/>
<path d="M756 486L808 486" stroke="#475569" stroke-width="5" stroke-dasharray="7 8"/>
<path d="M880 486L932 486" stroke="#475569" stroke-width="5" stroke-dasharray="7 8"/>
<text x="682" y="540" fill="#94A3B8" font-family="Arial" font-size="17">Build</text>
<text x="812" y="540" fill="#94A3B8" font-family="Arial" font-size="17">Ship</text>
<text x="938" y="540" fill="#94A3B8" font-family="Arial" font-size="17">Run</text>
</svg>
```

## `public/project-monitoring.svg`

```xml
<svg width="1200" height="720" viewBox="0 0 1200 720" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="720" fill="#101A2D"/>
<rect x="92" y="92" width="1016" height="536" rx="30" fill="#172337" stroke="#334155" stroke-width="2"/>
<rect x="92" y="92" width="230" height="536" rx="30" fill="#111C31"/>
<circle cx="151" cy="151" r="20" fill="#FACC15" fill-opacity="0.18"/>
<path d="M190 149H270" stroke="#475569" stroke-width="12" stroke-linecap="round"/>
<path d="M136 224H278" stroke="#334155" stroke-width="13" stroke-linecap="round"/>
<path d="M136 274H254" stroke="#334155" stroke-width="13" stroke-linecap="round"/>
<path d="M136 324H270" stroke="#334155" stroke-width="13" stroke-linecap="round"/>
<rect x="362" y="136" width="210" height="134" rx="20" fill="#111C31"/>
<rect x="596" y="136" width="210" height="134" rx="20" fill="#111C31"/>
<rect x="830" y="136" width="210" height="134" rx="20" fill="#111C31"/>
<text x="397" y="183" fill="#94A3B8" font-family="Arial" font-size="18">CPU</text>
<text x="397" y="235" fill="#FACC15" font-family="Arial" font-size="43" font-weight="700">42%</text>
<text x="631" y="183" fill="#94A3B8" font-family="Arial" font-size="18">MEMORY</text>
<text x="631" y="235" fill="#F8FAFC" font-family="Arial" font-size="43" font-weight="700">6.4 GB</text>
<text x="865" y="183" fill="#94A3B8" font-family="Arial" font-size="18">UPTIME</text>
<text x="865" y="235" fill="#F8FAFC" font-family="Arial" font-size="43" font-weight="700">14d</text>
<rect x="362" y="306" width="678" height="274" rx="20" fill="#111C31"/>
<path d="M410 521L467 461L532 491L594 403L658 447L726 381L790 430L855 354L919 389L995 335" stroke="#FACC15" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M410 545H995" stroke="#334155" stroke-width="2"/>
<path d="M410 475H995" stroke="#334155" stroke-width="2" stroke-dasharray="7 9"/>
<path d="M410 405H995" stroke="#334155" stroke-width="2" stroke-dasharray="7 9"/>
</svg>
```

## `public/pyae-khant-resume.pdf`

Binary PDF asset (3,498 bytes). SHA-256: `98f0a3102b1d25a92bf606c53e682d7f40a4adb52487eeb9f4849d3ea13bb41a`.

## `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(250, 204, 21, 0.12)",
        card: "0 18px 60px rgba(2, 6, 23, 0.20)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.65" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
```

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```
