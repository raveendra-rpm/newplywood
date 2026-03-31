"use client";

import { useState } from "react";
import { whyChooseUs } from "@/data/site";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FeaturesGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const activeFeature = whyChooseUs[activeTab];
  const IconComponent = activeFeature?.icon;

  return (
    <section className="section-space bg-white overflow-hidden" id="why-choose-us">
      <div className="container-shell">
        {/* Header Text Section */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            Why Choose Us?
          </h2>
          <span className="text-brand-red font-bold tracking-widest text-sm uppercase block mb-4">
            ADVANCED PERFORMANCE BY DESIGN
          </span>
          <p className="text-slate-600 text-lg max-w-2xl">
            Every sheet of Sailee Plywood is engineered to deliver maximum durability, finish, and stability through innovation and craft.
          </p>
        </div>

        {/* Tab Bar Container */}
        <div className="relative mb-8">
          <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-full overflow-x-auto no-scrollbar scroll-smooth">
            {whyChooseUs.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-none px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === index
                    ? "bg-brand-red text-white shadow-lg shadow-brand-red/20"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Content Area */}
        <div className="relative min-h-[500px] md:min-h-[600px] rounded-[2rem] overflow-hidden group shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 transition-all duration-700 group-hover:scale-105">
            <Image
              src={activeFeature?.image || "/images/new_plywood.jpg"}
              alt={activeFeature?.title || "Feature"}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 max-w-2xl">
            {/* Icon Circle */}
            <div className="h-16 w-16 bg-brand-red/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
              {IconComponent && (
                <IconComponent className="text-brand-red w-8 h-8" />
              )}
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight text-left">
              {activeFeature?.title}
            </h3>
            
            <p className="text-slate-100 text-lg md:text-xl mb-10 leading-relaxed max-w-lg text-left">
              {activeFeature?.description}
            </p>

            <div className="text-left">
              <button className="bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-brand-red/30">
                Explore Now
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-8 right-8 hidden md:block opacity-30">
            <span className="text-8xl font-black text-white select-none">
              SAILEE
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
