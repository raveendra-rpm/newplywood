"use client";

import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import AboutSection from "@/components/sections/about";
import { 
  Award, 
  Target, 
  Users2, 
  ShieldCheck, 
  ChevronRight,
  MapPin,
  TrendingUp,
  History
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "To provide the highest quality plywood and boards that empower architects and builders to create enduring legacies of craft.",
      color: "bg-orange-500"
    },
    {
      icon: History,
      title: "Our Vision",
      desc: "To become the most trusted network for premium wood materials across India, setting benchmarks in quality and service.",
      color: "bg-[#b45309]"
    },
    {
      icon: ShieldCheck,
      title: "Quality First",
      desc: "Every sheet that leaves our facility undergoes rigorous multi-point quality checks to ensure perfection and durability.",
      color: "bg-slate-900"
    }
  ];

  const milestones = [
    { year: "2014", title: "Foundation", desc: "Started our journey with a commitment to quality in Varanasi." },
    { year: "2018", title: "Expansion", desc: "Reached 3 locations and expanded our premium product range." },
    { year: "2024", title: "Leading Network", desc: "Now with 5+ locations, serving the entire Uttar Pradesh region." }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* HERO SECTION — Matching Service Style (Full-bleed cinematic banner) */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/new_plywood_three.png"
            alt="About Our Legacy"
            fill
            className="object-cover opacity-50 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Decorative vertical lines */}
        <div className="absolute right-0 top-0 h-full flex gap-5 pr-8 opacity-10 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-px h-full bg-amber-300" />
          ))}
        </div>

        {/* Bottom Content */}
        <div className="container-shell relative z-10 pb-20 pt-32 w-full flex flex-col items-center text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px] mb-6">
              Established Excellence
            </span>
            
            {/* Title - Last word in amber */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8">
              Crafting Legacies of <span className="text-amber-400">Durability</span>
            </h1>

            {/* Tagline - Italic & Quoted */}
            <p className="text-slate-200 text-xl md:text-2xl italic font-medium mb-12 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
              &ldquo;Where Premium Quality Meets Architectural Excellence & Engineering Craft.&rdquo;
            </p>

            {/* CTA Buttons - Matching Service Style */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <button
                onClick={() => window.location.href = "#contact"}
                className="flex items-center gap-4 px-10 py-5 bg-amber-500 hover:bg-amber-400 text-black font-black uppercase tracking-widest text-base rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 group"
              >
                Learn Our Story
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => window.location.href = "/#products"}
                className="flex items-center gap-4 px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 !text-white font-black uppercase tracking-widest text-base rounded-2xl transition-all shadow-2xl"
              >
                View products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section (Enhanced Component) */}
      <AboutSection />

      {/* Core Values Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-shell relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#b45309] font-black uppercase tracking-[0.4em] text-[10px] block mb-4">What We Stand For</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="group p-10 bg-[#fff7ed] rounded-[3rem] border border-orange-100 transition-all hover:shadow-2xl hover:shadow-orange-200/50 hover:-translate-y-2">
                <div className={`w-16 h-16 ${v.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                  <v.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Milestone Section */}
      <section className="py-32 bg-slate-900 relative">
        <div className="container-shell">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="text-orange-400 font-black uppercase tracking-[0.4em] text-[11px] block mb-6">Our Journey</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-10">
                A Decade of <br />
                Consistent <br />
                <span className="text-white/40">Excellence.</span>
              </h2>
              <p className="text-white/60 text-lg font-medium max-w-lg mb-12">
                From a single store to a regional network, our growth is powered by one single thing: Uncompromising quality for every single customer.
              </p>
              <button 
                onClick={() => window.location.href = "/contact"}
                className="group flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs hover:text-orange-400 transition-colors"
              >
                Become Part of Our Story
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-4xl font-black text-orange-400/30 group-hover:text-orange-400 transition-colors pt-2">
                    {m.year}
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex-1 hover:bg-white/10 transition-colors">
                    <h4 className="text-xl font-black text-white mb-2">{m.title}</h4>
                    <p className="text-white/50 font-medium text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#fff7ed]">
        <div className="container-shell">
          <div className="bg-[#b45309] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
                Ready to Start Your <br /> Next Masterpiece?
              </h2>
              <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-12">
                Connect with our experts today and discover the premium materials that define architectural excellence.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button 
                  onClick={() => window.location.href = "/contact"}
                  className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                >
                  Contact Our Team
                </button>
                <button 
                  onClick={() => window.location.href = "/#products"}
                  className="px-12 py-5 bg-black/20 text-white border border-white/30 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all transform hover:scale-105"
                >
                  View Our Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
