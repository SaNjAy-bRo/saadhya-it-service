import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Layers, GitBranch, ArrowUpRight } from "lucide-react";

export default function AIWorkflow() {
  const steps = [
    {
      stepNum: "01",
      title: "Discovery & Assessment",
      desc: "We analyze your business workflows, audit your data ecosystems, and highlight high-impact AI opportunities.",
      icon: Layers,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      stepNum: "02",
      title: "Custom Model Architecture",
      desc: "Our engineers design proprietary machine learning models, custom neural networks, or LLM agent pipelines.",
      icon: Cpu,
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
    },
    {
      stepNum: "03",
      title: "Training & Integration",
      desc: "We securely train the models on your corporate datasets and integrate them into your existing software infrastructure.",
      icon: GitBranch,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      stepNum: "04",
      title: "Deployment & Optimization",
      desc: "Go live with continuous monitoring dashboards, automated feedback loops, and cost-efficient cloud scaling.",
      icon: Bot,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section id="ai-workflow" className="w-full py-14 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
            AI Implementation Path
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 leading-tight">
            How We Deploy <span className="text-gradient">Intelligent Systems</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl mx-auto font-semibold">
            We follow a structured, secure, and data-first deployment lifecycle to ensure every AI model drives measurable business ROI.
          </p>
        </div>

        {/* Steps Visual Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line for Large Screens */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-slate-100 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 hover:bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group z-10"
              >
                {/* Step Badge */}
                <div className="flex justify-between items-center mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${step.bgColor} ${step.color} border border-slate-200/50 flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-display font-black text-3xl text-slate-200 group-hover:text-primary/10 transition-colors">
                    {step.stepNum}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display font-extrabold text-lg text-slate-950 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-slate-800 leading-relaxed font-semibold">
                  {step.desc}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">Stage {step.stepNum}</span>
                  <Link href="/services/ai-automation" className="text-primary">
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
