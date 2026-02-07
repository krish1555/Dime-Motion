import lo1 from "@/assets/lo1.jpg";
import lo2 from "@/assets/lo2.jpg";
import lo3 from "@/assets/lo3.jpg";
import heroBackground from "@/assets/hero-background.png";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Overlay & Bottom Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
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
          {/* Card 1 */}
          <div className="group bg-white rounded-3xl p-10 border border-[#FFD700]/30 hover:border-[#FFD700] hover:-translate-y-2 transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.15)]">
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-8">
                <img src={lo1} alt="Save Time" className="w-32 h-32 rounded-full object-cover shadow-lg" />
              </div>
              <p className="text-lg text-black font-medium leading-relaxed">
                You can spend less time marketing and more time innovating
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-3xl p-10 border border-[#FFD700]/30 hover:border-[#FFD700] hover:-translate-y-2 transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.15)]">
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-8">
                <img src={lo2} alt="Get Seen" className="w-32 h-32 rounded-full object-cover shadow-lg" />
              </div>
              <p className="text-lg text-black font-medium leading-relaxed">
                Get your content in front of more people in ways they like to consume it
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-3xl p-10 border border-[#FFD700]/30 hover:border-[#FFD700] hover:-translate-y-2 transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.15)]">
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-8">
                <img src={lo3} alt="Trending" className="w-32 h-32 rounded-full object-cover shadow-lg" />
              </div>
              <p className="text-lg text-black font-medium leading-relaxed">
                Strengthen your brand, and grab bigger opportunities
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;