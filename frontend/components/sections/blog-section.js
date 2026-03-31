"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { blogPosts } from "@/data/site";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4.2); // More cards = smaller size

  // Responsive items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1.5);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2.5);
      } else {
        setItemsToShow(4.5);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (blogPosts.length - Math.floor(itemsToShow) + 1));
  };

  const prevSlide = () => {
    const length = blogPosts.length - Math.floor(itemsToShow) + 1;
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  return (
    <section id="blog" className="section-space bg-white overflow-hidden relative">
      <div className="container-shell">
        {/* Header Section - Aligned to Container */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Latest Blogs
            </h2>
            <span className="text-brand-red text-xs font-black uppercase tracking-[0.2em] block mb-3">
              GLOBAL FURNITURE DESIGN TRENDS
            </span>
            <p className="text-slate-500 text-base font-medium leading-relaxed">
              Stay updated with the latest trends, expert tips, and creative ideas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button 
                onClick={prevSlide}
                className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all active:scale-90"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all active:scale-90"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <a 
              href="/blog" 
              className="px-8 py-3 bg-[#d97706] !text-white font-black uppercase tracking-widest rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95 whitespace-nowrap text-sm"
            >
              View All
            </a>
          </div>
        </div>
      </div>

      {/* Blog Slider - Full Width Absolute Left Alignment */}
      <div 
        className="flex transition-transform duration-700 ease-out pl-0"
        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
      >
        {blogPosts.map((post) => (
          <div 
            key={post.id} 
            className="flex-shrink-0 pr-4"
            style={{ width: `${100 / itemsToShow}%` }}
          >
            <div className="flex flex-col h-full group cursor-pointer overflow-hidden rounded-[2rem] shadow-md hover:shadow-xl transition-shadow duration-500">
              {/* Card Image */}
              <div className="relative aspect-[16/11] overflow-hidden">
                {post.image ? (
                   <Image 
                     src={post.image} 
                     alt={post.title} 
                     fill 
                     className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                   />
                ) : (
                   <div className="h-full w-full bg-slate-100 flex items-center justify-center text-slate-300">Image Preview</div>
                )}
              </div>
              {/* Card Title Box */}
              <div 
                 className="p-6 md:p-8 flex-1 flex flex-col justify-center min-h-[140px] transition-all duration-500"
                 style={{ backgroundColor: post.bgColor || "#4F595E" }}
                >
                  <h4 className="text-lg md:text-xl font-bold text-white leading-snug">
                    {post.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
