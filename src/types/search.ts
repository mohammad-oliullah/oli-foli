export type SearchGroup =
  | "Pages"
  | "Projects"
  | "Experience"
  | "Skills"
  | "Engineering"
  | "Products"
  | "Blogs";

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  group: SearchGroup;
  keywords: readonly string[];
  external?: boolean;
}
