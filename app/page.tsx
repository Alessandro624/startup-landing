import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { Footer } from "@/components/layout/Footer";

const ProblemSection = dynamic(
  () =>
    import("@/components/sections/ProblemSection").then(
      (mod) => mod.ProblemSection
    ),
  { ssr: false }
);
const SolutionSection = dynamic(
  () =>
    import("@/components/sections/SolutionSection").then(
      (mod) => mod.SolutionSection
    ),
  { ssr: false }
);
const FeaturesSection = dynamic(
  () =>
    import("@/components/sections/FeaturesSection").then(
      (mod) => mod.FeaturesSection
    ),
  { ssr: false }
);
const SocialProofSection = dynamic(
  () =>
    import("@/components/sections/SocialProofSection").then(
      (mod) => mod.SocialProofSection
    ),
  { ssr: false }
);
const TeamSection = dynamic(
  () =>
    import("@/components/sections/TeamSection").then(
      (mod) => mod.TeamSection
    ),
  { ssr: false }
);
const CTASection = dynamic(
  () => import("@/components/sections/CTASection").then((mod) => mod.CTASection),
  { ssr: false }
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <SocialProofSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
