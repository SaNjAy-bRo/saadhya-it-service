"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Sparkles,
  Workflow,
  Gauge,
  ShieldCheck,
  Repeat,
  BarChart3,
  Check,
} from "lucide-react";

export default function AIAutomationService() {
  const capabilities = [
    {
      title: "Intelligent Process Automation",
      desc: "Automate repetitive business workflows using AI-driven decision engines that learn and improve over time.",
      icon: Workflow,
      color: "text-blue-700",
      bgColor: "bg-blue-100",
    },
    {
      title: "Predictive Analytics",
      desc: "Leverage machine learning models to forecast trends, anticipate risks, and guide strategic decisions with data-backed insights.",
      icon: BarChart3,
      color: "text-cyan-700",
      bgColor: "bg-cyan-100",
    },
    {
      title: "Smart Document Processing",
      desc: "Extract, classify, and process unstructured data from documents, invoices, and forms using NLP and computer vision.",
      icon: BrainCircuit,
      color: "text-indigo-700",
      bgColor: "bg-indigo-100",
    },
    {
      title: "AI-Powered Security",
      desc: "Deploy intelligent threat detection, anomaly monitoring, and automated incident response to safeguard your systems 24/7.",
      icon: ShieldCheck,
      color: "text-emerald-700",
      bgColor: "bg-emerald-100",
    },
    {
      title: "Conversational AI & Chatbots",
      desc: "Build intelligent virtual assistants and chatbots that handle customer queries, support tickets, and internal operations autonomously.",
      icon: Bot,
      color: "text-violet-700",
      bgColor: "bg-violet-100",
    },
    {
      title: "Performance Optimization",
      desc: "Use AI to continuously monitor system performance, auto-scale resources, and optimize infrastructure costs in real time.",
      icon: Gauge,
      color: "text-rose-700",
      bgColor: "bg-rose-100",
    },
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Discovery & Assessment",
      desc: "We audit your current workflows, identify automation opportunities, and map AI readiness across your organization.",
    },
    {
      num: "02",
      title: "AI Model Design",
      desc: "Our engineers design custom ML models and automation pipelines tailored to your specific business processes.",
    },
    {
      num: "03",
      title: "Integration & Training",
      desc: "We integrate AI solutions into your existing tech stack and train models on your proprietary datasets for maximum accuracy.",
    },
    {
      num: "04",
      title: "Deploy & Monitor",
      desc: "Launch production-ready AI systems with real-time monitoring dashboards and continuous improvement loops.",
    },
  ];

  const stats = [
    { value: "60%", label: "Operational Cost Reduction" },
    { value: "10x", label: "Faster Data Processing" },
    { value: "99.5%", label: "Automation Accuracy Rate" },
    { value: "24/7", label: "Intelligent Monitoring" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-slate-50">
        {/* Section 1: Hero Banner */}
        <section className="relative w-full overflow-hidden bg-slate-950 py-16 lg:py-20 text-white text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/ai-automation-hero.png"
              alt="AI Automation Background"
              fill
              className="object-cover opacity-15 pointer-events-none"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D] via-[#0A0F1D]/90 to-[#0A0F1D]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/25 text-primary mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold">AI-Powered Solutions</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              AI Automation{" "}
              <span className="text-gradient">Services</span>
            </h1>
            <p className="font-sans text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-semibold leading-relaxed">
              Transform your business operations with intelligent automation,
              machine learning, and AI-driven solutions that reduce costs,
              eliminate errors, and scale infinitely.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-extrabold text-sm shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: Overview Split Layout */}
        <section className="w-full py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Image */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 aspect-video lg:aspect-4/3">
                  <Image
                    src="/ai-automation-hero.png"
                    alt="AI Automation Dashboard"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                </div>
              </div>

              {/* Right Column: Text */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-slate-900">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
                    Why AI Automation?
                  </span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-slate-950 leading-tight">
                    Supercharge Your Operations with Artificial Intelligence
                  </h2>
                </div>

                <p className="font-sans text-sm sm:text-base leading-relaxed font-semibold text-slate-700">
                  At Saadya IT, we harness the power of AI and machine learning
                  to automate complex business processes, extract insights from
                  massive datasets, and build intelligent systems that adapt and
                  evolve with your business needs.
                </p>
                <p className="font-sans text-sm sm:text-base leading-relaxed font-semibold text-slate-600">
                  From robotic process automation (RPA) to custom ML model
                  deployment, our certified AI engineers deliver end-to-end
                  solutions that drive measurable ROI and competitive advantage.
                </p>

                {/* Bullet details */}
                <div className="space-y-3">
                  {[
                    "Custom ML model training on your proprietary data",
                    "Seamless integration with existing enterprise systems",
                    "Real-time analytics and intelligent decision support",
                    "Scalable cloud-native AI infrastructure",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-slate-900 font-bold"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Stats Bar */}
        <section className="w-full py-10 bg-primary/5 border-y border-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center space-y-1"
                >
                  <span className="font-display font-black text-3xl sm:text-4xl text-primary">
                    {stat.value}
                  </span>
                  <span className="block text-xs sm:text-sm font-bold text-slate-600">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: AI Capabilities Grid */}
        <section
          id="capabilities"
          className="w-full py-14 lg:py-20 bg-slate-50 border-b border-slate-200/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
                Our Expertise
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-slate-950">
                AI & Automation Capabilities
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-700 font-semibold max-w-xl mx-auto">
                End-to-end AI solutions spanning process automation, predictive
                intelligence, natural language processing, and intelligent
                security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-primary/15 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.color} border border-slate-200 flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-slate-700 leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: Automation Workflow Process */}
        <section className="w-full py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
                Our Process
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-slate-950">
                How We Implement AI Automation
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-700 font-semibold max-w-xl mx-auto">
                A structured, data-driven methodology from discovery to
                deployment ensuring your AI initiatives deliver real value.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="relative bg-slate-50 rounded-3xl p-6 border-2 border-slate-200 hover:border-primary/20 hover:bg-white transition-all shadow-sm group"
                >
                  <span className="absolute top-4 right-4 font-display font-black text-3xl text-primary/10 group-hover:text-primary/20 transition-colors">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-4">
                    <Repeat className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950 mt-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-700 leading-relaxed mt-2 font-semibold">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Call to Action */}
        <section className="w-full py-16 bg-[#0A0F1D] text-white border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/ai-automation-hero.png"
              alt="AI Background"
              fill
              className="object-cover opacity-8 mix-blend-overlay"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center px-4 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-secondary mx-auto">
              <BrainCircuit className="w-4 h-4" />
              <span className="text-sm font-bold">Ready to Transform?</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              Start Your AI Transformation Journey Today
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base font-semibold max-w-lg mx-auto leading-relaxed">
              Schedule a free consultation with our AI engineers and discover how
              intelligent automation can revolutionize your business operations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-extrabold text-sm shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
              >
                <span>Schedule AI Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
