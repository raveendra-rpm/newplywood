"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

export default function VideoModal({ isOpen, onClose, videoId }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl transition-all duration-300">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/50 hover:text-brand-red transition-colors group"
      >
        <span className="sr-only">Close video</span>
        <X size={48} className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      <div className="relative w-full max-w-[1000px] aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 fade-in duration-300 border-4 border-white/10">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
