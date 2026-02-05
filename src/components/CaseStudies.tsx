import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Smartphone } from 'lucide-react';
import cryptoVicPdf from '@/assets/Crypto Vic.pdf';
import lukeDavisPdf from '@/assets/Luke Davis.pdf';

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
    ];

    // Detect mobile and orientation
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
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const handleCloseCase = () => {
        setSelectedCase(null);
        document.body.style.overflow = 'auto';
    };

    const selectedCaseStudy = caseStudies.find(cs => cs.id === selectedCase);

    return (
        <section id="case-studies" className="py-16 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black pointer-events-none" />

            <motion.div
                className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-white">
                        Case Studies
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore our success stories and creative solutions
                    </p>
                </motion.div>

                {/* Case Study Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                            {/* Card */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-80">
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-between p-8">
                                    <div>
                                        <FileText className="w-12 h-12 text-white mb-4" />
                                        <h3 className="text-3xl font-bold text-white mb-3">
                                            {caseStudy.title}
                                        </h3>
                                        <p className="text-gray-300 text-lg">
                                            {caseStudy.description}
                                        </p>
                                    </div>

                                    {/* View Button */}
                                    <div className="flex items-center gap-2 text-white font-medium">
                                        <span>View Case Study</span>
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Glow Effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${caseStudy.hoverGradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
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
                        {/* Close Button */}
                        <button
                            onClick={handleCloseCase}
                            className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                            aria-label="Close"
                        >
                            <X size={24} />
                        </button>

                        {/* Mobile Portrait Warning */}
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
                                <motion.div
                                    animate={{ rotate: [0, 90, 90, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    className="mt-8"
                                >
                                    <Smartphone className="w-16 h-16 text-blue-400" />
                                </motion.div>
                            </motion.div>
                        )}

                        {/* PDF Viewer */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-black p-4 z-10">
                                <h3 className="text-white font-bold text-xl">{selectedCaseStudy.title}</h3>
                            </div>

                            {/* PDF Embed */}
                            <iframe
                                src={selectedCaseStudy.pdfPath}
                                className="w-full h-full pt-16"
                                title={selectedCaseStudy.title}
                            />

                            {/* Fallback for browsers that don't support iframe PDF viewing */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                                <a
                                    href={selectedCaseStudy.pdfPath}
                                    download
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-lg transition-colors"
                                >
                                    Download PDF
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CaseStudies;
