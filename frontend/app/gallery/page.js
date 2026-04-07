"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { galleryItems, latestProjects, siteConfig } from "@/data/site";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ArrowLeft,
  Grid3x3,
  LayoutGrid,
} from "lucide-react";

// Merge all images into one gallery list
const allImages = [
  ...galleryItems,
  ...latestProjects.map((p) => ({ image: p.image, title: p.title, category: p.category })),
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [columns, setColumns] = useState("3");

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, goPrev, goNext, closeLightbox]);

  const selectedItem = selectedIndex !== null ? allImages[selectedIndex] : null;

  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      {/* Page Header */}
      <div className="pt-40 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/plywood_gallery.png" 
            alt="Gallery Banner" 
            fill 
            className="object-cover"
            priority
          />
          {/* Mobile: Darker solid overlay | Desktop: Refined horizontal gradient */}
          <div className="absolute inset-0 bg-slate-900/70 md:bg-gradient-to-r md:from-slate-900 md:via-slate-900/40 md:to-transparent backdrop-blur-[1px]" />
        </div>

        <div className="container-shell relative z-10">
          <Link
            href="/#gallery"
            className="inline-flex items-center gap-2 text-white md:text-slate-400 hover:text-white transition-colors mb-6 font-bold text-sm uppercase tracking-wider"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3">
            Our <span className="text-[#d97706]">Gallery</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Explore the premium interiors and applications crafted using our
            products. Click any image to view it in full size.
          </p>

          {/* Grid toggle */}
          <div className="flex items-center gap-3 mt-8">
            <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">View:</span>
            <button
              onClick={() => setColumns("2")}
              className={`p-2 rounded-lg border transition-all ${
                columns === "2"
                  ? "bg-[#d97706] border-[#d97706] text-white"
                  : "border-slate-600 text-slate-400 hover:border-slate-400"
              }`}
              title="2 columns"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setColumns("3")}
              className={`p-2 rounded-lg border transition-all ${
                columns === "3"
                  ? "bg-[#d97706] border-[#d97706] text-white"
                  : "border-slate-600 text-slate-400 hover:border-slate-400"
              }`}
              title="3 columns"
            >
              <Grid3x3 size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="container-shell">
          <div
            className={`grid gap-5 ${
              columns === "2"
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            }`}
          >
            {allImages.map((item, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white cursor-pointer hover:shadow-2xl hover:border-[#d97706]/30 transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end text-white p-5">
                  <Maximize2 size={28} className="mb-3 text-[#d97706]" />
                  <h4 className="font-black text-base">{item.title}</h4>
                  {item.category && (
                    <span className="text-xs text-slate-300 font-medium mt-1">{item.category}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-[3001] text-white bg-white/10 hover:bg-[#d97706] p-3 rounded-full transition-all cursor-pointer"
          >
            <X size={26} />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 z-[3001] bg-black/50 text-white text-sm font-bold px-4 py-2 rounded-full">
            {selectedIndex + 1} / {allImages.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 z-[3001] text-white bg-white/10 hover:bg-[#d97706] p-3 rounded-full transition-all cursor-pointer"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 z-[3001] text-white bg-white/10 hover:bg-[#d97706] p-3 rounded-full transition-all cursor-pointer"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl mx-16 h-[75vh] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Title */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-white text-xl font-black bg-black/50 backdrop-blur-md px-6 py-2 rounded-xl inline-block">
              {selectedItem.title}
            </h3>
            {selectedItem.category && (
              <p className="text-[#d97706] text-sm font-bold mt-1">{selectedItem.category}</p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
