import type { Project } from "@/types/project";

export const projects = [
  {
    name: "BD Geo",
    slug: "bd-geo",
    category: "Open Source",
    status: "Published",
    year: "TODO",
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
    year: "TODO",
    shortDescription:
      "A property listing platform for discovering, publishing, and managing homes and offices.",
    longDescription:
      "Bhalobasha is a home and office renting product: a property listing platform for discovering, publishing, and managing homes and offices. A live preview is available; deeper architecture notes are still being documented.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "TypeScript"],
    githubUrl: "https://github.com/mohammad-oliullah/bhalobasha",
    liveUrl: "https://bhalobasha-plum.vercel.app/",
    featured: true,
    problemsSolved: [
      "Publishing and browsing home and office listings in one product surface.",
      "TODO: document additional product problems once the case study is complete.",
    ],
    architecture: [
      "Next.js frontend with a Node.js backend and PostgreSQL via Prisma.",
      "TODO: document service boundaries, auth, and deployment in more detail.",
    ],
    keyFeatures: [
      "Property listing and discovery for homes and offices.",
      "TODO: list remaining product features.",
    ],
  },
  {
    name: "English Learner",
    slug: "english-learner",
    category: "Product",
    status: "TODO",
    year: "TODO",
    shortDescription:
      "Product listed in the site header. Case-study details are not documented yet.",
    longDescription:
      "English Learner is a product entry on this portfolio. Public repository, live URL, architecture, and feature lists have not been filled in yet.",
    technologies: [],
    featured: false,
    problemsSolved: ["TODO: document the problem this product addresses."],
    architecture: ["TODO: document architecture."],
    keyFeatures: ["TODO: document key features."],
  },
] satisfies readonly Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
