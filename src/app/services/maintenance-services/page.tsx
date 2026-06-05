"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import { ArrowRight, ShieldCheck, Activity, Database, Wrench } from "lucide-react";

export default function MaintenanceServices() {
  const vectors = [
    {
      title: "Active Monitoring",
      desc: "Continuous server checkups and log scans to catch pipeline bottlenecks before they disrupt operations.",
      icon: Activity,
      color: "text-blue-700",
      bgColor: "bg-blue-100",
    },
    {
      title: "Database Safeguards",
      desc: "Routine schema backups, integrity audits, and secure recovery protocol executions.",
      icon: Database,
      color: "text-cyan-700",
      bgColor: "bg-cyan-100",
    },
    {
      title: "Patch Administration",
      desc: "Deploy OS upgrades, firmware patches, and runtime compiler optimizations under secure maintenance windows.",
      icon: Wrench,
      color: "text-indigo-700",
      bgColor: "bg-indigo-100",
    },
  ];

  const protocol = [
    { num: "01", title: "Incident Log", desc: "A client reports an issue or our monitoring system triggers a ticket." },
    { num: "02", title: "Triage & Assign", desc: "Our system admins categorize and assign the ticket within 15 minutes." },
    { num: "03", title: "Active Resolution", desc: "Engineers apply hotfixes or deploy patches in staging before production." },
    { num: "04", title: "SLA Verification", desc: "Verify solution health and compile full performance audit report." },
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
              Maintenance Services
            </h1>
            <p className="font-sans text-slate-300 text-xs sm:text-sm max-w-lg mx-auto font-semibold">
              Keeping your systems secure, up-to-date, and performing at peak efficiency 24/7.
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
                  Maintenance Services helps clients protect their IT infrastructure, manage software upgrades, secure critical databases, and resolve legacy environment bottlenecks.
                </p>
                <p className="font-sans text-sm sm:text-base leading-relaxed font-semibold text-slate-600">
                  We at Saadya IT provide continuous server audits, performance optimization, patch management, and dedicated maintenance agreements tailored to support your business operations.
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
                    src="/team-collaboration.png"
                    alt="Maintenance Services Collaboration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Maintenance Core Vectors (New) */}
        <section className="w-full py-12 lg:py-16 bg-slate-50 border-t border-b border-slate-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
                Maintenance Core Vectors
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-800 font-semibold max-w-lg mx-auto">
                Comprehensive maintenance agreements designed to guarantee system health, server uptime, and database backups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vectors.map((item, idx) => {
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

        {/* Section 4: SLA Escalation Protocol (New) */}
        <section className="w-full py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
                SLA Escalation Protocol
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-800 font-semibold max-w-lg mx-auto">
                Our clear support ticket escalation process ensures critical bugs are triaged and solved instantly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {protocol.map((item, idx) => (
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
              Secure your system stability today
            </h2>
            <p className="font-sans text-slate-300 text-xs sm:text-sm font-semibold max-w-md mx-auto">
              Protect your databases, keep servers optimized, and receive active incident response under our secure SLAs.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-extrabold text-sm shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
              >
                <span>Request Maintenance SLA</span>
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
