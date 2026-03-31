"use client";

import { useState } from "react";
import { latestProjects } from "@/data/site";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

const categories = [
  "All",
  "Kids Section",
  "Bed Room Interiors",
  "Wooden Dining Table",
  "Modular Kitchen"
];

export default function LatestProjects({ showFilters = true, limit = 6 }) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? latestProjects
    : latestProjects.filter(project => project.category === activeTab);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className="section-space bg-white" id="latest-projects">
      <div className="container-shell">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            OUR LATEST PROJECTS
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-10" />

          {/* Filtering Tabs - Conditional rendering */}
          {showFilters && (
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-slate-100 pb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-sm md:text-base font-bold uppercase tracking-wider transition-all relative py-2 ${
                    activeTab === cat
                      ? "text-orange-600"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {cat}
                  {activeTab === cat && (
                    <span className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-orange-600 animate-in fade-in slide-in-from-left-2" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {displayedProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden bg-slate-100 shadow-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-1.5 animate-in fade-in zoom-in-95 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-orange-400 font-bold uppercase text-xs tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-black uppercase tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {project.title}
                </h3>
              </div>
              
              {/* Minimal Info Always Visible */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg group-hover:opacity-0 transition-opacity">
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">
                    Project {index + 1}
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button - Links to /projects */}
        {!showFilters && (
          <div className="mt-16 flex justify-center">
             <Link href="/projects" className="group relative overflow-hidden px-10 py-5 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-2xl hover:shadow-orange-500/20 active:scale-95 transition-all">
               <span className="relative z-20 flex items-center justify-center gap-3 text-white">
                 <span>View All Projects</span>
                 <ArrowRight size={18} className="transition-transform group-hover:translate-x-2 flex-shrink-0" />
               </span>
               <div className="absolute inset-0 bg-orange-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 z-10" />
             </Link>
          </div>
        )}
      </div>
    </section>
  );
}
