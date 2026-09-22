import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { getPublishedPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  const posts = await getPublishedPosts();

  return [
    ...routes.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blogs/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.date ?? Date.now()),
    })),
  ];
}
