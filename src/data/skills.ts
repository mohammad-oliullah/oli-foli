import type { SkillCategory } from "@/types/skill";

export const skillCategories = [
  {
    id: "backend",
    title: "Backend",
    summary:
      "APIs, business logic, and production services in TypeScript on Node.js.",
    items: [
      {
        name: "Node.js",
        usedFor:
          "Primary runtime for APIs, automation, and production services.",
        related: ["GoKundu", "HawkEyes", "MNTECH", "Independent Contract"],
      },
      {
        name: "NestJS",
        usedFor:
          "Modular backend services, including merchandising automation and e-governance APIs.",
        related: ["HawkEyes"],
      },
      {
        name: "Express.js",
        usedFor: "HTTP APIs and full-stack backends alongside React/Next.js.",
        related: ["MNTECH"],
      },
      {
        name: "REST API",
        usedFor: "Resource APIs with auth, RBAC, and integration endpoints.",
        related: ["HawkEyes", "MNTECH"],
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    summary:
      "Application UIs for dashboards, listings, and product surfaces.",
    items: [
      {
        name: "React",
        usedFor: "Interactive UIs for products, dashboards, and company sites.",
        related: ["GoKundu", "MNTECH", "Bhalobasha"],
      },
      {
        name: "Next.js",
        usedFor:
          "Full-stack web apps, agency dashboards, and production deployments.",
        related: ["GoKundu", "MNTECH", "Bhalobasha", "Independent Contract"],
      },
      {
        name: "Tailwind CSS",
        usedFor: "UI implementation in product and portfolio work.",
        related: ["This portfolio"],
      },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    summary:
      "Schema design, aggregations, and data access for production apps.",
    items: [
      {
        name: "MongoDB",
        usedFor:
          "Document models and aggregation pipelines for reporting and automation.",
        related: ["GoKundu", "HawkEyes", "MNTECH"],
      },
      {
        name: "PostgreSQL",
        usedFor: "Relational data for the Bhalobasha listing platform.",
        related: ["Bhalobasha"],
      },
      {
        name: "MySQL",
        usedFor:
          "Relational design for classified e-commerce and business applications.",
        related: ["MNTECH"],
      },
      {
        name: "Prisma",
        usedFor: "Typed data access for PostgreSQL-backed product work.",
        related: ["Bhalobasha"],
      },
      {
        name: "Mongoose",
        usedFor:
          "MongoDB modeling in Node.js. Production ODM details per company are TODO if you want them named.",
        related: ["MongoDB"],
      },
    ],
  },
  {
    id: "realtime",
    title: "Realtime",
    summary:
      "Persistent connections and live application state where the product needs it.",
    items: [
      {
        name: "WebSocket",
        usedFor: "Persistent connections for live events and messaging.",
        related: ["Capabilities"],
      },
      {
        name: "Socket.IO",
        usedFor: "Realtime channels on Node.js services.",
        related: ["Capabilities"],
      },
      {
        name: "Redis",
        usedFor: "Caching and realtime-adjacent coordination.",
        related: ["Capabilities"],
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    summary:
      "Linux VPS, reverse proxies, containers, and production networking.",
    items: [
      {
        name: "Linux / VPS",
        usedFor: "Provisioning and operating production hosts end-to-end.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "Nginx",
        usedFor: "Reverse proxy, SSL termination, and application routing.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "Docker",
        usedFor: "Packaging and running services on production hosts.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "PM2",
        usedFor: "Process management for Node.js and Next.js deployments.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "SSL / Cloudflare",
        usedFor: "TLS, domains, and edge configuration for public services.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "AWS",
        usedFor: "Cloud services used alongside VPS-based production work.",
        related: ["GoKundu"],
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    summary: "Repeatable deploys, backups, and host reliability.",
    items: [
      {
        name: "GitHub Actions",
        usedFor: "CI/CD pipelines for application and infrastructure workflows.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "CI/CD",
        usedFor: "Automated and zero-downtime production releases.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "Backups & monitoring",
        usedFor: "Operational backups and production monitoring workflows.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "Load balancing & firewall",
        usedFor: "Traffic distribution and host firewall configuration.",
        related: ["Independent Contract"],
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    summary:
      "Authz, API hardening, and security-aware backend work.",
    items: [
      {
        name: "JWT",
        usedFor: "Token-based authentication for APIs.",
        related: ["HawkEyes"],
      },
      {
        name: "RBAC",
        usedFor: "Role-based access for multi-module platforms.",
        related: ["HawkEyes"],
      },
      {
        name: "API security",
        usedFor: "Secure API design for enterprise and e-governance systems.",
        related: ["HawkEyes"],
      },
      {
        name: "Penetration testing",
        usedFor:
          "Security testing considerations alongside backend delivery.",
        related: ["HawkEyes"],
      },
    ],
  },
  {
    id: "testing",
    title: "Testing",
    summary:
      "I test the systems I ship. Specific framework names and coverage numbers are not listed here yet.",
    items: [
      {
        name: "TODO: testing stack",
        usedFor:
          "Add unit/integration/e2e tools you want shown (for example Jest, Supertest, Playwright).",
        related: [],
      },
    ],
  },
  {
    id: "integrations",
    title: "Third-party integrations",
    summary: "Payments and social APIs wired into product backends.",
    items: [
      {
        name: "Stripe",
        usedFor: "Payments on a classified e-commerce platform.",
        related: ["MNTECH"],
      },
      {
        name: "Facebook / Instagram APIs",
        usedFor: "Social automation in an influencer management application.",
        related: ["MNTECH"],
      },
      {
        name: "YouTube / TikTok APIs",
        usedFor: "Content and social-media automation integrations.",
        related: ["MNTECH"],
      },
    ],
  },
  {
    id: "tooling",
    title: "Developer tooling",
    summary: "Packages and tools meant for other engineers to consume.",
    items: [
      {
        name: "npm packages",
        usedFor: "Publishing reusable libraries such as @olism/bd-geo.",
        related: ["BD Geo"],
      },
      {
        name: "CLI / internal tooling",
        usedFor:
          "Hobby and experimental developer tools. Named CLIs are TODO.",
        related: ["Engineering experiments"],
      },
    ],
  },
  {
    id: "ai",
    title: "AI / Automation",
    summary:
      "Automation in production product work — not a research lab claim.",
    items: [
      {
        name: "AI automation",
        usedFor:
          "Lead-generation pipelines, data collection, and form-to-CRM workflows.",
        related: ["GoKundu"],
      },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    summary:
      "Languages I use in production or in low-level experiments. No proficiency percentages.",
    items: [
      {
        name: "TypeScript",
        usedFor: "Primary language for backends, frontends, and packages.",
        related: ["GoKundu", "HawkEyes", "BD Geo", "Bhalobasha"],
      },
      {
        name: "JavaScript",
        usedFor: "Node and frontend applications, including earlier product work.",
        related: ["MNTECH", "BD Geo"],
      },
      {
        name: "Python / C++ / Assembly",
        usedFor:
          "Listed in my toolkit. Production case studies are not documented on this site yet; C/C++ also appear in hobby OS/CLI experiments.",
        related: ["Engineering experiments"],
      },
    ],
  },
] satisfies readonly SkillCategory[];
