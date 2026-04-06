import StaycayHeader from "@/components/staycay/StaycayHeader";
import StaycayFooter from "@/components/staycay/StaycayFooter";
import WhatsAppButton from "@/components/staycay/WhatsAppButton";
import Hero from "@/components/staycay/home/Hero";
import About from "@/components/staycay/home/About";
import Tiers from "@/components/staycay/home/Tiers";
import Services from "@/components/staycay/home/Services";
import Process from "@/components/staycay/home/Process";
import Revenue from "@/components/staycay/home/Revenue";
import Vision from "@/components/staycay/home/Vision";
import Testimonials from "@/components/staycay/home/Testimonials";
import CtaBanner from "@/components/staycay/home/CtaBanner";

export const metadata = {
  title: "Staycay — Professional Property Management & Stay Operations",
  description:
    "Combining hotel-level standards with residential comfort to unlock your property's full potential. Partner with Staycay today.",
  openGraph: {
    title: "Staycay — Professional Property Management & Stay Operations",
    description:
      "Combining hotel-level standards with residential comfort to unlock your property's full potential.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="theme-staycay">
      <StaycayHeader />
      <main id="top">
        <Hero />
        <About />
        <Tiers />
        <Process />
        <Services />
        <Revenue />
        <Vision />
        <Testimonials />
        <CtaBanner />
      </main>
      <StaycayFooter />
      <WhatsAppButton />
    </div>
  );
}
