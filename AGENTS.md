You are working on my personal developer portfolio project.

Your job is to FINISH the portfolio professionally.

IMPORTANT:
Do NOT rebuild the project from scratch.
Do NOT replace the existing architecture unless there is a real technical reason.
Do NOT introduce unnecessary animations, gradients, 3D effects, glassmorphism, excessive cards, or flashy landing-page designs.

The portfolio should feel like an ENGINEER'S PERSONAL SYSTEM / DEVELOPER DASHBOARD.

Think:

- Codeforces / GitHub / developer tooling UI
- clean
- information-dense
- functional
- technical
- modern but restrained
- recruiter-friendly
- fast
- accessible
- responsive

Visual appearance is NOT the priority.
Functionality, information architecture, technical credibility, and usability are the priority.

==================================================
PROJECT GOAL
==================================================

This portfolio should allow a recruiter, hiring manager, or technical person to understand me properly without needing to contact me first.

It should communicate:

1. Who I am
2. What I actually know
3. What I have built
4. Where I have worked
5. What technical problems I have solved
6. My backend/full-stack/infrastructure capabilities
7. My open-source work
8. My engineering interests
9. My career direction
10. How to contact me
11. My resume
12. My GitHub/projects
13. My technical experiments and low-level projects
14. My AI/automation interests

Do not make it look like a generic developer portfolio.

==================================================
EXISTING STACK
==================================================

Use the existing stack.

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Base UI where already configured
- Lucide React
- Next.js App Router
- existing theme provider
- light / dark / system theme

Do NOT add libraries unless they are genuinely necessary.

==================================================
EXISTING DESIGN DIRECTION
==================================================

The application already has:

- AppShell
- Header
- Sidebar
- Bottom area
- Theme switcher
- Header Products menu
- Header Blogs menu
- responsive layout
- light/dark/system theme

The shell should remain persistent while navigating between routes.

Only the central content area should scroll.

Desktop:

- fixed/sticky header
- left sidebar
- right side area
- bottom area
- central scrollable content

Mobile:

- preserve the unusual dashboard-like layout
- do NOT automatically convert everything into a traditional hamburger menu
- keep the existing design philosophy

DO NOT redesign the sidebar unless absolutely necessary.

==================================================
HEADER
==================================================

The header already contains:

- OLI.DEV
- centered Products
- centered Blogs
- Search
- theme switcher

Products should behave like an expanding horizontal menu rather than a traditional dropdown/modal.

Products currently include things such as:

- Bhalobasha
- English Learner
- BD Geo

Keep this interaction.

Do not turn it into a giant mega menu.

==================================================
SIDEBAR
==================================================

The existing sidebar navigation is intentional.

Current navigation includes:

- Overview
- Experience
- Projects
- Skills
- Engineering
- Career
- GitHub
- Resume

Do not remove these.

Do not unnecessarily redesign the sidebar.

==================================================
DATA-DRIVEN ARCHITECTURE
==================================================

Keep portfolio content in /src/data.

Use reusable types in /src/types.

Do not hardcode large amounts of portfolio information directly inside pages.

Prefer:

src/
app/
components/
data/
types/
lib/

when appropriate.

==================================================
MY PROFESSIONAL PROFILE
==================================================

I am Md. Oliullah Sarder.

Professional positioning:

Backend / Full-Stack Software Developer

Core technologies:

- Node.js
- NestJS
- Express.js
- TypeScript
- React
- Next.js
- MongoDB
- PostgreSQL
- MySQL
- Prisma
- Redis
- WebSocket
- Socket.IO

Infrastructure:

- Linux
- VPS
- Nginx
- Docker
- PM2
- GitHub Actions
- CI/CD
- SSL
- Cloudflare
- AWS

Security:

- JWT
- RBAC
- API security
- penetration testing
- secure backend architecture

Integrations:

- Stripe
- Facebook API
- Instagram API
- YouTube API
- TikTok API

I also enjoy building low-level / experimental things as hobbies, including:

- operating-system related experiments
- CLI tools
- developer tooling
- npm packages
- networking / realtime systems
- backend architecture experiments

Do not exaggerate my experience.
Do not invent companies, projects, achievements, users, revenue, performance numbers, or technologies I have not provided.

