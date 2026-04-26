import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CarrierLogos from "@/components/sections/CarrierLogos";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import CTACard from "@/components/sections/CTACard";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarrierLogos />
      <WhyChooseUs />
      <HowItWorks />
      <Reviews />
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FAQ />
          <CTACard />
        </div>
      </div>
      <Footer />
    </>
  );
}
