import React from "react";
import Image from "next/image";
import { ArrowRight, Trophy, Award } from "lucide-react";

export default function ITSolutions() {
  return (
    <section
      id="about"
      className="w-full py-12 lg:py-14 bg-gradient-to-br from-slate-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Overlapping Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back decorative blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-3xl -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 aspect-video lg:aspect-4/3 z-10">
                <Image
                  src="/solutions-collage.png"
                  alt="IT Solutions Collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
              </div>

              {/* Floating Card: Achievements */}
              <div className="absolute -bottom-6 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3 z-20 animate-float">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-display font-extrabold text-base sm:text-lg text-slate-950 leading-none">
                    150+
                  </span>
                  <span className="block text-slate-500 text-xs font-extrabold mt-0.5 uppercase tracking-wider">
                    Completed Projects
                  </span>
                </div>
              </div>

              {/* Floating Card 2: Quality Certified */}
              <div className="absolute -top-4 -right-4 bg-white py-2 px-4 rounded-full shadow-lg border border-slate-200 flex items-center gap-2 z-20 animate-float [animation-delay:3s]">
                <Award className="w-4 h-4 text-secondary" />
                <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  ISO 27001 Certified
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
                Saadya IT solutions
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 leading-tight">
                IT solutions for your business.
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-900 leading-relaxed font-semibold">
              Here at Saadya IT services we make every attempt to make everything
              possible for our clients by delivering high quality services. We
              resource cost-effective, qualified professionals on-site/off-site
              to design and implement software applications without exceeding
              your budget.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="font-extrabold text-sm text-slate-950 block">Budget Optimized</span>
                  <span className="text-slate-500 text-xs font-semibold mt-0.5 block">High ROI and resources</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="font-extrabold text-sm text-slate-950 block">Expert Staffing</span>
                  <span className="text-slate-500 text-xs font-semibold mt-0.5 block">On-site or remote engineering</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-extrabold transition-all shadow-md"
              >
                <span>See All Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
