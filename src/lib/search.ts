import { blogs } from "@/data/blogs";
import { career } from "@/data/career";
import { engineeringTopics } from "@/data/engineering";
import { experience } from "@/data/experience";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import type { SearchItem } from "@/types/search";

const pages: SearchItem[] = [
  {
    id: "page-overview",
    title: "Overview",
    description: "Identity, capabilities, experience snapshot, featured work.",
    href: "/",
    group: "Pages",
    keywords: ["home", "profile", "oli", "dashboard"],
  },
  {
    id: "page-experience",
    title: "Experience",
    description: "Companies, roles, and responsibilities.",
    href: "/experience",
    group: "Pages",
    keywords: ["work", "jobs", "career history"],
  },
  {
    id: "page-projects",
    title: "Projects",
    description: "Engineering case studies and products.",
    href: "/projects",
    group: "Pages",
    keywords: ["case studies", "build"],
  },
  {
    id: "page-skills",
    title: "Skills",
    description: "Technologies grouped by engineering category.",
    href: "/skills",
    group: "Pages",
    keywords: ["stack", "tech"],
  },
  {
    id: "page-engineering",
    title: "Engineering",
    description: "How backend, data, auth, deploy, and security are approached.",
    href: "/engineering",
    group: "Pages",
    keywords: ["architecture", "system design", "linux"],
  },
  {
    id: "page-career",
    title: "Career",
    description: "Direction, target roles, and interests.",
    href: "/career",
    group: "Pages",
    keywords: ["roles", "hiring", "direction"],
  },
  {
    id: "page-github",
    title: "GitHub",
    description: "Profile and notable repositories.",
    href: "/github",
    group: "Pages",
    keywords: ["oss", "repos"],
  },
  {
    id: "page-resume",
    title: "Resume",
    description: "Recruiter summary, contact, and resume file.",
    href: "/resume",
    group: "Pages",
    keywords: ["cv", "download"],
  },
  {
    id: "page-blogs",
    title: "Blogs",
    description: "Writing index.",
    href: "/blogs",
    group: "Pages",
    keywords: ["articles", "posts", "writing"],
  },
  {
    id: "page-contact",
    title: "Contact",
    description: "Email and professional links.",
    href: "/contact",
    group: "Pages",
    keywords: ["email", "linkedin", "hire"],
  },
];

function tokenize(query: string) {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function haystack(item: SearchItem) {
  return [item.title, item.description, item.group, ...item.keywords]
    .join(" ")
    .toLowerCase();
}

export function getSearchIndex(): SearchItem[] {
  const projectItems: SearchItem[] = projects.map((project) => ({
    id: `project-${project.slug}`,
    title: project.name,
    description: project.shortDescription,
    href: `/projects/${project.slug}`,
    group: "Projects",
    keywords: [project.category, project.status, ...project.technologies],
  }));

  const experienceItems: SearchItem[] = experience.map((job) => ({
    id: `exp-${job.company}-${job.role}`,
    title: `${job.role} · ${job.company}`,
    description: job.focus,
    href: "/experience",
    group: "Experience",
    keywords: [...job.technologies, job.location, job.employmentType],
  }));

  const skillItems: SearchItem[] = skillCategories.flatMap((category) =>
    category.items.map((item) => ({
      id: `skill-${category.id}-${item.name}`,
      title: item.name,
      description: `${category.title}: ${item.usedFor}`,
      href: "/skills",
      group: "Skills" as const,
      keywords: [category.title, ...item.related],
    })),
  );

  const engineeringItems: SearchItem[] = engineeringTopics.map((topic) => ({
    id: `eng-${topic.id}`,
    title: topic.title,
    description: topic.summary,
    href: `/engineering#${topic.id}`,
    group: "Engineering",
    keywords: [topic.id],
  }));

  const productItems: SearchItem[] = products.map((product) => ({
    id: `product-${product.slug}`,
    title: product.name,
    description: product.description,
    href: product.href,
    group: "Products",
    keywords: [product.slug],
    external: product.external,
  }));

  const blogItems: SearchItem[] = blogs.map((post) => ({
    id: `blog-${post.url}`,
    title: post.title,
    description: post.excerpt,
    href: post.url,
    group: "Blogs",
    keywords: [...post.tags, post.category],
    external: post.url.startsWith("http"),
  }));

  const careerItem: SearchItem = {
    id: "career-direction",
    title: career.direction,
    description: career.summary,
    href: "/career",
    group: "Pages",
    keywords: [...career.targetRoles, ...career.preferredStack],
  };

  return [
    ...pages,
    careerItem,
    ...projectItems,
    ...experienceItems,
    ...skillItems,
    ...engineeringItems,
    ...productItems,
    ...blogItems,
  ];
}

export function searchPortfolio(query: string, limit = 20): SearchItem[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return getSearchIndex().slice(0, 12);
  }

  const ranked = getSearchIndex()
    .map((item) => {
      const text = haystack(item);
      const score = tokens.reduce((sum, token) => {
        if (item.title.toLowerCase().includes(token)) return sum + 3;
        if (text.includes(token)) return sum + 1;
        return sum;
      }, 0);
      return { item, score };
    })
    .filter((entry) => entry.score >= tokens.length)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.item);

  return ranked;
}
