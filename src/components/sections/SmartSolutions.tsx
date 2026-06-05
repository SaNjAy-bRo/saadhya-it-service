import React from "react";
import { TrendingUp, FileText, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";

export default function SmartSolutions() {
  const cards = [
    {
      title: "Grow your brand and business",
      description: "Scale your reach with search optimization and custom CRM integrations.",
      icon: TrendingUp,
      borderColor: "hover:border-blue-500/50",
      iconCol: "text-blue-700",
      bgCol: "bg-blue-100",
    },
    {
      title: "Business Administration",
      description: "Consolidate operations, billing, and resource management into a single cloud dashboard.",
      icon: FileText,
      borderColor: "hover:border-cyan-500/50",
      iconCol: "text-cyan-700",
      bgCol: "bg-cyan-100",
    },
    {
      title: "Increase conversion rate",
      description: "A/B test workflows and accelerate load times to keep engagement heights.",
      icon: BarChart3,
      borderColor: "hover:border-indigo-500/50",
      iconCol: "text-indigo-700",
      bgCol: "bg-indigo-100",
    },
    {
      title: "Risk management tools",
      description: "Track system vulnerabilities and handle automated recovery plans seamlessly.",
      icon: ShieldCheck,
      borderColor: "hover:border-purple-500/50",
      iconCol: "text-purple-700",
      bgCol: "bg-purple-100",
    },
  ];

  return (
    <section
      id="solutions"
      className="w-full py-12 lg:py-14 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
            Innovative Systems
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 leading-tight">
            Smart Solutions
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-900 leading-relaxed max-w-2xl mx-auto font-semibold">
            Saadya IT allows your business and technology computers to store,
            transmit, analyze, and manipulate big data in the digital world.
          </p>
        </div>

        {/* Grids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`group bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md ${card.borderColor} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  {/* Icon Panel */}
                  <div
                    className={`w-12 h-12 rounded-xl ${card.bgCol} ${card.iconCol} border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950">
                    {card.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200 flex items-center gap-1.5 text-xs font-extrabold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm font-extrabold tracking-wider text-primary hover:text-primary-dark transition-colors uppercase"
          >
            <span>See More Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
