export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: readonly string[];
  url: string;
  readingTime: string;
  published: boolean;
}

export interface BlogPostInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  readingTime: string;
  published: boolean;
}
