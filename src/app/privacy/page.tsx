"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CookieConsent from "@/components/ui/CookieConsent";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-slate-50 py-6">
        
        {/* Hero Banner */}
        <section className="relative w-full overflow-hidden bg-slate-950 py-12 text-white text-center rounded-3xl max-w-7xl mx-auto">
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

          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-2">
            <h1 className="font-display font-black text-3xl sm:text-4xl text-white">
              Privacy Policy
            </h1>
            <p className="font-sans text-slate-350 text-xs sm:text-sm font-semibold">
              Last updated: June 5, 2026
            </p>
          </div>
        </section>

        {/* Content Box */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl text-slate-800 font-sans space-y-6 sm:space-y-8">
            
            <div className="space-y-3">
              <h2 className="font-display font-extrabold text-lg sm:text-xl text-slate-950">
                1. Information We Collect
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                Saadya IT Services collects personal information you provide directly to us through our contact forms, service agreements, or direct emails. This information includes your full name, business email, subject of inquiry, and project details.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display font-extrabold text-lg sm:text-xl text-slate-950">
                2. How We Use Your Data
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                We use the collected information exclusively to process inquiries, schedule technical SLA consultations, provide project estimates, and communicate updates. We do not sell or trade your data to third parties.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display font-extrabold text-lg sm:text-xl text-slate-950">
                3. Security Measures
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                We implement industry-standard encryption, firewalls, and access control models to safeguard your corporate assets and personal identifiers from unauthorized access or exposure.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display font-extrabold text-lg sm:text-xl text-slate-950">
                4. Cookies & Trackers
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                This website uses browser cookies to improve your user experience and load times. You can choose to accept or reject cookies through the floating toast prompt.
              </p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
