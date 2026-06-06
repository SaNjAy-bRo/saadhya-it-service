import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BrainCircuit, Workflow, BarChart3, Bot, ArrowRight, Sparkles } from "lucide-react";

export default function AICapabilities() {
  const items = [
    {
      title: "Intelligent Process Automation",
      desc: "Streamline high-volume tasks and eliminate manual errors using self-learning engines.",
      icon: Workflow,
      color: "text-blue-600",
      bgColor: "bg-blue-50 border-blue-100",
      hoverBorder: "hover:border-blue-400/50",
    },
    {
      title: "Predictive Data Insights",
      desc: "Deploy custom ML models to analyze historical patterns and forecast trends.",
      icon: BarChart3,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 border-cyan-100",
      hoverBorder: "hover:border-cyan-400/50",
    },
    {
      title: "Conversational Agents",
      desc: "Engage users and resolve inquiries instantly using generative AI chatbots.",
      icon: Bot,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 border-indigo-100",
      hoverBorder: "hover:border-indigo-400/50",
    },
    {
      title: "Cognitive Document AI",
      desc: "Extract, classify, and parse critical data from unstructured invoices and forms.",
      icon: BrainCircuit,
      color: "text-purple-600",
      bgColor: "bg-purple-50 border-purple-100",
      hoverBorder: "hover:border-purple-400/50",
    },
  ];

  return (
    <section id="ai-capabilities" className="w-full py-14 lg:py-20 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -ml-40 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Innovation</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 leading-tight">
            Intelligent Automation & <span className="text-gradient">AI Services</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto font-semibold">
            Accelerate your operations with cognitive algorithms, autonomous agents, and intelligence built directly into your core business applications.
          </p>
        </div>

        {/* Split Content: Cards + AI Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Capabilities Grid */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`group bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md ${item.hoverBorder} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
                  >
                    <div className="space-y-4">
                      {/* Icon Panel */}
                      <div
                        className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.color} border flex items-center justify-center group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="font-display font-extrabold text-lg text-slate-950 leading-snug">
                        {item.title}
                      </h3>

                      <p className="font-sans text-sm text-slate-850 leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-extrabold text-primary">
                      <Link href="/services/ai-automation" className="flex items-center gap-1.5 hover:underline">
                        <span>Explore Solution</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: AI Automation Image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing Gradient Board */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-2 scale-98 blur-xs" />

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-square lg:aspect-4/3 z-10">
                <Image
                  src="/ai-it-dashboard.png"
                  alt="IT Automation and Business Intelligence"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* Overlapping Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#0A0F1D] text-white py-3 px-5 rounded-2xl shadow-2xl z-20 border border-white/10 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-200">
                  AI Integration Hub
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services/ai-automation"
            className="inline-flex items-center gap-2 text-sm font-extrabold tracking-wider text-primary hover:text-primary-dark transition-colors uppercase"
          >
            <span>Learn More About Our AI Offerings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
