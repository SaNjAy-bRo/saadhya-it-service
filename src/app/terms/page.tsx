"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CookieConsent from "@/components/ui/CookieConsent";

export default function TermsAndConditions() {
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
              Terms & Conditions
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
                1. Acceptance of Terms
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                By accessing or using the website of Saadya IT Services (saadyait.com), you agree to comply with and be bound by these Terms & Conditions. If you do not agree to these terms, please refrain from using our services.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display font-extrabold text-lg sm:text-xl text-slate-950">
                2. SLA & Service Agreements
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                Any engagement for Software Outsourcing, Enterprise Solutions, or Maintenance Services is governed by a separate, legally binding Service Level Agreement (SLA). The details on this website do not supersede formal project contracts.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display font-extrabold text-lg sm:text-xl text-slate-950">
                3. Intellectual Property
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                All branding assets, code snippets, graphic illustrations, and page copy on this website are the intellectual property of Saadya IT Services. Unauthorized copying, modification, or redistribution is strictly prohibited.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display font-extrabold text-lg sm:text-xl text-slate-950">
                4. Liability Disclaimer
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                While we strive to ensure that all information on our website is accurate and current, we do not guarantee its completeness. Saadya IT Services is not liable for operational delays or server bugs arising from external resource access.
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
