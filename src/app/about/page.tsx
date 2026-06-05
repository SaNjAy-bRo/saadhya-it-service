"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import { Server, PercentCircle, CreditCard, ChevronLeft, ChevronRight, Check } from "lucide-react";

export default function AboutPage() {
  const [sliderIdx, setSliderIdx] = useState(0);

  const consultancyCards = [
    {
      title: "Brand Strategy",
      description: "Saadya IT allows your business and technology computers to store, transmit, analyze, and manipulate big data.",
      icon: Server,
      bgColor: "bg-blue-500/5",
      iconCol: "text-blue-600",
    },
    {
      title: "Digital Solutions",
      description: "Saadya IT allows your business and technology computers to store, transmit, analyze, and manipulate big data.",
      icon: PercentCircle,
      bgColor: "bg-cyan-500/5",
      iconCol: "text-cyan-600",
      hasBadge: true,
    },
    {
      title: "Business Consultation",
      description: "Saadya IT allows your business and technology computers to store, transmit, analyze, and manipulate big data.",
      icon: CreditCard,
      bgColor: "bg-indigo-500/5",
      iconCol: "text-indigo-600",
    },
  ];

  const sliderItems = [
    {
      title: "Innovative Solutions",
      description: "We deploy advanced software paradigms and state-of-the-art frameworks to streamline your corporate workflows.",
      image: "/solutions-collage.png",
    },
    {
      title: "Trusted Experience",
      description: "Our certified engineers provide round-the-clock administration and security shield setups with zero downtime.",
      image: "/team-collaboration.png",
    },
    {
      title: "Digital Solutions",
      description: "A/B testing, API integrations, and modern front-end layouts tailored to optimize user engagement metrics.",
      image: "/hero-workspace.png",
    },
    {
      title: "Global Partners",
      description: "Collaborative, cross-discipline software engineering designed to scale your operations across multiple locations.",
      image: "/team-hands.png",
    },
  ];

  const handlePrev = () => {
    setSliderIdx((prev) => (prev === 0 ? sliderItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSliderIdx((prev) => (prev === sliderItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        
        {/* About Page Hero - High Contrast Tech Gradient Banner */}
        <section className="relative w-full overflow-hidden bg-slate-950 py-16 lg:py-20 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.png"
              alt="Background Mesh"
              fill
              className="object-cover opacity-20 pointer-events-none"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D] via-primary/10 to-[#0A0F1D]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight">
              About Saadya IT <br />
              <span className="text-secondary">Solutions.</span>
            </h1>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed font-semibold">
              Saadya IT allows your business and technology computers to store,
              transmit, analyze, and manipulate big data in the digital world.
            </p>
          </div>
        </section>

        {/* Meet Saadya Section - Overlapping CSS Collage */}
        <section className="w-full py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Overlapping Collage */}
              <div className="lg:col-span-6 relative h-[380px] sm:h-[450px]">
                {/* Image 1: Main office background */}
                <div className="absolute top-0 left-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200">
                  <Image
                    src="/hero-workspace.png"
                    alt="Office"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Image 2: Team Collaboration overlapping */}
                <div className="absolute top-[20%] right-0 w-[50%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
                  <Image
                    src="/team-collaboration.png"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Image 3: City skyline floating at bottom-left */}
                <div className="absolute bottom-0 left-[10%] w-[45%] h-[45%] rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 z-20">
                  <Image
                    src="/city-skyline.png"
                    alt="City Skyline"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Descriptions */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
                    About Us
                  </span>
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 leading-tight">
                    Meet Saadya IT.
                  </h2>
                </div>

                <p className="font-sans text-sm sm:text-base text-slate-800 leading-relaxed font-semibold">
                  Here at Saadya IT services we make every attempt to make everything
                  possible for our clients by delivering high quality services. We
                  resource cost-effective and qualified professionals on-site/off-site,
                  design and implement software applications with out exceeding your budget.
                </p>

                {/* Bullet details */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-slate-900 font-bold">
                    <div className="w-5 h-5 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>100% Client transparency policies</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-900 font-bold">
                    <div className="w-5 h-5 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Cost-effective on-site and remote engineering squads</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Saadya IT Consultancy Section - 3-Card Grid */}
        <section className="w-full py-12 lg:py-16 bg-slate-50 border-t border-b border-slate-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950">
                Saadya IT Consultancy
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-800 font-semibold max-w-xl mx-auto">
                Saadya IT allows your business and technology computers to store,
                transmit, analyze, and manipulate big data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {consultancyCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="relative bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    {card.hasBadge && (
                      <span className="absolute top-4 right-4 bg-primary text-white text-[9px] font-black uppercase tracking-wider py-1 px-2.5 rounded-full">
                        New
                      </span>
                    )}

                    <div className="space-y-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl ${card.bgColor} ${card.iconCol} border border-slate-200 flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="font-display font-extrabold text-lg text-slate-950">
                        {card.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Competency Slider Block - Interactive Team Showcase */}
        <section className="w-full py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Upper control layout */}
            <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
              <div className="space-y-1">
                <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
                  How We Deliver
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
                  Saadya IT Delivery Pillars
                </h2>
              </div>

              {/* Slider Nav Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-700 transition-colors shadow-sm"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-700 transition-colors shadow-sm"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slider Main Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl aspect-video sm:aspect-[21/9] bg-slate-900">
              <Image
                src={sliderItems[sliderIdx].image}
                alt={sliderItems[sliderIdx].title}
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Slider Floating content details */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-10 text-white max-w-xl space-y-2">
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  {sliderItems[sliderIdx].title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed font-semibold">
                  {sliderItems[sliderIdx].description}
                </p>
              </div>
            </div>

            {/* Slider competency pills triggers below */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {sliderItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSliderIdx(idx)}
                  className={`py-3 px-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                    sliderIdx === idx
                      ? "border-primary bg-primary/5 shadow-md scale-[1.01]"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <span className={`block font-display font-extrabold text-xs sm:text-sm ${
                    sliderIdx === idx ? "text-primary" : "text-slate-900"
                  }`}>
                    {item.title}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] text-slate-500 font-bold mt-1 uppercase tracking-wider">
                    Pillar {idx + 1}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* Global Footer */}
      <Footer />

      {/* Cookie Consent toast */}
      <CookieConsent />
    </>
  );
}
