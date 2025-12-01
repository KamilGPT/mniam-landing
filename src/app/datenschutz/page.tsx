"use client";

import Link from "next/link";
import { useState } from "react";

type Language = 'en' | 'de';

const translations = {
    en: {
        title: "Privacy Policy",
        intro: "This website is currently under construction and serves exclusively as an information page about a future product. No personal data is currently actively collected, processed or stored.",
        section1Title: "1. Responsible Party",
        section1Text: "Responsible for data processing:",
        section2Title: "2. Access Data / Server Logs",
        section2Text: "The hosting provider of this website may automatically process data for technical reasons (e.g. IP address, time of access, browser type). This data is used exclusively for technical provision and is not merged with other data sources.",
        section3Title: "3. No Collection of Personal Data",
        section3Text: "This website currently has:",
        section3Items: [
            "no contact form",
            "no registration",
            "no newsletter function",
            "no ordering or payment systems",
            "no analysis or tracking tools (e.g. Google Analytics)"
        ],
        section4Title: "4. Cookies",
        section4Text: "Currently no cookies are set, except for technically necessary standard server cookies (if unavoidable by hosting provider).",
        section5Title: "5. Third-Party Providers",
        section5Text: "Currently no external services such as Stripe, Google Fonts, Mailchimp, Analytics or Social Plugins are actively used.",
        section6Title: "6. User Rights",
        section6Text: "Since no personal data is collected, there are currently no data subject rights under GDPR.",
        section7Title: "7. Policy Updates",
        section7Text: "This privacy policy will be updated as soon as features such as user accounts, payments or newsletters become active.",
        footer: "Mniam App. All rights reserved.",
        impressum: "Legal Notice",
        privacy: "Privacy Policy"
    },
    de: {
        title: "Datenschutzerklärung",
        intro: "Diese Website befindet sich aktuell im Aufbau und dient ausschließlich als Informationsseite über ein zukünftiges Produkt. Es werden derzeit keine personenbezogenen Daten aktiv erhoben, verarbeitet oder gespeichert.",
        section1Title: "1. Verantwortlicher",
        section1Text: "Für die Datenverarbeitung verantwortlich ist:",
        section2Title: "2. Zugriffsdaten / Server-Logs",
        section2Text: "Der Hostinganbieter dieser Website kann aus technischen Gründen automatisch Daten verarbeiten (z. B. IP-Adresse, Zeitpunkt des Zugriffs, Browsertyp). Diese Daten dienen ausschließlich der technischen Bereitstellung und werden nicht mit anderen Datenquellen zusammengeführt.",
        section3Title: "3. Keine Erhebung persönlicher Daten",
        section3Text: "Auf dieser Website gibt es aktuell:",
        section3Items: [
            "kein Kontaktformular",
            "keine Registrierung",
            "keine Newsletter-Funktion",
            "keine Bestell- oder Bezahlsysteme",
            "keine Analyse- oder Trackingtools (z. B. Google Analytics)"
        ],
        section4Title: "4. Cookies",
        section4Text: "Aktuell werden keine Cookies gesetzt, außer technisch notwendigen Standard-Servercookies (falls durch Hostingprovider unvermeidbar).",
        section5Title: "5. Drittanbieter",
        section5Text: "Zurzeit werden keine externen Dienste wie Stripe, Google Fonts, Mailchimp, Analytics oder Social Plugins aktiv verwendet.",
        section6Title: "6. Rechte der Nutzer",
        section6Text: "Da keine personenbezogenen Daten erhoben werden, entstehen aktuell keine Betroffenenrechte nach DSGVO.",
        section7Title: "7. Anpassung der Richtlinie",
        section7Text: "Diese Datenschutzerklärung wird aktualisiert, sobald Funktionen wie Benutzerkonten, Zahlungen oder Newsletter aktiv werden.",
        footer: "Mniam App. Alle Rechte vorbehalten.",
        impressum: "Impressum",
        privacy: "Datenschutz"
    }
};

export default function Datenschutz() {
    const [lang, setLang] = useState<Language>('de');
    const t = translations[lang];

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            {/* Navigation */}
            <nav className="w-full py-8 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="text-mniam-green font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
                    mniam
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

            <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
                <h1 className="text-3xl md:text-4xl font-bold mb-12 text-mniam-green">{t.title}</h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <p>{t.intro}</p>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">{t.section1Title}</h2>
                        <p>{t.section1Text}</p>
                        <p className="mt-2">
                            Kamil Jacek Krzyzanowski<br />
                            E-Mail: <a href="mailto:hello@mniam.app" className="text-mniam-green hover:underline">hello@mniam.app</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">{t.section2Title}</h2>
                        <p>{t.section2Text}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">{t.section3Title}</h2>
                        <p>{t.section3Text}</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                            {t.section3Items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">{t.section4Title}</h2>
                        <p>{t.section4Text}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">{t.section5Title}</h2>
                        <p>{t.section5Text}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">{t.section6Title}</h2>
                        <p>{t.section6Text}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">{t.section7Title}</h2>
                        <p>{t.section7Text}</p>
                    </section>
                </div>
            </main>

            <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/10 space-y-2">
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
