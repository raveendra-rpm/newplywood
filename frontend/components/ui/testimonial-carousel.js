"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/site";

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (direction) => {
    const total = testimonials.length;
    setActiveIndex((current) => (current + direction + total) % total);
  };

  const active = testimonials[activeIndex];

  return (
    <div className="section-card rounded-[2rem] p-6 md:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full bg-red-50 p-3 text-red-600">
            <Quote className="h-6 w-6" />
          </div>
          <p className="mt-6 text-2xl font-semibold leading-10 text-slate-950 md:text-3xl">
            “{active.quote}”
          </p>
          <div className="mt-6">
            <p className="text-lg font-bold text-slate-950">{active.name}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">{active.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-red-600 hover:text-red-600"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-8 flex gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition ${
              index === activeIndex ? "w-10 bg-red-600" : "w-6 bg-slate-200"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
