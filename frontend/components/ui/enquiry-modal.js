"use client";

import { useState, useEffect } from "react";
import { X, Phone, MessageCircle, Send, CheckCircle2, ChevronDown } from "lucide-react";
import { siteConfig, products } from "@/data/site";
import Image from "next/image";

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    product: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle, submitting, success

  // Standard Indian States & Main Cities for demo
  const locations = {
    "Uttar Pradesh": ["Varanasi", "Lucknow", "Kanpur", "Prayagraj", "Noida"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli"]
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setFormData({ name: "", phone: "", email: "", state: "", city: "", product: "", message: "" });
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  const whatsappNumber = siteConfig.phone.replace(/[^0-9]/g, "");

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 border border-slate-100">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-50 h-8 w-8 bg-brand-red text-white rounded-full flex items-center justify-center shadow-lg hover:rotate-90 transition-all"
        >
          <X size={20} strokeWidth={3} />
        </button>

        <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
          {/* Header */}
          <div className="bg-slate-50 p-6 border-b border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Enquire Now</h2>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1 font-bold">Get Your Custom Quotation</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-6 text-center space-y-3 animate-in fade-in slide-in-from-bottom-4">
                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 text-sm font-medium">We'll contact you shortly.</p>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-red transition-all font-bold text-slate-700 text-sm"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-red transition-all font-bold text-slate-700 text-sm"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <select 
                        className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-red transition-all font-bold text-slate-700 appearance-none text-xs"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({...formData, state: e.target.value, city: ""})}
                      >
                        <option value="">State</option>
                        {Object.keys(locations).map(state => <option key={state} value={state}>{state}</option>)}
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <select 
                        className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-red transition-all font-bold text-slate-700 appearance-none text-xs"
                        required
                        disabled={!formData.state}
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      >
                        <option value="">City</option>
                        {formData.state && locations[formData.state].map(city => <option key={city} value={city}>{city}</option>)}
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="relative">
                    <select 
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-red transition-all font-bold text-slate-700 appearance-none text-xs"
                      required
                      value={formData.product}
                      onChange={(e) => setFormData({...formData, product: e.target.value})}
                    >
                      <option value="">Product Category</option>
                      {products.map(p => <option key={p.key} value={p.key}>{p.title}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>

                  <textarea 
                    placeholder="Message"
                    rows={3}
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-red transition-all font-bold text-slate-700 resize-none text-sm"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-black py-4 rounded-xl text-lg uppercase tracking-widest shadow-lg shadow-brand-red/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
                >
                  {status === "submitting" ? "Processing..." : "Send Enquiry"}
                  <Send size={18} />
                </button>

                {/* Footer Actions */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a 
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 py-3 border border-green-500 text-green-600 font-black rounded-lg hover:bg-green-50 transition-colors uppercase text-[10px] tracking-widest"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                  <a 
                    href={`tel:${siteConfig.phone.split(',')[0].trim()}`}
                    className="flex items-center justify-center gap-2 py-3 border border-slate-900 text-slate-900 font-black rounded-lg hover:bg-slate-50 transition-colors uppercase text-[10px] tracking-widest"
                  >
                    <Phone size={14} />
                    Direct Call
                  </a>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
