import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import influenceImg from "@/assets/influence.png";
import innovateImg from "@/assets/innovate.png";
import scaleImg from "@/assets/scale.png";

gsap.registerPlugin(ScrollTrigger);

const FeatureBlock = ({
  number,
  title,
  description,
  image,
  align = "left",
  isMobile,
}: {
  number: string,
  title: string,
  description: string,
  image: string,
  align?: "left" | "right",
  isMobile: boolean,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      const textX = isMobile ? 0 : (align === "left" ? -100 : 100);
      const imgX = isMobile ? 0 : (align === "left" ? 100 : -100);
      const entranceY = isMobile ? 20 : 0;

      // Entrance Timeline - Simplified for mobile
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: isMobile ? "top 95%" : "top 85%",
          toggleActions: "play none none none",
          once: isMobile,
        },
      });

      tl.from(textRef.current, {
        x: textX,
        y: entranceY,
        opacity: 0,
        duration: isMobile ? 0.6 : 1.1,
        ease: "power2.out",
      }, 0)
        .from(imageRef.current, {
          x: imgX,
          y: entranceY,
          opacity: 0,
          duration: isMobile ? 0.8 : 1.3,
          ease: "power2.out",
        }, 0);

      // Continuous Float Animation - Disable on mobile
      if (!isMobile) {
        gsap.to(imageRef.current, {
          y: -10,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.0,
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, [align]);

  return (
    <div
      ref={containerRef}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16 md:mb-24 last:mb-0 w-full max-w-7xl mx-auto"
    >
      {/* Text Side */}
      <div
        ref={textRef}
        className={`relative z-10 flex flex-col will-change-transform ${align === "right" ? "lg:order-2 items-end text-right" : "lg:order-1 items-start text-left"
          }`}
      >
        {/* Number - Positioned relative to text block */}
        <span className={`text-[100px] md:text-[180px] leading-[0.8] font-bold text-white/10 select-none absolute -top-10 md:-top-24 z-0 ${align === "right" ? "-right-4" : "-left-4"
          }`}>
          {number}
        </span>

        <div className="relative z-10 max-w-xl">
          <h3 className="font-zangezi text-5xl sm:text-6xl md:text-8xl text-white mb-6 tracking-tight relative">
            <span className="relative z-10">{title}</span>
            {!isMobile && (
              <span className="absolute left-0 top-0 text-white/20 blur-2xl z-0 select-none opacity-50" aria-hidden="true">
                {title}
              </span>
            )}
          </h3>

          <div className={`h-[1px] w-24 md:w-32 bg-white/20 mb-6 md:mb-8 ${align === "right" ? "ml-auto" : "mr-auto"}`} />

          <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Image Side */}
      <div
        ref={imageRef}
        className={`relative z-10 flex justify-center items-center ${align === "right" ? "lg:order-1" : "lg:order-2"
          }`}
      >
        <img
          src={image}
          alt={title}
          className="relative w-full max-w-[280px] md:max-w-[400px] object-contain z-10 will-change-transform"
          style={{
            filter: isMobile
              ? "none"
              : "drop-shadow(0 0 2px rgba(255,255,255,0.8)) drop-shadow(0 0 30px rgba(255,255,255,0.4)) brightness(1.2)"
          }}
        />
      </div>
    </div>
  );
};

const KineticLine = ({ isMobile }: { isMobile: boolean }) => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  const pathLengthRaw = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const pathLength = useSpring(pathLengthRaw, { stiffness: 40, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
      <svg
        className="w-full h-full opacity-30"
        viewBox="0 0 1440 1600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M-100,500 C600,500 1250,700 1250,950 S200,1350 -100,1500"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ pathLength: isMobile ? 1 : pathLength, opacity }}
          initial={{ pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="15%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="85%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden bg-black/50">
      {/* Background Ambience */}
      {/* Background Ambience - Simplified/Disabled on mobile for performance */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        </div>
      )}

      <KineticLine isMobile={isMobile} />

      <div className="container mx-auto px-6 relative z-10 w-full">

        {/* Header Block */}
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mx-auto max-w-4xl"
          >
            <span className="block text-[#FFD700] text-xs font-bold tracking-[0.4em] uppercase mb-8 opacity-80">
              Agency Capabilities
            </span>
            <h2 className="font-zangezi text-3xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
              We build <span
                className={isMobile ? "text-white/90" : "bg-clip-text text-transparent bg-[linear-gradient(90deg,#A8A8A8,#E8E8E8,#C0C0C0,#E8E8E8,#A8A8A8)]"}
                style={!isMobile ? {
                  textShadow: '0 0 40px rgba(232, 232, 232, 0.3)',
                  WebkitTextFillColor: 'transparent',
                } : {}}
              >authority engines</span> <br className="hidden md:block" />
              fueled by long-form video.
            </h2>
          </motion.div>
        </div>

        {/* Features Stack */}
        <div className="flex flex-col w-full">

          <FeatureBlock
            number="01"
            title="INFLUENCE"
            description="Influence your audience on every platform. We turn your expertise into a omnipresent media machine."
            image={influenceImg}
            align="left"
            isMobile={isMobile}
          />

          <FeatureBlock
            number="02"
            title="INNOVATE"
            description="Spend less time marketing, more time innovating. Automated distribution systems that work while you sleep."
            image={innovateImg}
            align="right"
            isMobile={isMobile}
          />

          <FeatureBlock
            number="03"
            title="SCALE"
            description="Strengthen your brand, grab bigger opportunities. Consistent visibility creates luck. We engineer visibility."
            image={scaleImg}
            align="left"
            isMobile={isMobile}
          />

        </div>
      </div>
    </section>
  );
};

export default About;