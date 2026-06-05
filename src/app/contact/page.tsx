"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import { Mail, MapPin, Send, CheckCircle2, Phone, Clock } from "lucide-react";

export default function ContactPage() {
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
    <>
      <Navbar />

      <main className="flex-grow bg-slate-50">
        
        {/* Contact Hero Banner */}
        <section className="relative w-full overflow-hidden bg-slate-950 py-16 text-white text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.png"
              alt="Background Mesh"
              fill
              className="object-cover opacity-20 pointer-events-none"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D] to-[#0A0F1D]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-white">
              Contact Saadya IT
            </h1>
            <p className="font-sans text-slate-300 text-sm sm:text-base max-w-lg mx-auto font-semibold">
              Get in touch with our solution architects and software engineers to secure and scale your systems.
            </p>
          </div>
        </section>

        {/* Contact Section details & form */}
        <section className="w-full py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Contact details & Google Map */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
                      Connect With Us
                    </span>
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950 leading-tight">
                      Let's secure your IT needs.
                    </h2>
                  </div>

                  {/* Info cards - White backgrounds & outlines */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider">Email Us</span>
                        <a
                          href="mailto:contact@saadyait.com"
                          className="block text-sm font-extrabold text-slate-950 hover:text-primary transition-colors"
                        >
                          contact@saadyait.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider">Our Address</span>
                        <span className="block text-sm font-extrabold text-slate-950">
                          Global Office Network, India
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Styled Google Map */}
                <div className="w-full rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl relative h-56 bg-slate-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153403!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b34f555%3A0x86729a4e2124806a!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1611531234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="opacity-90 hover:opacity-100 transition-opacity filter grayscale contrast-125"
                    title="Saadya IT Office Map"
                  />
                </div>
              </div>

              {/* Right Column: Contact Form Card - Premium White Background Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-xl h-full flex flex-col justify-center relative">
                  {isSubmitted ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                      <CheckCircle2 className="w-14 h-14 text-green-500 animate-bounce" />
                      <h4 className="font-display font-extrabold text-2xl text-slate-950">
                        Message Sent!
                      </h4>
                      <p className="font-sans text-slate-700 text-sm max-w-sm font-semibold">
                        Thank you for reaching out. A solution architect will contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="name" className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border-2 border-slate-200 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="email" className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border-2 border-slate-200 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="subject" className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                          placeholder="e.g., Enterprise Workflow Architecture"
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="message" className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                          Message Details
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none resize-none transition-all"
                          placeholder="Tell us about your IT project..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-extrabold text-xs sm:text-sm transition-all shadow-md shadow-primary/10 hover:shadow-lg"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
