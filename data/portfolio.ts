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
  Leaf,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  Award,
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
      "Developed an AI-powered interview preparation platform that generates technical interview questions and evaluates user responses. Features include authentication, dynamic interview sessions, AI-generated feedback, interview history, and an admin dashboard. Implemented background evaluation jobs using BullMQ and Redis.",
    image: "/ai-interview.png",
    icon: Braces,
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
      "Redis",
      "BullMQ",
      "OpenRouter",
      "Docker",
    ],
    github: siteConfig.links.github,
    demo: "https://ai-interviewer.site",
  },

  {
    title: "AWS ECR OIDC CI/CD",
    description:
      "Built a secure GitHub Actions workflow using OpenID Connect (OIDC) to authenticate with AWS without storing long-lived access keys. Configured IAM role trust policies and Amazon ECR permissions to automate secure Docker image builds and deployments.",
    image: "/aws-oidc.png",
    icon: ShieldCheck,
    stack: [
      "AWS",
      "IAM",
      "OIDC",
      "Amazon ECR",
      "GitHub Actions",
      "Docker",
      "Linux",
      "CI/CD",
    ],
    github: "https://github.com/Pyae2003/oidc-demo",
    demo: "#contact",
  },

  {
    title: "EcoLink – Smart & Green",
    description:
      "Co-developed an AI-powered environmental cleanup event platform that connects communities with environmental activities. Features include event management, participant registration, approval workflows, location mapping, air quality information, AI assistance, and automated participation certificates. Awarded 2nd Prize at UCSM AI Hackathon 2026.",
    image: "/ecolink.png",
    icon: Leaf,
    stack: [
      "AI Integration",
      "Next.js",
      "TypeScript",
      "Database",
      "Maps API",
      "REST API",
      "Email Automation",
    ],
    github: siteConfig.links.github,
    demo: "#contact",
  },

  {
    title: "Valentine Day",
    description:
      "Built a full-stack social media application where users can authenticate, create posts, interact with content, and manage comments. Focused on backend API development, database integration, and responsive user interfaces.",
    image: "/project-monitoring.svg",
    icon: Network,
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "REST API",
      "Authentication",
    ],
    github: siteConfig.links.github,
    demo: "#contact",
  },

  {
    title: "University Voting System",
    description:
      "Designed and developed a university voting system for academic purposes, focusing on user authentication, voting workflows, and database management. Explored application security and reliable handling of voting data.",
    image: "/project-deploy.svg",
    icon: Container,
    stack: [
      "Node.js",
      "Express.js",
      "React",
      "TypeScript",
      "Docker",
      "PostgreSQL",
    ],
    github: siteConfig.links.github,
    demo: "#contact",
  },
] as const;


export const certificates = [
  {
    title: "Linux Administration",
    provider: "National Cyber City",
    icon: Terminal,
    url: "YOUR_CERTIFICATE_URL",
  },
  {
    title: "MERN Stack",
    provider: "Code-lab",
    icon: Award,
    url: "",
  },,{
    title: "UCSM AI Hackathon",
    provider: "UCSM",
    icon: Award,
    url:""
  },{
    title: " Nextjs , Nestjs and Docker ",
    provider: "Code-hub",
    icon: Award,
    url: ""
  },{
    title: "DevOps Bootcamp and cloud Engineering (current learning)",
    provider: "Let's learn DevOps",
    icon: Award,
    url: ""
  }
] as const;

export const highlights = [
  { label: "API design", icon: Workflow },
  { label: "Container workflows", icon: Container },
  { label: "Linux operations", icon: Terminal },
  { label: "Secure access", icon: KeyRound },
  { label: "Version control", icon: GitBranch },
] as const;
