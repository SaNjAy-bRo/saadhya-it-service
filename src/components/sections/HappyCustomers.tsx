"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";

export default function HappyCustomers() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      quote:
        "Saadya IT Services transformed our legacy server configuration into a high-speed cloud infrastructure. Their database migration was flawless and completed under budget.",
      author: "Sarah Jenkins",
      role: "CTO, FinTech Global",
      rating: 5,
    },
    {
      quote:
        "The outsourcing model provided by Saadya IT allowed us to deploy round-the-clock security monitoring without hiring an expensive in-house team. Highly recommended!",
      author: "David Vance",
      role: "Director of Operations, MedSecure Corp",
      rating: 5,
    },
    {
      quote:
        "Their product development team was incredibly professional and flexible. They translated our complex business rules into a clean, modern web application.",
      author: "Elena Rostova",
      role: "VP of Product, CloudScale Inc",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="w-full py-12 lg:py-14 bg-gradient-to-br from-white via-slate-50 to-[#EBF0FF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text Content & Testimonials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
                Client Success Stories
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 leading-tight">
                Happy customers all around the world.
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-900 leading-relaxed font-semibold">
                Saadyait IT allows your business and technology computers to store,
                transmit, analyze, and manipulate big data in the digital world.
                Saadyait has a full range of products for personal data analysis,
                business consultation, and strategic partnership.
              </p>
            </div>

            {/* Testimonial Box with high contrast borders */}
            <div className="relative bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-xl">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary/15 text-primary border-2 border-white flex items-center justify-center shadow-md">
                <MessageSquareQuote className="w-5 h-5" />
              </div>

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-sans text-slate-900 text-sm sm:text-base italic leading-relaxed font-bold">
                  "{testimonials[activeIdx].quote}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="block font-sans font-extrabold text-sm text-slate-950">
                      {testimonials[activeIdx].author}
                    </span>
                    <span className="block text-slate-500 text-xs mt-0.5 font-bold">
                      {testimonials[activeIdx].role}
                    </span>
                  </div>

                  {/* Nav Arrows */}
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-700 transition-colors"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-700 transition-colors"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center lg:text-left">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-extrabold text-xs sm:text-sm transition-all shadow-md"
              >
                <span>See How We Work</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back Card Decoration */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-2 scale-98" />

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-square lg:aspect-4/3 z-10">
                <Image
                  src="/happy-customers.png"
                  alt="Business consultation collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
              </div>

              {/* Overlay Statistics */}
              <div className="absolute -top-4 -left-4 bg-slate-950 text-white p-3.5 rounded-xl shadow-xl z-20 border border-white/10 animate-float">
                <span className="block text-[9px] uppercase font-bold tracking-widest text-slate-400">
                  Global Reach
                </span>
                <span className="block font-display font-extrabold text-base mt-0.5 text-secondary">
                  98% Retention
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
