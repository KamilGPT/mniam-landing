"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Language = 'en' | 'de';

const translations = {
    en: {
        title: "Legal Notice",
        tmg: "Information according to § 5 TMG",
        contact: "Contact",
        responsible: "Responsible for content according to § 18 Abs. 2 MStV",
        footer: "Mniam App. All rights reserved.",
        about: "About",
        impressum: "Legal Notice",
        privacy: "Privacy Policy"
    },
    de: {
        title: "Impressum",
        tmg: "Angaben gemäß § 5 TMG",
        contact: "Kontakt",
        responsible: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        footer: "Mniam App. Alle Rechte vorbehalten.",
        about: "Über uns",
        impressum: "Impressum",
        privacy: "Datenschutz"
    }
};

export default function Impressum() {
    const [lang, setLang] = useState<Language>('de');
    const t = translations[lang];

    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            {/* Navigation */}
            <nav className="w-full py-8 px-6 md:px-12 relative max-w-7xl mx-auto">
                <Link href="/" className="relative w-40 h-12 mx-auto block">
                    <Image
                        src="/mniam-logo-green.png"
                        alt="Mniam Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Language Switcher */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1 border border-gray-200 absolute top-8 right-6 md:right-12">
                    <button
                        onClick={() => setLang('en')}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${lang === 'en' ? 'bg-mniam-green text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => setLang('de')}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${lang === 'de' ? 'bg-mniam-green text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        DE
                    </button>
                </div>
            </nav>

            <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
                <h1 className="text-3xl md:text-4xl font-bold mb-12 text-mniam-green">{t.title}</h1>

                <div className="space-y-8 text-gray-700">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.tmg}</h2>
                        <p>
                            Kamil Jacek Krzyzanowski<br />
                            Benjamin-Franklin-Straße 3a<br />
                            63457 Hanau<br />
                            Deutschland
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.contact}</h2>
                        <p>
                            E-Mail: <a href="mailto:hello@mniam.app" className="text-mniam-green hover:underline">hello@mniam.app</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.responsible}</h2>
                        <p>
                            Kamil Jacek Krzyzanowski<br />
                            Benjamin-Franklin-Straße 3a<br />
                            63457 Hanau<br />
                            Deutschland
                        </p>
                    </section>
                </div>
            </main>

            <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-200 space-y-2">
                <p>&copy; {new Date().getFullYear()} {t.footer}</p>
                <div className="flex justify-center gap-4 text-xs">
                    <a href="/about" className="hover:text-mniam-green transition-colors">{t.about}</a>
                    <span className="text-gray-400">•</span>
                    <a href="/impressum" className="hover:text-mniam-green transition-colors">{t.impressum}</a>
                    <span className="text-gray-400">•</span>
                    <a href="/datenschutz" className="hover:text-mniam-green transition-colors">{t.privacy}</a>
                </div>
            </footer>
        </div>
    );
}
