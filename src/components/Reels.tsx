import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const Reels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [isLongVideoPlaying, setIsLongVideoPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const dragX = useMotionValue(0);

  // Updated video sources from assets 11-22
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


  // Mouse wheel scrolling - horizontal
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    // Convert vertical scroll to horizontal navigation
    const delta = e.deltaY || e.deltaX;
    if (delta > 0 && activeIndex < reels.length - 1) {
      setActiveIndex(prev => prev + 1);
    } else if (delta < 0 && activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  // Handle drag to change active index
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

  // Click on item to center it or toggle play/pause if already active
  const handleItemClick = (index: number) => {
    if (isDragging) return;

    if (index === activeIndex) {
      // Toggle play/pause for active video
      const video = videoRefs.current[index];
      if (video) {
        if (video.paused) {
          video.play();
          setIsPaused(false);
        } else {
          video.pause();
          setIsPaused(true);
        }
      }
    } else {
      // Navigate to clicked video
      setActiveIndex(index);
      setIsPaused(false);
    }
  };

  // Auto-play active video with audio, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex && isInView && !isLongVideoPlaying && !isPaused) {
        video.currentTime = 0;
        video.muted = false; // Enable audio for active video
        video.play().catch(e => console.log("Autoplay blocked", e));
      } else {
        video.pause();
        video.muted = true;
      }
    });
    // Reset pause state when changing videos
    if (!isPaused) {
      setIsPaused(false);
    }
  }, [activeIndex, isInView, isLongVideoPlaying, isPaused]);

  // Intersection Observer to pause video when scrolling away
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          // Pause all videos when section is out of view
          videoRefs.current.forEach(video => {
            if (video) video.pause();
          });
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Long form video interaction
  const longVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isLongVideoHovered, setIsLongVideoHovered] = useState(false);

  const handleLongVideoHover = (isHovering: boolean) => {
    if (!longVideoRef.current) return;
    if (isHovering) {
      setIsLongVideoHovered(true);
      setIsLongVideoPlaying(true);
      // Pause all reel videos
      videoRefs.current.forEach(video => {
        if (video) video.pause();
      });
      longVideoRef.current.muted = false;
      longVideoRef.current.play().catch(() => { });
    } else {
      setIsLongVideoHovered(false);
      setIsLongVideoPlaying(false);
      longVideoRef.current.muted = true;
      longVideoRef.current.pause();
    }
  };

  return (
    <section
      id="reels"
      ref={sectionRef}
      className="py-8 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden flex flex-col justify-center relative"
      onWheel={handleWheel}
    >
      {/* Enhanced Background with Radial Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-white hover:text-glow transition-all duration-300">
            <span className="text-white">Our Reels</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Immerse yourself in our latest creative showcases
          </p>
        </motion.div>

        {/* 3D Carousel Container - Enhanced Stack Effect */}
        <div
          className="relative h-[500px] w-full max-w-7xl mx-auto flex items-center justify-center perspective-2000 mb-8"
          ref={containerRef}
          style={{ perspective: '2000px' }}
        >
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

              // Enhanced 3D Transform with Smooth Stack Effect
              const isVisible = Math.abs(offset) <= 4;

              let rotateY = 0;
              let rotateX = 0;
              let translateZ = 0;
              let translateX = 0;
              let translateY = 0;
              let scale = 1;
              let opacity = 0;
              let zIndex = 0;
              let blur = 0;

              if (isActive) {
                // Center - Maximum prominence
                rotateY = 0;
                rotateX = 0;
                translateZ = 150;
                translateX = 0;
                translateY = 0;
                scale = 1.2;
                opacity = 1;
                zIndex = 50;
                blur = 0;
              } else if (offset === -1) {
                rotateY = 45;
                rotateX = 5;
                translateZ = -50;
                translateX = -380;
                translateY = 20;
                scale = 0.8;
                opacity = 0.7;
                zIndex = 40;
                blur = 1;
              } else if (offset === 1) {
                rotateY = -45;
                rotateX = 5;
                translateZ = -50;
                translateX = 380;
                translateY = 20;
                scale = 0.8;
                opacity = 0.7;
                zIndex = 40;
                blur = 1;
              } else if (offset === -2) {
                rotateY = 60;
                rotateX = 10;
                translateZ = -150;
                translateX = -650;
                translateY = 50;
                scale = 0.65;
                opacity = 0.4;
                zIndex = 30;
                blur = 2;
              } else if (offset === 2) {
                rotateY = -60;
                rotateX = 10;
                translateZ = -150;
                translateX = 650;
                translateY = 50;
                scale = 0.65;
                opacity = 0.4;
                zIndex = 30;
                blur = 2;
              } else if (offset === -3) {
                rotateY = 70;
                rotateX = 15;
                translateZ = -250;
                translateX = -850;
                translateY = 80;
                scale = 0.5;
                opacity = 0.2;
                zIndex = 20;
                blur = 3;
              } else if (offset === 3) {
                rotateY = -70;
                rotateX = 15;
                translateZ = -250;
                translateX = 850;
                translateY = 80;
                scale = 0.5;
                opacity = 0.2;
                zIndex = 20;
                blur = 3;
              } else if (offset === -4) {
                rotateY = 75;
                rotateX = 20;
                translateZ = -350;
                translateX = -1000;
                translateY = 100;
                scale = 0.4;
                opacity = 0.1;
                zIndex = 10;
                blur = 4;
              } else if (offset === 4) {
                rotateY = -75;
                rotateX = 20;
                translateZ = -350;
                translateX = 1000;
                translateY = 100;
                scale = 0.4;
                opacity = 0.1;
                zIndex = 10;
                blur = 4;
              } else {
                opacity = 0;
                zIndex = -1;
              }

              return (
                <motion.div
                  key={reel.id}
                  className="absolute w-[180px] md:w-[210px] aspect-[9/16] rounded-3xl overflow-hidden border border-white/20 bg-black"
                  initial={false}
                  animate={{
                    rotateY,
                    rotateX,
                    z: translateZ,
                    x: translateX,
                    y: translateY,
                    scale,
                    opacity,
                    filter: `blur(${blur}px)`,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easeOutQuart
                  }}
                  onClick={() => handleItemClick(index)}
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex,
                    boxShadow: isActive
                      ? "0 30px 80px rgba(59, 130, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.3)"
                      : "0 20px 50px rgba(0,0,0,0.6)",
                  }}
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="w-full h-full object-cover"
                    src={reel.src}
                    playsInline
                    loop
                    muted
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />


                  {/* Subtle ring glow for active */}
                  {isActive && (
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-50 blur-xl -z-10"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation Indicators */}
        <div className="flex justify-center gap-2 mt-6 mb-6">
          {reels.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-full transition-all duration-300 ${idx === activeIndex
                ? 'w-10 h-3 bg-gradient-to-r from-blue-500 to-purple-500'
                : 'w-3 h-3 bg-gray-700 hover:bg-gray-500'
                }`}
              aria-label={`Go to reel ${idx + 1}`}
            />
          ))}
        </div>

        {/* Keyboard Navigation Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="text-center text-gray-500 text-sm mb-8"
        >
          <p>Scroll, drag, or click to navigate • {activeIndex + 1} of {reels.length}</p>
        </motion.div>

        {/* Long Form Video Section - Dual Video Showcase */}
        <div className="max-w-7xl mx-auto mt-8 mb-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-white hover:text-glow transition-all duration-300">
              Featured Long Form Content
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our extended creative narratives
            </p>
          </motion.div>

          {/* Dual Video Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Video 1 - vl1.mp4 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-300">
                {/* Gradient accent */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10" />

                <div className="aspect-video bg-black relative">
                  <video
                    className="w-full h-full object-cover"
                    playsInline
                    loop
                    muted
                    controls
                    preload="metadata"
                  >
                    <source src="/vl1.mp4" type="video/mp4" />
                  </video>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

            </motion.div>

            {/* Video 2 - l2.mp4 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-300">
                {/* Gradient accent */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10" />

                <div className="aspect-video bg-black relative">
                  <video
                    className="w-full h-full object-cover"
                    playsInline
                    loop
                    muted
                    controls
                    preload="metadata"
                  >
                    <source src="/l2.mp4" type="video/mp4" />
                  </video>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

            </motion.div>
          </div>

          {/* Watch hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >

          </motion.div>
        </div>

        {/* Instagram Link */}
        <div className="text-center mt-8 mb-8">
          <a
            href="https://www.instagram.com/dime.motion/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100"
          >
            <span>🎬</span>
            <span>Follow Us On Instagram</span>
            <span>✨</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reels;
