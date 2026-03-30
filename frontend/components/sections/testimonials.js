"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials, videoTestimonials } from "@/data/site";
import { Star, Play, Quote } from "lucide-react";
import VideoModal from "@/components/ui/video-modal";

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="testimonials" className="section-space bg-white">
      <div className="container-shell">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-kicker">What Users Say About Us</span>
          <h2 className="h2-title mt-2 font-black uppercase tracking-tighter">Trusted by <span>Industry Professionals</span></h2>
          <p className="text-slate-600 font-medium">
            Hear from architects, builders, and dealers who rely on Sailee Plywood for their premium projects.
          </p>
        </div>

        {/* Text Testimonials */}
        <div className="grid md:grid-cols-2 gap-10 mb-24 transition-all duration-700">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 flex flex-col gap-8 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <Quote size={64} className="text-brand-red opacity-10 absolute top-12 right-12 group-hover:opacity-30 transition-opacity" />
              <div className="flex gap-1.5 pt-2">
                {[...Array(item.rating)].map((_, idx) => (
                  <Star key={idx} size={20} className="fill-brand-red text-brand-red" />
                ))}
              </div>
              <p className="text-slate-800 text-xl font-bold leading-relaxed italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-5 pt-8 border-t border-slate-200">
                <div className="h-14 w-14 rounded-2xl bg-brand-red flex items-center justify-center text-white font-black text-2xl uppercase shadow-lg shadow-brand-red/30">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">{item.name}</h4>
                  <p className="text-slate-400 text-xs tracking-[0.2em] uppercase font-black">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-slate-900 uppercase tracking-widest inline-block relative px-4">
               OUR VALUABLE CUSTOMERS
               <div className="h-1 w-full bg-brand-red absolute -bottom-4 left-0" />
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {videoTestimonials.map((video) => (
              <div 
                key={video.id} 
                onClick={() => setActiveVideo(video.youtubeId)}
                className="relative aspect-square rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl border-4 border-white transition-all hover:scale-105 active:scale-95"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <div className="h-20 w-20 bg-white/20 backdrop-blur-xl rounded-full border-4 border-white/40 flex items-center justify-center group-hover:scale-125 transition-all duration-500 group-hover:bg-brand-red group-hover:border-white shadow-2xl">
                    <Play size={32} className="text-white fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white text-xs font-black uppercase tracking-[0.2em]">{video.title}</p>
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
