"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import { ArrowRight, ShieldCheck, DollarSign, Users, Zap, Check } from "lucide-react";

export default function SoftwareOutsourcing() {
  const benefits = [
    {
      title: "Cost Optimization",
      desc: "Reduce operational expenditures up to 40% by hiring remote, specialized engineering units.",
      icon: DollarSign,
      color: "text-blue-700",
      bgColor: "bg-blue-100",
    },
    {
      title: "Specialized Squads",
      desc: "Direct access to pre-vetted engineers proficient in Next.js, Cloud architectures, and secure backends.",
      icon: Users,
      color: "text-cyan-700",
      bgColor: "bg-cyan-100",
    },
    {
      title: "Agile Development",
      desc: "Fast onboarding and sprint delivery models designed to accelerate your time-to-market.",
      icon: Zap,
      color: "text-indigo-700",
      bgColor: "bg-indigo-100",
    },
  ];

  const steps = [
    { num: "01", title: "Resource Alignment", desc: "We map out your technical stack requirements and delivery timelines." },
    { num: "02", title: "Squad Selection", desc: "Select pre-vetted senior software engineers specifically for your product." },
    { num: "03", title: "SLA onboarding", desc: "Establish transparent milestones, communication channels, and KPIs." },
    { num: "04", title: "Sprint Delivery", desc: "Our integrated team starts delivering code, with weekly reviews." },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-slate-50">
        
        {/* Section 1: Hero Banner */}
        <section className="relative w-full overflow-hidden bg-slate-950 py-14 text-white text-center">
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
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              Software Outsourcing
            </h1>
            <p className="font-sans text-slate-300 text-xs sm:text-sm max-w-lg mx-auto font-semibold">
              Deploy top-tier specialized engineering talent dynamically, scaling down when projects conclude.
            </p>
          </div>
        </section>

        {/* Section 2: Detailed split layout */}
        <section className="w-full py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Text description */}
              <div className="lg:col-span-7 space-y-6 text-slate-900">
                <p className="font-sans text-sm sm:text-base leading-relaxed font-bold text-slate-800">
                  Software Outsourcing enables our clients to access highly specialized
                  resources and pay only for the segment they use.
                </p>
                <p className="font-sans text-sm sm:text-base leading-relaxed font-semibold text-slate-600">
                  We at Saadyait provides the best service and most suitable company
                  in India for all your Software related needs. We assure you the
                  best one.
                </p>
                
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-primary">
                    <span>Connect with us for more details</span>
                    <ArrowRight className="w-4 h-4 animate-bounce" />
                  </span>
                </div>
              </div>

              {/* Right Column: High contrast image mock */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 aspect-video lg:aspect-4/3">
                  <Image
                    src="/hero-workspace.png"
                    alt="Software Outsourcing Workspace"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Why Outsource (New) */}
        <section className="w-full py-12 lg:py-16 bg-slate-50 border-t border-b border-slate-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
                Why Outsource with Saadya IT?
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-800 font-semibold max-w-lg mx-auto">
                Secure global capabilities with cost structures built to protect your startup or enterprise margins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.color} border border-slate-200 flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Our Outsourcing Process (New) */}
        <section className="w-full py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
                Our Outsourcing Process
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-800 font-semibold max-w-lg mx-auto">
                A structured, transparent onboarding timeline designed to deliver code without delays.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-3xl p-5 border-2 border-slate-200 hover:border-primary/20 hover:bg-white transition-all shadow-sm relative"
                >
                  <span className="absolute top-4 right-4 font-display font-black text-2xl text-primary/10">
                    {item.num}
                  </span>
                  <h3 className="font-display font-extrabold text-base text-slate-950 mt-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed mt-2 font-semibold">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Call to action (Upgraded) */}
        <section className="w-full py-12 bg-[#0A0F1D] text-white border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/team-hands.png"
              alt="Background hands"
              fill
              className="object-cover opacity-10 mix-blend-overlay"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center px-4 space-y-5 relative z-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              Accelerate your engineering capacity today
            </h2>
            <p className="font-sans text-slate-300 text-xs sm:text-sm font-semibold max-w-md mx-auto">
              Ready to onboard pre-vetted developers? Request full CVs and engineer schedules within 24 hours.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-extrabold text-sm shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
              >
                <span>Request Outsource Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
