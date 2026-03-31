"use client";

import { useState } from "react";
import Image from "next/image";
import { products, siteConfig } from "@/data/site";
import { CheckCircle2, ChevronRight, Info, ShieldCheck, Zap } from "lucide-react";

export default function ProductRangeSection() {
  const [activeTab, setActiveTab] = useState(products[0].key);
  const activeProduct = products.find((product) => product.key === activeTab) || products[0];

  return (
    <section id="products" className="section-space bg-white overflow-hidden">
      <div className="container-shell">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-kicker">Our Plywood Range</span>
          <h2 className="h2-title mt-2">Durable products crafted with <span>Precision</span></h2>
          <p className="text-slate-600">
            Explore our comprehensive range of plywood, boards, and doors designed for premium interiors.
          </p>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
          {/* Vertical Tabs */}
          <div className="flex flex-col gap-3 sticky top-24 z-20">
            {products.map((product) => (
              <button
                key={product.key}
                onClick={() => setActiveTab(product.key)}
                className={`flex items-center justify-between p-5 rounded-2xl font-black transition-all border-2 text-left group ${
                  activeTab === product.key
                    ? "bg-brand-red border-brand-red text-white shadow-2xl translate-x-4"
                    : "bg-white border-slate-100 text-slate-500 hover:border-brand-red/40 hover:text-brand-red hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    activeTab === product.key ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-brand-red/10 group-hover:text-brand-red"
                  }`}>
                    <ChevronRight size={22} className={activeTab === product.key ? "rotate-90 transition-transform" : ""} />
                  </span>
                  <span className="text-lg tracking-tight">{product.title}</span>
                </div>
                {activeTab === product.key && <CheckCircle2 size={24} className="animate-in zoom-in duration-300" />}
              </button>
            ))}
          </div>

          {/* Product Detail Area */}
          <div className="bg-slate-50 rounded-[3rem] p-4 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <Zap size={300} className="text-brand-red" />
            </div>

            <div className="flex flex-col gap-8 md:gap-12 relative z-10">
              {/* Top: Full Width Featured Image */}
              <div className="relative group w-full" key={activeProduct.key}>
                <div className="aspect-[16/8] md:aspect-[21/9] bg-white rounded-2xl md:rounded-[2.5rem] border-[6px] md:border-[12px] border-white shadow-xl overflow-hidden relative mx-auto motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in duration-700">
                  <Image
                    src={activeProduct.image}
                    alt={activeProduct.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10">
                    <button className="bg-white text-brand-red font-black px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 mx-auto hover:bg-brand-red hover:text-white transition-all transform translate-y-10 group-hover:translate-y-0 text-[11px] uppercase tracking-widest">
                      <Info size={14} />
                      Technical Specs
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom: Detailed Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-16 px-2 md:px-4">
                {/* Product Bio & Features */}
                <div className="space-y-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-brand-red font-black text-[11px] bg-brand-red/10 w-fit px-4 py-1.5 rounded-full border border-brand-red/20 uppercase tracking-[0.2em]">
                      <ShieldCheck size={16} />
                      Premium Standard Since 2012
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">{activeProduct.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg font-medium border-l-4 border-brand-red/30 pl-5">
                       {activeProduct.description}
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-3">
                      <span className="w-8 h-px bg-slate-200" />
                      Why Choose {activeProduct.title}?
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-800 font-bold bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                          <CheckCircle2 size={18} className="text-brand-red shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Specs & Pricing */}
                <div className="space-y-10">
                  <div className="space-y-5">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-3">
                      <span className="w-8 h-px bg-slate-200" />
                      Detailed Specifications
                    </h4>
                    <div className="bg-white rounded-[1.5rem] border border-slate-200 overflow-hidden shadow-sm font-bold">
                      {activeProduct.specs.map((spec, idx) => (
                        <div key={idx} className="grid grid-cols-2 p-4 border-b border-slate-50 last:border-none hover:bg-slate-50/50 transition-colors">
                          <span className="text-slate-400 font-black tracking-tight text-xs uppercase">{spec.label}</span>
                          <span className="text-slate-900 text-right md:text-left text-sm">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row xl:flex-col 2xl:flex-row items-center justify-between gap-6 pt-8 border-t-2 border-slate-200/50 border-dashed">
                    <div className="text-center md:text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Live Pricing</p>
                      <p className="text-4xl font-black text-brand-red flex items-baseline gap-1">
                        <span className="text-2xl">₹</span>
                        {activeProduct.price.includes('/') ? activeProduct.price.split('/')[0] : activeProduct.price}
                        <span className="text-base text-slate-400 font-bold">
                          /{activeProduct.price.includes('/') ? activeProduct.price.split('/')[1] : 'sq.ft'}
                        </span>
                      </p>
                    </div>
                    <a href="#contact" className="btn-primary px-8 py-4 text-lg flex items-center gap-3 shadow-xl group/btn transition-all duration-500 w-full md:w-auto justify-center">
                      Get Free Quotation
                      <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
