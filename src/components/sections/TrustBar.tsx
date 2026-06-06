import React from "react";
import { CheckCircle2, Layers, Cpu, BrainCircuit } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    { name: "Our Vision", desc: "Future-ready roadmap" },
    { name: "Business Solutions", desc: "Scalable growth plans" },
    { name: "How it Works", desc: "Agile deployment" },
    { name: "Trusted Experience", desc: "Expert professionals" },
  ];

  const focusCards = [
    {
      title: "Seamless Integration",
      description:
        "Connect legacy architectures with modern cloud components smoothly, ensuring zero loss of operational productivity.",
      icon: Layers,
      bgLight: "bg-blue-100",
      textCol: "text-blue-700",
    },
    {
      title: "AI & Smart Automation",
      description:
        "Deploy intelligent cognitive models, autonomous agents, and custom machine learning pipelines to optimize decision-making.",
      icon: BrainCircuit,
      bgLight: "bg-cyan-100",
      textCol: "text-cyan-700",
    },
    {
      title: "IT Security",
      description:
        "Rigorous penetration testing, threat monitoring, and zero-trust security frameworks to defend your digital capital.",
      icon: Cpu,
      bgLight: "bg-indigo-100",
      textCol: "text-indigo-700",
    },
  ];

  return (
    <div className="w-full relative z-20">
      
      {/* Floating Trust Banner - Transparent Wrapper, Shifting Over Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-slate-200/80 py-4 sm:py-6 px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 sm:gap-3 group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <span className="block font-sans font-extrabold text-sm lg:text-base text-slate-950 truncate leading-none">
                  {item.name}
                </span>
                <span className="block text-slate-500 text-xs sm:text-xs font-bold mt-0.5 sm:mt-1 truncate">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Focus Cards Section - White Background */}
      <div className="w-full bg-white pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-primary/35 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Icon Frame */}
                    <div
                      className={`w-12 h-12 rounded-xl ${card.bgLight} ${card.textCol} border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-display font-extrabold text-lg text-slate-950">
                      {card.title}
                    </h3>

                    <p className="font-sans text-sm text-slate-800 leading-relaxed font-semibold">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
