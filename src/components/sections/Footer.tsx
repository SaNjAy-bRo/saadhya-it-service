import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-100/80 pt-16 pb-8 text-slate-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-12">
          
          {/* Left Column: Vision description */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-display font-extrabold text-sm tracking-widest text-slate-800 uppercase">
              Our Mission
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Saadya IT Services is a start up in the industry. But our team is
              filled with variety of professionals who have many years of
              experience in different fields of IT industry. This is started
              with a vision of helping our clients with profitable growth.
            </p>
          </div>

          {/* Middle Column: Brand & Logo */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            {/* Logo */}
            <div className="relative w-44 h-16 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center p-2.5">
              <Image
                src="/logo.png"
                alt="Saadya IT Services Logo"
                fill
                className="object-contain p-2"
              />
            </div>
            
            <div className="space-y-2">
              <span className="block text-xs text-slate-400">Please write to us at:</span>
              <a
                href="mailto:contact@saadyait.com"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-800 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@saadyait.com</span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://saadyait.com"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Site Map Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-sm tracking-widest text-slate-800 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Software Outsourcing
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-primary transition-colors">
                  Enterprise Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Maintenance Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-400">
          <div>
            <span>Copyright © {currentYear} - saadyait.com .</span>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-600 transition-colors">
              Terms & conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
