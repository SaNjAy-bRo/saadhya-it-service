import React from "react";
import Link from "next/link";
import { BrainCircuit, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function AICTA() {
  const stats = [
    { value: "60%", label: "Average Cost Reduction" },
    { value: "10x", label: "Workflow Processing Speed" },
    { value: "99.5%", label: "Integration Accuracy" },
  ];

  return (
    <section className="w-full py-10 lg:py-16 bg-[#070A13] text-white relative overflow-hidden border-t border-b border-white/5">
      {/* Dynamic Glow Gradients */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Solutions</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Ready to accelerate your <span className="text-gradient">AI initiatives?</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-semibold max-w-xl">
                Empower your business with custom machine learning pipelines, robotic process automations, and intelligent chatbots. Our engineering team designs, integrates, and hosts secure AI operations tailored to your business structure.
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Secure Model Fine-Tuning",
                  "End-to-End API Integration",
                  "Privacy & Compliance Audits",
                  "24/7 Intelligent Monitoring",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-bold text-slate-200">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
                >
                  <span>Book AI Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/ai-automation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all"
                >
                  <span>View Full Capabilities</span>
                </Link>
              </div>
            </div>

            {/* Right Stats Column */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors text-center lg:text-left flex flex-col justify-center"
                  >
                    <span className="font-display font-black text-3xl sm:text-4xl text-secondary block">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-400 block mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
