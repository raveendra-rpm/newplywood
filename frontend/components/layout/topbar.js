import { Mail, Phone, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Topbar() {
  return (
    <div className="bg-slate-900/95 text-white py-3.5 hidden md:block border-b border-white/5">
      <div className="container-shell flex justify-between items-center text-sm font-medium">
        <div className="flex items-center gap-8">
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 hover:text-red-500 transition-colors">
            <Phone size={16} className="text-red-500" />
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-red-500 transition-colors">
            <Mail size={16} className="text-red-500" />
            {siteConfig.email}
          </a>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-slate-400 mr-1">Follow Us:</span>
          <a href={siteConfig.socials.facebook} className="hover:text-red-500 transition-colors"><Facebook size={16} /></a>
          <a href={siteConfig.socials.instagram} className="hover:text-red-500 transition-colors"><Instagram size={16} /></a>
          <a href={siteConfig.socials.youtube} className="hover:text-red-500 transition-colors"><Youtube size={16} /></a>
          <a href={siteConfig.socials.linkedin} className="hover:text-red-500 transition-colors"><Linkedin size={16} /></a>
        </div>
      </div>
    </div>
  );
}
