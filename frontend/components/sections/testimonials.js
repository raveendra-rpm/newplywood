"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials, videoTestimonials } from "@/data/site";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import VideoModal from "@/components/ui/video-modal";

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-space bg-white overflow-hidden">
      <div className="container-shell">
        {/* Left Aligned Heading */}
        <div className="mb-20">
          <span className="text-red-600 text-sm font-black uppercase tracking-[0.3em] block mb-4">
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
              className="h-12 w-12 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-500 hover:border-red-600 hover:text-red-600 transition-all active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="h-12 w-12 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-500 hover:border-red-600 hover:text-red-600 transition-all active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="transition-all duration-700 flex gap-8">
            {/* Desktop View: Show 3 (sliding logic simplified for demo, or just mapping all with flex-wrap for now) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {testimonials.map((item, index) => {
                // Determine visibility logic or just show 3 for simplicity if desktop
                return (
                  <div 
                    key={index} 
                    className="bg-[#F7F7F7] p-10 py-12 rounded-3xl flex flex-col gap-8 relative group hover:shadow-xl transition-all duration-500"
                  >
                    {/* Large Red Quotes */}
                    <div className="text-red-600 leading-none h-8">
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
                );
              })}
            </div>
          </div>
        </div>

        {/* Video Testimonials - OUR VALUABLE CUSTOMERS */}
        <div className="pt-24 border-t border-slate-100">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-widest flex items-center justify-center gap-6">
               <div className="h-0.5 w-12 bg-slate-100" />
               OUR VALUABLE CUSTOMERS
               <div className="h-0.5 w-12 bg-slate-100" />
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {videoTestimonials.map((video) => (
              <div 
                key={video.id} 
                onClick={() => setActiveVideo(video.youtubeId)}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer shadow-lg transition-all hover:scale-[1.02]"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <div className="h-16 w-16 bg-white/20 backdrop-blur-xl rounded-full border-2 border-white/40 flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:bg-red-600 group-hover:border-white shadow-2xl">
                    <Play size={24} className="text-white fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <VideoModal 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
        videoId={activeVideo} 
      />
    </section>
  );
}
