import { capabilities } from "@/data/capabilities";

export function Capabilities() {
  return (
    <section className="border-b pb-10">
      <div className="mb-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Engineering
        </p>

        <h2 className="mt-2 text-xl font-semibold tracking-tight">
          What I Build
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Practical experience across backend systems, full-stack applications,
          databases, real-time systems, infrastructure, and integrations.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => {
          const Icon = capability.icon;

          return (
            <article
              key={capability.title}
              className="group bg-background p-5 transition-colors hover:bg-muted/40"
            >
              <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" />

              <h3 className="mt-4 text-sm font-semibold">{capability.title}</h3>

              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {capability.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {capability.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
