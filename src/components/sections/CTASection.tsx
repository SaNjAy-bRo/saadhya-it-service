"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="w-full relative bg-[#0A0F1D] text-white">
      {/* Banner Component with Background Overlay - COMPRESSED HEIGHT */}
      <div className="relative w-full py-10 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/team-hands.png"
            alt="Hands joined in teamwork"
            fill
            className="object-cover opacity-15 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D]/80 via-[#0A0F1D] to-[#0A0F1D]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white leading-tight">
            Contact us to secure your IT needs.
          </h2>
          <p className="font-sans text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
            Let's collaborate and make an impact with our cross-discipline
            approach to design and development.
          </p>
        </div>
      </div>

      {/* Interactive Contact Form & Details Grid - COMPRESSED HEIGHT */}
      <div className="w-full py-10 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Info & Google Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
                  Get In Touch
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white leading-tight">
                  Start your journey with Saadya IT Services.
                </h3>
              </div>

              {/* Info cards - High Contrast */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/20 hover:border-white/35 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Email Address</span>
                    <a
                      href="mailto:contact@saadyait.com"
                      className="block text-xs sm:text-sm font-bold text-white hover:text-primary transition-colors mt-0.5"
                    >
                      contact@saadyait.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/20 hover:border-white/35 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Our Location</span>
                    <span className="block text-xs sm:text-sm font-bold text-white mt-0.5">
                      Global Office Delivery Network
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map with Grayscale Blending */}
            <div className="w-full rounded-2xl overflow-hidden border border-white/20 shadow-lg relative h-48 sm:h-52 bg-slate-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153403!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b34f555%3A0x86729a4e2124806a!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1611531234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="opacity-70 hover:opacity-100 transition-opacity filter grayscale invert contrast-125"
                title="Office Location Map"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 rounded-3xl p-6 border-2 border-white/10 shadow-2xl h-full flex flex-col justify-center relative">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-green-500 animate-bounce" />
                  <h4 className="font-display font-extrabold text-xl text-white">
                    Thank You!
                  </h4>
                  <p className="font-sans text-slate-300 text-xs sm:text-sm max-w-sm">
                    Your request has been successfully recorded. One of our solution
                    engineers will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-[10px] font-extrabold text-slate-300 uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-slate-500 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-[10px] font-extrabold text-slate-300 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-slate-500 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-[10px] font-extrabold text-slate-300 uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-slate-500 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
                      placeholder="e.g., Database Migration Project"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-[10px] font-extrabold text-slate-300 uppercase">
                      Message Details
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-slate-500 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none resize-none transition-all"
                      placeholder="Describe your IT needs here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-extrabold text-xs sm:text-sm transition-all shadow-md"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
