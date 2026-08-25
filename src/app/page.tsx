import { AppShell } from "@/components/layouts/app-shell";

export default function Home() {
  return (
    <AppShell>
      <section>
        <p className="font-mono text-sm text-muted-foreground">/ overview</p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Md. Oliullah Sarder
        </h1>

        <p className="mt-2 text-lg text-muted-foreground">
          Backend / Full-Stack Engineer
        </p>

        <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
          Building backend systems and full-stack applications with Node.js,
          NestJS, TypeScript, React, Next.js, databases, and modern
          infrastructure.
        </p>
      </section>
    </AppShell>
  );
}
