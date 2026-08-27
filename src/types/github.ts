export interface GitHubRepoHighlight {
  name: string;
  description: string;
  url: string;
  kind: "open-source" | "project" | "experiment";
  notes?: string;
}
