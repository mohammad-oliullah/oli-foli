import type { EngineeringTopic } from "@/types/engineering";

export const engineeringTopics = [
  {
    id: "backend-architecture",
    title: "Backend architecture",
    summary:
      "Services should match the domain: modules, clear boundaries, and predictable operational paths.",
    details: [
      "At HawkEyes I worked on NestJS backends for merchandising automation and a multi-module e-governance platform, with identity, incidents, and operational workflows separated into clear concerns.",
      "At GoKundu I worked across application code and the systems that run it, including multi-tenant dashboards, automation pipelines, and production hosts.",
      "I prefer explicit module boundaries, predictable request/response contracts, and deployment setups that are easy to reason about and maintain.",
    ],
  },

  {
    id: "api-design",
    title: "API design",
    summary:
      "HTTP APIs that products, dashboards, automation workflows, and operators can consume reliably.",
    details: [
      "REST APIs are the default in the systems I have worked on, including listings, CRM-style workflows, reporting, and admin modules.",
      "I aim for stable contracts between backend services, web dashboards, automation workflows, and third-party integrations.",
      "Authentication and authorization are enforced at the API level rather than relying on UI restrictions.",
    ],
  },

  {
    id: "database-design",
    title: "Database design",
    summary:
      "Choose the data model around the application's access patterns and consistency requirements.",
    details: [
      "MongoDB at HawkEyes included aggregation pipelines for field-data reporting and operational dashboards.",
      "MySQL at MNTECH supported classified listings, search/filtering, and seller workflows.",
      "PostgreSQL and Prisma are used in Bhalobasha for relational listing and rental data.",
      "I work with schema design, indexes, queries, aggregations, and application-level data modeling.",
    ],
  },

  {
    id: "auth",
    title: "Authentication and authorization",
    summary: "Who is calling, and what are they allowed to do?",
    details: [
      "JWT-based authentication for protected APIs.",
      "RBAC for multi-module platforms and administrative workflows.",
      "Authorization is enforced on the backend; hiding functionality in the UI is not access control.",
    ],
  },

  {
    id: "realtime",
    title: "Realtime systems",
    summary:
      "Use realtime communication when the product actually requires live state or messaging.",
    details: [
      "Socket.IO and WebSocket-based communication for live events and messaging.",
      "At HawkEyes, realtime functionality supported communication and operational workflows.",
      "Redis is useful alongside realtime systems for caching, queues, and coordination.",
    ],
  },

  {
    id: "caching-redis",
    title: "Caching and Redis",
    summary:
      "Use caching to reduce expensive work while keeping the primary data source explicit.",
    details: [
      "Redis is part of my backend toolkit for caching and realtime-adjacent workloads.",
      "I treat cache as an optimization rather than a second source of truth.",
      "Cache invalidation and expiration should be intentional parts of the design.",
    ],
  },

  {
    id: "queues",
    title: "Queues and background jobs",
    summary:
      "Move slow, retryable, or asynchronous work away from the main request path.",
    details: [
      "GoKundu involved automated data collection, lead-generation pipelines, and form-to-CRM workflows.",
      "Background processing is useful when work can be performed asynchronously instead of blocking an HTTP request.",
      "I focus on clear job boundaries, retries, and handling failures explicitly.",
    ],
  },

  {
    id: "deployment",
    title: "Deployment",
    summary:
      "Run applications on Linux with repeatable deployment and practical production infrastructure.",
    details: [
      "My typical production stack includes Linux VPS, Nginx, SSL, Docker and/or PM2, DNS, and CI/CD.",
      "I have deployed and operated Node.js and Next.js applications in production environments.",
      "AWS exposure includes S3 for object storage and hands-on experience working with EC2.",
    ],
  },

  {
    id: "linux-vps",
    title: "Linux and VPS",
    summary:
      "I work with the infrastructure running the application, not only the application code.",
    details: [
      "Production work includes Linux VPS configuration, Nginx, SSL, Docker, PM2, domains, backups, and monitoring.",
      "I also work with firewall configuration, SSH hardening, and Fail2Ban for server security.",
      "Several applications I worked on were deployed and maintained directly on Linux-based VPS environments.",
    ],
  },

  {
    id: "cicd",
    title: "CI/CD",
    summary:
      "Make builds and deployments repeatable instead of relying on manual production steps.",
    details: [
      "GitHub Actions for automated application build and deployment workflows.",
      "Production workflows connect source control, application builds, deployment, and server configuration.",
      "The goal is a predictable path from code changes to a running production release.",
    ],
  },

  {
    id: "security",
    title: "Security",
    summary:
      "Treat backend systems as public-facing and enforce security at the appropriate boundaries.",
    details: [
      "JWT, RBAC, API security, and access-control practices were part of my backend work at HawkEyes.",
      "Security testing and penetration-testing activities were performed alongside application development.",
      "Compliance and audit workflows included protected documents, evidence handling, and controlled access.",
    ],
  },

  {
    id: "performance",
    title: "Performance",
    summary:
      "Understand the bottleneck before adding another infrastructure layer.",
    details: [
      "I have worked with aggregation pipelines and reporting queries where efficient data processing was important.",
      "Redis caching can reduce repeated expensive operations when the access pattern justifies it.",
      "I avoid publishing unverified latency or throughput numbers.",
    ],
  },

  {
    id: "scalability",
    title: "Scalability",
    summary:
      "Scale the actual bottleneck and keep the architecture grounded in real requirements.",
    details: [
      "GoKundu's multi-tenant publishing platform required supporting multiple client sites from a shared control plane.",
      "Production infrastructure work included process management and load-balancing concepts.",
      "I focus on real operational constraints rather than inventing user or traffic numbers.",
    ],
  },

  {
    id: "system-design",
    title: "System design",
    summary:
      "Currently developing deeper system-design skills by connecting workflows, data, architecture, and deployment.",
    details: [
      "Lead generation: collect → CRM → report.",
      "Merchandising: field data → aggregate → report / PDF.",
      "E-governance: identity → incidents → operational modules with RBAC.",
      "Classified commerce: listing → search → seller → payment.",
      "I use these real project workflows as the foundation for studying scalable and reliable system design.",
    ],
  },

  {
    id: "low-level",
    title: "Low-level experimentation",
    summary:
      "Hobby exploration of OS concepts, CLI tooling, networking, and programming fundamentals.",
    details: [
      "I experiment with operating-system concepts, CLI tools, developer tooling, npm packages, and networking/realtime systems.",
      "C and C++ are part of this experimentation track.",
      "This area represents personal learning and experimentation rather than professional production experience.",
    ],
  },
] satisfies readonly EngineeringTopic[];
