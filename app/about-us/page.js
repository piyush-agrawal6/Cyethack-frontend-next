import CommitmentSection from "@/components/about/commitment-section";
import HeroSection from "@/components/about/hero-section";
import HiringSection from "@/components/about/hiring-section";
import TeamIntroSection from "@/components/about/team-intro-section";
import TeamSection from "@/components/about/team-section";
import ValuesSection from "@/components/about/values-section";

export const metadata = {
  title: "About Us",
  description: "Cyethack Solutions is a trailblazing cybersecurity firm committed to safeguarding digital assets. Learn about our mission, values, and team.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <TeamIntroSection />
      <CommitmentSection />
      <div id="values">
        <ValuesSection />
      </div>
      <TeamSection />
      <HiringSection />
    </main>
  )
}
