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

import heroBackground from "@/assets/b-1.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden relative">
      {/* 
        GLOBAL BACKGROUND: 
        Fixed position 'b-1' texture that spans the entire viewport.
        High quality, seamless appearance as user scrolls.
      */}
      <div
        className="fixed inset-0 z-0 opacity-100 brightness-110"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'auto', // Use original image size (no zoom)
          backgroundRepeat: 'repeat', // Tile horizontally and vertically
          backgroundPosition: 'top left'
        }}
      >
        {/* Optional: subtle overlay to ensure text contrast throughout */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <Navigation />

      {/* Content Wrapper - Relative z-10 to sit above the fixed background */}
      <div className="relative z-10">
        <div id="hero" className="overflow-x-hidden">
          <Hero />
        </div>
        <div id="about" className="overflow-x-hidden">
          <About />
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
      </div>
    </main>
  );
};

export default Index;
