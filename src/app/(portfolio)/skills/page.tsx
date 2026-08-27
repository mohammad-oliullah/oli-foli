import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Engineering skills of Md. Oliullah Sarder, grouped by how they are used in production — not percentage bars.",
};

export default function SkillsPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        path="/ skills"
        title="Skills"
        description="Grouped by engineering job, not by badge wall. Related columns point at companies or products on this site. No proficiency percentages."
      />

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-6 border-b pb-8 last:border-b-0"
          >
            <h2 className="text-lg font-semibold tracking-tight">
              {category.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
              {category.summary}
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead>
                  <tr className="border-b font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <th className="py-2 pr-4 font-medium">Technology</th>
                    <th className="py-2 pr-4 font-medium">Used for</th>
                    <th className="py-2 font-medium">Related</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item) => (
                    <tr key={item.name} className="border-b last:border-b-0">
                      <td className="py-3 pr-4 align-top font-medium">
                        {item.name}
                      </td>
                      <td className="py-3 pr-4 align-top text-muted-foreground">
                        {item.usedFor}
                      </td>
                      <td className="py-3 align-top font-mono text-xs text-muted-foreground">
                        {item.related.length > 0
                          ? item.related.join(" · ")
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
