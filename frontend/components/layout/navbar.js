import { PhoneCall } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3">
          <div className="flex bg-brand-red text-white p-2 rounded-sm font-black text-xl italic tracking-tighter">
            SAILEE
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-800">Plywood</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-slate-700 transition hover:text-brand-red"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="btn-primary flex items-center gap-2"
        >
          Enquiry
        </a>
      </div>
    </header>
  );
}

