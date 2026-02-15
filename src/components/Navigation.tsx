import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import { smoothScrollTo } from '../utils/smoothScroll';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#short-form' },
    { name: 'Testimonial', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      smoothScrollTo(href.substring(1));
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-auto min-w-[320px] md:min-w-[500px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl z-50 transition-all duration-300">
        <div className="px-8 py-3 relative">
          <div className="flex items-center justify-between gap-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                id="navbar-logo"
                src={logo}
                alt="Dime Motion Logo"
                className="h-8 w-auto object-contain transition-opacity duration-300"
                style={{ opacity: 0 }}
              />
            </div>

            {/* Desktop Navigation - Wide Spacing */}
            <div className="hidden lg:flex items-center justify-center space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-white/70 hover:text-white transition-all duration-300 text-[10px] font-bold tracking-[0.3em] uppercase"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="lg:hidden ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-gray-200 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-24 right-4 w-64 bg-[#111] border border-white/10 rounded-2xl shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out lg:hidden overflow-hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[150%]'
          }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-white hover:text-[#FFDA7B] transition-colors duration-200 text-lg font-medium py-3 border-b border-white/10 last:border-0"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;