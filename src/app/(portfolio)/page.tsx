import { ExperiencePreview } from "@/components/home/experience-preview";
import { Hero } from "@/components/home/hero";
import { Capabilities } from "@/components/home/capabilities";
import { FeaturedWork } from "@/components/home/featured-work";

export default function Home() {
  return (
    <section>
      <div className="space-y-10">
        <Hero />

        <ExperiencePreview />

        <Capabilities />

        <FeaturedWork />
      </div>
    </section>
  );
}
