import React, { useState } from 'react';
import { Check } from 'lucide-react';
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
        <section id="process" className="py-24 bg-black relative overflow-hidden">
            {/* Background Texture Element (Optional - subtle circle hint) */}
            <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#FFDA7B]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#FFDA7B]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        How to <span className="relative inline-block">
                            work with us
                            <span className="absolute bottom-1 left-0 w-full h-1 bg-[#FFDA7B] rounded-full"></span>
                        </span>?
                    </h2>

                    {/* Toggle Switch */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-[#1a1a1a] p-1 rounded-full inline-flex relative border border-white/10">
                            {/* Sliding Background */}
                            <motion.div
                                className="absolute top-1 bottom-1 bg-transparent border border-[#FFDA7B] rounded-full z-0"
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
                                className={`relative z-10 px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 ${activeTab === 'brand' ? 'text-[#FFDA7B]' : 'text-gray-400 hover:text-white'}`}
                            >
                                Brand Scaling
                            </button>
                            <button
                                onClick={() => setActiveTab('podcast')}
                                className={`relative z-10 px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 ${activeTab === 'podcast' ? 'text-[#FFDA7B]' : 'text-gray-400 hover:text-white'}`}
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
                            className="max-w-5xl mx-auto"
                        >
                            {/* @ts-ignore */}
                            {brandScalingPlans.map((plan, index) => (
                                <div key={index} className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 hover:border-[#FFDA7B]/30 transition-colors duration-300 shadow-2xl">
                                    <div className="mb-8">
                                        <span className="inline-block px-4 py-2 rounded-md bg-[#FFDA7B]/10 text-[#FFDA7B] text-sm md:text-base font-bold tracking-widest uppercase mb-4 border border-[#FFDA7B]/20 shadow-[0_0_15px_rgba(255,218,123,0.1)]">
                                            {plan.name}
                                        </span>
                                        <p className="text-white text-xl md:text-2xl font-light leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                        {/* Left Col: Included */}
                                        <div>
                                            <h4 className="text-lg font-bold text-[#FFDA7B] mb-6 border-b border-[#FFDA7B]/30 pb-2 inline-block">
                                                What's included:
                                            </h4>
                                            <ul className="space-y-4">
                                                {plan.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="mt-1 min-w-[18px]">
                                                            <div className="w-4 h-4 mt-0.5 rounded-[2px] border border-white/40 flex items-center justify-center bg-transparent">
                                                                <Check size={10} className="text-white" strokeWidth={3} />
                                                            </div>
                                                        </div>
                                                        <span className="text-gray-300 text-base leading-relaxed">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Right Col: Outcome */}
                                        <div>
                                            <h4 className="text-lg font-bold text-[#FFDA7B] mb-6 border-b border-[#FFDA7B]/30 pb-2 inline-block">
                                                Outcome:
                                            </h4>
                                            <ul className="space-y-4">
                                                {/* @ts-ignore */}
                                                {plan.outcomes?.map((outcome: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="mt-1 min-w-[18px]">
                                                            <div className="w-4 h-4 mt-0.5 rounded-[2px] border border-white/40 flex items-center justify-center bg-transparent">
                                                                <Check size={10} className="text-white" strokeWidth={3} />
                                                            </div>
                                                        </div>
                                                        <span className="text-gray-300 text-base leading-relaxed">
                                                            {outcome}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <button
                                        onClick={() => smoothScrollTo('contact')}
                                        className="w-full bg-[#FFDA7B] hover:bg-[#FBC02D] text-black font-bold py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-[1.01] shadow-[0_4px_20px_0_rgba(255,218,123,0.3)]"
                                    >
                                        Get started
                                    </button>
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
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-7xl mx-auto"
                        >
                            {podcastingPlans.map((plan, index) => (
                                <div
                                    key={plan.name}
                                    className="flex flex-col h-full bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-[#FFDA7B]/50 transition-colors duration-300 group"
                                >
                                    <div className="mb-6">
                                        <span className="inline-block px-4 py-1.5 rounded-md bg-[#222] text-[#FFDA7B] text-xs font-bold tracking-widest uppercase mb-4 border border-[#FFDA7B]/20">
                                            {plan.name}
                                        </span>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1 min-w-[18px]">
                                                    <div className="w-4 h-4 mt-0.5 rounded-[2px] border border-white/40 flex items-center justify-center bg-transparent group-hover:border-[#FFDA7B] transition-colors">
                                                        <Check size={10} className="text-white group-hover:text-[#FFDA7B]" strokeWidth={3} />
                                                    </div>
                                                </div>
                                                <span className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mb-8 pt-6 border-t border-white/10">
                                        <p className="text-sm text-gray-300">
                                            <span className="text-[#FFDA7B] font-bold underline decoration-[#FFDA7B]/50 underline-offset-2">Outcome:</span> {/* @ts-ignore */}{plan.outcome}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => smoothScrollTo('contact')}
                                        className="w-full bg-[#FFDA7B] hover:bg-[#FBC02D] text-black font-bold py-4 rounded-full transition-all duration-300 transform group-hover:scale-[1.02] shadow-[0_4px_14px_0_rgba(255,218,123,0.3)]"
                                    >
                                        Get started
                                    </button>
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
