import { AppShell } from "@/components/layouts/app-shell";
import { ExperiencePreview } from "@/components/home/experience-preview";
import { Hero } from "@/components/home/hero";
import { Capabilities } from "@/components/home/capabilities";

export default function Home() {
  return (
    <AppShell>
      <div className="space-y-10">
        <Hero />

        <ExperiencePreview />

        <Capabilities />
      </div>
    </AppShell>
  );
}
