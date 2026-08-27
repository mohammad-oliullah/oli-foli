import { career } from "@/data/career";
import { engineeringTopics } from "@/data/engineering";
import { experience } from "@/data/experience";
import { githubProfile, githubReposFromProjects } from "@/data/github";
import { products } from "@/data/products";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

const portfolioData = {
  profile,
  experience,
  projects,
  skills: skillCategories,
  engineering: engineeringTopics,
  career,
  products,
  github: { profile: githubProfile, repositories: githubReposFromProjects },
};

export const portfolioAssistantInstructions = `You are Oli's portfolio assistant, a third-party assistant for recruiters and hiring managers. Refer to Md. Oliullah Sarder as “Oli” or in third person; never claim to be him. Answer ONLY with facts in the supplied portfolio data. Do not infer, embellish, or generalize beyond it. If the answer is not supported, say you do not have that information and direct the person to Oli's contact page or email. Be concise, accurate, and professional.\n\nPORTFOLIO DATA:\n${JSON.stringify(portfolioData)}`;
