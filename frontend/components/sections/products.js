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
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Zap size={300} className="text-brand-red" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-10 text-left">
                <div className="space-y-4">
                   <div className="flex items-center gap-2 text-brand-red font-black text-sm bg-brand-red/10 w-fit px-4 py-1.5 rounded-full border border-brand-red/20 uppercase tracking-widest">
                    <ShieldCheck size={18} />
                    Premium Quality Since 2012
                  </div>
                  <h3 className="text-5xl font-black text-slate-900 leading-tight">{activeProduct.title}</h3>
                </div>

                <p className="text-slate-600 leading-relaxed text-xl italic font-medium">
                  "{activeProduct.description}"
                </p>

                <div className="space-y-6">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Why {siteConfig.name} {activeProduct.title}?</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {activeProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-800 font-bold bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                        <CheckCircle2 size={20} className="text-brand-red" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Specifications</h4>
                  <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-inner font-bold">
                    {activeProduct.specs.map((spec, idx) => (
                      <div key={idx} className="grid grid-cols-2 p-5 border-b border-slate-100 last:border-none hover:bg-slate-50 transition-colors">
                        <span className="text-slate-400 font-bold">{spec.label}</span>
                        <span className="text-slate-900 text-right md:text-left">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-slate-200">
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Starts at</p>
                    <p className="text-4xl font-black text-brand-red">₹{activeProduct.price}</p>
                  </div>
                  <a href="#contact" className="btn-primary px-12 py-5 text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-transform flex-1 text-center justify-center">
                    Get Quotation
                    <ChevronRight size={24} />
                  </a>
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-square bg-white rounded-[3rem] border-[12px] border-white shadow-2xl overflow-hidden relative">
                  <Image
                    src={activeProduct.image}
                    alt={activeProduct.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
                    <button className="bg-white text-brand-red font-black px-10 py-5 rounded-2xl shadow-2xl flex items-center gap-3 mx-auto hover:bg-brand-red hover:text-white transition-all transform translate-y-10 group-hover:translate-y-0">
                      <Info size={24} />
                      View Full Specs
                    </button>
                  </div>
                </div>
                {/* Decoration blobs */}
                <div className="absolute -top-10 -right-10 h-40 w-40 bg-brand-red/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-1000" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-brand-red/5 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
