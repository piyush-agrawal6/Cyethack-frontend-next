import PricingHero from "@/components/pricing/PricingHero";
import PricingSection from "@/components/pricing/PricingSection";

export const metadata = {
    title: "Pricing",
    description: "Cyethack drives security and transformation with VAPT services and our threat intelligence product, VMDR. Transparent pricing for comprehensive security.",
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white">
            <PricingHero />
            <PricingSection />
        </main>
    );
}
