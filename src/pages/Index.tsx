import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import ShortForm from "@/components/ShortForm";
import LongForm from "@/components/LongForm";
import PodcastTrailers from "@/components/PodcastTrailers";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FaqBot from "@/components/FaqBot";
import b1 from "@/assets/b-1.png";

const Index = () => {
  const textureStyle = {
    backgroundImage: `url(${b1})`,
    backgroundSize: '100% auto',
    backgroundPosition: 'top center',
    backgroundRepeat: 'repeat-y'
  };

  return (
    <main className="min-h-screen bg-black overflow-x-hidden relative">
      <Navigation />

      <div className="relative z-10 font-golos">
        {/* 1. Hero - b-1 */}
        <div id="hero" className="overflow-x-hidden" style={textureStyle}>
          <Hero />
        </div>

        {/* 2. Agency Capabilities - Black */}
        <div id="about" className="overflow-x-hidden bg-black">
          <About />
        </div>

        {/* 3. System Architecture - Black (Conceptually linked to About) */}
        <div id="how-it-works" className="overflow-x-hidden bg-black border-t border-white/5">
          <HowItWorks />
        </div>

        {/* 4. Short Form - b-1 */}
        <div id="short-form" className="overflow-x-hidden" style={textureStyle}>
          <ShortForm />
        </div>

        {/* 5. Long Form - Black */}
        <div id="long-form" className="overflow-x-hidden bg-black">
          <LongForm />
        </div>

        {/* 6. Podcast Trailers - b-1 */}
        <div id="podcast-trailers" className="overflow-x-hidden" style={textureStyle}>
          <PodcastTrailers />
        </div>

        {/* 7. Case Studies - Black */}
        <div id="case-studies" className="bg-black">
          <CaseStudies />
        </div>

        {/* 8. Testimonials - b-1 */}
        <div id="testimonials" className="overflow-x-hidden" style={textureStyle}>
          <Testimonials />
        </div>

        {/* 9. Process - Black */}
        <div id="process" className="overflow-x-hidden bg-black">
          <Process />
        </div>

        {/* 10. Contact - b-1 */}
        <div id="contact" className="overflow-x-hidden" style={textureStyle}>
          <Contact />
        </div>

        <Footer />
        <FaqBot />
      </div>
    </main>
  );
};

export default Index;
