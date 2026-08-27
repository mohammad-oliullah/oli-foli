import type { BlogPostInput } from "@/types/blog";

export interface CmsPost extends BlogPostInput {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
