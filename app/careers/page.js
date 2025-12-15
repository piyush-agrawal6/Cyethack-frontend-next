import HeaderBanner from "@/components/careers/header-banner"
import MeetOurTeam from "@/components/careers/meet-our-team"
import CompanyPartners from "@/components/careers/company-partners"
import CareerPositions from "@/components/careers/career-positions"
import ClientTestimonial from "@/components/careers/client-testimonial"

export const metadata = {
  title: "Careers",
  description: "Join the Cyethack team. Explore career opportunities and help us build the future of cybersecurity.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Banner Section */}
      <HeaderBanner />

      {/* Job Openings Section */}
      <section id="job-openings" className="py-10">
        <CareerPositions />
      </section>

    </main>
  )
}
