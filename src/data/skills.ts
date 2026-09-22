import type { SkillCategory } from "@/types/skill";

export const skillCategories = [
  {
    id: "backend",
    title: "Backend",
    summary:
      "APIs, business logic, realtime services, and production backends in TypeScript on Node.js.",
    items: [
      {
        name: "Node.js",
        usedFor:
          "Primary runtime for APIs, automation, realtime services, and production backends.",
        related: ["GoKundu", "HawkEyes", "MNTECH", "Independent Contract"],
      },
      {
        name: "NestJS",
        usedFor:
          "Modular backend services, enterprise APIs, automation services, and realtime applications.",
        related: ["HawkEyes", "Bhalobasha"],
      },
      {
        name: "Express.js",
        usedFor:
          "HTTP APIs and full-stack backends alongside React and Next.js.",
        related: ["MNTECH"],
      },
      {
        name: "REST API",
        usedFor:
          "Resource-based APIs with authentication, RBAC, business logic, and third-party integrations.",
        related: ["HawkEyes", "MNTECH", "Bhalobasha"],
      },
    ],
  },

  {
    id: "frontend",
    title: "Frontend",
    summary:
      "Web interfaces for dashboards, listings, product surfaces, and full-stack applications.",
    items: [
      {
        name: "React",
        usedFor:
          "Interactive UIs for products, dashboards, and company applications.",
        related: ["GoKundu", "MNTECH", "Bhalobasha"],
      },
      {
        name: "Next.js",
        usedFor:
          "Full-stack web applications, agency dashboards, product interfaces, and production deployments.",
        related: ["GoKundu", "MNTECH", "Bhalobasha", "Independent Contract"],
      },
      {
        name: "Tailwind CSS",
        usedFor: "UI implementation across product and portfolio applications.",
        related: ["This portfolio"],
      },
    ],
  },

  {
    id: "databases",
    title: "Databases",
    summary:
      "Data modeling, schema design, queries, aggregations, and application data access.",
    items: [
      {
        name: "MongoDB",
        usedFor:
          "Document models and aggregation pipelines for production applications, reporting, and automation.",
        related: ["GoKundu", "HawkEyes"],
      },
      {
        name: "Mongoose",
        usedFor:
          "MongoDB schema modeling and data access in Node.js applications.",
        related: ["GoKundu", "HawkEyes"],
      },
      {
        name: "PostgreSQL",
        usedFor:
          "Relational data modeling and application persistence for the Bhalobasha platform.",
        related: ["Bhalobasha"],
      },
      {
        name: "Prisma",
        usedFor:
          "Typed database access and schema management for PostgreSQL-backed applications.",
        related: ["Bhalobasha"],
      },
      {
        name: "MySQL",
        usedFor:
          "Relational database design for earlier full-stack business applications.",
        related: ["MNTECH"],
      },
    ],
  },

  {
    id: "realtime",
    title: "Realtime",
    summary:
      "Realtime communication and state coordination for applications that require live updates.",
    items: [
      {
        name: "Socket.IO",
        usedFor:
          "Realtime communication for Node.js services, including chat and live application events.",
        related: ["HawkEyes"],
      },
      {
        name: "Redis",
        usedFor:
          "Caching, queues, and coordination for backend and realtime workloads.",
        related: ["Capabilities"],
      },
    ],
  },

  {
    id: "infrastructure",
    title: "Infrastructure",
    summary:
      "Production Linux servers, reverse proxies, process management, containers, and deployment infrastructure.",
    items: [
      {
        name: "AWS (S3 / EC2)",
        usedFor:
          "Object storage with S3 and hands-on experience working with EC2 instances.",
        related: ["GoKundu"],
      },
      {
        name: "Linux / VPS",
        usedFor:
          "Provisioning, configuring, deploying, and operating production applications on Linux VPS environments.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "Nginx",
        usedFor:
          "Reverse proxy, SSL termination, domain routing, and application routing.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "Docker",
        usedFor:
          "Containerizing and running application services in development and production environments.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "PM2",
        usedFor:
          "Process management for Node.js and Next.js production deployments.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "SSL / Cloudflare",
        usedFor:
          "TLS configuration, domain management, and edge-level configuration for public services.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "Linux security",
        usedFor:
          "Firewall configuration, SSH hardening, Fail2Ban, and production server security practices.",
        related: ["Independent Contract"],
      },
    ],
  },

  {
    id: "devops",
    title: "DevOps",
    summary:
      "Deployment automation, CI/CD, backups, and production operations.",
    items: [
      {
        name: "GitHub Actions",
        usedFor:
          "CI/CD pipelines for application deployment and production workflows.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "CI/CD",
        usedFor:
          "Automated application builds, deployments, and repeatable production releases.",
        related: ["GoKundu", "Independent Contract"],
      },
      {
        name: "Backups & monitoring",
        usedFor:
          "Production backups, service monitoring, and operational maintenance.",
        related: ["GoKundu", "Independent Contract"],
      },
    ],
  },

  {
    id: "security",
    title: "Security",
    summary:
      "Authentication, authorization, API hardening, and security-aware backend development.",
    items: [
      {
        name: "JWT",
        usedFor: "Token-based authentication and protected API access.",
        related: ["HawkEyes"],
      },
      {
        name: "RBAC",
        usedFor:
          "Role-based authorization across multi-module enterprise systems.",
        related: ["HawkEyes"],
      },
      {
        name: "API security",
        usedFor:
          "Secure API design, access control, validation, and backend hardening.",
        related: ["HawkEyes"],
      },
      {
        name: "Security testing",
        usedFor:
          "Security-focused testing and vulnerability checks alongside backend development.",
        related: ["HawkEyes"],
      },
    ],
  },

  {
    id: "testing",
    title: "Testing",
    summary:
      "Automated testing and end-to-end validation for backend applications.",
    items: [
      {
        name: "Jest",
        usedFor:
          "Unit and application-level testing for Node.js and NestJS services.",
        related: ["HawkEyes"],
      },
      {
        name: "E2E testing",
        usedFor:
          "End-to-end validation of backend workflows and application behavior.",
        related: ["HawkEyes"],
      },
      {
        name: "API testing",
        usedFor:
          "Testing backend endpoints, authentication, authorization, and application workflows.",
        related: ["HawkEyes"],
      },
    ],
  },

  {
    id: "integrations",
    title: "Third-party integrations",
    summary:
      "External APIs and services integrated into production applications.",
    items: [
      {
        name: "Stripe",
        usedFor: "Payment integration for a classified e-commerce platform.",
        related: ["MNTECH"],
      },
      {
        name: "Facebook / Instagram APIs",
        usedFor:
          "Social-media integration and automation for an influencer management application.",
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
    id: "automation",
    title: "Automation",
    summary:
      "Data collection, lead generation, workflow automation, and AI-assisted product workflows.",
    items: [
      {
        name: "AI automation",
        usedFor:
          "Exploring AI-assisted workflows, automation pipelines, and agentic application patterns.",
        related: ["Current learning"],
      },
      {
        name: "Workflow automation",
        usedFor:
          "Lead generation, data collection, form-to-CRM workflows, and automated reporting pipelines.",
        related: ["GoKundu"],
      },
      {
        name: "Web automation",
        usedFor:
          "Automated browser workflows and data collection using Node.js-based tooling.",
        related: ["GoKundu", "HawkEyes"],
      },
    ],
  },

  {
    id: "system-design",
    title: "System Design",
    summary:
      "Currently studying scalable architecture, distributed systems, and production system design.",
    items: [
      {
        name: "System design",
        usedFor:
          "Learning how to design scalable, reliable, maintainable backend and distributed systems.",
        related: ["Current learning"],
      },
      {
        name: "Backend architecture",
        usedFor:
          "Applying modular architecture, service boundaries, data modeling, and production backend patterns.",
        related: ["HawkEyes", "Bhalobasha", "GoKundu"],
      },
    ],
  },

  {
    id: "tooling",
    title: "Developer tooling",
    summary:
      "Reusable packages and developer-focused tools built for practical use.",
    items: [
      {
        name: "npm packages",
        usedFor: "Publishing reusable libraries such as @olism/bd-geo.",
        related: ["BD Geo"],
      },
      {
        name: "@olism/bd-geo",
        usedFor:
          "Open-source Bangladesh geographical and location data tooling for developers.",
        related: ["BD Geo"],
      },
    ],
  },

  {
    id: "languages",
    title: "Languages",
    summary:
      "Programming languages used across professional projects and engineering work.",
    items: [
      {
        name: "TypeScript",
        usedFor:
          "Primary language for backend services, full-stack applications, automation, and packages.",
        related: ["GoKundu", "HawkEyes", "BD Geo", "Bhalobasha"],
      },
      {
        name: "JavaScript",
        usedFor: "Node.js, React, and earlier full-stack applications.",
        related: ["MNTECH", "BD Geo"],
      },
      {
        name: "Python",
        usedFor:
          "Learning, experimentation, and automation-related development.",
        related: ["Engineering experiments"],
      },
      {
        name: "C / C++",
        usedFor:
          "Low-level programming experiments and understanding systems fundamentals.",
        related: ["Engineering experiments"],
      },
    ],
  },
] satisfies readonly SkillCategory[];
