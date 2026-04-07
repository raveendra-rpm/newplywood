"use client";

import { useState } from "react";
import EnquiryModal from "@/components/ui/enquiry-modal";

export default function OfferBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-[#fff7ed] border-y border-slate-100">
        <div className="container-shell flex flex-col md:flex-row items-center justify-between gap-8 h-full">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-2 text-slate-900">You can save up to <span className="text-[#b45309]">20% now</span></h2>
            <p className="text-xl text-slate-600">Special offer for new dealers and bulk project orders this month.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-[#b45309] !text-white font-extrabold rounded-md shadow-lg hover:bg-black transition-all text-lg min-w-[200px] flex items-center justify-center cursor-pointer"
            >
              Enquiry Now
            </button>
            <a 
              href="/pdf/Catalog.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 border-2 border-[#b45309]/20 text-[#b45309] font-extrabold rounded-md hover:bg-[#b45309]/5 transition-all text-lg"
            >
              Download Catalog
            </a>
          </div>
        </div>
      </section>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
