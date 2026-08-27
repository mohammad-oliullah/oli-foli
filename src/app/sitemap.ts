import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/experience",
    "/projects",
    "/skills",
    "/engineering",
    "/career",
    "/github",
    "/resume",
    "/blogs",
    "/contact",
  ];

  return [
    ...routes.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