==================================================
PROFESSIONAL EXPERIENCE
==================================================

There is already an experience data structure.

Preserve it.

Experience:

1. GoKundu

Role:
Full Stack Software Developer

Focus:
AI Automation · Next.js · MongoDB · VPS · AWS

Full-time:
November 2025 — June 2026

Previous part-time engagement:
December 2023 — October 2025

Responsibilities include:

- lead generation platform
- automated data collection pipelines
- form-to-CRM workflows
- client reporting dashboards
- multi-tenant agency dashboard
- publishing pages across multiple client websites
- Linux VPS provisioning
- Nginx
- SSL
- Docker
- PM2
- automated backups
- CI/CD
- zero-downtime production deployments

2. HawkEyes Digital Monitoring Ltd

Role:
Junior Backend Developer

Focus:
NestJS · MongoDB · Pen Testing

March 2024 — November 2025

Responsibilities include:

- backend for merchandising automation platform
- BAT Bangladesh
- Unilever Bangladesh
- complex MongoDB aggregation pipelines
- real-time field-data reporting
- custom PDF generation package
- compliance/audit documents
- multi-module e-governance platform for Gazipur Metropolitan Police
- identity verification
- incident management
- operational workflows
- RBAC
- secure APIs
- penetration testing/security considerations

3. MNTECH Digital Ltd

Role:
Full Stack Developer

Focus:
React.js · Next.js · Node.js · Express.js · MySQL

February 2023 — November 2023

Responsibilities include:

- classified e-commerce platform similar to Bikroy.com
- product listings
- search/filter
- seller dashboard
- Stripe
- Influencer Management application
- Facebook API
- Instagram API
- YouTube API
- TikTok API
- company website
- social-media automation/content management
- MySQL

4. Independent Contract

Role:
DevOps & Deployment Engineer

June 2025 — July 2025

Responsibilities include:

- Linux VPS
- production deployment
- Node.js
- Next.js
- PM2
- Nginx
- SSL
- reverse proxy
- domains
- monitoring
- backups
- load balancing
- firewall configuration
- infrastructure reliability

Use the existing experience data file as the source of truth.

==================================================
HOME / OVERVIEW
==================================================

The home page should NOT be a generic hero with:

"Hi, I'm Oli"
"Welcome to my portfolio"

Instead, make it function like an engineer profile dashboard.

Possible sections:

/ overview

Identity

- name
- role
- availability
- location
- concise professional summary

Capabilities overview

Experience snapshot

Featured projects

Engineering interests

Open-source / npm

Current technical focus

Contact CTA

GitHub / LinkedIn / Resume links

The page should be scannable within 30–60 seconds.

==================================================
PROJECTS
==================================================

Build a serious Projects section.

Projects should be data-driven.

Each project should support:

- name
- short description
- long description
- status
- category
- technologies
- GitHub URL
- live URL if available
- featured flag
- year
- problems solved
- architecture
- key features

Do NOT invent project information.

Where information is missing, create a structure ready for me to fill later.

Projects should be presented more like engineering case studies than pretty portfolio cards.

A recruiter should be able to understand:

"What did Oli actually build?"

==================================================
SKILLS
==================================================

Build a skills page.

Do NOT just make a huge list of badges.

Organize skills into meaningful engineering categories:

Backend
Frontend
Databases
Realtime
Infrastructure
DevOps
Security
Testing
Third-party integrations
Developer tooling
AI / Automation
Languages

Show proficiency/context through:

- technologies
- what I use them for
- related projects
- practical experience

Avoid fake percentages like:

Node.js 95%

Those numbers are meaningless.

==================================================
ENGINEERING
==================================================

This page is important.

It should show how I think as an engineer.

Include sections for topics such as:

- backend architecture
- API design
- database design
- authentication/authorization
- realtime systems
- caching
- Redis
- queues/background jobs
- deployment
- Linux/VPS
- CI/CD
- security
- performance
- scalability
- system design
- low-level experimentation

This should feel like:

"Here is how I approach engineering problems."

Not:

"Here are some buzzwords."

Create expandable/detail sections where useful.

