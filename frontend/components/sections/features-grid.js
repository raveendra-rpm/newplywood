import { whyChooseUs } from "@/data/site";

export default function FeaturesGrid() {
  return (
    <section className="section-space bg-slate-50">
      <div className="container-shell">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-kicker">Why Choose Us?</span>
          <h2 className="h2-title mt-2">SAILEE Plywood is <span>Advanced Performance</span> by design</h2>
          <p className="text-slate-600">
            Every sheet of Sailee Plywood is engineered to deliver maximum durability, finish, and stability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUs.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="h-14 w-14 bg-slate-50 text-brand-red rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
