import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollTo } from '../utils/smoothScroll';

const Process = () => {
    const [activeTab, setActiveTab] = useState<'brand' | 'podcast'>('podcast');

    const podcastingPlans = [
        {
            name: "CLIPPING",
            description: "For founders who already record podcasts but want to go viral.",
            items: [
                "Post-production from existing podcasts",
                "60-100 short-form clips/month",
                "Advanced multi-platform distribution (IG, LinkedIn, X, YT)",
                "Guaranteed virality through algorithm-tested editing"
            ],
            outcome: "Explosive top-of-funnel awareness & reach."
        },
        {
            name: "SCALE",
            description: "For founders ready to turn content into a distribution machine.",
            items: [
                "Content audit + pre-production planning",
                "Post-production at scale",
                "State-of-the-art short-form distribution for maximum discovery",
                "Advanced multi-platform distribution (IG, LinkedIn, X, YT)",
                "Dedicated strategist + account manager",
                "Media reports & analytics"
            ],
            outcome: "Predictable growth, authority building, consistent inbound."
        },
        {
            name: "LAUNCH",
            description: "For founders ready to turn content into a distribution machine.",
            items: [
                "Pre-production (show concept, branding, positioning)",
                "Post-production (long-form + clips)",
                "Guest list curation & invitations",
                "Studio booking & logistics handling",
                "Thought-leadership ghostwriting (LinkedIn posts, Twitter threads, newsletters)",
                "Advanced multi-platform distribution (IG, LinkedIn, X, YT)",
                "Dedicated strategist + account manager",
                "Media reports & analytics"
            ],
            outcome: "From zero → an industry-leading podcast + distribution system within 6 months."
        }
    ];

    const brandScalingPlans = [
        {
            name: "AUTHORITY ENGINE™ - GROWTH",
            description: "For coaches & founders ready to scale discovery & authority.",
            items: [
                "Strategy, ideation & scripting",
                "12-16 high-fidelity short-form videos/month",
                "Strategic content calendar + narrative design",
                "Multi-platform distribution (IG, LinkedIn, YT Shorts)",
                "Monthly growth tracking + optimization"
            ],
            outcomes: [
                "Build trust, compound attention, attract inbound clients.",
                "From “posting randomly” → predictable growth."
            ]
        }
    ];

    const activePlans = activeTab === 'podcast' ? podcastingPlans : brandScalingPlans;

    return (
        <section id="process" className="pt-16 pb-8 md:pt-20 md:pb-10 bg-transparent relative overflow-hidden">
            {/* Background Texture Element (Optional - subtle circle hint) */}
            <div className="absolute top-1/2 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="mb-6 text-center">
                    <h2 className="font-zangezi text-4xl md:text-5xl font-bold text-white mb-6">
                        How to <span className="relative inline-block">
                            work with us
                            <span className="absolute bottom-1 left-0 w-full h-1 bg-white/40 rounded-full"></span>
                        </span>?
                    </h2>

                    {/* Toggle Switch */}
                    <div className="flex justify-center mb-6">
                        <div className="bg-[#1a1a1a] p-1 rounded-full inline-flex relative border border-white/10">
                            {/* Sliding Background */}
                            <motion.div
                                className="absolute top-1 bottom-1 bg-transparent border border-white/40 rounded-full z-0"
                                initial={false}
                                animate={{
                                    left: activeTab === 'brand' ? '4px' : '50%',
                                    x: activeTab === 'brand' ? 0 : 4, // Adjust for padding
                                    width: 'calc(50% - 8px)'
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                            <button
                                onClick={() => setActiveTab('brand')}
                                className={`relative z-10 px-5 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === 'brand' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                Brand Scaling
                            </button>
                            <button
                                onClick={() => setActiveTab('podcast')}
                                className={`relative z-10 px-5 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === 'podcast' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                Podcasting
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence mode='wait'>
                    {activeTab === 'brand' ? (
                        /* BRAND SCALING SINGLE WIDE CARD LAYOUT */
                        <motion.div
                            key="brand-layout"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-4xl mx-auto"
                        >
                            {/* @ts-ignore */}
                            {brandScalingPlans.map((plan, index) => (
                                <div key={index} className="bg-[#111] border border-white/10 rounded-3xl p-5 md:p-6 hover:border-white/30 transition-colors duration-300 shadow-2xl">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-3 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                            {plan.name}
                                        </span>
                                        <p className="text-white text-base md:text-lg font-light leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        {/* Left Col: Included */}
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-3 border-b border-white/20 pb-1 inline-block">
                                                What's included:
                                            </h4>
                                            <ul className="space-y-2">
                                                {plan.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2.5">
                                                        <div className="mt-0.5 min-w-[16px]">
                                                            <div className="w-3.5 h-3.5 mt-0.5 rounded-[2px] border border-white/40 flex items-center justify-center bg-transparent">
                                                                <Check size={9} className="text-white" strokeWidth={3} />
                                                            </div>
                                                        </div>
                                                        <span className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Right Col: Outcome */}
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-3 border-b border-white/20 pb-1 inline-block">
                                                Outcome:
                                            </h4>
                                            <ul className="space-y-2">
                                                {/* @ts-ignore */}
                                                {plan.outcomes?.map((outcome: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2.5">
                                                        <div className="mt-0.5 min-w-[16px]">
                                                            <div className="w-3.5 h-3.5 mt-0.5 rounded-[2px] border border-white/40 flex items-center justify-center bg-transparent">
                                                                <Check size={9} className="text-white" strokeWidth={3} />
                                                            </div>
                                                        </div>
                                                        <span className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                                            {outcome}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <div className="relative group w-full">
                                        {/* Animated border glow */}
                                        <div className="absolute inset-[-1px] rounded-full overflow-hidden">
                                            <div
                                                className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_95%,#fff_100%)]"
                                                style={{ animation: "spin 4s ease-in-out infinite" }}
                                            />
                                        </div>
                                        <button
                                            onClick={() => smoothScrollTo('contact')}
                                            className="relative w-full px-8 py-3.5 text-sm sm:text-base md:text-lg font-bold tracking-wide bg-[#FFDA7B] text-black rounded-full border border-[#FFDA7B]/50 hover:bg-[#FBC02D] hover:scale-[1.01] transition-all duration-300 shadow-[0_0_30px_rgba(255,218,123,0.3)] flex items-center justify-center gap-2"
                                        >
                                            Get started
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        /* PODCASTING GRID LAYOUT */
                        <motion.div
                            key="podcast-layout"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:gap-6 max-w-7xl mx-auto"
                        >
                            {podcastingPlans.map((plan, index) => (
                                <div
                                    key={plan.name}
                                    className="flex flex-col h-full bg-[#111] border border-white/10 rounded-2xl p-4 hover:border-white/30 transition-colors duration-300 group"
                                >
                                    <div className="mb-3">
                                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#222] text-white text-[11px] font-bold tracking-widest uppercase mb-2 border border-white/20">
                                            {plan.name}
                                        </span>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <ul className="space-y-2 mb-4 flex-grow">
                                        {plan.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <div className="mt-0.5 min-w-[16px]">
                                                    <div className="w-3.5 h-3.5 mt-0.5 rounded-[2px] border border-white/40 flex items-center justify-center bg-transparent group-hover:border-white transition-colors">
                                                        <Check size={9} className="text-white" strokeWidth={3} />
                                                    </div>
                                                </div>
                                                <span className="text-gray-400 text-xs leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mb-4 pt-3 border-t border-white/10">
                                        <p className="text-[11px] text-gray-300">
                                            <span className="text-white font-bold underline decoration-white/30 underline-offset-2">Outcome:</span> {/* @ts-ignore */}{plan.outcome}
                                        </p>
                                    </div>

                                    <div className="relative group">
                                        {/* Animated border glow */}
                                        <div className="absolute inset-[-1px] rounded-full overflow-hidden">
                                            <div
                                                className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_95%,#fff_100%)]"
                                                style={{ animation: "spin 4s ease-in-out infinite" }}
                                            />
                                        </div>
                                        <button
                                            onClick={() => smoothScrollTo('contact')}
                                            className="relative w-full px-6 py-3 text-sm font-bold tracking-wide bg-[#FFDA7B] text-black rounded-full border border-[#FFDA7B]/50 hover:bg-[#FBC02D] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,218,123,0.3)] flex items-center justify-center gap-2"
                                        >
                                            Get started
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Process;
