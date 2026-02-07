import { useEffect } from "react";
import { Mail, Phone, Instagram, Linkedin, Users } from "lucide-react";

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
        layout: "month_view",
        config: {
          layout: "month_view",
          theme: "dark"
        }
      });

      Cal.ns["30min"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#ffffff"
          }
        }
      });
    }
  }, []);

  const socialLinks = [
    { platform: "Instagram", icon: Instagram, link: "https://instagram.com/dimemotion", color: "hover:text-pink-400" },
    { platform: "LinkedIn", icon: Linkedin, link: "https://in.linkedin.com/in/krish-kumar-b1b49625a", color: "hover:text-blue-400" },
    { platform: "Behance", icon: Users, link: "https://behance.net/dimemotion", color: "hover:text-purple-400" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black min-h-screen">
      {/* Background: Pure Black */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white hover:text-glow transition-all duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Book a Discovery Call
          </h2>
          <p className="text-xl text-gray-300 drop-shadow-md">
            Let's discuss how we can scale your brand
          </p>
        </div>

        {/* Main Cal.com Container */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="card-glass rounded-2xl p-4 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
            {/* Cal.com Embed */}
            <div id="cal-embed" className="w-full h-[600px] md:h-[700px] overflow-hidden rounded-xl bg-black"></div>
          </div>
        </div>

        {/* Contact Info Footer (Secondary) */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Email */}
          <div className="card-glass rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/5 hover:border-white/20 transition-all group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm">krish@dimemotion.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="card-glass rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/5 hover:border-white/20 transition-all group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm">+91 70602 25281</p>
            </div>
          </div>

          {/* Socials */}
          <div className="card-glass rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/5 hover:border-white/20 transition-all group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} transition-colors`}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;