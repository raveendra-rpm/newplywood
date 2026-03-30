import { Users, ArrowRight } from "lucide-react";

export default function PartnerSection() {
  return (
    <section id="partner" className="section-space bg-slate-50">
      <div className="container-shell">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-100 shadow-xl overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:rotate-12 transition-transform duration-700">
            <Users size={300} className="text-brand-red" />
          </div>
          
          <div className="max-w-3xl relative z-10 text-center mx-auto">
            <div className="h-20 w-20 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <Users size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 uppercase tracking-tighter">Become Our Partner</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed italic font-medium">
              Join our growing network of dealers and distributors. Let's build a profitable future together with premium quality plywood.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#contact" className="btn-primary px-10 py-5 text-xl flex items-center gap-3 shadow-xl">
                Register as Dealer
                <ArrowRight size={24} />
              </a>
              <a href="tel:+919999900000" className="text-slate-800 hover:text-brand-red font-extrabold text-xl transition-colors flex items-center gap-2 underline underline-offset-8">
                Call Our Partner Desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
