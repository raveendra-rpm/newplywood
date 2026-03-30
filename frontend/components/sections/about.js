"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Droplets, Award, Zap, Play } from "lucide-react";
import { siteConfig } from "@/data/site";
import VideoModal from "@/components/ui/video-modal";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  const points = [
    "Over 10 years of manufacturing excellence",
    "Advanced chemical treatment for 100% borer protection",
    "High density hardwood core for superior strength",
    "E0 / E1 emission grade glue used for health safety",
    "Precision calibrated for modern modular furniture",
    "Widely used by top architects and designers"
  ];

  const guarantees = [
    { title: "Termite Resistant", icon: ShieldCheck },
    { title: "Borer Proof", icon: Award },
    { title: "Boiling Water Proof", icon: Droplets },
    { title: "Life Time Guarantee", icon: Zap }
  ];

  return (
    <section id="about" className="section-space bg-white">
      <div className="container-shell">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-left">
            <div>
              <span className="section-kicker">About {siteConfig.name}</span>
              <h2 className="h2-title mt-2">
                Manufacturers of high performance <br /> <span>Plywood, Boards & Doors</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {siteConfig.name} is a leading name in the plywood industry, known for its commitment to quality and innovation. We use the latest technology and premium raw materials to produce boards that stand the test of time.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-6">
              <a href="#contact" className="btn-primary inline-block px-8">Learn Our Story</a>
              <button 
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-4 text-slate-800 font-black hover:text-brand-red transition-all group"
              >
                <span className="h-12 w-12 bg-brand-red/10 group-hover:bg-brand-red group-hover:text-white rounded-full flex items-center justify-center transition-all">
                  <Play size={20} className="fill-current ml-0.5" />
                </span>
                Watch Factory Tour
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative border-8 border-white">
              <Image
                src="/images/new_plywood_banner.jpeg"
                alt="Sailee Plywood Manufacturing"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <button 
                  onClick={() => setIsOpen(true)}
                  className="h-24 w-24 bg-brand-red text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-125 transition-transform group-active:scale-95 border-4 border-white/20"
                >
                  <Play size={40} className="fill-current ml-2" />
                </button>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-8 -right-8 h-40 w-40 bg-brand-red/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 h-32 w-32 bg-brand-red/10 rounded-[2.5rem] -z-10 rotate-12" />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {guarantees.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="h-20 w-20 bg-white rounded-2xl border-2 border-brand-red/10 flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
                <item.icon size={36} />
              </div>
              <h4 className="font-extrabold text-slate-800 text-lg uppercase tracking-tight">{item.title}</h4>
            </div>
          ))}
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
