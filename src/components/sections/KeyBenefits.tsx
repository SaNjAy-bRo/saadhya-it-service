import React from "react";
import Image from "next/image";
import { Check, ShieldCheck, HeartHandshake, Award } from "lucide-react";

export default function KeyBenefits() {
  const benefits = [
    {
      title: "Professional specialists",
      desc: "Our engineers have average 8+ years of enterprise scale experience.",
      icon: Award,
    },
    {
      title: "Excellent services",
      desc: "A client-first SLA designed to provide continuous delivery without hiccups.",
      icon: HeartHandshake,
    },
    {
      title: "Secured and trusted systems",
      desc: "Comprehensive encryption protocols safeguarding corporate intelligence.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="w-full py-12 lg:py-14 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Team Collage / Card */}
          <div className="lg:col-span-6 relative order-last lg:order-first">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing Gradient Board */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-2 scale-98" />

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-4/3 z-10">
                <Image
                  src="/team-collaboration.png"
                  alt="Corporate IT specialists team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
              </div>

              {/* Overlapping Badge */}
              <div className="absolute bottom-6 right-6 bg-white py-2.5 px-4 rounded-xl shadow-xl z-20 border border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wider">
                  100% Client Satisfaction
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Benefits List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
                Why Partner With Us
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 leading-tight">
                Key benefits of our platform.
              </h2>
            </div>

            {/* Benefits cards stack */}
            <div className="space-y-4">
              {benefits.map((benefit, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans font-extrabold text-sm sm:text-base text-slate-950 block">
                        {benefit.title}
                      </span>
                      <span className="font-sans text-xs sm:text-sm text-slate-900 leading-relaxed mt-1 block font-semibold">
                        {benefit.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-extrabold text-xs sm:text-sm transition-all shadow-md"
              >
                <span>See How It Works</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
