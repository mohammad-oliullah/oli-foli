export interface SkillItem {
  name: string;
  usedFor: string;
  related: readonly string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  summary: string;
  items: readonly SkillItem[];
}
