import { navLinks, products, siteConfig } from "@/data/site";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container-shell grid gap-12 lg:grid-cols-4 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex bg-brand-red text-white p-2 rounded-sm font-black text-xl italic tracking-tighter w-fit">
            SAILEE
          </div>
          <p className="text-sm leading-7 text-slate-400">
            Sailee Plywood is committed to excellence in manufacturing high-quality plywood, boards, and doors using advanced technology for lasting durability.
          </p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.socials.facebook} className="hover:text-brand-red transition-colors"><Facebook size={20} /></a>
            <a href={siteConfig.socials.instagram} className="hover:text-brand-red transition-colors"><Instagram size={20} /></a>
            <a href={siteConfig.socials.youtube} className="hover:text-brand-red transition-colors"><Youtube size={20} /></a>
            <a href={siteConfig.socials.linkedin} className="hover:text-brand-red transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Our Products</h4>
          <ul className="space-y-4 text-sm">
            {products.map((product) => (
              <li key={product.key}>
                <a href="#products" className="hover:text-white transition-colors">{product.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="mt-1 h-5 w-5 text-brand-red shrink-0" />
            <span>{siteConfig.address}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="h-5 w-5 text-brand-red shrink-0" />
            <span>{siteConfig.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-5 w-5 text-brand-red shrink-0" />
            <span>{siteConfig.email}</span>
          </div>
        </div>
      </div>

      <div className="container-shell mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

