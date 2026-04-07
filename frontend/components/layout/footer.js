import { footerLinks, siteConfig } from "@/data/site";
import Image from "next/image";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MessageCircle, 
  ChevronRight,
  ArrowRight 
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-12">
      <div className="container-shell grid gap-12 lg:grid-cols-4 md:grid-cols-2">
        {/* Column 1: Company Logo & Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <a href="/" className="inline-block relative h-14 w-40 md:h-20 md:w-56 bg-white p-3 rounded-xl transition-transform hover:scale-105 duration-300 shadow-xl shadow-white/5">
              <Image
                src="/images/new_plywood_logo.png"
                alt={siteConfig.name}
                fill
                className="object-contain p-1"
              />
            </a>
          </div>
          
          <p className="text-base leading-8 text-slate-400 max-w-xs">
            {siteConfig.description}
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-brand-red transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-brand-red transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-brand-red transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-brand-red transition-colors"><MessageCircle size={20} /></a>
          </div>
        </div>

        {/* Column 2: Our Services (Quick Links) */}
        <div>
          <h4 className="text-white font-black mb-10 uppercase tracking-widest text-base">
            OUR SERVICES
          </h4>
          <ul className="space-y-6">
            {footerLinks.map((link) => (
              <li key={link.label} className="group">
                <a href={link.href} className="flex items-center gap-3 text-base font-medium hover:text-brand-red transition-all duration-300">
                  <ChevronRight size={16} className="text-brand-red transition-transform group-hover:translate-x-1" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Get In Touch */}
        <div>
          <h4 className="text-white font-black mb-10 uppercase tracking-widest text-base">
            GET IN TOUCH
          </h4>
          <div className="space-y-7">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-brand-red shrink-0 mt-0.5" />
              <p className="text-base leading-relaxed text-slate-400">
                {siteConfig.address}
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-brand-red shrink-0 mt-0.5" />
              <p className="text-base text-slate-400 whitespace-pre-line">
                {siteConfig.phone}
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-brand-red shrink-0 mt-0.5" />
              <p className="text-base text-slate-400">
                {siteConfig.email}
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-brand-red shrink-0 mt-0.5" />
              <p className="text-base text-slate-400">
                {siteConfig.openingHours}
              </p>
            </div>
          </div>
        </div>

        {/* Column 4: Drop A Message (Form) */}
        <div>
          <h4 className="text-white font-black mb-10 uppercase tracking-widest text-base">
            DROP A MESSAGE
          </h4>
          <form className="space-y-5">
            <input 
              type="text" 
              placeholder="Enter Name" 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-sm text-slate-300 focus:outline-none focus:border-brand-red/50 transition-colors"
            />
            <input 
              type="email" 
              placeholder="Enter Email" 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-sm text-slate-300 focus:outline-none focus:border-brand-red/50 transition-colors"
            />
            <input 
              type="text" 
              placeholder="Enter Number" 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-sm text-slate-300 focus:outline-none focus:border-brand-red/50 transition-colors"
            />
            <textarea 
              placeholder="Enter Message" 
              rows={4}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-sm text-slate-300 focus:outline-none focus:border-brand-red/50 transition-colors resize-none"
            />
            <button className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-black uppercase tracking-widest text-sm py-5 rounded-xl transition-all transform active:scale-[0.98] shadow-lg shadow-brand-red/20">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container-shell mt-24 pt-10 border-t border-slate-900/50 flex flex-col md:flex-row justify-center items-center text-xs uppercase tracking-widest font-bold text-slate-500">
        <p>© 2026 {siteConfig.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

