"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Language = 'en' | 'de';

const translations = {
  en: {
    teaser: "Something delicious is cooking",
    headline: "The future of",
    headlineHighlight: "food discovery.",
    description: "We are building the ultimate platform for food lovers. Get ready to experience dining in a whole new way.",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    comingSoon: "Coming March 1st, 2026",
    footer: "Mniam App. All rights reserved."
  },
  de: {
    teaser: "Etwas Leckeres kocht",
    headline: "Die Zukunft der",
    headlineHighlight: "Food-Discovery.",
    description: "Wir bauen die ultimative Plattform für Food-Lover. Mach dich bereit, Essen gehen völlig neu zu erleben.",
    days: "Tage",
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    comingSoon: "Ab 1. März 2026",
    footer: "Mniam App. Alle Rechte vorbehalten."
  }
};

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const t = translations[lang];

  useEffect(() => {
    const targetDate = new Date("2026-03-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0"></div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-mniam-green/10 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-mniam-green/5 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="w-full py-8 px-6 md:px-12 flex justify-between items-center relative z-10 max-w-7xl mx-auto">
        <div className="relative w-40 h-12">
          <Image
            src="/mniam-logo-green.png"
            alt="Mniam Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-2 bg-white/10 rounded-full p-1 border border-white/10 backdrop-blur-sm">
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${lang === 'en' ? 'bg-mniam-green text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('de')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${lang === 'de' ? 'bg-mniam-green text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            DE
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-mniam-green font-medium tracking-widest uppercase text-sm md:text-base animate-pulse">
              {t.teaser}
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
              {t.headline} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                {t.headlineHighlight}
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed pt-4">
              {t.description}
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 max-w-3xl mx-auto">
            {[
              { label: t.days, value: timeLeft.days },
              { label: t.hours, value: timeLeft.hours },
              { label: t.minutes, value: timeLeft.minutes },
              { label: t.seconds, value: timeLeft.seconds },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-4xl md:text-6xl font-bold font-mono text-white mb-2">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-gray-500 text-sm uppercase tracking-wider font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mniam-green/10 border border-mniam-green/20 text-mniam-green text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mniam-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mniam-green"></span>
              </span>
              {t.comingSoon}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-gray-600 text-sm relative z-10 space-y-2">
        <p>&copy; {new Date().getFullYear()} {t.footer}</p>
        <div className="flex justify-center gap-4 text-xs">
          <a href="/impressum" className="hover:text-mniam-green transition-colors">Impressum</a>
          <span className="text-gray-700">•</span>
          <a href="/datenschutz" className="hover:text-mniam-green transition-colors">Datenschutz</a>
        </div>
      </footer>
    </div>
  );
}
