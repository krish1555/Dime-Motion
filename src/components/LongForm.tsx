import { motion } from 'framer-motion';

const LongForm = () => {
  return (
    <section id="long-form" className="py-8 md:py-12 relative overflow-hidden flex flex-col justify-center min-h-[50vh] bg-transparent">
      {/* Reduced local background opacity to let global texture show through */}
      <div className="absolute inset-0 z-0 bg-black/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
            <h3 className="font-zangezi text-4xl md:text-5xl font-bold mb-4 text-white hover:text-glow transition-all duration-300">
              Featured Long Form Content
            </h3>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
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
      </div>
    </section>
  );
};

export default LongForm;
