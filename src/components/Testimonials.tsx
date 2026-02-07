import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import profilePic from "@/assets/2.jpeg";
import bg9 from "@/assets/bg-9.jpg";

const Testimonials = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black">
      {/* Background Image: bg-6 (Natural Gold, No Dark Filter) */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg9}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* REMOVED: The dark overlay div. Keeping natural colors. */}

        {/* Top Fade (into previous section) - Subtle */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black to-transparent opacity-80" />

        {/* Bottom Fade (into Contact section) */}

      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white text-shadow-lg drop-shadow-md">
            What Our Clients Say
          </h2>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto drop-shadow-md font-medium">
            Real results from creators and brands we've worked with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Increased glass opacity slightly to ensure text readability against potentially bright gold BG */}
          <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Video Section */}
              <div className="relative aspect-[9/16] lg:aspect-auto h-[500px] lg:h-[600px] bg-black group cursor-pointer" onClick={togglePlay}>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/testimonial.mp4"
                  playsInline
                  loop
                  muted={isMuted}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Controls Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white fill-current" />
                    ) : (
                      <Play className="w-8 h-8 text-white fill-current ml-1" />
                    )}
                  </div>
                </div>

                {/* Audio Control */}
                <button
                  onClick={toggleMute}
                  className="absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-colors z-20"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-transparent relative">
                {/* Subtle highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-200 text-sm font-semibold mb-8 backdrop-blur-sm">
                    <Instagram size={16} />
                    <span>Verified Creator</span>
                  </div>

                  <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8 drop-shadow-md">
                    "Working with the team has been an absolute game changer for my content. The quality, the speed, the understanding of the algorithm - it's all next level."
                  </blockquote>

                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[2px]">
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img
                            src={profilePic}
                            alt="Nate Leathers"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 shadow-black drop-shadow-sm">
                        Nate Leathers
                      </h3>
                      <p className="text-gray-200 font-medium flex items-center gap-2 text-shadow-sm">
                        <span>110k Insta Followers</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="text-blue-300">@nateleatherss</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 flex flex-wrap gap-4">
                    <div className="px-6 py-3 rounded-xl bg-black/50 border border-white/10 text-center flex-1 backdrop-blur-md">
                      <div className="text-3xl font-bold text-white mb-1">110K+</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Followers</div>
                    </div>
                    <div className="px-6 py-3 rounded-xl bg-black/50 border border-white/10 text-center flex-1 backdrop-blur-md">
                      <div className="text-2xl font-bold text-white mb-1">$100k+</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider">Generated from Content</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;