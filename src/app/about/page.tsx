"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Language = 'en' | 'de';

const translations = {
    en: {
        title: "About Mniam",
        subtitle: "The Future of Food Discovery",
        intro: "Mniam is a mobile application that transforms how people discover and experience food. Launching March 2026.",
        whatIsTitle: "What is Mniam?",
        whatIsText: "Mniam is a food discovery platform that helps users find restaurants and dishes through visual menus, personalized filters, and community recommendations. Whether you're looking for vegan options, gluten-free meals, or just want to see what's popular nearby, Mniam makes it easy.",
        forUsersTitle: "For Food Lovers",
        forUsersText: "Discover restaurants through photos, filter by dietary preferences, and save your favorite dishes. Never miss out on great food again.",
        forRestaurantsTitle: "For Restaurants",
        forRestaurantsText: "Showcase your menu with beautiful photos and engage customers with digital loyalty programs. Gain insights into what dishes resonate with your audience.",
        launchTitle: "Coming Soon",
        launchText: "Mniam will be available on iOS and Android starting March 1st, 2026.",
        contactTitle: "Contact",
        contactText: "For inquiries:",
        footer: "Mniam App. All rights reserved.",
        about: "About",
        impressum: "Legal Notice",
        privacy: "Privacy Policy"
    },
    de: {
        title: "Über Mniam",
        subtitle: "Die Zukunft der Food-Discovery",
        intro: "Mniam ist eine mobile Anwendung, die verändert, wie Menschen Essen entdecken und erleben. Start im März 2026.",
        whatIsTitle: "Was ist Mniam?",
        whatIsText: "Mniam ist eine Food-Discovery-Plattform, die Nutzern hilft, Restaurants und Gerichte durch visuelle Menüs, personalisierte Filter und Community-Empfehlungen zu finden. Egal ob du nach veganen Optionen, glutenfreien Gerichten suchst oder einfach sehen möchtest, was in der Nähe beliebt ist – Mniam macht es einfach.",
        forUsersTitle: "Für Food-Lover",
        forUsersText: "Entdecke Restaurants durch Fotos, filtere nach Ernährungspräferenzen und speichere deine Lieblingsgerichte. Verpasse nie wieder großartiges Essen.",
        forRestaurantsTitle: "Für Restaurants",
        forRestaurantsText: "Präsentiere dein Menü mit schönen Fotos und binde Kunden mit digitalen Treueprogrammen ein. Gewinne Einblicke, welche Gerichte bei deinem Publikum ankommen.",
        launchTitle: "Demnächst",
        launchText: "Mniam wird ab dem 1. März 2026 für iOS und Android verfügbar sein.",
        contactTitle: "Kontakt",
        contactText: "Für Anfragen:",
        footer: "Mniam App. Alle Rechte vorbehalten.",
        about: "Über uns",
        impressum: "Impressum",
        privacy: "Datenschutz"
    }
};

export default function About() {
    const [lang, setLang] = useState<Language>('en');
    const t = translations[lang];

    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            {/* Navigation */}
            <nav className="w-full py-8 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="relative w-40 h-12 mx-auto">
                    <Image
                        src="/mniam-logo-green.png"
                        alt="Mniam Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Language Switcher */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1 border border-gray-200 absolute right-6 md:right-12">
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

            <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-mniam-green">{t.title}</h1>
                    <p className="text-xl text-gray-600">{t.subtitle}</p>
                    <p className="text-gray-500 mt-4">{t.intro}</p>
                </div>

                <div className="space-y-12 text-gray-700 leading-relaxed">
                    <section className="bg-gray-50 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.whatIsTitle}</h2>
                        <p className="text-lg">{t.whatIsText}</p>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.forUsersTitle}</h2>
                            <p>{t.forUsersText}</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.forRestaurantsTitle}</h2>
                            <p>{t.forRestaurantsText}</p>
                        </div>
                    </section>

                    <section className="bg-mniam-green/10 border border-mniam-green/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.launchTitle}</h2>
                        <p className="text-lg text-mniam-green font-semibold">{t.launchText}</p>
                    </section>

                    <section className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.contactTitle}</h2>
                        <p>
                            E-Mail: <a href="mailto:hello@mniam.app" className="text-mniam-green hover:underline">hello@mniam.app</a>
                        </p>
                    </section>
                </div>
            </main>

            <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-200 space-y-2 mt-16">
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
