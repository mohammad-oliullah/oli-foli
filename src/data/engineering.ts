import type { EngineeringTopic } from "@/types/engineering";

export const engineeringTopics = [
  {
    id: "backend-architecture",
    title: "Backend architecture",
    summary:
      "Services should match the domain: modules, clear boundaries, and boring operational paths.",
    details: [
      "At HawkEyes I worked on NestJS backends for merchandising automation and a multi-module e-governance platform — identity, incidents, and operational workflows as separate concerns rather than one catch-all API.",
      "At GoKundu I worked across application code and the systems that run it: multi-tenant dashboards, pipelines, and production hosts.",
      "I prefer explicit module boundaries, predictable request/response contracts, and deployment that the same engineer can reason about at 2am.",
    ],
  },
  {
    id: "api-design",
    title: "API design",
    summary:
      "HTTP APIs that other products, dashboards, and operators can actually consume.",
    details: [
      "REST is the default in the systems I have shipped: listings, CRM-style workflows, reporting, and admin modules.",
      "Contracts should be stable enough for clients (web dashboards, automation, third-party APIs) without leaking internal collection shapes.",
      "Authn/authz belongs in the API, not only in the UI.",
    ],
  },
  {
    id: "database-design",
    title: "Database design",
    summary:
      "Pick the store for the access pattern: documents and aggregations, or relational integrity.",
    details: [
      "MongoDB at HawkEyes included aggregation pipelines for field-data reporting — the query shape drove the model, not the other way around.",
      "MySQL at MNTECH supported classified listings, search/filter, and seller flows.",
      "PostgreSQL and Prisma are in use on Bhalobasha for listing data.",
      "Indexes, aggregations, and migrations are part of the job, not afterthoughts.",
    ],
  },
  {
    id: "auth",
    title: "Authentication and authorization",
    summary: "Who is calling, and what are they allowed to do?",
    details: [
      "JWT for API authentication.",
      "RBAC on multi-module platforms (e-governance and similar admin surfaces).",
      "Authorization is a backend concern. UI hiding is not access control.",
    ],
  },
  {
    id: "realtime",
    title: "Realtime systems",
    summary:
      "Use sockets when the product needs live state — not as decoration.",
    details: [
      "WebSocket and Socket.IO are part of how I build live events, presence, and messaging when the domain needs them.",
      "Realtime reporting at HawkEyes was driven by aggregation and field data; transport choice should follow freshness requirements.",
      "Redis sits next to this work for caching and coordination. Named production socket topologies are TODO if you want them written up as diagrams.",
    ],
  },
  {
    id: "caching-redis",
    title: "Caching and Redis",
    summary: "Cache what is expensive and safe to reuse. Invalidate on purpose.",
    details: [
      "Redis is in my core stack for caching and realtime-adjacent work.",
      "I treat cache as an optimization with an explicit invalidation story, not as a second source of truth.",
    ],
  },
  {
    id: "queues",
    title: "Queues and background jobs",
    summary:
      "Move slow, retryable, or fan-out work off the request path.",
    details: [
      "GoKundu work included automated data collection and form-to-CRM workflows — work that does not belong inline with a single HTTP request.",
      "I prefer explicit job boundaries, retries, and observable failures over hidden cron in a web process.",
      "TODO: name the exact queue library used in each production system if you want that listed.",
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    summary: "Ship on Linux with a reverse proxy, a process manager, and a rollback path.",
    details: [
      "Typical path: Linux VPS, Nginx, SSL, Docker and/or PM2, domain and DNS, then CI/CD.",
      "Independent contract work covered Node.js and Next.js production deploys, reverse proxies, load balancing, and firewall rules.",
      "GoKundu included a focus on reliable and zero-downtime releases.",
    ],
  },
  {
    id: "linux-vps",
    title: "Linux and VPS",
    summary: "I operate the box, not only the framework.",
    details: [
      "Provisioning, Nginx, SSL, Docker, PM2, backups, monitoring, domains.",
      "This is how several production apps I worked on actually ran — not a slide about Kubernetes I have not operated here.",
    ],
  },
  {
    id: "cicd",
    title: "CI/CD",
    summary: "Repeatable builds and deploys, not manual SSH as the happy path.",
    details: [
      "GitHub Actions for pipelines on application and infrastructure work.",
      "The goal is a known path from main to production, including backups and host configuration where I owned that layer.",
    ],
  },
  {
    id: "security",
    title: "Security",
    summary: "Assume the API is public. Design and test accordingly.",
    details: [
      "RBAC, JWT, and API security on backend systems at HawkEyes.",
      "Penetration testing was part of that role — not a certification claim, a working practice alongside delivery.",
      "PDF generation for compliance/audit documents sat next to access control, not instead of it.",
    ],
  },
  {
    id: "performance",
    title: "Performance",
    summary: "Measure the slow query and the hot path before adding layers.",
    details: [
      "Aggregation pipelines and reporting queries are where I have spent time making data usable in near-real-time.",
      "Caching (Redis) is a tool after the query and index are honest.",
      "I do not publish unverified latency or throughput numbers.",
    ],
  },
  {
    id: "scalability",
    title: "Scalability",
    summary: "Scale the bottleneck you have, not the one in a blog post.",
    details: [
      "Multi-tenant publishing at GoKundu is a scale-of-operations problem: many client sites from one control plane.",
      "Load balancing and process management showed up in contract infrastructure work.",
      "I would rather document real constraints than invent user counts.",
    ],
  },
  {
    id: "system-design",
    title: "System design",
    summary: "Start from the workflow, then the data, then the deploy.",
    details: [
      "Lead gen: collect → CRM → report.",
      "Merchandising: field data → aggregate → report / PDF.",
      "E-governance: identity → incident → operational modules, with RBAC.",
      "Classified commerce: listing → search → seller → payment.",
      "Those shapes come from shipped work, not from interview trivia.",
    ],
  },
  {
    id: "low-level",
    title: "Low-level experimentation",
    summary:
      "Hobby work: OS concepts, CLIs, networking, and packages. Not presented as production job history.",
    details: [
      "I experiment with operating-system related ideas, CLI tools, developer tooling, npm packages, and networking/realtime systems.",
      "C, C++, Linux, and assembly show up in this hobby track.",
      "Named experiment write-ups, repos, and dates are TODO — this section is a direction, not a fake changelog.",
    ],
  },
] satisfies readonly EngineeringTopic[];
