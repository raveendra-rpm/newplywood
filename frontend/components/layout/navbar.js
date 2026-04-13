"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { navLinks, siteConfig, services, products } from "@/data/site";

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
        <div className="container-nav flex h-24 items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group relative z-[2011]" onClick={closeMenu}>
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl shadow-sm px-2 py-1.5 transition-transform group-hover:scale-105 duration-300">
              <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0">
                <Image
                  src="/images/new_plywood_logo.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] sm:text-[12px] font-black text-slate-900 whitespace-nowrap">New ply &</p>
                <p className="text-[11px] sm:text-[12px] font-black text-slate-900 whitespace-nowrap">Board Center</p>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 xl:gap-6 2xl:gap-10 lg:flex h-full">
            {navLinks.map((link) => (
              <div key={link.label} className="relative h-full flex items-center group/nav">
                <div className="relative py-2">
                  <a
                    href={link.href}
                    className="text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold uppercase tracking-[0.1em] xl:tracking-[0.15em] 2xl:tracking-[0.2em] text-slate-800 transition hover:text-brand-red flex items-center gap-1"
                  >
                    {link.label}
                    {link.subItems && <ChevronRight size={14} className="rotate-90 text-slate-400" />}
                  </a>

                  {/* Underline - Moved closer to text */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover/nav:w-full"></span>
                </div>

                  {/* Standard Dropdown or Mega Menu */}
                  {link.subItems && (
                    <>
                      {link.isMegaMenu ? (
                        /* === MEGA MENU (SERVICES & PRODUCTS) === */
                        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[90vw] max-w-7xl bg-white border border-slate-100 p-8 shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 rounded-3xl">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {(link.label === "PRODUCTS" ? products : services).map((item) => (
                              <a
                                key={item.key}
                                href={`/${link.label.toLowerCase()}/${item.key}`}
                                onClick={closeMenu}
                                className="group/item flex flex-col gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1"
                              >
                                <div className="relative h-32 w-full rounded-xl overflow-hidden shadow-inner">
                                  <Image
                                    src={item.heroImage || item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover/item:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                </div>
                                <div>
                                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-1 group-hover/item:text-brand-red transition-colors flex items-center justify-between">
                                    {item.title}
                                    <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                                  </h4>
                                  <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed font-medium">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          
                          <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              {link.label === "PRODUCTS" ? "Premium Wood Solutions • Engineered for Strength" : "Expertly Crafted Solutions • Guaranteed Quality"}
                            </p>
                            <a href="#contact" className="text-[10px] font-black text-brand-red uppercase tracking-widest hover:underline">
                              {link.label === "PRODUCTS" ? "View Full Catalog →" : "Book Free Consultation →"}
                            </a>
                          </div>
                        </div>
                      ) : (
                        /* === STANDARD DROPDOWN (BRANCHES, etc.) === */
                        <div className="absolute top-[80px] left-[-20px] w-72 bg-white border border-slate-100 py-4 shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 rounded-xl">
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
                    </>
                  )}
                </div>
              ))}
            </nav>

          {/* Desktop Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className="hidden sm:flex px-4 xl:px-6 py-2.5 bg-[#b45309] !text-white text-[11px] xl:text-xs 2xl:text-sm font-black uppercase tracking-widest rounded-xl hover:bg-black transition-all shadow-xl shadow-[#b45309]/20 active:scale-95"
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
          <a href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl shadow-sm px-2 py-1.5">
              <div className="relative h-11 w-11 shrink-0">
                <Image
                  src="/images/new_plywood_logo.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <p className="text-[12px] font-black text-slate-900 whitespace-nowrap">New ply &</p>
                <p className="text-[12px] font-black text-slate-900 whitespace-nowrap">Board Center</p>
              </div>
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
                    className={`overflow-hidden transition-all duration-300 bg-slate-50 ${mobileExpanded === link.label ? 'max-h-[800px] py-4' : 'max-h-0'}`}
                  >
                    {link.isMegaMenu ? (
                      /* Mobile Grid (Services & Products) */
                      <div className="px-6 grid grid-cols-1 gap-2">
                        {(link.label === "PRODUCTS" ? products : services).map((item) => (
                          <a
                            key={item.key}
                            href={`/${link.label.toLowerCase()}/${item.key}`}
                            onClick={closeMenu}
                            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm"
                          >
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-slate-50">
                              <Image src={item.heroImage || item.image} alt={item.title} fill className="object-cover" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-700 leading-tight">
                              {item.title}
                            </span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      /* Standard Mobile List */
                      link.subItems.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={closeMenu}
                          className="block px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 border-l border-brand-red/30 hover:text-brand-red"
                        >
                          {sub.label}
                        </a>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Action */}
          <div className={`mt-auto pt-4 transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="/contact"
              onClick={closeMenu}
              className="flex w-full py-4 bg-[#b45309] !text-white text-center justify-center items-center rounded-xl font-black uppercase tracking-widest text-base shadow-2xl shadow-[#b45309]/30 active:scale-95"
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
