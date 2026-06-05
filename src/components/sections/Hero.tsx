import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-slate-950 bg-[url('/hero-bg.png')] bg-cover bg-center pt-10 pb-16 lg:pt-12 lg:pb-20 flex flex-col justify-center items-center text-center"
    >
      {/* Subtle dark overlay for high contrast and readability */}
      <div className="absolute inset-0 bg-[#0A0F1D]/45 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8 flex flex-col items-center">
        
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-secondary border border-primary/30 text-sm font-extrabold tracking-wide">
          <ShieldCheck className="w-4 h-4 text-secondary" />
          <span>Next-Gen Security & IT Solutions</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white leading-tight tracking-tight">
          The best IT service <br />
          for your <span className="text-secondary relative inline-block">
            security.
            <span className="absolute left-0 bottom-1 w-full h-2 bg-primary/30 -z-10 rounded" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl leading-relaxed font-semibold">
          Saadyait IT allows your business and technology computers to store,
          transmit, analyze, and manipulate big data in the digital world.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
          >
            <span>Discover Saadya IT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm sm:text-base transition-all border border-white/20 shadow-sm backdrop-blur-sm"
          >
            <span>Our Services</span>
          </a>
        </div>

        {/* Center-aligned statistics banner */}
        <div className="pt-8 w-full border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          <div>
            <span className="block font-display font-black text-2xl sm:text-3xl text-white">99.9%</span>
            <span className="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mt-1">Uptime SLA</span>
          </div>
          <div>
            <span className="block font-display font-black text-2xl sm:text-3xl text-white">24/7</span>
            <span className="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mt-1">Support</span>
          </div>
          <div>
            <span className="block font-display font-black text-2xl sm:text-3xl text-white">100%</span>
            <span className="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mt-1">Protection</span>
          </div>
        </div>

      </div>
    </section>
  );
}
