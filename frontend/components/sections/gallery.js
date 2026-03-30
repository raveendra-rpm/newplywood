import Image from "next/image";
import { galleryItems } from "@/data/site";
import { Maximize2 } from "lucide-react";

export default function GallerySection() {
  return (
    <section id="gallery" className="section-space bg-slate-50">
      <div className="container-shell">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-kicker">Our Product Gallery</span>
          <h2 className="h2-title mt-2">See our products in <span>Action</span></h2>
          <p className="text-slate-600">
            A glimpse into the premium interiors and applications crafted using Sailee Plywood.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6 text-center">
                <Maximize2 size={32} className="mb-4 text-brand-red" />
                <h4 className="font-bold text-lg">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
