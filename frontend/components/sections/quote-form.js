"use client";

import { useState } from "react";
import { siteConfig, products } from "@/data/site";
import { MapPin, Phone, Mail, CheckCircle2, ChevronRight, Send } from "lucide-react";

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    category: "",
    message: ""
  });

  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", zip: "", category: "", message: "" });
    }, 1500);
  };

  const benefits = [
    "100% Termite Proof",
    "High Density Hardwood",
    "Uniform Thickness",
    "Boiling Water Resistant",
    "Borer Proof Technology"
  ];

  return (
    <section id="contact" className="section-space bg-slate-50 overflow-hidden">
      <div className="container-shell">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="section-kicker">Contact Us</span>
          <h2 className="h2-title mt-2">Visit Our <span>Store Today</span></h2>
          <p className="text-slate-600">
            Have questions about our products or want a custom quotation? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          {/* Left Column: Contact Details */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-700 text-brand-red">
                <MapPin size={100} />
              </div>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-800 font-bold bg-brand-red/5 px-4 py-3 rounded-xl border border-brand-red/10 w-fit">
                    <CheckCircle2 size={18} className="text-brand-red shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <div className="space-y-6 pt-6 border-t border-slate-100 text-left">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Head Office</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-500 text-sm">{siteConfig.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-500 text-sm">{siteConfig.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <a href="https://maps.google.com" target="_blank" className="bg-slate-900 hover:bg-black !text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-200">
                   Open Map Direction
                   <ChevronRight size={18} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-2xl order-1 lg:order-2">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-widest text-center md:text-left text-left">Inquiry Form</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-red transition-all" 
                  placeholder="Ex: John Doe" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-red transition-all" 
                  placeholder="Ex: +91 98765 43210" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2">Email ID</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-red transition-all" 
                  placeholder="Ex: jdoe@email.com" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2">Zip Code</label>
                <input 
                  type="text" 
                  value={formData.zip}
                  onChange={(e) => setFormData({...formData, zip: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-red transition-all" 
                  placeholder="Ex: 382010" 
                  required
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2">Product Category</label>
                <select 
                   value={formData.category}
                   onChange={(e) => setFormData({...formData, category: e.target.value})}
                   className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-red transition-all appearance-none"
                   required
                >
                  <option value="">Select Category</option>
                  {products.map(p => <option key={p.key} value={p.key}>{p.title}</option>)}
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2">Your Message</label>
                <textarea 
                  rows="4" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-red transition-all resize-none" 
                  placeholder="How can we help you with your project?"
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                   type="submit" 
                   disabled={status === "submitting"}
                   className="w-full btn-primary py-5 text-xl flex items-center justify-center gap-3 shadow-xl disabled:bg-slate-400 group"
                >
                  {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Submit Your Inquiry"}
                  <Send size={24} className="group-hover:translate-x-3 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
