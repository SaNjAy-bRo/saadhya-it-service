"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, X, ArrowRight, LifeBuoy, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { name: "AI Automation Service", href: "/services/ai-automation" },
    { name: "Software Outsourcing", href: "/services/software-outsourcing" },
    { name: "Enterprise Solutions", href: "/services/enterprise-solutions" },
    { name: "Maintenance Services", href: "/services/maintenance-services" },
  ];

  return (
    <header className="w-full z-50 transition-all duration-300">
      {/* Top Contact Row */}
      <div className="w-full bg-[#0A0F1D] text-slate-300 text-[13px] py-2.5 px-4 sm:px-6 lg:px-8 border-b border-white/5 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-primary" />
          <a
            href="mailto:contact@saadyait.com"
            className="hover:text-primary transition-colors font-medium"
          >
            contact@saadyait.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#help"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <LifeBuoy className="w-3.5 h-3.5 text-secondary" />
            <span>Help Center</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "sticky top-0 bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center group relative w-48 h-14">
            <Image
              src="/logo.png"
              alt="Saadya IT Services Logo"
              fill
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-sans text-[15px] font-semibold text-slate-600 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-sans text-[15px] font-semibold text-slate-600 hover:text-primary transition-colors"
            >
              About
            </Link>

            {/* Services Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="inline-flex items-center gap-1 font-sans text-[15px] font-semibold text-slate-600 hover:text-primary transition-colors focus:outline-none py-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu Box */}
              {dropdownOpen && (
                <div className="absolute left-0 top-full pt-1 w-56 z-50 animate-fade-in-up">
                  <div className="bg-white border-2 border-slate-200 rounded-2xl shadow-xl py-1.5 overflow-hidden">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#solutions"
              className="font-sans text-[15px] font-semibold text-slate-600 hover:text-primary transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/#testimonials"
              className="font-sans text-[15px] font-semibold text-slate-600 hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-all shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[92px] bg-white z-40 border-t border-slate-100 flex flex-col p-6 animate-fade-in-up overflow-y-auto">
          <nav className="flex flex-col gap-4 mb-8">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="font-sans text-lg font-semibold text-slate-800 hover:text-primary transition-colors py-1.5 border-b border-slate-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="font-sans text-lg font-semibold text-slate-800 hover:text-primary transition-colors py-1.5 border-b border-slate-50"
            >
              About
            </Link>

            {/* Mobile Services Sub-list */}
            <div className="py-1.5 border-b border-slate-50 space-y-2">
              <span className="font-sans text-lg font-semibold text-slate-800">
                Services
              </span>
              <div className="pl-4 flex flex-col gap-2.5 pt-1.5">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-sm font-semibold text-slate-500 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/#solutions"
              onClick={() => setIsOpen(false)}
              className="font-sans text-lg font-semibold text-slate-800 hover:text-primary transition-colors py-1.5 border-b border-slate-50"
            >
              Solutions
            </Link>
            <Link
              href="/#testimonials"
              onClick={() => setIsOpen(false)}
              className="font-sans text-lg font-semibold text-slate-800 hover:text-primary transition-colors py-1.5 border-b border-slate-50"
            >
              Testimonials
            </Link>
          </nav>
          
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white text-base font-semibold transition-all shadow-md shadow-primary/15"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </header>
  );
}
