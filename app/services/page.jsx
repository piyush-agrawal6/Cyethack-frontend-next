import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Our Services",
  description: "Explore Cyethack's comprehensive cybersecurity services, including VAPT, Cloud Security, and Compliance Audits.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </main>
  );
}
