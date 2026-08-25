export const projects = [
  {
    name: "BD Geo",
    slug: "bd-geo",
    type: "Open Source",
    status: "Published",

    description:
      "A JavaScript and TypeScript package providing structured geographical data for Bangladesh, including divisions, districts, upazilas, unions, areas, and villages.",

    technologies: ["TypeScript", "JavaScript", "Node.js", "npm"],

    links: {
      github: "https://github.com/mohammad-oliullah/bd-geo",
      website: "https://www.npmjs.com/package/@olism/bd-geo",
    },

    featured: true,
  },

  {
    name: "Home / Office Renting",
    slug: "home-office-renting",
    type: "Full-Stack Application",
    status: "In Development",

    description:
      "A property listing platform for discovering, publishing, and managing homes and offices with a modern full-stack architecture.",

    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "TypeScript"],

    links: {
      github: "https://github.com/mohammad-oliullah/bhalobasha",
      website: "https://bhalobasha-plum.vercel.app/",
    },

    featured: true,
  },
] as const;
