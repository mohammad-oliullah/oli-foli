export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: readonly string[];
  url: string;
  readingTime: string;
}
