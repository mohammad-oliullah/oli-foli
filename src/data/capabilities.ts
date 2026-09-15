import {
  Boxes,
  Database,
  Globe,
  Package,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";

export const capabilities = [
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Designing and building APIs, business logic, authentication, authorization, background jobs, and production backend services.",
    technologies: ["Node.js", "NestJS", "Express", "TypeScript"],
  },

  {
    icon: Globe,
    title: "Full-Stack Applications",
    description:
      "Building complete web applications from frontend interfaces to backend APIs, databases, authentication, and deployment.",
    technologies: ["Next.js", "React", "TypeScript"],
  },

  {
    icon: Database,
    title: "Database Engineering",
    description:
      "Designing schemas, queries, indexes, aggregations, relationships, migrations, and data access layers.",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"],
  },

  {
    icon: Zap,
    title: "Real-Time Systems",
    description:
      "Building applications that need persistent connections, live events, presence, messaging, and real-time state synchronization.",
    technologies: ["WebSocket", "Socket.IO", "Redis"],
  },

  {
    icon: FaSquareGithub,
    title: "Infrastructure & CI/CD",
    description:
      "Deploying and maintaining production applications, automating deployments, and managing Linux server infrastructure.",
    technologies: ["Docker", "Nginx", "PM2", "GitHub Actions"],
  },

  {
    icon: ShieldCheck,
    title: "Security & Penetration Testing",
    description:
      "Building secure APIs and authentication systems while applying security testing practices to identify vulnerabilities, misconfigurations, and common attack surfaces.",
    technologies: [
      "JWT",
      "RBAC",
      "API Security",
      "Penetration Testing",
      "OWASP",
      "Linux Security",
    ],
  },

  {
    icon: Boxes,
    title: "Third-Party Integrations",
    description:
      "Connecting applications with external platforms, payment providers, social networks, and other APIs.",
    technologies: ["Stripe", "Meta APIs", "YouTube API", "TikTok API"],
  },

  {
    icon: Terminal,
    title: "Systems & Low-Level Programming",
    description:
      "Exploring how software works beneath the web stack by building operating-system concepts, command-line tools, and low-level experiments as a technical hobby.",
    technologies: ["C", "C++", "Linux", "CLI", "Operating Systems"],
  },

  {
    icon: Package,
    title: "Open Source & Developer Tools",
    description:
      "Designing, packaging, documenting, and publishing reusable libraries and developer tools for other engineers.",
    technologies: ["npm", "TypeScript", "JavaScript", "Open Source"],
  },
] as const;
