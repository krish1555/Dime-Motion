import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Smartphone } from 'lucide-react';
import cryptoVicPdf from '@/assets/Crypto Vic.pdf';
import lukeDavisPdf from '@/assets/Luke Davis.pdf';
import nateLeathersPdf from '@/assets/nate leathers.pdf';
import bg4 from '@/assets/bg-4.jpg';
// Import the Flywheel Component to embed it directly
import HowItWorks from './HowItWorks';

const CaseStudies = () => {
    const [selectedCase, setSelectedCase] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);

    const caseStudies = [
        {
            id: 1,
            title: "Crypto Vic",
            description: "Innovative cryptocurrency platform branding and visual identity",
            pdfPath: cryptoVicPdf,
            gradient: "from-blue-600 to-purple-600",
            hoverGradient: "from-blue-500 to-purple-500",
        },
        {
            id: 2,
            title: "Luke Davis",
            description: "Personal brand development and creative storytelling",
            pdfPath: lukeDavisPdf,
            gradient: "from-purple-600 to-pink-600",
            hoverGradient: "from-purple-500 to-pink-500",
        },
        {
            id: 3,
            title: "Nate Leathers",
            description: "Strategic scaling for premium e-commerce brand",
            pdfPath: nateLeathersPdf,
            gradient: "from-orange-600 to-red-600",
            hoverGradient: "from-orange-500 to-red-500",
        },
    ];

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
        <section id="case-studies" className="pt-24 pb-0 bg-black relative overflow-hidden">
            {/* 
                BACKGROUND SYSTEM:
                1. Top Layer: bg-4 fading IN from top, then fading OUT quickly to black.
                2. Base Layer: Pitch Black.
            */}

            {/* Top Blend from previous section (bg-4) */}
            <div className="absolute top-0 left-0 right-0 h-[40vh] z-0 pointer-events-none">
                <img
                    src={bg4}
                    alt="Background Blend"
                    className="w-full h-full object-cover opacity-60 mix-blend-screen"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
                    }}
                />
                {/* Ensure fade to pure black */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20 mb-32">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-white">
                        Case Studies
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore our success stories and creative solutions
                    </p>
                </motion.div>

                {/* Case Study Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {caseStudies.map((caseStudy, index) => (
                        <motion.div
                            key={caseStudy.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            onClick={() => handleOpenCase(caseStudy.id)}
                            className="relative group cursor-pointer"
                        >
                            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-96">
                                <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />

                                <div className="relative h-full flex flex-col justify-between p-10">
                                    <div>
                                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white backdrop-blur-md border border-white/10">
                                            <FileText className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-3">
                                            {caseStudy.title}
                                        </h3>
                                        <p className="text-gray-400 text-lg leading-relaxed">
                                            {caseStudy.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                                        <span>View Strategy</span>
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Embedded Flywheel Section at the bottom */}
            <div className="relative z-10">
                <HowItWorks />
            </div>

            {/* PDF Modal */}
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