==================================================
LOW LEVEL / EXPERIMENTAL WORK
==================================================

I enjoy building things outside normal web development.

Create a section/page for:

- OS experiments
- CLI tools
- npm packages
- networking experiments
- realtime experiments
- developer tools

Make it clear these are engineering experiments/hobbies when appropriate.

Do not exaggerate them as professional production experience.

==================================================
OPEN SOURCE
==================================================

I have an npm package:

@olism/bd-geo

It provides structured Bangladesh geographical data such as:

- divisions
- districts
- upazilas/thanas
- areas
- villages

Potential use cases:

- address forms
- e-commerce
- delivery systems
- real estate
- location-based applications

Present this as open-source/developer tooling.

If GitHub links or npm links are already present in project data, use them.

Do not invent download numbers or stars.

==================================================
CAREER PAGE
==================================================

Create a career-oriented page explaining:

- current professional direction
- backend/full-stack focus
- what kind of roles I am targeting
- technologies I want to work with
- engineering interests
- what I am currently learning
- what type of engineering problems interest me

Keep it professional.

Do not write generic motivational content.

==================================================
RESUME PAGE
==================================================

Create a resume-focused page.

It should:

- summarize experience
- summarize skills
- provide resume download/view
- provide contact links
- make important recruiter information easy to find

If an actual resume file/path does not exist, create the UI and clearly structure where it should be connected.

Do not fabricate a resume PDF.

==================================================
GITHUB PAGE
==================================================

Create a GitHub-focused page.

Possible sections:

- GitHub profile
- repositories
- open source
- notable projects
- engineering experiments

If live GitHub API integration would require credentials/API complexity, do not unnecessarily build a fragile integration.

Create a clean architecture that can later support GitHub API data.

Do not fake repository statistics.

==================================================
BLOGS
==================================================

Blogs should have a proper page.

The header already links to /blogs.

Create a data-driven blog listing structure.

Each blog entry can contain:

- title
- excerpt
- date
- category
- tags
- URL
- reading time

If I do not have actual articles available, create a placeholder structure without inventing published articles.

==================================================
BLOG CMS (SELF-SERVE BACKEND FOR WRITING BLOGS)
==================================================

I need to be able to write, edit, and publish blog posts myself from a private backend — not by editing data files by hand. This is a new feature, separate from the public-facing BLOGS listing above. Treat it as its own isolated feature; do not touch unrelated pages/components while building it.

GOAL

- A private, authenticated dashboard (only I can log in — this is single-admin, not multi-user) where I can create, edit, delete, and publish/unpublish blog posts.
- Blog data is stored in MongoDB via Mongoose, and the public /blogs listing and blog detail pages should read from the same MongoDB-backed source instead of static data once this is built.

HARD CONSTRAINTS

- Single admin user only. Do not build public sign-up, roles, or multi-user account management — that's unnecessary complexity for a personal blog.
- Follow the same auth pattern already used in my other Next.js project (web-builder): NextAuth.js with a Credentials provider, MongoDB/Mongoose for storage, and bcryptjs for password hashing. Don't introduce a different auth library.
- Never commit real credentials or the Mongo connection string to the repo. Read it from `process.env.MONGODB_URI` only. Add `MONGODB_URI` to `.env.example` with a placeholder value and a short comment — I will set the real value locally and in my deployment environment myself.
- Protect all write/dashboard routes with middleware or server-side session checks — no client-side-only "hide the button" auth.
- Keep the public blog pages as Server Components reading published posts only; the dashboard/editor is the only part that needs to be a Client Component with heavier interactivity.

ARCHITECTURE

1. Database
   - Add a Mongoose connection helper (e.g. `src/lib/mongodb.ts`) that reuses a cached connection across hot reloads/serverless invocations (the standard Next.js + Mongoose pattern — avoid creating a new connection per request).
   - Define a `Post` Mongoose model/schema in `src/lib/models/` or similar, with fields consistent with the Blog type already defined for the public BLOGS section (title, slug, excerpt, content, category, tags, date, readingTime) plus: `published` (boolean), `createdAt`/`updatedAt` timestamps, and a `content` field that supports Markdown (store raw Markdown, render it on the public page — don't build a full rich-text/WYSIWYG editor unless a plain Markdown textarea + preview genuinely isn't good enough).
   - Define a minimal `AdminUser` model (or reuse a single seeded admin record) for the Credentials provider to check against — email/username + bcrypt-hashed password. Do not hardcode a real password anywhere; provide a one-off seed script I can run locally to create my own admin credentials.

