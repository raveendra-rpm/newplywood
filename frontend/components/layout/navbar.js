"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const [mobileExpanded, setMobileExpanded] = useState(null);

  const toggleMobileSubmenu = (label) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <>
      <header className={`sticky top-0 z-[1000] border-b border-slate-100 ${isMenuOpen ? 'bg-white' : 'bg-white/95 backdrop-blur-xl'} transition-all duration-300`}>
        <div className="container-shell flex h-24 items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group relative z-[2011]" onClick={closeMenu}>
            <div className="relative h-16 w-60 sm:h-18 sm:w-72 md:h-20 md:w-80 transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/images/new_plywood_logo.png"
                alt={siteConfig.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex h-full">
            {navLinks.map((link) => (
              <div key={link.label} className="relative h-full flex items-center group/nav">
                <div className="relative py-2">
                  <a
                    href={link.href}
                    className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-800 transition hover:text-brand-red flex items-center gap-1"
                  >
                    {link.label}
                    {link.subItems && <ChevronRight size={14} className="rotate-90 text-slate-400" />}
                  </a>

                  {/* Underline - Moved closer to text */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover/nav:w-full"></span>
                </div>

                {/* Dropdown Menu */}
                {link.subItems && (
                  <div className="absolute top-[80px] left-[-20px] w-72 bg-white border border-slate-100 py-4 shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300">
                    {link.subItems.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-brand-red hover:bg-slate-50 transition-colors border-l-2 border-transparent hover:border-brand-red"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:flex px-6 py-2.5 bg-brand-red !text-white text-sm font-black uppercase tracking-widest rounded-xl hover:bg-black transition-all shadow-xl shadow-brand-red/20 active:scale-95"
            >
              Enquiry
            </a>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all active:scale-90 z-[2001] border border-slate-200"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Integrated top-bar for absolute visibility */}
      <div
        className={`fixed inset-0 z-[2000] bg-white transition-all duration-500 ease-in-out lg:hidden w-full h-full ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile Overlay Header */}
        <div className="flex h-20 items-center justify-between px-5 md:px-10 border-b border-slate-100">
          <a href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="relative h-14 w-52 sm:h-16 sm:w-64">
              <Image
                src="/images/new_plywood_logo.png"
                alt={siteConfig.name}
                fill
                className="object-contain"
              />
            </div>
          </a>
          <button
            onClick={toggleMenu}
            className="p-2 text-slate-900 bg-slate-50 rounded-xl border border-slate-100"
            aria-label="Close Menu"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-80px)] px-8 pb-8 overflow-y-auto">
          {/* Mobile Links */}
          <div className="flex flex-col gap-1 mt-8 mb-6">
            {navLinks.map((link, index) => (
              <div key={link.label} className="border-b border-slate-50">
                {link.subItems ? (
                  <button
                    onClick={() => toggleMobileSubmenu(link.label)}
                    className={`w-full text-lg font-bold uppercase tracking-[0.2em] text-slate-900 flex items-center justify-between group transition-all duration-300 py-4 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  >
                    {link.label}
                    <ChevronRight size={18} className={`text-brand-red transition-transform duration-300 ${mobileExpanded === link.label ? 'rotate-90' : ''}`} />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`text-lg font-bold uppercase tracking-[0.2em] text-slate-900 flex items-center justify-between group transition-all duration-300 py-4 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  >
                    {link.label}
                    <ChevronRight size={18} className="text-brand-red group-hover:translate-x-2 transition-transform" />
                  </a>
                )}

                {/* Mobile Subitems (Accordion) */}
                {link.subItems && (
                  <div 
                    className={`overflow-hidden transition-all duration-300 bg-slate-50 ${mobileExpanded === link.label ? 'max-h-[500px] py-4' : 'max-h-0'}`}
                  >
                    {link.subItems.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={closeMenu}
                        className="block px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 border-l border-brand-red/30 hover:text-brand-red"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Action */}
          <div className={`mt-auto pt-4 transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex w-full py-4 bg-brand-red !text-white text-center justify-center items-center rounded-xl font-black uppercase tracking-widest text-base shadow-2xl shadow-brand-red/30 active:scale-95"
            >
              Start Enquiry
            </a>
            
            <div className="mt-8 flex flex-col items-center gap-2 text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
                 <span>{siteConfig.phone}</span>
                 <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-100 rounded-full"></span>
                    <span>Premium Plywood</span>
                    <span className="w-1.5 h-1.5 bg-slate-100 rounded-full"></span>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
