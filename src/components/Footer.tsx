import { Mail, Instagram, Linkedin, Users } from "lucide-react";
import logo from "@/assets/black logo.png";

const Footer = () => {
  const socialLinks = [
    { platform: "Instagram", icon: Instagram, link: "https://instagram.com/dimemotion" },
    { platform: "LinkedIn", icon: Linkedin, link: "https://in.linkedin.com/in/krish-kumar-b1b49625a" },
    { platform: "Behance", icon: Users, link: "https://behance.net/dimemotion" }
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-6">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

          {/* Left - Logo & Info */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <img
              src={logo}
              alt="Dime Motion Logo"
              className="w-10 h-10 object-contain"
            />

            <h3 className="font-heading text-xl font-bold text-black">
              Dime Motion
            </h3>

            <a
              href="mailto:krish@dimemotion.com"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Email: krish@dimemotion.com
            </a>
          </div>

          {/* Right - Socials */}
          <div className="flex gap-4 md:mt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-400 hover:bg-gray-200 text-gray-500 hover:text-black transition-all group"
                title={social.platform}
              >
                <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-400 text-xs">
            © 2025 Dime Motion. All rights reserved. | Crafting the future of digital creativity.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;