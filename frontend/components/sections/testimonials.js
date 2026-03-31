"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/site";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    // Determine items visible (default desktop = 3)
    const itemsVisible = typeof window !== 'undefined' && window.innerWidth < 1024 ? (window.innerWidth < 768 ? 1 : 2) : 3;
    const maxIndex = testimonials.length - itemsVisible;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const itemsVisible = typeof window !== 'undefined' && window.innerWidth < 1024 ? (window.innerWidth < 768 ? 1 : 2) : 3;
    const maxIndex = testimonials.length - itemsVisible;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="testimonials" className="section-space bg-white overflow-hidden">
      <div className="container-shell">
        {/* Left Aligned Heading */}
        <div className="mb-20">
          <span className="text-brand-red text-sm font-black uppercase tracking-[0.3em] block mb-4">
            WHAT OUR CUSTOMERS SAY
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight">
            Building Trust
          </h2>
        </div>

        {/* Text Testimonials Slider */}
        <div className="relative mb-32">
          {/* Navigation Controls - Top Right / Floating Position */}
          <div className="absolute -top-16 right-0 flex gap-4">
            <button 
              onClick={prevSlide}
              className="h-12 w-12 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-500 hover:border-brand-red hover:text-brand-red transition-all active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="h-12 w-12 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-500 hover:border-brand-red hover:text-brand-red transition-all active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="overflow-hidden px-2">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-8"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * (32 / 3)}px))`,
                // Adjusting for mobile/tablet in CSS below
              }}
            >
              {testimonials.map((item, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)] flex-shrink-0 bg-[#F7F7F7] p-10 py-12 rounded-3xl flex flex-col gap-8 relative group hover:shadow-xl transition-all duration-500"
                >
                  {/* Large Red Quotes */}
                  <div className="text-brand-red leading-none h-8">
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 30H14.1176L18.8235 18.8235V0H0V30ZM21.1765 30H35.2941L40 18.8235V0H21.1765V30Z" fill="currentColor"/>
                    </svg>
                  </div>

                  <p className="text-slate-600 text-lg font-medium leading-relaxed">
                    {item.quote}
                  </p>

                  <div className="flex items-center gap-5 pt-4 mt-auto">
                    <div className="h-16 w-16 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-md relative">
                       {item.avatar ? (
                          <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                       ) : (
                          <div className="h-full w-full flex items-center justify-center font-bold text-slate-400">{item.name[0]}</div>
                       )}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-lg">{item.name}</h4>
                      <p className="text-slate-500 text-sm font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @media (max-width: 1023px) {
              div[style*="translateX"] {
                transform: translateX(calc(-${currentIndex * 50}% - ${currentIndex * 16}px)) !important;
              }
            }
            @media (max-width: 767px) {
              div[style*="translateX"] {
                transform: translateX(calc(-${currentIndex * 100}% - ${currentIndex * 32}px)) !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
