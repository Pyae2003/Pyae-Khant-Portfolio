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
      "Developed a full-stack AI Interview Platform using Next.js, TypeScript, Prisma ORM, PostgreSQL, Better Auth, and AI API integration. The system supports user authentication, interview sessions, AI-based evaluation, history tracking, and an admin dashboard for managing users, categories, and interview questions.",
    image: "/project-ai.svg",
    icon: Braces,
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "BullMQ", "Docker", "zod","better-auth"],
    github: siteConfig.links.github,
    demo: "#contact",
  },
  {
    title: "MERN Stack Social Media Application",
    description:
      "Built a full-stack social media application using MongoDB, Express.js, React, and Node.js with user authentication, post management, comments, and responsive UI.",
    image: "/project-monitoring.svg",
    icon: Network,
    stack: ["Express" , " MongoDB" , " React", "Node.js", "Docker", "Linux" , "express-validator"],
    github: siteConfig.links.github,
    demo: "#contact",
  },
  {
    title: "Voting System",
    description:
      "Designed and developed a secure university voting system for academic purposes with user authentication and database management.",
    image: "/project-deploy.svg",
    icon: Container,
    stack: ["Node.js", "Docker", "Vercel" , "Typescript" , "React" , "Express", "zod" ],
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
  { title: "Nest.js", provider: "Modern React Applications", icon: Globe },
  { title: "Web Security", provider: "Application Security Basics", icon: ShieldCheck },
] as const;

export const highlights = [
  { label: "API design", icon: Workflow },
  { label: "Container workflows", icon: Container },
  { label: "Linux operations", icon: Terminal },
  { label: "Secure access", icon: KeyRound },
  { label: "Version control", icon: GitBranch },
] as const;
