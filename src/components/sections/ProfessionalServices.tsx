import React from "react";
import { Laptop, Cpu, Workflow, Database, ArrowUpRight } from "lucide-react";

export default function ProfessionalServices() {
  const services = [
    {
      title: "Outsourcing",
      description: "Professional services for outsourced security and IT operations in the field.",
      icon: Laptop,
      color: "text-blue-700",
      bgColor: "bg-blue-100",
    },
    {
      title: "Product Development",
      description: "We focus to become a reliable vendor providing solutions for the global markets.",
      icon: Cpu,
      color: "text-cyan-700",
      bgColor: "bg-cyan-100",
    },
    {
      title: "Enterprise Solutions",
      description: "Focuses on building or integrating components that power modern business workflow delivery processes.",
      icon: Workflow,
      color: "text-indigo-700",
      bgColor: "bg-indigo-100",
    },
    {
      title: "Database Migration",
      description: "Help customers to safely migrate their databases, servers, and legacy applications to the cloud.",
      icon: Database,
      color: "text-purple-700",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-12 lg:py-14 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
            Core Competencies
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 leading-tight">
            We Believe In professional Services
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-900 leading-relaxed font-semibold">
            Saadya IT services was founded on the principle that success results
            from delivering high quality services while being responsible, flexible
            and innovative. In today's changing marketplace, companies like Saadya
            IT services have to be sensitive to changing corporate environments and
            participate in understanding and addressing their client's technical concerns.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-primary/35 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Panel */}
                  <div
                    className={`w-12 h-12 rounded-xl ${service.bgColor} ${service.color} border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-slate-950">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm text-slate-800 leading-relaxed font-semibold">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200 flex items-center gap-2 group-hover:text-primary transition-colors text-slate-500 font-extrabold">
                  <span className="text-xs uppercase tracking-wider">
                    Learn More
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
