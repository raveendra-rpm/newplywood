import { heroStats } from "@/data/site";

export default function StatsSection() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="container-shell">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {heroStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 group">
              <div className="h-16 w-16 rounded-2xl bg-brand-red/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all transform group-hover:rotate-6 duration-300">
                <stat.icon size={32} />
              </div>
              <div>
                <p className="text-4xl font-extrabold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
