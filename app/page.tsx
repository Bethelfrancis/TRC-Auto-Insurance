import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CarrierLogos from "@/components/sections/CarrierLogos";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import CTACard from "@/components/sections/CTACard";
import Footer from "@/components/layout/Footer";
import FadeInSection from "@/components/ui/FadeInSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FadeInSection delay={0}>
        <CarrierLogos />
      </FadeInSection>
      <FadeInSection delay={0.05}>
        <WhyChooseUs />
      </FadeInSection>
      <FadeInSection delay={0.05}>
        <HowItWorks />
      </FadeInSection>
      <FadeInSection delay={0.05}>
        <Reviews />
      </FadeInSection>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeInSection delay={0}>
            <FAQ />
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <CTACard />
          </FadeInSection>
        </div>
      </div>
      <Footer />
    </>
  );
}
