import { useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Initialize Cal.com widget
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-ignore
    const Cal = window.Cal;
    if (Cal) {
      Cal("init", "30min", { origin: "https://app.cal.com" });

      Cal.ns["30min"]("inline", {
        elementOrSelector: "#cal-embed",
        calLink: "krish-dimemotion/30min",
        config: {
          theme: "light"
        }
      });

      Cal.ns["30min"]("ui", {
        hideEventTypeDetails: false,
        theme: "light",
        styles: {
          branding: {
            brandColor: "#000000"
          }
        }
      });
    }
  }, []);

  return (
    <section id="contact" className="pt-16 pb-4 md:pt-20 md:pb-6 relative overflow-hidden bg-transparent">
      {/* Light Overlay if needed, or just let white background show */}
      {/* <div className="absolute inset-0 z-0 bg-white" /> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="font-zangezi text-4xl md:text-5xl font-bold mb-3 text-white hover:text-glow transition-all duration-300">
            Book a Discovery Call
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto drop-shadow-md">
            Let's discuss how we can scale your brand
          </p>
        </div>

        {/* Main Cal.com Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-4"
        >
          <div className="rounded-2xl p-1 md:p-4 bg-white border border-gray-200 shadow-2xl">
            {/* Cal.com Embed */}
            <div id="cal-embed" className="w-full h-[600px] md:h-[480px] overflow-hidden rounded-xl bg-white"></div>


          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Contact;