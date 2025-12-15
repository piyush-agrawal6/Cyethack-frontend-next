import HomeBanner from "@/components/home/Banner";
import Partners from "@/components/home/Partners";
import CyberSecurityLanding from "@/components/home/Protection";
import CyberSecuritySolutions from "@/components/home/CyberSecuritySolutions";
import UnderstandingBanner from "@/components/home/UnderstandingBanner";
import Results from "@/components/home/Results";
import CustomerTestimonials from "@/components/home/CustomerTestimonials";
import FAQs from "@/components/home/FAQs";

export default function Home() {
  return (
    <div className="bg-white">
      <HomeBanner />
      <CyberSecuritySolutions />
      <CyberSecurityLanding />
      <Partners />
      <UnderstandingBanner />
      <Results />
      <CustomerTestimonials />
      <FAQs />
    </div>
  );
}
