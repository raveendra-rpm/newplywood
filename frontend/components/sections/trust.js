import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";
import TestimonialCarousel from "@/components/ui/testimonial-carousel";
import { galleryItems, whyChooseUs } from "@/data/site";

export default function TrustSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          kicker="Trust Markers"
          title="Everything buyers look for before sending an enquiry."
          description="This section combines clear decision drivers, social proof, and gallery-led product presentation so the page moves from interest to action with less friction."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div id="testimonials" className="mt-20">
          <TestimonialCarousel />
        </div>

        <div id="gallery" className="mt-20">
          <SectionHeading
            kicker="Our Product Gallery"
            title="Visual proof of finish quality and application readiness."
            description="A product gallery helps buyers evaluate detail, finish, and fitment context before they contact sales."
          />

          <div className="grid-stagger mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src="/images/saburiply-reference.png"
                    alt={item.title}
                    fill
                    className={`object-cover transition duration-500 hover:scale-105 ${
                      index % 2 === 0 ? "object-left" : "object-center"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-red-300">Saburi Ply</p>
                    <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-6 text-slate-600">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
