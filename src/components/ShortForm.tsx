import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play } from 'lucide-react';

import c1 from '@/assets/C1.mp4';
import c2 from '@/assets/C2.mp4';
import c3 from '@/assets/C3.mp4';
import c4 from '@/assets/C4.mp4';
import v1 from '@/assets/V1.mp4';
import v2 from '@/assets/V2.mp4';
import v3 from '@/assets/V3.mp4';
import v4 from '@/assets/V4.mp4';

const allReels = [
  { id: 11, src: c1, title: "Hook & Hold", caption: "Stopping the scroll instantly." },
  { id: 12, src: c2, title: "Value Delivery", caption: "Clear, actionable insight." },
  { id: 13, src: c3, title: "Objection Handle", caption: "Addressing doubt upfront." },
  { id: 14, src: c4, title: "The Close", caption: "Driving the click." },
  { id: 15, src: v1, title: "Trend Jacking", caption: "Riding the algorithmic wave." },
  { id: 16, src: v2, title: "Visual Loops", caption: "Satisfying visual retention." },
  { id: 17, src: v3, title: "Controversy", caption: "Sparking engagement via debate." },
  { id: 18, src: v4, title: "Shareability", caption: "Relatable content that travels." },
];

const VideoCard = ({ reel }: { reel: typeof allReels[0] }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsMuted(true);
    }
  };

  return (
    <motion.div
      className="group relative aspect-[9/16] w-full rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 bg-black/20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={reel.src}
        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
        muted={isMuted}
        loop
        playsInline
      />

      {/* Dark Overlay gradient (bottom) */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* "Enable Sound" Badge - Top Left */}
      <div
        onClick={toggleSound}
        className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full cursor-pointer transition-colors border border-white/10"
      >
        {isMuted ? <VolumeX size={12} className="text-white" /> : <Volume2 size={12} className="text-white" />}
        <span className="text-[9px] uppercase tracking-wider font-medium text-white">
          {isMuted ? "Enable Sound" : "Sound On"}
        </span>
      </div>

      {/* Play Icon Hint (Visible when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <Play size={16} className="text-white fill-white ml-0.5 opacity-80" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const ShortForm = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="short-form"
      className="pt-16 pb-16 md:pt-20 md:pb-20 relative overflow-hidden bg-transparent"
    >
      {/* Cinematic Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-white">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-8 text-center md:text-left"
        >
          <h2 className="font-zangezi text-4xl md:text-5xl font-bold tracking-tighter mb-3">
            Short Form That S<span
              className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#A8A8A8,#E8E8E8,#C0C0C0,#E8E8E8,#A8A8A8)]"
              style={{
                textShadow: '0 0 40px rgba(232, 232, 232, 0.3)',
                WebkitTextFillColor: 'transparent',
              }}
            >cales & </span>C<span
              className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#A8A8A8,#E8E8E8,#C0C0C0,#E8E8E8,#A8A8A8)]"
              style={{
                textShadow: '0 0 40px rgba(232, 232, 232, 0.3)',
                WebkitTextFillColor: 'transparent',
              }}
            >onverts</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl font-light">
            Narrative structures engineered for attention and designed to convert.
          </p>
        </motion.div>

        {/* Horizontal Scroll Band */}
        <div className="relative -mx-6">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white hover:bg-black/80 hover:scale-110 transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white hover:bg-black/80 hover:scale-110 transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto px-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {allReels.map((reel) => (
              <div key={reel.id} className="flex-shrink-0 w-[200px] md:w-[240px]">
                <VideoCard reel={reel} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShortForm;

