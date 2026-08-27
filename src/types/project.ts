export interface Project {
  name: string;
  slug: string;
  category: string;
  status: string;
  year?: string;
  shortDescription: string;
  longDescription: string;
  technologies: readonly string[];
  githubUrl?: string;
  liveUrl?: string;
  npmUrl?: string;
  featured: boolean;
  problemsSolved: readonly string[];
  architecture: readonly string[];
  keyFeatures: readonly string[];
}
