import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import lo1 from "@/assets/lo1.jpg";
import lo2 from "@/assets/lo2.jpg";
import lo3 from "@/assets/lo3.jpg";

const ParallaxCard = ({ img, alt, text, depth = 0.5 }: { img: string, alt: string, text: string, depth?: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Dynamic Parallax Range based on depth prop
  // depth = 0.5 => moves from -50% to 50%
  const range = depth * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);

  // Calculate required height to cover the movement area
  // Base 100% + Total Movement (range * 2)
  const heightPercent = 100 + (range * 2);
  const topOffset = -range;

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-3xl p-6 sm:p-8 border border-[#FFD700]/30 shadow-[0_0_30px_rgba(255,215,0,0.15)] overflow-hidden relative h-full"
    >
      <div className="flex flex-col items-center text-center h-full relative z-10">
        <div className="mb-8 relative w-32 h-32 rounded-full overflow-hidden shadow-inner border border-gray-100">
          <motion.div
            className="absolute inset-0 w-full bg-black"
            style={{
              y,
              height: `${heightPercent}%`,
              top: `${topOffset}%`
            }}
          >
            <img
              src={img}
              alt={alt}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
        <p className="text-lg text-black font-medium leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Overlay & Bottom Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dark overlay for readability */}

        {/* Bottom Fade Blend */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-white/90 mb-6 uppercase tracking-wider">
            What We Do
          </div>

          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
            <span className="border-b-4 border-white/30 pb-2">Influence</span> your audience, on <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,#FEE17D,#BC3345,#990134)]">
              every platform
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            We build authority engines fueled by long-form videos <br className="hidden md:block" />
            (Podcasts, Interviews, YouTube videos etc), so
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ParallaxCard
            img={lo1}
            alt="Save Time"
            text="You can spend less time marketing and more time innovating"
            depth={0.5}
          />
          <ParallaxCard
            img={lo2}
            alt="Get Seen"
            text="Get your content in front of more people in ways they like to consume it"
            depth={0.7}
          />
          <ParallaxCard
            img={lo3}
            alt="Trending"
            text="Strengthen your brand, and grab bigger opportunities"
            depth={0.9}
          />
        </div>

      </div>
    </section>
  );
};

export default About;