import { Button } from "@/components/ui/button";
import { DollarSign, MousePointer2 } from "lucide-react";
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

  // Cursor Component
  const FloatingCursor = ({ label, color, x, y, delay }: { label: string, color: string, x: string, y: string, delay: string }) => (
    <div
      className={`absolute ${x} ${y} z-20 pointer-events-none hidden md:block animate-float`}
      style={{ animationDelay: delay }}
    >
      <div className="relative">
        <MousePointer2 className={`w-6 h-6 ${color} fill-current transform -rotate-12`} />
        <div className={`absolute top-full left-4 px-3 py-1.5 rounded-full ${color.replace('text-', 'bg-')} text-white text-[10px] font-bold whitespace-nowrap shadow-lg`}>
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Image */}


      {/* Overlay - Darkened */}


      {/* Testimonial Strip - Glass Dark */}
      <div className="absolute bottom-12 sm:bottom-0 left-0 right-0 py-4 sm:py-6 overflow-hidden w-full testimonial-strip z-20">
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

        {/* Floating Cursors */}
        <FloatingCursor label="Content Creators" color="text-green-500" x="left-[2%] lg:left-[0%]" y="top-[70%] lg:top-[65%]" delay="0s" />
        <FloatingCursor label="Podcast Hosts" color="text-purple-500" x="right-[10%] lg:right-[5%]" y="top-[20%] lg:top-[15%]" delay="2s" />
        <FloatingCursor label="Entrepreneurs" color="text-orange-500" x="right-[15%] lg:right-[10%]" y="bottom-[30%] lg:bottom-[20%]" delay="4s" />

        {/* Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 text-[#FFD700] text-xs font-bold tracking-widest uppercase mb-8 mt-12 md:mt-24 backdrop-blur-md shadow-[0_0_15px_rgba(255,215,0,0.1)]">
          Scale Organically
        </div>

        <h1 className="font-zangezi text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 sm:mb-6 leading-tight">

          <br />
          <span className="text-white font-zangezi">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[calc(1em-26px)]"> Forging <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#990134,#BC3345,#FEE17D)]">Content</span> That </span>
            <span className="font-zangezi relative text-white text-3xl sm:text-4xl md:text-5xl lg:text-[calc(1em-26px)]">
              Builds
            </span>
          </span>
          <br className="leading-[0.01]" />
          <span className="text-white font-zangezi">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[calc(1em-19px)]"> Brands and  </span>
            <span className="font-zangezi relative text-white text-3xl sm:text-4xl md:text-5xl lg:text-[calc(1em-19px)]">
              Bank Accounts
              {/* Reduced noise: Only 2 dollar signs */}
              <DollarSign className="absolute -top-3 -right-6 w-6 h-6 text-green-400 animate-bounce opacity-0" style={{ animation: 'popDollar 3s infinite' }} />
              <DollarSign className="absolute -bottom-2 -right-10 w-5 h-5 text-white animate-bounce opacity-0" style={{ animation: 'popDollar 3s infinite 1.5s' }} />
            </span>
          </span>
        </h1>

        <p className="text-gray-200 text-sm sm:text-lg md:text-3xl lg:text-2.5xl font-medium mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
          Where creativity meets strategy — turning content into wealth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-12 sm:mt-16 md:mt-8">
          <div className="relative group">
            {/* Moving Light Streak Container */}
            <div className="absolute inset-[-1px] rounded-full overflow-hidden">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_95%,#fff_100%)]" style={{ animation: 'spin 4s ease-in-out infinite' }} />
            </div>

            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="relative px-6 sm:px-12 py-3 sm:py-6 text-base sm:text-2xl font-bold tracking-wide bg-[#FFDA7B] text-black rounded-full border border-[#FFDA7B] hover:bg-[#FBC02D] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,218,123,0.3)]"
            >
              Book a Discovery Call
            </Button>
          </div>
        </div>


      </div>

    </section >
  );
};

export default Hero;