2. Auth
   - Set up NextAuth.js with the Credentials provider, checking submitted credentials against the `AdminUser` record via bcryptjs compare.
   - Add `NEXTAUTH_SECRET` (and any other NextAuth env vars needed) to `.env.example` as placeholders.
   - Protect `/dashboard` (or wherever the CMS lives) and its API routes so unauthenticated requests are redirected/rejected.

3. Dashboard UI
   - A `/dashboard` route (or similar, not linked from public nav) with:
     - A login page/form.
     - A list of my posts (published + drafts) with edit/delete/publish-toggle actions.
     - A create/edit post form: title, slug (auto-generate from title, editable), excerpt, category, tags, Markdown content with a live preview, published toggle.
   - Style it consistently with the existing dashboard aesthetic (same design language as the rest of the site) — it doesn't need to look like a generic admin panel template.

4. API
   - Route handlers under `src/app/api/posts/` (or similar) for CRUD, all behind the auth check from step 2.
   - Public blog listing/detail pages fetch only `published: true` posts.

WORKFLOW

1. Inspect the existing BLOGS section's data/types first — reuse the same shape rather than creating a divergent Post type.
2. Tell me your plan (model shape, dashboard route, which Markdown rendering approach) before writing code.
3. Implement incrementally, run `npm run lint` and `npm run build`, fix all errors.
4. Give me a seed-script command to create my first admin login locally.

GIT

git add .
git commit -m "feat: add authenticated blog CMS backed by MongoDB/Mongoose"
git push

==================================================
PRODUCTS
==================================================

Products are already connected to the header menu.

Do not create unnecessary duplicate product UI.

Product pages should exist for:

- Bhalobasha
- English Learner
- BD Geo

Only create detailed product pages if the architecture requires them.

==================================================
SEARCH
==================================================

The header already has a Search button.

Make this functional.

The search should be useful for a portfolio.

It should search across:

- pages
- projects
- experience
- skills
- engineering topics
- products
- blogs

Keyboard shortcut:

Cmd/Ctrl + K

Use an existing dependency if available.
Do not add a huge search library unless necessary.

Search results should be keyboard accessible.

==================================================
AI ASSISTANT (RECRUITER-FACING CHATBOT)
==================================================

This is the AI feature referenced above under "AI/automation interests" and the "AI/Automation" skills category. It is currently UNDONE — build it now, and treat it as its own isolated feature. Do not touch, redesign, or refactor anything outside what's needed for it.

GOAL

Add an AI chatbot that lets a recruiter or hiring manager ask questions about me (Md. Oliullah Sarder) and get accurate answers grounded ONLY in my existing portfolio data.

Examples of what it should handle:

- "What backend technologies does Oli use?"
- "Has he worked with MongoDB in production?"
- "What did he do at HawkEyes Digital Monitoring?"
- "Does he have experience with realtime systems?"
- "How do I contact him?"

HARD CONSTRAINTS

- Do NOT invent, exaggerate, or infer facts about me that aren't in /src/data. If the data doesn't answer a question, the assistant must say it doesn't have that information and point to the contact section — it must never guess, pad, or generalize a confident-sounding answer.
- The assistant is a third-party assistant describing me, NOT a first-person impersonation of me. It should speak like "Oli's portfolio assistant," referring to me in third person, not pretend to literally be me in first person.
- No hallucinated company names, metrics, achievements, or technologies beyond what's already in the data files.
- Do not add heavy dependencies unless truly necessary. A vector database is NOT necessary here — my full portfolio dataset is small enough to pass directly as grounding context to the model on every request ("context-stuffing" RAG). Do not build embeddings/vector search infra for this.
- Visual style must match the existing engineer-dashboard aesthetic: no cartoon chat bubbles, no glowing avatars, no generic SaaS-chat-widget look. Think: a command-palette-adjacent, monospace-friendly, information-dense chat panel that feels like part of the same tool.
- Keep it a Server Component-first, minimal-JS implementation wherever possible; only the actual chat interaction needs to be a Client Component.
- Must work correctly in light/dark/system theme, be keyboard accessible, and be responsive on mobile without breaking the existing shell layout.

