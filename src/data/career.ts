import type { CareerContent } from "@/types/career";

export const career = {
  direction: "AI-native Backend / Full-Stack Software Developer",
  summary:
    "I want to keep owning backend systems and the production path around them — APIs, data, auth, realtime where it is justified, and Linux-based deploys — while still shipping full-stack surfaces in TypeScript when that is the product.",
  targetRoles: [
    "Backend engineer (Node.js / NestJS / TypeScript)",
    "Full-stack engineer with a backend bias (Next.js + Node APIs)",
    "Roles that include production infrastructure: VPS, Nginx, Docker, CI/CD — not title-only DevOps",
  ],
  preferredStack: [
    "TypeScript",
    "Node.js",
    "NestJS",
    "Express.js",
    "React",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Redis",
    "WebSocket / Socket.IO",
    "Linux",
    "Docker",
    "Nginx",
    "GitHub Actions",
  ],
  interests: [
    "API and backend architecture",
    "Multi-tenant product dashboards",
    "Automation and data pipelines",
    "Realtime systems",
    "Secure APIs and RBAC",
    "Production Linux / VPS operations",
    "Developer tooling and npm packages",
    "AI-assisted automation in product workflows",
  ],
  problemSpaces: [
    "Turning messy operational workflows into APIs and dashboards other people can run.",
    "Keeping production deploys boring: proxy, process manager, TLS, backups, CI.",
    "Integrations (payments, social APIs) that have to survive real provider constraints.",
    "Reporting and aggregations that stay correct as the data grows.",
  ],
  currentlyExploring: [
    "AI automation and agentic workflows",
    "Production Linux, Docker, Nginx, PM2, and CI/CD",
    "System design and scalable backend architecture",
    "Open-source geo/data tooling (@olism/bd-geo)",
  ],
} satisfies CareerContent;
