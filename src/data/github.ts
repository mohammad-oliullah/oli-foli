import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import type { GitHubRepoHighlight } from "@/types/github";

export const githubProfile = {
  username: "mohammad-oliullah",
  url: profile.links.github,
  note: "Repository statistics are not loaded from the GitHub API on this page. Numbers would be easy to fake or go stale; use GitHub itself for stars, commits, and activity.",
};

export const githubHighlights: readonly GitHubRepoHighlight[] = [
  {
    name: "bd-geo",
    description:
      "Structured Bangladesh geographical data as a JavaScript/TypeScript npm package.",
    url: "https://github.com/mohammad-oliullah/bd-geo",
    kind: "open-source",
  },
  {
    name: "bhalobasha",
    description:
      "Home / office renting product — listings and management (in development).",
    url: "https://github.com/mohammad-oliullah/bhalobasha",
    kind: "project",
  },
];

export const githubExperimentNote =
  "OS, CLI, networking, and other experiment repositories will be listed here when you add URLs. Until then this is a placeholder so the page can grow without invented stars or commit graphs.";

export function githubReposFromProjects() {
  return projects.filter((project) => Boolean(project.githubUrl));
}
