export default function OfferBanner() {
  return (
    <section className="py-16 bg-brand-red text-white">
      <div className="container-shell flex flex-col md:flex-row items-center justify-between gap-8 h-full">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black mb-2 animate-pulse">You can save up to 20% now</h2>
          <p className="text-xl opacity-90">Special offer for new dealers and bulk project orders this month.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a hred="#contact" className="px-8 py-4 bg-white text-brand-red font-extrabold rounded-md shadow-lg hover:bg-slate-50 transition-all text-lg">
            Enquiry Now
          </a>
          <a href="/catalog.pdf" className="px-8 py-4 border-2 border-white text-white font-extrabold rounded-md hover:bg-white/10 transition-all text-lg">
            Download Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
