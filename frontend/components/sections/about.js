"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  CheckCircle2, 
  Play, 
  ArrowRight
} from "lucide-react";
import { siteConfig } from "@/data/site";
import VideoModal from "@/components/ui/video-modal";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  const points = [
    "We have more than 5+ stores.",
    "Largest plywood chain in Uttar Pradesh.",
    "We use only high-quality plywood",
    "We have a team of top interior designers and architects",
    "Excellent service and guarantees to build customer trust"
  ];


  return (
    <section id="about" className="py-32 bg-[#fff7ed] overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/40 -skew-x-12 translate-x-1/2 z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />

      <div className="container-shell relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Story & Content */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-16 bg-brand-red"></span>
                <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[11px]">
                  ESTABLISHED EXCELLENCE
                </span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-10">
                About New <br />
                <span className="text-[#b45309]">Plywoods</span> & <br />
                Board Center
              </h2>
              
              <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-xl">
               Where Premium Quality Meets Architectural Excellence. Join UP's most trusted plywood network with <span className="text-slate-900 font-bold underline decoration-brand-red/30 underline-offset-4">5+ locations. </span> 
               Backed by elite designers, we don't just build interiors—we craft legacies of durability and trust.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="h-7 w-7 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-slate-700 font-bold text-[13px] tracking-tight">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-10">
              <button 
                onClick={() => window.location.href = "#contact"}
                className="group relative px-12 py-5 bg-[#b45309] rounded-2xl font-black uppercase tracking-widest text-[11px] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-red/20"
              >
                <span className="relative z-10 flex items-center gap-4 text-white">
                  Learn Our Story
                  <ArrowRight size={18} className="text-white group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-slate-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              
              <div className="flex items-center gap-5">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-14 w-14 rounded-full border-4 border-[#fff7ed] bg-slate-200 overflow-hidden relative shadow-lg">
                      <Image src={`/images/indian-avatar-${i}.png`} alt="Client" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-slate-900 font-black text-[15px]">Hundreds of Happy Customers</p>
                  <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">Across the region</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Unique Video Card Section */}
          <div className="relative group">
            {/* The Cinematic Frame */}
            <div 
              className="relative z-20 aspect-[4/5] md:aspect-[3.5/4.5] rounded-[4rem] overflow-hidden border-[15px] border-white shadow-2xl transition-all duration-700 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <Image
                src="/images/new_plywood_center.png"
                alt="New Plywood Center Video Story"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              

              {/* Central Play Badge */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="h-32 w-32 bg-[#b45309] rounded-full flex items-center justify-center border-8 border-white/20 transition-transform hover:scale-110 shadow-2xl shadow-brand-red/40">
                  <Play size={48} className="text-white fill-current ml-2" />
                </div>
              </div>

              {/* Corner Info Title */}
              <div className="absolute bottom-12 left-12 text-white z-30">
                <p className="text-[12px] font-black uppercase tracking-[0.4em] text-orange-400 mb-2">Video Insight</p>
                <h4 className="text-3xl font-black tracking-tighter leading-none">A Legacy of <br /> Engineering Craft</h4>
              </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -top-16 -right-16 z-10 w-80 h-80 border-[12px] border-brand-red/10 rounded-[6rem] rotate-12 transition-transform duration-1000 group-hover:rotate-45" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-brand-red/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      <VideoModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        videoId={siteConfig.aboutVideoId} 
      />
    </section>
  );
}

