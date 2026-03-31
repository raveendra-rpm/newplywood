"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig, heroSlides } from "@/data/site";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] overflow-hidden bg-slate-900">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-110 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Dimming overlay removed for maximum clarity of background image */}
          
          {/* Text overlays removed as per user request to show background image content clearly */}

        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide} 
        className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:flex p-4 bg-white/90 hover:bg-white backdrop-blur-xl border-2 border-white/20 rounded-full text-[#d97706] transition-all hover:scale-110 active:scale-95 shadow-2xl z-30"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex p-4 bg-white/90 hover:bg-white backdrop-blur-xl border-2 border-white/20 rounded-full text-[#d97706] transition-all hover:scale-110 active:scale-95 shadow-2xl z-30"
      >
        <ChevronRight size={32} />
      </button>

      {/* Progress Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 transition-all duration-500 rounded-full shadow-lg ${
              i === current ? "w-16 bg-brand-red" : "w-8 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
