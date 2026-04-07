"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { services, siteConfig } from "@/data/site";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import EnquiryModal from "@/components/ui/enquiry-modal";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ChevronRight,
  Star,
  Shield,
  Award,
  Clock,
} from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const service = services.find((s) => s.key === params.slug);

  if (!service) return notFound();

  // All OTHER services for sidebar
  const otherServices = services.filter((s) => s.key !== service.key);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* ============================================================
          HERO SECTION — Full-bleed cinematic banner
      ============================================================ */}
      <section className="relative min-h-[45vh] lg:min-h-[50vh] flex items-end overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage.includes('new_plywood_banner') ? '/images/gallery-6.png' : service.heroImage}
            alt={service.title}
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8">
              {service.title.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="text-amber-400"> {word}</span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h1>

            {/* Tagline */}
            <p className="text-slate-200 text-xl md:text-2xl italic font-medium mb-12 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
              &ldquo;{service.tagline}&rdquo;
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-4 px-10 py-5 bg-amber-500 hover:bg-amber-400 text-black font-black uppercase tracking-widest text-base rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 group"
              >
                Get Free Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={`tel:${siteConfig.phone.split(',')[0].trim()}`}
                className="flex items-center gap-4 px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 !text-white font-black uppercase tracking-widest text-base rounded-2xl transition-all shadow-2xl"
              >
                <Phone size={20} className="fill-current text-white" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DESCRIPTION + SIDEBAR LAYOUT
      ============================================================ */}
      <section className="py-20 lg:py-28">
        <div className="container-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">

            {/* === MAIN CONTENT === */}
            <div className="lg:col-span-8 space-y-16">

              {/* Overview */}
              <div>
                <span className="text-amber-600 font-black uppercase tracking-[0.35em] text-xs block mb-4">
                  Service Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
                  Premium Quality <span className="text-amber-600">{service.title}</span><br />
                  by Expert Craftsmen
                </h2>
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p className="text-lg leading-relaxed">{service.longDescription}</p>
                </div>
              </div>

              {/* Features Grid — centuryply style icon cards */}
              <div>
                <span className="text-amber-600 font-black uppercase tracking-[0.35em] text-xs block mb-4">
                  Key Features
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">
                  What Makes Us <span className="text-amber-600">Different</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="group bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-2xl p-7 transition-all duration-300"
                    >
                      {/* Number */}
                      <div className="w-10 h-10 bg-amber-100 group-hover:bg-amber-500 rounded-xl flex items-center justify-center mb-5 transition-colors">
                        <span className="text-amber-700 group-hover:text-white font-black text-sm transition-colors">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h4 className="font-black text-slate-900 text-base mb-2">{feat.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Grid */}
              <div>
                <span className="text-amber-600 font-black uppercase tracking-[0.35em] text-xs block mb-4">
                  Our Work
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">
                  Project <span className="text-amber-600">Gallery</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {service.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                        idx === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${service.title} project ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                          View Work
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps — saburiply.com inspired */}
              <div>
                <span className="text-amber-600 font-black uppercase tracking-[0.35em] text-xs block mb-4">
                  How We Work
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-10">
                  Our <span className="text-amber-600">Process</span>, Step by Step
                </h3>
                <div className="relative">
                  {/* Connector line */}
                  <div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-amber-300 via-amber-200 to-transparent hidden sm:block" />
                  <div className="space-y-8">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex gap-6 group">
                        {/* Step Circle */}
                        <div className="relative shrink-0">
                          <div className="w-12 h-12 bg-amber-500 group-hover:bg-amber-600 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg shadow-amber-200 transition-colors z-10 relative">
                            {step.step}
                          </div>
                        </div>
                        {/* Content */}
                        <div className="bg-slate-50 group-hover:bg-amber-50 border border-slate-100 group-hover:border-amber-200 rounded-2xl p-6 flex-1 transition-all duration-300">
                          <h4 className="font-black text-slate-900 text-base mb-2">{step.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* === SIDEBAR === */}
            <aside className="lg:col-span-4 space-y-6">

              {/* Enquiry Card — Removed sticky as requested */}
              <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden relative border border-slate-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-10 -mt-10" />
                <h3 className="text-white font-black text-xl mb-1 relative z-10">
                  Interested in This Service?
                </h3>
                <p className="text-slate-400 text-sm mb-6 relative z-10 font-medium">
                  Get a free consultation from our experts today.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-5 bg-amber-500 hover:bg-amber-400 text-black font-black uppercase tracking-widest text-sm rounded-2xl transition-all shadow-md shadow-amber-500/10 group flex items-center justify-center gap-2"
                >
                  Get Free Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={`tel:${siteConfig.phone.split(',')[0].trim()}`}
                  className="w-full mt-3 py-4 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 !text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-xl"
                >
                  <Phone size={16} className="fill-current text-white" />
                  Call Now: {siteConfig.phone.split(',')[0].trim()}
                </a>

                {/* Price range */}
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest block mb-1">Starting Price</span>
                  <span className="text-2xl font-black text-amber-400 block">{service.priceRange.split("–")[0].trim()}</span>
                  <span className="text-slate-600 text-xs">onwards, varies by project size</span>
                </div>

                {/* Trust badges */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {[
                    { icon: Shield, label: "Warranty" },
                    { icon: Award, label: "Quality" },
                    { icon: Clock, label: "On Time" }
                  ].map(({ icon: Icon, label }, i) => (
                    <div key={i} className="bg-slate-800 rounded-xl p-3 text-center">
                      <Icon size={18} className="text-amber-400 mx-auto mb-1" />
                      <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Services */}
              <div className="border border-slate-100 rounded-3xl p-6">
                <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-amber-500" />
                  Other Services
                </h4>
                <div className="space-y-2">
                    {otherServices.map((s) => (
                      <Link
                        key={s.key}
                        href={`/services/${s.key}`}
                        className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-amber-50 group transition-all border border-transparent hover:border-amber-100"
                      >
                        <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                          <Image src={s.heroImage} alt={s.title} width={60} height={60} className="object-cover w-full h-full" />
                        </div>
                        <span className="text-slate-800 group-hover:text-amber-700 font-bold text-[11px] uppercase tracking-widest leading-tight flex-1">
                          {s.title}
                        </span>
                        <ChevronRight size={16} className="text-slate-300 group-hover:text-amber-500 transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ============================================================
          FULL-WIDTH CTA SECTION — brand red style
      ============================================================ */}
      <section className="py-20 relative overflow-hidden bg-amber-50 border-y border-amber-100/50">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 border-r border-amber-200"
              style={{ left: `${i * 5.2}%` }}
            />
          ))}
        </div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-100/50 rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-100/50 rounded-full" />

        <div className="container-shell relative z-10 text-center">
          <span className="inline-block text-amber-600 font-black uppercase tracking-[0.4em] text-xs mb-6">
            New Plywoods and Board Center · Varanasi
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Ready to Build Your<br />
            <span className="text-amber-600">Dream Space?</span>
          </h2>
          <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Visit our showroom in Varanasi or call us for a free site visit and consultation.
            We bring your vision to life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 px-10 py-5 bg-amber-600 text-white hover:bg-amber-700 font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-lg shadow-amber-600/20 text-sm group"
            >
              Get A Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={`tel:${siteConfig.phone.split(',')[0].trim()}`}
              className="flex items-center gap-3 px-10 py-5 bg-white hover:bg-slate-50 text-slate-900 font-black uppercase tracking-[0.2em] rounded-2xl transition-all text-sm border border-slate-100"
            >
              <Phone size={18} className="fill-current text-slate-900" />
              Call Us Now
            </a>
          </div>

          {/* Company info strip */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">📍 Christ Nagar, Varanasi</span>
            <span className="w-1 h-1 bg-amber-300 rounded-full hidden md:block" />
            <span className="flex items-center gap-2">📞 +91-8077577221</span>
            <span className="w-1 h-1 bg-amber-300 rounded-full hidden md:block" />
            <span className="flex items-center gap-2">🕐 Mon–Sun: 10AM–7:30PM</span>
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
