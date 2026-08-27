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

- [OLI.DEV](http://OLI.DEV)

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

- [Socket.IO](http://Socket.IO)

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

- classified e-commerce platform similar to [Bikroy.com](http://Bikroy.com)

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

+

Full-stack development

+

Production infrastructure

+

Security awareness

+

Realtime systems

+

Developer tooling

+

Practical engineering experience

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

Then create a concise implementation plan.

After that, continue implementing the portfolio from the current state.

Do not rebuild completed work.

Do not unnecessarily change existing working components.

Finish the project to production quality.