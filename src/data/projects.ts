export const projects = [
  {
    name: "Bangladesh Geo",
    slug: "bd-geo",
    type: "Open Source",
    description:
      "A JavaScript and TypeScript package providing structured geographical data for Bangladesh.",
    technologies: ["TypeScript", "Node.js", "npm"],
    status: "Published",
  },

  {
    name: "Home / Office Renting",
    slug: "home-office-renting",
    type: "Web Application",
    description:
      "A property listing and rental platform for homes and offices.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "Railway",
      "Vercel",
    ],
    status: "In Development",
  },
] as const;
