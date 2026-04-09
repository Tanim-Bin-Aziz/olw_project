import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CopyrightBar from "@/components/layout/CopyrightBar";
import Hero from "@/components/sections/Hero";
import TrustedBrands from "../components/sections/TrustedBrands";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Integrations from "@/components/sections/Integrations";
import GettingStarted from "@/components/sections/GettingStarted";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <TrustedBrands />
        <Services />
        <Pricing />
        <Integrations />
        <GettingStarted />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
      <CopyrightBar />
    </div>
  );
};

export default HomePage;
