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
