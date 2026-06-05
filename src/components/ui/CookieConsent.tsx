"use client";

import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after a brief delay
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("saadyait-cookie-consent");
      if (!consent) {
        setVisible(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("saadyait-cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl animate-fade-in-up">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-100 shadow-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs sm:text-sm text-slate-600 font-semibold text-center sm:text-left leading-relaxed">
          This website uses cookies to improve your web experience.
        </p>
        <button
          onClick={handleAccept}
          className="w-full sm:w-auto shrink-0 px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold shadow-md shadow-primary/10 transition-colors"
        >
          ACCEPT
        </button>
      </div>
    </div>
  );
}
