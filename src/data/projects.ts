import type { Project } from "@/types/project";

export const projects = [
  {
    name: "BD Geo",
    slug: "bd-geo",
    category: "Open Source",
    status: "Published",
    year: "August 2026 - Present",
    shortDescription:
      "A JavaScript and TypeScript package providing structured geographical data for Bangladesh.",
    longDescription:
      "@olism/bd-geo is an npm package that exposes structured Bangladesh geographical data — divisions, districts, upazilas/thanas, areas, and villages — so applications can build address forms, delivery flows, and location-based features without scraping or maintaining their own geo tables.",
    technologies: ["TypeScript", "JavaScript", "Node.js", "npm"],
    githubUrl: "https://github.com/mohammad-oliullah/bd-geo",
    liveUrl: "https://www.npmjs.com/package/@olism/bd-geo",
    npmUrl: "https://www.npmjs.com/package/@olism/bd-geo",
    featured: true,
    problemsSolved: [
      "Need for reusable, structured Bangladesh geo data in application forms and location features.",
      "Avoiding one-off, inconsistent address datasets across projects.",
    ],
    architecture: [
      "Published as an npm package for JavaScript and TypeScript consumers.",
      "Data is organized by administrative levels: divisions, districts, upazilas/thanas, areas, and villages.",
    ],
    keyFeatures: [
      "Divisions, districts, upazilas/thanas, areas, and villages.",
      "Intended for address forms, e-commerce, delivery, real estate, and location-based apps.",
      "Typed TypeScript usage alongside JavaScript.",
    ],
  },
  {
    name: "Bhalobasha",
    slug: "bhalobasha",
    category: "Full-Stack Application",
    status: "In Development",
    year: "July 2026 - Present",
    shortDescription:
      "A broker-free property rental platform for Bangladesh — flats, rooms, sublets, bachelor seats, and shared messes.",
    longDescription:
      "Bhalobasha (ভালোবাসা — 'good home' in Bangla) is a full-stack rental marketplace that removes brokers from the rental process in Bangladesh. Owners post listings in under 3 minutes from any browser. Seekers filter by tenant policy (bachelor/family/student), location hierarchy, rent range, and furnished status — and never visit a flat that would have rejected them. The platform also supports competitive bidding on high-demand listings, Cloudinary-backed photo uploads, and role-based dashboards for seekers, owners, and admins.",
    technologies: [
      "NestJS",
      "Next.js 14",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "Cloudinary",
      "Railway",
      "Vercel",
    ],
    githubUrl: "https://github.com/mohammad-oliullah/bhalobasha",
    liveUrl: "https://bhalobasha-plum.vercel.app/",
    featured: true,
    problemsSolved: [
      "Bachelors wasting hours traveling to flats that would always reject them — solved by making tenant policy (Bachelor/Family/Student/Any) a required, filterable field on every listing.",
      "Owners still relying on hand-written paper ads and word-of-mouth — solved with a 3-step listing flow completable in under 3 minutes from any phone browser.",
      "Brokers adding cost and opacity between owners and renters — solved with direct contact via phone reveal and pre-filled WhatsApp deep-link after login.",
      "High-demand listings attracting 10+ unstructured WhatsApp messages — solved with a competitive bidding system where owners accept one bid and all others are auto-rejected.",
      "Stale listings breaking trust on classifieds platforms — solved with 30-day auto-expiry and one-tap renewal.",
    ],
    architecture: [
      "NestJS REST API (/api/v1) deployed on Railway with modular architecture — AuthModule, ListingsModule, BidsModule, FavoritesModule, LocationsModule, MediaModule.",
      "PostgreSQL database managed via Prisma with a full Bangladesh location hierarchy (Division → District → Thana → Area) seeded from custom JSON files — no external package dependency.",
      "Next.js 14 App Router frontend on Vercel with server components for SEO-critical listing pages and client components for interactive features.",
      "Auth via phone/email OTP with JWT stored in httpOnly cookies — middleware protects dashboard routes server-side before render, SessionProvider restores Zustand state client-side.",
      "Cloudinary for listing and profile photo storage with CDN delivery and auto-compression.",
    ],
    keyFeatures: [
      "Tenant policy filtering (Bachelor/Family/Student/Any) as a required enum — shown on every listing card, filterable from search.",
      "Competitive bidding system — owners set minimum bid and deadline; accepting one bid auto-rejects all others and marks the listing as filled in a single DB transaction.",
      "10-second undo on bid withdrawal with reactivate support.",
      "3-step guided listing creation with drag-and-drop photo upload (up to 8 photos) and map-based property pin using OpenStreetMap + Leaflet.",
      "Save / favorite listings with optimistic UI — heart icon on cards, saved listings dashboard page.",
      "Open Graph metadata per listing for rich WhatsApp and LinkedIn sharing previews.",
      "Demo login for recruiters — one-click access as Seeker, Owner, or Admin without OTP.",
      "Role-based dashboards: owners manage listings, bids, and photos; seekers track bids and saved listings; admins have full platform access.",
      "Bangladesh location hierarchy seeded from own JSON data files across 8 divisions, 64 districts, and major thanas and areas.",
    ],
  },
] satisfies readonly Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
