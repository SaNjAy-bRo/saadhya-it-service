import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ITSolutions from "@/components/sections/ITSolutions";
import ProfessionalServices from "@/components/sections/ProfessionalServices";
import KeyBenefits from "@/components/sections/KeyBenefits";
import SmartSolutions from "@/components/sections/SmartSolutions";
import AICapabilities from "@/components/sections/AICapabilities";
import AIWorkflow from "@/components/sections/AIWorkflow";
import HappyCustomers from "@/components/sections/HappyCustomers";
import AICTA from "@/components/sections/AICTA";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import CookieConsent from "@/components/ui/CookieConsent";

export default function Home() {
  return (
    <>
      {/* Navigation Menu */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* Core Trust & Pillars Indicator Grid */}
        <TrustBar />

        {/* Detailed IT Solutions Section */}
        <ITSolutions />

        {/* Core Professional Services Grid */}
        <ProfessionalServices />

        {/* Advantages & Team Collage Block */}
        <KeyBenefits />

        {/* Grid representing Innovating Smart Solutions */}
        <SmartSolutions />

        {/* AI Capabilities Showcase */}
        <AICapabilities />

        {/* AI Transformation Step-by-Step Workflow */}
        <AIWorkflow />

        {/* Global Clients & Testimonials Carousel */}
        <HappyCustomers />

        {/* AI Bottom Call To Action Banner */}
        <AICTA />

        {/* Contact Form & Collaboration CTA */}
        <CTASection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Cookie Consent Toast */}
      <CookieConsent />
    </>
  );
}
