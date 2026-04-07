"use client";

import Image from "next/image";
import Link from "next/link";
import { branches, siteConfig } from "@/data/site";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { 
  Building2, 
  Store,
  ShieldCheck,
  Check
} from "lucide-react";

export default function BranchesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section - Premium Plywood Theme */}
      <section className="relative h-[45vh] flex items-end justify-center overflow-hidden pb-12">
        {/* Deep, professional overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900/90 z-10" />
        <Image 
          src="/images/new_plywood_board_center.png" 
          alt="Premium Wood Solutions" 
          fill 
          className="object-cover transition-transform duration-1000 scale-105 active:scale-100"
          priority
        />
        
        <div className="container-shell relative z-20 text-center">
          
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none animate-slide-up">
            Locate a <span className="text-white">Branch</span> Near You
          </h1>
        </div>
      </section>


      {/* Branches Grid */}
      <section className="py-20 bg-slate-50/50">
        <div className="container-shell">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch) => (
              <div 
                key={branch.id} 
                className="group bg-white rounded-[2rem] p-4 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                {/* Image Section - Matching Uploaded Style */}
                <div className="relative h-72 rounded-[1.5rem] overflow-hidden mb-6">
                  <Image 
                    src={branch.image} 
                    alt={branch.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="px-2 pb-2 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-black text-slate-800 tracking-tight leading-tight">
                      {branch.name.replace("New Plywood - ", "")}
                    </h3>
                    <span className="px-3 py-1 border border-slate-200 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500">
                      Top Rated
                    </span>
                  </div>

                  <div className="space-y-3 mb-6 flex-grow">
                    <p className="text-[13px] font-bold text-slate-500 leading-relaxed">
                      <span className="block text-slate-900 mb-1">Address:</span>
                      {branch.address}
                    </p>
                    
                    <div className="pt-2 border-t border-slate-50">
                      <span className="block text-[13px] font-black text-slate-900 mb-1">Phone:</span>
                      <span className="text-[13px] font-bold text-[#b45309]">{branch.phone}</span>
                    </div>
                  </div>

                  {/* Action Button - Large Pill in Brand Color */}
                  <a 
                    href={`tel:${branch.phone}`}
                    className="w-full py-4 bg-[#b45309] !text-white rounded-full font-black uppercase tracking-[0.2em] text-[11px] text-center transition-all shadow-xl shadow-[#b45309]/20 active:scale-95 hover:bg-[#92400e] duration-300"
                  >
                    Visit Branch
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Call to Action - Light Wooden Theme */}
      <section className="py-24 bg-[#fff7ed]">
        <div className="container-shell">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b45309]/10 border border-[#b45309]/20 text-[#b45309] text-xs font-black uppercase tracking-widest">
                <ShieldCheck size={14} />
                Business Opportunity
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                Start Your <br/>
                <span className="text-[#b45309]">Franchise</span> Journey
              </h2>
              
              <p className="text-xl text-slate-600 font-medium">
                Join India's fastest-growing plywood and hardware network. 
                We provide the quality, you provide the vision.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Proven Model", desc: "Regional success in UP markets" },
                  { title: "Marketing Support", desc: "Branding & digital leads" },
                  { title: "Direct Supply", desc: "Priority factory shipping" },
                  { title: "Range", desc: "20+ Wood product categories" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-5 h-5 rounded-full bg-[#b45309]/10 border border-[#b45309]/20 flex items-center justify-center">
                        <Check size={12} className="text-[#b45309]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <a 
                  href="https://wa.me/9415256245" 
                  className="inline-flex items-center gap-3 px-10 py-5 bg-[#b45309] !text-white rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-[#b45309]/20 hover:bg-[#92400e] active:scale-95"
                >
                  Apply for Franchise
                  <Building2 size={18} className="text-white" />
                </a>
              </div>
            </div>

            {/* Right Card / Quote */}
            <div className="lg:w-1/2">
              <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-md relative overflow-hidden group">
                {/* Subtle wood texture background for the card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff7ed] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-8">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-[#b45309]" />)}
                  </div>
                  
                  <p className="text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-10 italic">
                    "Joining the New Plywood network was the best decision for my hardware business. The support and quality are unmatched."
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#b45309] flex items-center justify-center text-white">
                      <Store size={28} />
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Franchise Owner</h5>
                      <p className="text-[#b45309] text-[10px] font-black uppercase tracking-widest">Jaunpur, Uttar Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
