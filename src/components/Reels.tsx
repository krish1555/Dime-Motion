import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import bg2 from '@/assets/bg-2.png';
import bg3 from '@/assets/bg-3.png';

import trailer1 from '@/assets/trailer1.mp4';
import trailer2 from '@/assets/trailer2.mp4';

const Reels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [isLongVideoPlaying, setIsLongVideoPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Mobile detection for responsive 3D layout
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Updated video sources
  const reels = [
    { id: 0, src: '/11.mp4', title: "Creative Vision 1" },
    { id: 1, src: '/12.mp4', title: "Visual Story 2" },
    { id: 2, src: '/13.mp4', title: "Motion Art 3" },
    { id: 3, src: '/14.mp4', title: "Cinematic Flow 4" },
    { id: 4, src: '/15.mp4', title: "Dynamic Shot 5" },
    { id: 5, src: '/16.mp4', title: "Bold Narrative 6" },
    { id: 6, src: '/17.mp4', title: "Artistic Moment 7" },
    { id: 7, src: '/18.mp4', title: "Visual Poetry 8" },
    { id: 8, src: '/19.mp4', title: "Creative Edge 9" },
    { id: 9, src: '/20.mp4', title: "Story Craft 10" },
    { id: 10, src: '/21.mp4', title: "Motion Magic 11" },
    { id: 11, src: '/22.mp4', title: "Visual Impact 12" },
  ];

  const scrollAccumulator = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const SCROLL_THRESHOLD = 500;
  const DEBOUNCE_DELAY = 150;

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      scrollAccumulator.current += e.deltaX;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      if (scrollAccumulator.current > SCROLL_THRESHOLD && activeIndex < reels.length - 1) {
        setActiveIndex(prev => prev + 1);
        scrollAccumulator.current = 0;
      } else if (scrollAccumulator.current < -SCROLL_THRESHOLD && activeIndex > 0) {
        setActiveIndex(prev => prev - 1);
        scrollAccumulator.current = 0;
      } else {
        scrollTimeout.current = setTimeout(() => {
          scrollAccumulator.current = 0;
        }, DEBOUNCE_DELAY);
      }
    }
  };

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const dragDistance = info.offset.x;
    const threshold = 50;

    if (dragDistance > threshold && activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    } else if (dragDistance < -threshold && activeIndex < reels.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
  };

  const handleItemClick = (index: number) => {
    if (isDragging) return;
    if (index !== activeIndex) {
      setActiveIndex(index);
      setIsPaused(false);
    } else {
      setIsPaused(false);
    }
  };

  const handleDoubleClick = (index: number) => {
    if (isDragging || index !== activeIndex) return;
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) { video.play(); setIsPaused(false); }
      else { video.pause(); setIsPaused(true); }
    }
  };

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[activeIndex];
    if (video) {
      if (video.paused) { video.play(); setIsPaused(false); }
      else { video.pause(); setIsPaused(true); }
    }
  };

  const goToPrevious = () => {
    if (activeIndex > 0) { setActiveIndex(prev => prev - 1); setIsPaused(false); }
  };

  const goToNext = () => {
    if (activeIndex < reels.length - 1) { setActiveIndex(prev => prev + 1); setIsPaused(false); }
  };

  // Auto-play active video
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex && isInView && !isLongVideoPlaying && !isPaused) {
        video.currentTime = 0;
        video.muted = false;
        video.play().catch(e => console.log("Autoplay blocked", e));
      } else {
        video.pause();
        video.muted = true;
      }
    });
  }, [activeIndex, isInView, isLongVideoPlaying, isPaused]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          videoRefs.current.forEach(video => { if (video) video.pause(); });
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => { if (containerRef.current) observer.unobserve(containerRef.current); };
  }, []);

  return (
    <section
      id="reels"
      ref={sectionRef}
      className="py-16 relative overflow-hidden flex flex-col justify-center min-h-screen bg-transparent"
      onWheel={handleWheel}
    >
      {/* Reduced local background opacity to let global texture show through, or remove entirely if desired */}
      <div className="absolute inset-0 z-0 bg-black/20"></div>


      {/* --- CONTENT --- */}
      <div className="container mx-auto px-4 relative z-10 space-y-32">

        {/* --- SECTION 1: SHORT FORM --- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-white hover:text-glow transition-all duration-300">
              <span className="text-white">Short Form That Converts</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-md">
              Immerse yourself in our latest creative showcases
            </p>
          </motion.div>

          <div
            className="relative h-[500px] w-full max-w-7xl mx-auto flex items-center justify-center perspective-2000"
            ref={containerRef}
            style={{ perspective: '1000px' }}
          >
            <button
              onClick={goToPrevious}
              disabled={activeIndex === 0}
              className={`absolute left-4 z-[60] p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100 hover:bg-white/20 hover:scale-110'}`}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={goToNext}
              disabled={activeIndex === reels.length - 1}
              className={`absolute right-4 z-[60] p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 ${activeIndex === reels.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100 hover:bg-white/20 hover:scale-110'}`}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: "grabbing" }}
              style={{ cursor: "grab", transformStyle: "preserve-3d" }}
            >
              {reels.map((reel, index) => {
                const offset = index - activeIndex;
                const isActive = index === activeIndex;
                let rotateY = 0; let translateX = 0; let translateZ = 0; let scale = 1; let opacity = 0; let zIndex = 0; let blur = 0;

                if (isActive) {
                  translateZ = 200; scale = 1.3; opacity = 1; zIndex = 50;
                } else {
                  const factor = Math.abs(offset);
                  const sign = Math.sign(offset);

                  // 3D Cover Flow Logic (Inward / Concave)
                  rotateY = -sign * 45; // Face inwards (Standard Cover Flow)

                  // Responsive spacing
                  const baseOffset = isMobile ? 120 : 180;
                  const factorOffset = isMobile ? 50 : 80;

                  translateX = sign * (baseOffset + (factor * factorOffset));

                  translateZ = -(factor * 100);
                  scale = Math.max(0.6, 1 - (factor * 0.15));
                  opacity = Math.max(0.3, 1 - (factor * 0.2));
                  zIndex = 40 - factor;
                  blur = factor * 0.5;
                }

                return (
                  <motion.div
                    key={reel.id}
                    className="absolute w-[160px] md:w-[210px] aspect-[9/16] rounded-3xl overflow-hidden border border-white/20 bg-black cursor-pointer"
                    initial={false}
                    animate={{ rotateY, z: translateZ, x: translateX, scale, opacity, filter: `blur(${blur}px)` }}
                    whileHover={{ scale: scale * 1.1, zIndex: 100, filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onClick={() => handleItemClick(index)}
                    onDoubleClick={() => handleDoubleClick(index)}
                    style={{ transformStyle: "preserve-3d", zIndex, boxShadow: isActive ? "0 30px 80px rgba(59, 130, 246, 0.4)" : "0 20px 50px rgba(0,0,0,0.6)" }}
                  >
                    <video ref={(el) => (videoRefs.current[index] = el)} className="w-full h-full object-cover" src={reel.src} playsInline loop muted />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
                    {isActive && (
                      <motion.button initial={{ opacity: 0 }} animate={{ opacity: isPaused ? 1 : 0.7 }} onClick={togglePlayPause} className="absolute inset-0 flex items-center justify-center z-10 group">
                        <div className="p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 group-hover:bg-white/30">
                          {isPaused ? <Play className="w-8 h-8 text-white fill-white" /> : <Pause className="w-8 h-8 text-white fill-white opacity-0 group-hover:opacity-100" />}
                        </div>
                      </motion.button>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reels.map((_, idx) => (
              <button key={idx} onClick={() => setActiveIndex(idx)} className={`rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-10 h-3 bg-gradient-to-r from-blue-500 to-purple-500' : 'w-3 h-3 bg-gray-500 hover:bg-gray-400'}`} />
            ))}
          </div>
        </div>

        {/* --- SECTION 2: LONG FORM --- */}
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-white hover:text-glow transition-all duration-300">
              Featured Long Form Content
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
              Explore our extended creative narratives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative group bg-black/50 backdrop-blur-sm rounded-2xl p-1 border border-white/10">
              <div className="aspect-video bg-black rounded-xl overflow-hidden relative shadow-2xl">
                <video className="w-full h-full object-cover" playsInline loop muted controls preload="metadata">
                  <source src="/vl1.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative group bg-black/50 backdrop-blur-sm rounded-2xl p-1 border border-white/10">
              <div className="aspect-video bg-black rounded-xl overflow-hidden relative shadow-2xl">
                <video className="w-full h-full object-cover" playsInline loop muted controls preload="metadata">
                  <source src="/l2.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- SECTION 3: PODCAST TRAILERS --- */}
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-white hover:text-glow transition-all duration-300">
              Podcast Trailers
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
              Engaging teasers that drive full-episode listens
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative group bg-black/50 backdrop-blur-sm rounded-2xl p-1 border border-white/10">
              <div className="aspect-video bg-black rounded-xl overflow-hidden relative shadow-2xl">
                <video className="w-full h-full object-cover" playsInline loop muted controls preload="metadata">
                  <source src={trailer2} type="video/mp4" />
                </video>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative group bg-black/50 backdrop-blur-sm rounded-2xl p-1 border border-white/10">
              <div className="aspect-video bg-black rounded-xl overflow-hidden relative shadow-2xl">
                <video className="w-full h-full object-cover" playsInline loop muted controls preload="metadata">
                  <source src={trailer1} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Instagram Link */}
        <div className="text-center mt-12 mb-8">
          <a href="https://www.instagram.com/dime.motion/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold shadow-lg border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300">
            <span>Follow Us On Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reels;
