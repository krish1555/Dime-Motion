import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Reels from "@/components/Reels";
import CaseStudies from "@/components/CaseStudies";
// import Services from "@/components/Services"; // TEMPORARILY DISABLED - Services page hidden from live website

import Process from "@/components/Process";
// import Portfolio from "@/components/Portfolio"; // TEMPORARILY DISABLED - Portfolio page hidden from live website
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FaqBot from "@/components/FaqBot";

import heroBackground from "@/assets/hero-background.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Shared Background Wrapper for Hero and About */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackground}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Optional: Unified overlay if needed, or let components handle their own */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10">
          <div id="hero" className="overflow-x-hidden">
            <Hero />
          </div>
          <div id="about" className="overflow-x-hidden">
            <About />
          </div>
        </div>
      </div>
      <div id="reels" className="overflow-x-hidden">
        <Reels />
      </div>
      <div id="case-studies" className="overflow-x-hidden">
        <CaseStudies />
      </div>
      {/* <div id="services">
        <Services />
      </div> */}

      <div id="process" className="overflow-x-hidden">
        <Process />
      </div>
      {/* <div id="portfolio">
        <Portfolio />
      </div> */}
      <div id="testimonials" className="overflow-x-hidden">
        <Testimonials />
      </div>
      <div id="contact" className="overflow-x-hidden">
        <Contact />
      </div>
      <Footer />
      <FaqBot />
    </main>
  );
};

export default Index;
