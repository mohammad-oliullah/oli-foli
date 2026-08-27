import { Capabilities } from "@/components/home/capabilities";
import { ExperiencePreview } from "@/components/home/experience-preview";
import { FeaturedWork } from "@/components/home/featured-work";
import {
  ContactCta,
  CurrentFocus,
  OpenSourcePreview,
} from "@/components/home/focus-and-contact";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <ExperiencePreview />
      <Capabilities />
      <FeaturedWork />
      <OpenSourcePreview />
      <CurrentFocus />
      <ContactCta />
    </div>
  );
}