ARCHITECTURE

1. Backend (route handler)
   - Create `src/app/api/chat/route.ts` (or similar) as a POST endpoint.
   - It should:
     a. Read all relevant structured data from /src/data (experience, projects, skills, engineering, career, etc.) at build/request time.
     b. Serialize that data into a compact system prompt that defines: who I am, my constraints ("only answer from this data," "decline unknown questions," "speak in third person about Oli"), and the data itself.
     c. Call the Google Gemini API (free tier, no credit card required — use the `@google/generative-ai` SDK, with the key read from `process.env.GEMINI_API_KEY`). Do not hardcode any key.
     d. Stream the response back to the client.
   - Note: the Gemini free tier has real rate limits (roughly 5-15 requests/minute and a daily request cap, depending on model) and free-tier prompts may be used by Google to improve their models. That's an acceptable tradeoff for a low-traffic personal portfolio bot, but keep the abuse-protection rate limit below well under Gemini's own limit so a single event (many recruiters loading the page at once) doesn't get the endpoint throttled or take the free quota to zero for the rest of the day.
   - Add basic abuse protection: a simple rate limit per IP/session (in-memory is fine for now, no external service) so this public endpoint can't be spammed into a large API bill.
   - Handle API errors gracefully and return a clean error the UI can display.

2. Frontend
   - A lightweight chat UI component. Entry point: integrate it into the existing Cmd/Ctrl+K search palette as a distinct "Ask AI" mode if that fits the existing search component cleanly; otherwise use a separate small trigger (e.g., in the header or sidebar) that opens a slide-over/panel. Inspect the existing search implementation first, then pick whichever fits with the least structural change, and briefly tell me which you chose and why.
   - Use the Vercel AI SDK (`ai` package) for streaming chat state/UI if it's not already a dependency — this is the one addition that's justified here, since hand-rolling streaming chat state is exactly the kind of unnecessary complexity we want to avoid elsewhere in this project. If it's already installed, just use it.
   - Show a clear "AI-generated, may be limited to available info" style disclaimer somewhere in the panel — don't let it look like it's me typing live.
   - Keyboard accessible: focus management, escape to close, enter to send.

3. Types & data
   - Add any new types needed (e.g., ChatMessage) to /src/types, don't inline them in components.
   - Do not duplicate portfolio data — the chat context should be assembled from the SAME data files the rest of the site already uses as source of truth.

ENV / CONFIG

- Add `GEMINI_API_KEY` to `.env.example` (not a real key) with a short comment, along with a note on where to get one (Google AI Studio, free, no credit card).
- To get the key: go to aistudio.google.com → sign in with any Google account → "Get API key" → create one. No billing setup needed for the free tier.
- Confirm the key is never exposed to the client bundle (only used inside the route handler).

==================================================
THEME
==================================================

Support:

- Light
- Dark
- System

Already configured.

Make sure all UI components work correctly in all three modes.

Avoid hardcoded colors that break dark mode.

==================================================
RESPONSIVENESS
==================================================

The site must work on:

- desktop
- laptop
- tablet
- mobile

Do not destroy the unique layout on mobile just because conventional responsive design would be easier.

Maintain the existing philosophy:

Header
Left side
Main content
Right side
Bottom

The central content is the primary scroll container.

==================================================
ACCESSIBILITY
==================================================

Use:

- semantic HTML
- proper headings
- accessible buttons
- aria labels where needed
- keyboard navigation
- visible focus states
- proper external link handling

Do not sacrifice accessibility for aesthetics.

==================================================
PERFORMANCE
==================================================

Keep the site fast.

Prefer:

- Server Components by default
- Client Components only when interaction requires them
- static data where possible
- no unnecessary client-side state
- no unnecessary dependencies
- optimized images
- minimal JavaScript

Do not turn every component into "use client".

==================================================
SEO
==================================================

Create proper metadata.

The site should have:

