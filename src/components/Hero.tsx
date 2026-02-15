import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";
import testimonial1 from "@/assets/1.png";
import testimonial2 from "@/assets/2.jpeg";
import testimonial3 from "@/assets/3.jpeg";
import testimonial4 from "@/assets/4.jpeg";
import testimonial5 from "@/assets/5.jpeg";
import testimonial6 from "@/assets/6.jpeg";

import { smoothScrollTo } from "../utils/smoothScroll";

// Featured client data
const featuredClient = {
  image: testimonial2,
  name: "Nate Leathers",
  handle: "@nateleatherss",
  platform: "Instagram",
  followers: "108k",
  quote: "Dime Motion completely changed the game for us. The strategy and execution were next level — real results, not just content.",
  stats: [
    { label: "Revenue Generated", value: "$100k+" },
    { label: "Followers Grown", value: "55K" },
    { label: "Timeframe", value: "5 Months" },
  ],
};

// Mini showcase clients
const miniClients = [
  { image: testimonial4, name: "Luke Fontaine", metric: "50k", platform: "Instagram" },
  { image: testimonial1, name: "Kash Straughn", metric: "22k", platform: "TikTok" },
  { image: testimonial5, name: "Mitch Corlett", metric: "Creator", platform: "Multi" },
];

// Marquee clients (older/credibility strip)
const marqueeClients = [
  { image: testimonial1, text: "Kash Straughn", subText: "Tiktok: @thekashstraughn 22k" },
  { image: testimonial2, text: "Nate Leathers", subText: "IG: @nateleatherss 108k" },
  { image: testimonial3, text: "Logan Corlette" },
  { image: testimonial4, text: "Luke Fontaine", subText: "IG: @lukefontaine 50k" },
  { image: testimonial5, text: "Mitch Corlett" },
  { image: testimonial6, text: "Erick Martinez", subText: "IG: @conermartz 9k" },
];

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId);
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden w-full">

      {/* ─── Main Hero Content ─── */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-8 sm:pt-32 sm:pb-12 lg:pt-20 lg:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* ═══ LEFT COLUMN — Persuasion Zone ═══ */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">




              {/* Headline */}
              <h1 className="font-zangezi leading-[0.95] tracking-tight">
                <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                  Engineering
                </span>
                <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl mt-1">
                  Modern
                </span>
                <span
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl mt-1 bg-clip-text text-transparent bg-[linear-gradient(90deg,#A8A8A8,#E8E8E8,#C0C0C0,#E8E8E8,#A8A8A8)]"
                  style={{
                    textShadow: '0 0 40px rgba(232, 232, 232, 0.3)',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Attention
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                Strategy, production, and distribution for podcasts, founders, and modern creators.
              </p>

              {/* Audience Clarifier Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  { icon: Play, label: "Podcasts" },
                  { icon: TrendingUp, label: "Founders" },
                  { icon: Zap, label: "Creators" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-gray-300 text-xs sm:text-sm font-medium tracking-wide hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <Icon className="w-3.5 h-3.5 text-gray-500" />
                    {label}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start pt-2">
                <div className="relative group">
                  {/* Animated border glow */}
                  <div className="absolute inset-[-1px] rounded-full overflow-hidden">
                    <div
                      className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_95%,#fff_100%)]"
                      style={{ animation: "spin 4s ease-in-out infinite" }}
                    />
                  </div>
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    className="relative px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold tracking-wide bg-[#FFDA7B] text-black rounded-full border border-[#FFDA7B]/50 hover:bg-[#FBC02D] hover:scale-[1.03] transition-all duration-300 shadow-[0_0_30px_rgba(255,218,123,0.2)]"
                  >
                    Book a Discovery Call
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Micro-trust */}
              <div className="flex items-center gap-3 justify-center lg:justify-start pt-1">
                <div className="flex -space-x-2">
                  {[testimonial1, testimonial2, testimonial4].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-black object-cover"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-gray-500" />
                  <span className="text-gray-500 text-xs font-medium tracking-wide">
                    Trusted by 50+ creators
                  </span>
                </div>
              </div>
            </div>

            {/* ═══ RIGHT COLUMN — Active Client Showcase ═══ */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center lg:items-end gap-6">

              {/* Featured Client Card */}
              <div
                className="relative w-full max-w-md animate-float-subtle"
              >
                {/* Outer glow */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />

                {/* Card */}
                <div className="relative rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 shadow-[0_8px_64px_rgba(0,0,0,0.4)]">

                  {/* Label */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-gray-500">
                      Featured Creator
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <img
                        src={featuredClient.image}
                        alt={featuredClient.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-white/10"
                      />
                      {/* Platform badge */}
                      <div className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-black border border-white/10 text-[9px] font-bold text-white tracking-wide">
                        {featuredClient.platform}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                        {featuredClient.name}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm font-medium mt-0.5">
                        {featuredClient.handle}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-light italic border-l-2 border-white/10 pl-4">
                    "{featuredClient.quote}"
                  </blockquote>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {featuredClient.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                      >
                        <div className="text-white font-bold text-sm sm:text-base">{stat.value}</div>
                        <div className="text-gray-500 text-[10px] sm:text-xs mt-0.5 tracking-wide">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mini Client Avatars */}
              <div className="flex items-center gap-4 sm:gap-5">
                {miniClients.map((client) => (
                  <div key={client.name} className="flex flex-col items-center gap-2 group">
                    <div className="relative">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-white/25 transition-colors duration-300"
                      />
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-px rounded-full bg-black/80 border border-white/10 text-[8px] font-bold text-gray-400 whitespace-nowrap">
                        {client.metric}
                      </div>
                    </div>
                    <span className="text-gray-500 text-[10px] sm:text-xs font-medium tracking-wide hidden sm:block">
                      {client.name.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── Older Clients Marquee Strip ─── */}
      <div className="relative mt-auto left-0 right-0 py-4 sm:py-5 overflow-hidden w-full testimonial-strip z-20 border-t border-white/[0.04]">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-black via-black/60 to-transparent z-10 pointer-events-none" />

        <div className="w-full overflow-hidden relative">
          <div className="flex animate-marquee-seamless" style={{ width: "max-content", maxWidth: "none" }}>
            <div className="flex items-center gap-6 sm:gap-8">
              {marqueeClients.map((t, idx) => (
                <div
                  key={`a-${idx}`}
                  className="flex items-center gap-3 sm:gap-4 bg-white/[0.02] border border-white/[0.06] rounded-lg px-3 sm:px-5 py-2.5 sm:py-3 flex-shrink-0"
                >
                  <img
                    src={t.image}
                    alt={t.text}
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover opacity-70"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-sm text-gray-400 font-medium">{t.text}</p>
                    {t.subText && (
                      <p className="text-[10px] sm:text-xs text-gray-600">{t.subText}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-6 sm:w-8" />
            <div className="flex items-center gap-6 sm:gap-8" aria-hidden>
              {marqueeClients.map((t, idx) => (
                <div
                  key={`b-${idx}`}
                  className="flex items-center gap-3 sm:gap-4 bg-white/[0.02] border border-white/[0.06] rounded-lg px-3 sm:px-5 py-2.5 sm:py-3 flex-shrink-0"
                >
                  <img
                    src={t.image}
                    alt=""
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover opacity-70"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-sm text-gray-400 font-medium">{t.text}</p>
                    {t.subText && (
                      <p className="text-[10px] sm:text-xs text-gray-600">{t.subText}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
