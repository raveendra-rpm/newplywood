"use client";

import { Sofa, Bed, Utensils, Building2, Flower2 } from "lucide-react";

export default function ApplicationAreas() {
  const areas = [
    { name: "LIVING ROOM", icon: Sofa },
    { name: "BEDROOM INSPIRATION", icon: Bed },
    { name: "DINING AREA", icon: Utensils },
    { name: "COMMERCIAL SPACES", icon: Building2 },
    { name: "MINIMAL INTERIORS", icon: Flower2 },
  ];

  return (
    <section className="bg-white border-b border-slate-100">
      <div className="container-shell py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-8 group hover:bg-slate-50 transition-all cursor-default"
            >
              <div className="mb-6 text-slate-400 group-hover:text-brand-red transition-colors duration-500 transform group-hover:scale-110">
                <area.icon size={48} strokeWidth={1} />
              </div>
              <h3 className="text-center font-black text-slate-800 text-[10px] md:text-xs tracking-[0.2em] uppercase leading-relaxed">
                {area.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
