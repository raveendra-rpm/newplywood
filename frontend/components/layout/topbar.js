import { Mail, Phone, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Topbar() {
  return (
    <div className="bg-slate-900/95 text-white py-3 hidden md:block border-b border-white/5 font-sans">
      <div className="container-shell flex justify-between items-center text-[12px] font-bold tracking-[0.05em]">
        <div className="flex items-center gap-10">
          <a href={`tel:${siteConfig.phone.split(',')[0].trim()}`} className="flex items-center gap-2.5 hover:text-brand-red transition-colors group">
            <Phone size={14} className="text-brand-red group-hover:scale-110 transition-transform" />
            <span className="opacity-90 font-medium font-sans antialiased">{siteConfig.phone}</span>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-brand-red transition-colors group">
            <Mail size={14} className="text-brand-red group-hover:scale-110 transition-transform" />
            <span className="opacity-90 font-medium font-sans antialiased">{siteConfig.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">Follow Us:</span>
          <div className="flex items-center gap-4">
            <a href={siteConfig.socials.facebook} className="hover:text-brand-red transition-colors"><Facebook size={16} /></a>
            <a href={siteConfig.socials.instagram} className="hover:text-brand-red transition-colors"><Instagram size={16} /></a>
            <a href={siteConfig.socials.youtube} className="hover:text-brand-red transition-colors"><Youtube size={16} /></a>
            <a href={siteConfig.socials.linkedin} className="hover:text-brand-red transition-colors"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
