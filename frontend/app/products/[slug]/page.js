"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { products, siteConfig } from "@/data/site";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import EnquiryModal from "@/components/ui/enquiry-modal";
import { 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Droplets, 
  Trees, 
  Maximize, 
  Award,
  ArrowRight
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const product = products.find((p) => p.key === params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden bg-slate-900">
        <Image 
          src={product.image} 
          alt={product.title} 
          fill 
          className="object-cover opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        
        <div className="container-shell relative z-10 text-white">
          <div className="flex items-center gap-2 mb-6 text-slate-300 text-sm font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/#products" className="hover:text-brand-red transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-white">{product.title}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-in slide-in-from-left duration-700">
            {product.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl leading-relaxed mb-8 animate-in slide-in-from-left duration-1000 delay-200">
            {product.description}
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 bg-brand-red text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:text-black transition-all shadow-2xl shadow-brand-red/20 active:scale-95 group flex items-center gap-3 animate-in fade-in duration-1000 delay-500"
          >
            Enquiry Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-12">
              <div className="max-w-4xl">
                <span className="text-brand-red font-black uppercase tracking-[0.3em] text-sm block mb-4">Branded by {siteConfig.name}</span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                  Superior Strength & <span className="text-brand-red">Premium Quality</span>
                </h2>
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p className="text-xl leading-relaxed">
                    {product.longDescription}
                  </p>
                </div>
              </div>

              {/* Key Advantages Grid */}
              {product.advantages && (
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.advantages.map((adv, idx) => (
                    <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-brand-red/30 transition-all group">
                      <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-brand-red shadow-sm group-hover:bg-brand-red group-hover:text-white transition-all mb-6">
                        <CheckCircle2 size={24} />
                      </div>
                      <h4 className="font-black text-lg text-slate-900 leading-tight">
                        {adv}
                      </h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-50">
        <div className="container-shell">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-black text-slate-900 mb-6">Technical <span className="text-brand-red">Specs</span></h2>
              <p className="text-slate-600 mb-10 text-lg">
                Meeting international standards of quality and resilience. Our {product.title} is tested for extreme conditions.
              </p>
              
              <div className="space-y-4">
                {product.specs?.map((spec, idx) => (
                  <div key={idx} className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="font-bold text-slate-500 uppercase tracking-wider text-xs">{spec.label}</span>
                    <span className="font-black text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative aspect-square rounded-[3rem] overflow-hidden shadow-sm group">
              <Image 
                src={product.image} 
                alt="Technical Details" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      {product.applications && (
        <section className="py-20">
          <div className="container-shell">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-6">Ideal <span className="text-brand-red">Applications</span></h2>
              <p className="text-slate-600 text-lg">
                Where our {product.title} shines the most. Professional choices for high-end interiors.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {product.applications.map((app, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-3xl aspect-square flex items-center justify-center bg-slate-900">
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity">
                    <Image src={`/images/gallery-${(idx % 6) + 1}.png`} alt={app} fill className="object-cover" />
                  </div>
                  <h4 className="relative z-10 text-white font-black text-xl text-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded-xl border border-white/20 transform group-hover:scale-110 transition-transform duration-500 tracking-widest uppercase">
                    {app}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA - Light Wooden theme */}
      <section className="py-24 bg-[#fff7ed] relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b45309]/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#b45309]/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        
        <div className="container-shell relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">Ready to start your <span className="text-[#b45309]">Premium project?</span></h2>
          <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Contact {siteConfig.name} today for bulk orders, dealer inquiries, or custom project quotations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-5 bg-[#b45309] text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-black transition-all shadow-xl shadow-[#b45309]/20 active:scale-95"
            >
              Get A Quote
            </button>
            <Link 
              href="/gallery"
              className="px-12 py-5 border-2 border-[#b45309]/20 text-[#b45309] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#b45309]/10 transition-all active:scale-95"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}
