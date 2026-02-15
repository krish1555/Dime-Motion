import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateRaw = useTransform(scrollYProgress, [0, 1], [0, 68]);
  const rotate = useSpring(rotateRaw, { stiffness: 50, damping: 30, restDelta: 0.001 });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const platformGroups = [
    {
      label: "Short Form Video",
      items: ["01 / YouTube Shorts", "02 / Instagram Reels", "03 / TikTok"],
      align: "left"
    },
    {
      label: "Professional Network",
      items: ["04 / LinkedIn Posts", "05 / Carousels"],
      align: "right"
    },
    {
      label: "Long Form",
      items: ["06 / YouTube Strategy", "07 / Podcast Clips"],
      align: "left"
    }
  ];

  return (
    <section ref={containerRef} id="how-it-works" className="relative flex items-center bg-transparent overflow-hidden pt-16 pb-8 md:pt-20 md:pb-10">
      {/* Abstract Background Visual - The "Flywheel" */}
      <div className="absolute top-1/2 right-[-5%] md:right-[2%] -translate-y-1/2 w-[100%] md:w-[45%] aspect-square pointer-events-none z-0">
        <motion.div
          style={isMobile ? { transformOrigin: 'center center' } : { rotate }}
          animate={isMobile ? { rotate: [0, 360] } : undefined}
          transition={isMobile ? { duration: 20, repeat: Infinity, ease: "linear" } : undefined}
          className="w-full h-full relative will-change-transform"
        >
          {/* Main Ring Image */}
          <img
            src="/rings.png"
            alt=""
            className="w-full h-full object-contain opacity-20 mix-blend-screen"
            style={{
              filter: "none"
            }}
          />
          {/* Subtle Glow behind */}
          {!isMobile && <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px]" />}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        {/* Left Column - Typography & Content */}
        <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
          >
            <span className="block text-[#FFD700] text-xs font-bold tracking-[0.4em] uppercase mb-8 opacity-80">
              System Architecture
            </span>
            <h2 className="font-zangezi text-3xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
              High Level <span
                className={isMobile ? "text-white/90" : "bg-clip-text text-transparent bg-[linear-gradient(90deg,#A8A8A8,#E8E8E8,#C0C0C0,#E8E8E8,#A8A8A8)]"}
                style={!isMobile ? {
                  textShadow: '0 0 40px rgba(232, 232, 232, 0.3)',
                  WebkitTextFillColor: 'transparent',
                } : {}}
              >Repurposing</span>
            </h2>
            <div className="h-[1px] w-24 bg-white/20 my-8" />
            <p className="text-lg md:text-2xl text-gray-400 font-light max-w-xl leading-relaxed">
              We build bulletproof content flywheels for personal brands to grow on multiple platforms with high volume of content.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="relative group inline-block">
              {/* Animated border glow */}
              <div className="absolute inset-[-1px] rounded-full overflow-hidden">
                <div
                  className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_95%,#fff_100%)]"
                  style={{ animation: "spin 4s ease-in-out infinite" }}
                />
              </div>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="relative px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold tracking-wide bg-[#FFDA7B] text-black rounded-full border border-[#FFDA7B]/50 hover:bg-[#FBC02D] hover:scale-[1.03] transition-all duration-300 shadow-[0_0_30px_rgba(255,218,123,0.3)] flex items-center gap-2"
              >
                Start the Engine
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column / Overlay - Editorial List */}
        <div className="md:col-span-5 lg:col-span-6 relative h-[600px] flex flex-col justify-center space-y-12 md:space-y-24 pointer-events-none">
          {platformGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true }}
              className={`flex flex-col ${group.align === 'right' ? 'items-end text-right md:pr-12' : 'items-start text-left md:pl-12'}`}
            >
              <h4 className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-70">{group.label}</h4>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="text-xl md:text-3xl text-white/90 font-light tracking-tight font-heading">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;