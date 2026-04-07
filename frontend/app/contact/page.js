"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { 
  Building2, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  MapPin, 
  ChevronRight,
  MessageSquare,
  Globe
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend or WhatsApp
    const whatsappMsg = `Hi, I am reaching out from your website contact form. \n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/9415256245?text=${encodeURIComponent(whatsappMsg)}`, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section - Matching /branches style */}
      <section className="relative h-[45vh] flex items-end justify-center overflow-hidden pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900/90 z-10" />
        <Image 
          src="/images/new_plywood_board_center.png" 
          alt="Contact New Plywood" 
          fill 
          className="object-cover transition-transform duration-1000 scale-105 active:scale-100"
          priority
        />
        
        <div className="container-shell relative z-20 text-center">

          
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none animate-slide-up">
            Get In <span className="text-white">Touch</span>
          </h1>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-24 bg-[#fff7ed]">
        <div className="container-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Contact Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[#b45309] font-black uppercase tracking-[0.3em] text-[10px] block mb-4">Connect With Us</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                  Ready to Support Your <span className="text-[#b45309]">Excellence.</span>
                </h2>
                <p className="text-slate-600 font-medium text-lg leading-relaxed">
                  Whether you're looking for high-end plywood solutions, dealership opportunities, or project quotations, our team is here to help.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 gap-4 pt-4">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#b45309]/10 flex items-center justify-center text-[#b45309] shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Our Head Office</h4>
                      <p className="text-slate-500 font-bold text-sm leading-relaxed">
                        Christ Nagar, Chandmari Near Up bank of baroda, Varanasi (UP) - 221003
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#b45309]/10 flex items-center justify-center text-[#b45309] shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Phone & WhatsApp</h4>
                      <div className="space-y-1">
                        <p className="text-slate-500 font-bold text-sm">+91 80775 77221</p>
                        <p className="text-[#b45309] font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#b45309] animate-pulse" />
                          Online for Support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#b45309]/10 flex items-center justify-center text-[#b45309] shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Email Inquiries</h4>
                      <p className="text-slate-500 font-bold text-sm">newplyandboardcenter@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 sticky top-24">
                <div className="mb-10">
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Send Us a Message</h3>
                  <p className="text-slate-500 font-bold text-sm">Our typical response time is within 2 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Mr. Deepak"
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#b45309]/20 focus:bg-white transition-all font-bold placeholder:text-slate-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#b45309]/20 focus:bg-white transition-all font-bold placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Business Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#b45309]/20 focus:bg-white transition-all font-bold placeholder:text-slate-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#b45309]/20 focus:bg-white transition-all font-bold text-slate-900"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Bulk Order">Bulk Order Request</option>
                      <option value="Dealership">Dealership Inquiry</option>
                      <option value="Project Quotation">Project Quotation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">How can we help?</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your project or requirements..."
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#b45309]/20 focus:bg-white transition-all font-bold placeholder:text-slate-300 resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full py-5 bg-[#b45309] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                      Process My Inquiry
                      <Send size={18} />
                    </button>
                    <p className="text-[10px] font-bold text-slate-400 text-center mt-6 uppercase tracking-widest">
                      Your details are secure with us. By submitting, you agree to our privacy policy.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Map Section */}
      <section className="h-[500px] w-full bg-slate-100 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.341103001!2d83.00!3d25.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db6984e724b%3A0xc34388ed92510b65!2sNew%20Plywood%20%26%20Board%20Centre!5e0!3m2!1sen!2sin!4v1712490000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </main>
  );
}
