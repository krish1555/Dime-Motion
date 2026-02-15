import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ArrowRight, Smartphone } from 'lucide-react';
import cryptoVicPdf from '@/assets/Crypto Vic.pdf';
import nateLeathersPdf from '@/assets/nate leathers.pdf';
import cryptoVicPfp from '@/assets/crypto_vic_pfp.jpg';
import nateLeathersPfp from '@/assets/nate_leathers_pfp.jpg';
import bgTexture from "@/assets/b-1.png";

// Import the Flywheel Component to embed it directly


const CaseStudies = () => {
    const [selectedCase, setSelectedCase] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 768);
            setIsLandscape(window.innerWidth > window.innerHeight);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        window.addEventListener('orientationchange', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
            window.removeEventListener('orientationchange', checkDevice);
        };
    }, []);

    const caseStudies = [
        {
            id: 1,
            title: "Crypto Vic",
            category: "BRAND / VISUAL IDENTITY",
            description: "Innovative cryptocurrency platform branding.",
            pdfPath: cryptoVicPdf,
            color: "from-blue-900/40 to-purple-900/40"
        },
        {
            id: 2,
            title: "Nate Leathers",
            category: "ECOMMERCE STRATEGY",
            description: "Scaling premium brands.",
            pdfPath: nateLeathersPdf,
            color: "from-orange-900/40 to-red-900/40"
        },
    ];

    const handleOpenCase = (id: number) => {
        setSelectedCase(id);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseCase = () => {
        setSelectedCase(null);
        document.body.style.overflow = 'auto';
    };

    const selectedCaseStudy = caseStudies.find(cs => cs.id === selectedCase);

    return (
        <section id="case-studies" className="pt-16 pb-8 md:pt-20 md:pb-10 bg-transparent relative">
            <div className="container mx-auto px-4 md:px-8 relative z-10 pt-0 mb-8 md:mb-12" ref={containerRef}>

                {/* Editorial Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-6 md:mb-8"
                >
                    <h2 className="font-zangezi text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                        Case Studies
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light">
                        Explore our success stories and creative solutions
                    </p>
                </motion.div>

                {/* Asymmetrical Editorial Gallery - Refined Layout to Prevent Image Blur */}
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-24 w-full">

                    {/* Panel A - Crypto Vic */}
                    {/* Panel A - Crypto Vic */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.2, 0.9, 0.2, 1] }}
                        viewport={{ once: true }}
                        onClick={() => handleOpenCase(caseStudies[0].id)}
                        className="group relative w-full max-w-[400px] h-[400px] cursor-pointer rounded-2xl mx-auto md:mx-0 overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] bg-[#0A0A0A]"
                    >
                        {/* Premium Dark Surface & Ambient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-[#050505] opacity-100 z-0" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

                        {/* Content Layout */}
                        <div className="relative z-10 w-full h-full p-6 md:p-8 flex flex-col justify-between">
                            {/* Top Label */}
                            <div className="opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase border border-white/10 px-3 py-1 rounded-full">{caseStudies[0].category}</span>
                            </div>

                            {/* Center Hero Typography */}
                            <div className="flex flex-col justify-center items-center text-center flex-grow">
                                <h3 className="text-3xl md:text-4xl font-zangezi text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 group-hover:to-white transition-all duration-700 leading-tight mb-4">
                                    {caseStudies[0].title}
                                </h3>
                                <div className="h-[1px] w-12 bg-white/20 group-hover:w-24 transition-all duration-500 mb-6" />
                                <p className="text-gray-500 font-light text-sm max-w-[200px] group-hover:text-gray-300 transition-colors duration-500">
                                    {caseStudies[0].description}
                                </p>
                            </div>

                            {/* Bottom Action */}
                            <div className="flex justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="inline-flex items-center text-xs font-medium tracking-widest text-white uppercase group-hover:text-glow transition-all">
                                    View Strategy <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Panel B - Nate Leathers */}
                    {/* Panel B - Nate Leathers */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.1, ease: [0.2, 0.9, 0.2, 1] }}
                        viewport={{ once: true }}
                        onClick={() => handleOpenCase(caseStudies[1].id)}
                        className="group relative w-full max-w-[400px] h-[400px] md:self-end cursor-pointer rounded-2xl mx-auto md:mx-0 overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] bg-[#0A0A0A]"
                    >
                        {/* Premium Dark Surface & Ambient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-gray-900 via-black to-[#050505] opacity-100 z-0" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

                        {/* Content Layout */}
                        <div className="relative z-10 w-full h-full p-8 md:p-10 flex flex-col justify-between">
                            {/* Top Label */}
                            <div className="opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100 text-right w-full">
                                <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase border border-white/10 px-3 py-1 rounded-full">{caseStudies[1].category}</span>
                            </div>

                            {/* Center Hero Typography */}
                            <div className="flex flex-col justify-center items-center text-center flex-grow">
                                <h3 className="text-3xl md:text-4xl font-zangezi text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 group-hover:to-white transition-all duration-700 leading-tight mb-4">
                                    {caseStudies[1].title}
                                </h3>
                                <div className="h-[1px] w-12 bg-white/20 group-hover:w-24 transition-all duration-500 mb-6" />
                                <p className="text-gray-500 font-light text-sm max-w-[200px] group-hover:text-gray-300 transition-colors duration-500">
                                    {caseStudies[1].description}
                                </p>
                            </div>

                            {/* Bottom Action */}
                            <div className="flex justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="inline-flex items-center text-xs font-medium tracking-widest text-white uppercase group-hover:text-glow transition-all">
                                    Read Story <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>



            {/* PDF Modal (Unchanged functionality) */}
            <AnimatePresence>
                {selectedCase && selectedCaseStudy && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={handleCloseCase}
                    >
                        <button
                            onClick={handleCloseCase}
                            className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
                            aria-label="Close"
                        >
                            <X size={24} />
                        </button>

                        {isMobile && !isLandscape && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-40 p-8 text-center"
                            >
                                <Smartphone className="w-20 h-20 text-white mb-6 animate-pulse" />
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Rotate Your Device
                                </h3>
                                <p className="text-gray-300 text-lg">
                                    For the best viewing experience, please rotate your device to landscape mode
                                </p>
                            </motion.div>
                        )}

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6 z-10 pointer-events-none">
                                <h3 className="text-white font-bold text-xl">{selectedCaseStudy.title}</h3>
                            </div>

                            <iframe
                                src={selectedCaseStudy.pdfPath}
                                className="w-full h-full bg-white"
                                title={selectedCaseStudy.title}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CaseStudies;
