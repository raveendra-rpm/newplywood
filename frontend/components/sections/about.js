"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Play, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import VideoModal from "@/components/ui/video-modal";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  const points = [
    "5+ Exclusive Franchise Stores",
    "Largest Plywood Chain in UP",
    "High-Performance Wood Tech",
    "Life-Time Product Guarantee",
    "Team of Master Designers",
    "Honest Advice, Real Value"
  ];

  return (
    <section id="about" className="py-32 bg-[#fff7ed] overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/40 -skew-x-12 translate-x-1/2 z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />

      <div className="container-shell relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Story & Content */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-brand-red"></span>
                <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px]">
                  ESTABLISHED EXCELLENCE
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                About New <span className="text-[#b45309]">Plywoods</span> & Board Center
              </h2>
              
              <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-xl">
                We are more than just manufacturers. We are curators of strength and beauty, 
                blending <span className="text-slate-900 font-bold underline decoration-brand-red/30 underline-offset-4">advanced technology</span> 
                with premium raw materials to engineer wood that defines generations of interiors.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="h-8 w-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-700 font-bold text-sm tracking-tight">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-8">
              <a 
                href="#contact" 
                className="group relative px-10 py-5 bg-brand-red rounded-2xl font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-red/20"
              >
                <span className="relative z-10 flex items-center gap-3 text-white">
                  Learn Our Story
                  <ArrowRight size={18} className="text-white group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#9a3412] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 w-12 rounded-full border-4 border-[#fff7ed] bg-slate-200 overflow-hidden relative">
                      <Image src={`/images/avatar-${i}.png`} alt="Client" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-slate-900 font-black text-sm">Hundreds of Happy Customers</p>
                  <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest text-left">Across the region</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Unique Video Card Section */}
          <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
            {/* The Cinematic Frame */}
            <div className="relative z-20 aspect-[4/5] md:aspect-[3/4] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl transition-all duration-700">
              <Image
                src="/images/new_plywood_center.png"
                alt="New Plywood Center Video Story"
                fill
                className="object-cover transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              
              {/* Central Play Badge */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <div className="h-28 w-28 bg-brand-red rounded-full flex items-center justify-center border border-white/30 transition-transform hover:scale-110 group-hover:border-transparent shadow-2xl shadow-brand-red/40">
                  <Play size={44} className="text-white fill-current ml-2" />
                </div>
              </div>

              {/* Corner Info Title */}
              <div className="absolute bottom-10 left-10 text-white z-30">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-1">Video Insight</p>
                <h4 className="text-2xl font-black tracking-tighter leading-tight">A Legacy of <br /> Engineering Craft</h4>
              </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -top-12 -right-12 z-10 w-64 h-64 border-8 border-brand-red/10 rounded-[5rem] rotate-12 transition-transform duration-1000" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 bg-brand-red/5 rounded-full blur-3xl" />
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
