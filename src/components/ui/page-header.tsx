import type { ReactNode } from "react";

interface PageHeaderProps {
  path: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}

export function PageHeader({
  path,
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <section className="border-b pb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-sm text-muted-foreground">{path}</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 block max-w-2xl text-sm leading-7 text-muted-foreground">
            {description}
          </p>
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
    </section>
  );
}
