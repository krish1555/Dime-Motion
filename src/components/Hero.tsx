import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";
import testimonial1 from "@/assets/1.png";
import testimonial2 from "@/assets/2.jpeg";
import testimonial3 from "@/assets/3.jpeg";
import testimonial4 from "@/assets/4.jpeg";
import testimonial5 from "@/assets/5.jpeg";
import testimonial6 from "@/assets/6.jpeg";

import { smoothScrollTo } from "../utils/smoothScroll";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Image */}


      {/* Overlay - Darkened */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Testimonial Strip - Glass Dark */}
      <div className="absolute bottom-0 left-0 right-0 py-4 sm:py-6 overflow-hidden w-full testimonial-strip z-20">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>

        <div className="w-full overflow-hidden relative">
          {/* Duplicate the track to create a seamless loop without gaps */}
          <div className="flex animate-marquee-seamless" style={{ width: 'max-content', maxWidth: 'none' }}>
            <div className="flex items-center gap-4 sm:gap-8">
              {[
                { image: testimonial1, text: 'Kash Straughn', subText: 'Tiktok: @thekashstraughn 22k' },
                { image: testimonial2, text: 'Nate Leathers', subText: 'IG: @nateleatherss 108k' },
                { image: testimonial3, text: 'Logan Corlette' },
                { image: testimonial4, text: 'Troy Male', subText: 'YT: @ProjectHysteria 5.1M' },
                { image: testimonial5, text: 'Mitch Corlett' },
                { image: testimonial6, text: 'Erick Martinez', subText: 'IG: @conermartz 7k' },
              ].map((t, idx) => (
                <div key={`a-${idx}`} className="flex items-center gap-2 sm:gap-4 bg-black/60 border border-white/10 rounded-md px-2 sm:px-4 py-2 sm:py-3 shadow-[var(--shadow-subtle)] flex-shrink-0 max-w-[280px] sm:max-w-xl">
                  <img src={t.image} alt="Client" className="h-12 w-12 sm:h-20 sm:w-20 rounded-full object-cover" loading="lazy" />
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-base text-white whitespace-normal break-words font-medium">{t.text}</p>
                    {t.subText && (
                      <p className="text-[10px] sm:text-xs text-gray-400 whitespace-normal break-words">{t.subText}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-4 sm:w-8"></div>
            <div className="flex items-center gap-4 sm:gap-8" aria-hidden>
              {[
                { image: testimonial1, text: 'Kash Straughn', subText: 'Tiktok: @thekashstraughn 22k' },
                { image: testimonial2, text: 'Nate Leathers', subText: 'IG: @nateleatherss 108k' },
                { image: testimonial3, text: 'Logan Corlette' },
                { image: testimonial4, text: 'Troy Male', subText: 'YT: @ProjectHysteria 5.1M' },
                { image: testimonial5, text: 'Mitch Corlett' },
                { image: testimonial6, text: 'Erick Martinez', subText: 'IG: @conermartz 7k' },
              ].map((t, idx) => (
                <div key={`b-${idx}`} className="flex items-center gap-2 sm:gap-4 bg-black/60 border border-white/10 rounded-md px-2 sm:px-4 py-2 sm:py-3 shadow-[var(--shadow-subtle)] flex-shrink-0 max-w-[280px] sm:max-w-xl">
                  <img src={t.image} alt="" className="h-12 w-12 sm:h-20 sm:w-20 rounded-full object-cover" loading="lazy" />
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-base text-white whitespace-normal break-words font-medium">{t.text}</p>
                    {t.subText && (
                      <p className="text-[10px] sm:text-xs text-gray-400 whitespace-normal break-words">{t.subText}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 -mt-20">
        <h1 className="font-zangezi text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 sm:mb-6 leading-tight">

          <br />
          <span className="text-white font-zangezi">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[calc(1em-26px)]"> Forging <span className="underline text-gray-400">Content</span> That </span>
            <span className="font-zangezi relative text-white text-3xl sm:text-4xl md:text-5xl lg:text-[calc(1em-26px)]">
              Builds
            </span>
          </span>
          <br className="leading-[0.01]" />
          <span className="text-white font-zangezi">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[calc(1em-19px)]"> Brands and  </span>
            <span className="font-zangezi relative text-white text-3xl sm:text-4xl md:text-5xl lg:text-[calc(1em-19px)]">
              Bank Accounts
              {/* Continuously popping dollar notes - Updated brightness */}
              <DollarSign className="absolute -top-2 -right-6 w-6 h-6 text-green-400 animate-bounce opacity-0" style={{ animation: 'popDollar 2s infinite' }} />
              <DollarSign className="absolute -bottom-1 -right-8 w-7 h-7 text-white animate-bounce opacity-0" style={{ animation: 'popDollar 2s infinite 0.5s' }} />
              <DollarSign className="absolute top-1 -right-12 w-5 h-5 text-green-400 animate-bounce opacity-0" style={{ animation: 'popDollar 2s infinite 1s' }} />
              <DollarSign className="absolute -top-4 -right-4 w-6 h-6 text-white animate-bounce opacity-0" style={{ animation: 'popDollar 2s infinite 1.5s' }} />
            </span>
          </span>
        </h1>

        <p className="text-gray-200 text-xl sm:text-2xl md:text-3xl lg:text-2.5xl font-medium mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
          Where creativity meets strategy — turning content into wealth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-12 sm:mt-16">
          <div className="relative group">
            {/* Moving Light Streak Container */}
            <div className="absolute inset-[-1px] rounded-full overflow-hidden">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_95%,#fff_100%)]" style={{ animation: 'spin 4s ease-in-out infinite' }} />
            </div>

            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="relative px-8 sm:px-12 py-4 sm:py-6 text-xl sm:text-2xl font-light tracking-wide bg-black text-white/90 rounded-full border border-white/10 hover:bg-gray-900 transition-all duration-300 scale-100 sm:scale-105"
            >
              Book a Discovery Call
            </Button>
          </div>
        </div>


      </div>

    </section>
  );
};

export default Hero;
