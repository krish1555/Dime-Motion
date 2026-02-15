import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, VolumeX, Play } from 'lucide-react';
import trailer1 from '@/assets/trailer1.mp4';
import trailer2 from '@/assets/trailer2.mp4';

// Video Data - Exactly 3 as requested
const items = [
  {
    id: 1,
    type: 'podcast',
    src: trailer1,
    title: "Podcast Trailer 01",
    caption: "High-impact teaser for full episodes."
  },
  {
    id: 2,
    type: 'podcast',
    src: trailer2,
    title: "Podcast Trailer 02",
    caption: "Hook-driven snippets that convert."
  },
];

const VideoCardHorizontal = ({ item }: { item: typeof items[0] }) => {
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
      className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 bg-black/20 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={item.src}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
        muted={isMuted}
        loop
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

      {/* "Enable Sound" Badge */}
      <div
        onClick={toggleSound}
        className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full cursor-pointer transition-colors border border-white/10"
      >
        {isMuted ? <VolumeX size={14} className="text-white" /> : <Volume2 size={14} className="text-white" />}
        <span className="text-[10px] uppercase tracking-wider font-medium text-white">
          {isMuted ? "Enable Sound" : "Sound On"}
        </span>
      </div>

      {/* Title/Caption */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <h4 className="text-white font-bold text-xl mb-1 leading-tight shadow-black drop-shadow-md">
          {item.title}
        </h4>
        <p className="text-xs text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
          {item.caption}
        </p>
      </div>

      {/* Play Icon Overlay (when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <Play size={20} className="text-white fill-white ml-1 opacity-80" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const PodcastTrailers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="podcast-trailers"
      ref={containerRef}
      className="py-12 md:py-16 relative overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          style={{ y: headingY }}
          className="mb-6 md:mb-8 text-center"
        >
          <h2 className="font-zangezi text-4xl md:text-5xl font-bold tracking-tighter text-white mb-3">
            Trailers and <span
              className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#A8A8A8,#E8E8E8,#C0C0C0,#E8E8E8,#A8A8A8)]"
              style={{
                textShadow: '0 0 40px rgba(232, 232, 232, 0.3)',
                WebkitTextFillColor: 'transparent',
              }}
            >Long Form</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Podcast trailers, B2B narratives, and extended visual storytelling.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {items.map((item) => (
              <VideoCardHorizontal key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PodcastTrailers;