- title
- description
- Open Graph metadata
- Twitter metadata where appropriate
- favicon
- robots
- sitemap if appropriate

Use accurate information.

Do not make fake claims in metadata.

==================================================
CODE QUALITY
==================================================

Use:

- strict TypeScript
- reusable components
- reusable types
- data-driven architecture
- clear naming
- small focused components
- no duplicated code

Avoid:

- any
- unnecessary type assertions
- giant components
- duplicated data
- inline massive arrays inside pages
- unnecessary abstractions

==================================================
IMPORTANT EXISTING FILES
==================================================

Respect existing files such as:

src/components/layouts/app-shell.tsx
src/components/layouts/header.tsx
src/components/layouts/sidebar.tsx

Existing experience data should remain the source of truth.

Existing theme provider should remain.

Existing header Products interaction should remain.

Existing sidebar should remain unless a bug requires modification.

==================================================
ICON RULE
==================================================

Do not use:

import { Github } from "lucide-react"

because the installed Lucide version does not export Github.

Use an existing Lucide icon such as GitBranch where appropriate, or use a proper brand icon solution only when genuinely necessary.

==================================================
DESIGN RULE
==================================================

Do not over-design.

No:

- giant hero typography
- excessive animations
- particle backgrounds
- glowing blobs
- 3D cards
- fake terminal animations
- excessive gradients
- glassmorphism everywhere
- meaningless statistics

A small amount of transition is fine.

The interface should feel like a serious engineer built it.

==================================================
CONTENT RULE
==================================================

Do NOT invent facts about me.

If information is missing:

1. create the data structure
2. add sensible placeholder text such as TODO where necessary
3. tell me what information is missing

Never invent:

- employment
- clients
- revenue
- user counts
- performance metrics
- awards
- certifications
- education
- company responsibilities
- project achievements

==================================================
WORKFLOW
==================================================

Work incrementally.

Before modifying something:

1. inspect the existing code
2. understand the architecture
3. reuse existing components
4. avoid unnecessary refactoring

Do not ask me for confirmation for every small change.

However, if a major architectural decision is genuinely ambiguous, explain the issue briefly and choose the safest existing-architecture-compatible solution.

After implementing each major section:

Run:

npm run lint

and:

npm run build

Fix all TypeScript/build/lint errors.

Do not leave broken code.

==================================================
GIT
==================================================

I use Git.

After each meaningful milestone, give me:

git add .
git commit -m "..."
git push

Use conventional commit messages.

Examples:

feat: build projects section
feat: add engineering page
feat: implement portfolio search
feat: add github section
feat: add AI recruiter chatbot grounded in portfolio data
fix: resolve responsive shell layout
refactor: extract portfolio data types

Do NOT create meaningless commits for every tiny file.

==================================================
FINAL QUALITY BAR
==================================================

When finished, the portfolio should feel like:

"This person actually builds software."

Not:

"This person knows Tailwind and made a pretty website."

The strongest impression should be:

Backend engineering

- Full-stack development
- Production infrastructure
- Security awareness
- Realtime systems
- Developer tooling
- Practical engineering experience

The recruiter should be able to quickly answer:

- Who is Oli?
- What does he specialize in?
- What has he built?
- What companies has he worked with?
- What technologies does he actually use?
- Can he handle backend systems?
- Can he handle production infrastructure?
- Can he build full-stack applications?
- Does he understand engineering beyond CRUD?
- How can I contact him?

==================================================
START
==================================================

First inspect the entire existing project structure and relevant files.

Do NOT immediately start rewriting files.

Identify:

1. Current architecture
2. Existing routes
3. Existing components
4. Existing data files
5. Existing types
6. Existing theme implementation
7. Existing AppShell implementation
8. Existing responsive behavior
9. Existing package dependencies
10. What has already been completed
11. Whether the AI assistant feature above has already been started
12. Whether the blog CMS (auth + dashboard + MongoDB/Mongoose) has already been started

Then create a concise implementation plan.

After that, continue implementing the portfolio from the current state, including the AI assistant feature and the blog CMS if either is still undone.

Do not rebuild completed work.
Do not unnecessarily change existing working components.

Finish the project to production quality.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
