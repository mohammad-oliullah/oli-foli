import type { Product } from "@/types/product";

export const products = [
  {
    name: "Bhalobasha",
    slug: "bhalobasha",
    href: "https://bhalobasha-plum.vercel.app",
    external: true,
    description:
      "Home and office renting — property listing, publishing, and management.",
  },
  {
    name: "English Learner",
    slug: "english-learner",
    href: "/projects/english-learner",
    external: false,
    description:
      "Product placeholder. Repository, live URL, and case-study details are TODO.",
  },
  {
    name: "BD Geo",
    slug: "bd-geo",
    href: "https://www.npmjs.com/package/@olism/bd-geo",
    external: true,
    description:
      "npm package for structured Bangladesh geographical data.",
  },
] satisfies readonly Product[];
