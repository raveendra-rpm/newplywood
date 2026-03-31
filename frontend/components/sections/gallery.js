"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems } from "@/data/site";
import { Maximize2, X, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = "hidden"; // Disable scroll
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scroll
  };

  return (
    <section id="gallery" className="section-space bg-slate-50 relative">
      <div className="container-shell">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-kicker">Our Product Gallery</span>
          <h2 className="h2-title mt-2">
            See our products in <span>Action</span>
          </h2>
          <p className="text-slate-600">
            A glimpse into the premium interiors and applications crafted using
            Sailee Plywood.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6 text-center">
                <Maximize2
                  size={32}
                  className="mb-4 text-brand-red animate-in zoom-in duration-500"
                />
                <h4 className="font-bold text-lg">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12 mb-8">
          <a
            href="/gallery"
            className="px-10 py-4 bg-brand-red !text-white flex items-center gap-3 rounded-2xl font-black uppercase tracking-widest hover:bg-black !hover:text-white transition-all shadow-xl shadow-brand-red/20 hover:shadow-brand-red/40 active:scale-95 group/btn"
          >
            View Full Gallery
            <ChevronRight
              size={24}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-brand-red transition-colors z-[101] bg-white/10 hover:bg-white/20 p-3 rounded-full cursor-pointer"
          >
            <X size={32} />
          </button>

          <div
            className="relative w-full max-w-5xl h-full max-h-[85vh] transition-all duration-500 animate-in zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              fill
              className="object-contain"
              priority
            />
            {/* Overlay Title */}
            <div className="absolute bottom-[-60px] left-0 right-0 text-center">
              <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-widest bg-black/40 backdrop-blur-md px-8 py-3 rounded-2xl inline-block">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
