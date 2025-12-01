"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Language = 'en' | 'de';

const translations = {
    en: {
        title: "About Mniam",
        subtitle: "The Future of Food Discovery",
        intro: "Mniam is a revolutionary mobile application that transforms how people discover, share, and experience food. Launching March 2026.",
        whatIsTitle: "What is Mniam?",
        whatIsText: "Mniam is a comprehensive food discovery platform that combines visual menu browsing, social sharing, and personalized recommendations. Users can explore restaurants through high-quality food photos, filter by dietary preferences, and discover dishes that match their tastes.",
        featuresTitle: "Key Features",
        features: [
            {
                title: "Visual Menu Discovery",
                desc: "Browse restaurant menus through stunning photos. See exactly what you're ordering before you arrive."
            },
            {
                title: "Smart Dietary Filters",
                desc: "Find food that matches your lifestyle. Filter by vegan, vegetarian, gluten-free, halal, and more."
            },
            {
                title: "Social Food Sharing",
                desc: "Share your culinary adventures with friends. Discover what food lovers in your area are enjoying."
            },
            {
                title: "Digital Loyalty Cards",
                desc: "Collect stamps and earn rewards automatically. No more lost paper cards or forgotten punches."
            },
            {
                title: "Location-Based Discovery",
                desc: "Find the best dishes near you. See distance, opening hours, and real-time availability."
            },
            {
                title: "Restaurant Management",
                desc: "For restaurant owners: Manage menus, track customer engagement, and run loyalty programs from one dashboard."
            }
        ],
        forUsersTitle: "For Food Lovers",
        forUsersText: "Discover new restaurants, save your favorite dishes, and never miss out on great food again. Mniam helps you make better dining decisions with visual menus and community recommendations.",
        forRestaurantsTitle: "For Restaurants",
        forRestaurantsText: "Showcase your menu with beautiful photos, engage customers with digital loyalty programs, and gain insights into what dishes resonate with your audience. Mniam provides professional tools to grow your business.",
        launchTitle: "Launch Date",
        launchText: "Mniam will be available on iOS and Android starting March 1st, 2026.",
        contactTitle: "Contact",
        contactText: "For business inquiries or press:",
        footer: "Mniam App. All rights reserved.",
        impressum: "Legal Notice",
        privacy: "Privacy Policy"
    },
    de: {
        title: "Über Mniam",
        subtitle: "Die Zukunft der Food-Discovery",
        intro: "Mniam ist eine revolutionäre mobile Anwendung, die verändert, wie Menschen Essen entdecken, teilen und erleben. Start im März 2026.",
        whatIsTitle: "Was ist Mniam?",
        whatIsText: "Mniam ist eine umfassende Food-Discovery-Plattform, die visuelles Menü-Browsing, Social Sharing und personalisierte Empfehlungen kombiniert. Nutzer können Restaurants durch hochwertige Food-Fotos erkunden, nach Ernährungspräferenzen filtern und Gerichte entdecken, die ihrem Geschmack entsprechen.",
        featuresTitle: "Hauptfunktionen",
        features: [
            {
                title: "Visuelle Menü-Entdeckung",
                desc: "Durchstöbere Restaurant-Menüs anhand beeindruckender Fotos. Sieh genau, was du bestellst, bevor du ankommst."
            },
            {
                title: "Intelligente Ernährungsfilter",
                desc: "Finde Essen, das zu deinem Lebensstil passt. Filtere nach vegan, vegetarisch, glutenfrei, halal und mehr."
            },
            {
                title: "Social Food Sharing",
                desc: "Teile deine kulinarischen Abenteuer mit Freunden. Entdecke, was Food-Lover in deiner Nähe genießen."
            },
            {
                title: "Digitale Treuekarten",
                desc: "Sammle automatisch Stempel und verdiene Belohnungen. Keine verlorenen Papierkarten mehr."
            },
            {
                title: "Standortbasierte Entdeckung",
                desc: "Finde die besten Gerichte in deiner Nähe. Sieh Entfernung, Öffnungszeiten und Echtzeit-Verfügbarkeit."
            },
            {
                title: "Restaurant-Management",
                desc: "Für Restaurantbesitzer: Verwalte Menüs, tracke Kunden-Engagement und führe Treueprogramme von einem Dashboard aus."
            }
        ],
        forUsersTitle: "Für Food-Lover",
        forUsersText: "Entdecke neue Restaurants, speichere deine Lieblingsgerichte und verpasse nie wieder großartiges Essen. Mniam hilft dir, bessere Dining-Entscheidungen mit visuellen Menüs und Community-Empfehlungen zu treffen.",
        forRestaurantsTitle: "Für Restaurants",
        forRestaurantsText: "Präsentiere dein Menü mit schönen Fotos, binde Kunden mit digitalen Treueprogrammen ein und gewinne Einblicke, welche Gerichte bei deinem Publikum ankommen. Mniam bietet professionelle Tools, um dein Geschäft zu erweitern.",
        launchTitle: "Launch-Datum",
        launchText: "Mniam wird ab dem 1. März 2026 für iOS und Android verfügbar sein.",
        contactTitle: "Kontakt",
        contactText: "Für geschäftliche Anfragen oder Presse:",
        footer: "Mniam App. Alle Rechte vorbehalten.",
        impressum: "Impressum",
        privacy: "Datenschutz"
    }
};

export default function About() {
    const [lang, setLang] = useState<Language>('en');
    const t = translations[lang];

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            {/* Navigation */}
            <nav className="w-full py-8 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="relative w-40 h-12">
                    <Image
                        src="/mniam-logo-green.png"
                        alt="Mniam Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

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

            <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-mniam-green">{t.title}</h1>
                    <p className="text-xl text-gray-400">{t.subtitle}</p>
                    <p className="text-gray-500 mt-4">{t.intro}</p>
                </div>

                <div className="space-y-16 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t.whatIsTitle}</h2>
                        <p className="text-lg">{t.whatIsText}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-8">{t.featuresTitle}</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {t.features.map((feature, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                    <h3 className="text-lg font-semibold text-mniam-green mb-2">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">{t.forUsersTitle}</h2>
                            <p>{t.forUsersText}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">{t.forRestaurantsTitle}</h2>
                            <p>{t.forRestaurantsText}</p>
                        </div>
                    </section>

                    <section className="bg-mniam-green/10 border border-mniam-green/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">{t.launchTitle}</h2>
                        <p className="text-lg text-mniam-green font-semibold">{t.launchText}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t.contactTitle}</h2>
                        <p>{t.contactText}</p>
                        <p className="mt-2">
                            E-Mail: <a href="mailto:hello@mniam.app" className="text-mniam-green hover:underline">hello@mniam.app</a>
                        </p>
                    </section>
                </div>
            </main>

            <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/10 space-y-2 mt-16">
                <p>&copy; {new Date().getFullYear()} {t.footer}</p>
                <div className="flex justify-center gap-4 text-xs">
                    <a href="/impressum" className="hover:text-mniam-green transition-colors">{t.impressum}</a>
                    <span className="text-gray-700">•</span>
                    <a href="/datenschutz" className="hover:text-mniam-green transition-colors">{t.privacy}</a>
                </div>
            </footer>
        </div>
    );
}
