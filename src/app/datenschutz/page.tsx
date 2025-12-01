import Link from "next/link";

export default function Datenschutz() {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            {/* Navigation */}
            <nav className="w-full py-8 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="text-mniam-green font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
                    mniam
                </Link>
            </nav>

            <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
                <h1 className="text-3xl md:text-4xl font-bold mb-12 text-mniam-green">Datenschutzerklärung</h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <p>
                        Diese Website befindet sich aktuell im Aufbau und dient ausschließlich als Informationsseite über ein zukünftiges Produkt. Es werden derzeit keine personenbezogenen Daten aktiv erhoben, verarbeitet oder gespeichert.
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">1. Verantwortlicher</h2>
                        <p>Für die Datenverarbeitung verantwortlich ist:</p>
                        <p className="mt-2">
                            Kamil Jacek Krzyzanowski<br />
                            E-Mail: <a href="mailto:hello@mniam.app" className="text-mniam-green hover:underline">hello@mniam.app</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">2. Zugriffsdaten / Server-Logs</h2>
                        <p>
                            Der Hostinganbieter dieser Website kann aus technischen Gründen automatisch Daten verarbeiten (z. B. IP-Adresse, Zeitpunkt des Zugriffs, Browsertyp). Diese Daten dienen ausschließlich der technischen Bereitstellung und werden nicht mit anderen Datenquellen zusammengeführt.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">3. Keine Erhebung persönlicher Daten</h2>
                        <p>Auf dieser Website gibt es aktuell:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                            <li>kein Kontaktformular</li>
                            <li>keine Registrierung</li>
                            <li>keine Newsletter-Funktion</li>
                            <li>keine Bestell- oder Bezahlsysteme</li>
                            <li>keine Analyse- oder Trackingtools (z. B. Google Analytics)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">4. Cookies</h2>
                        <p>
                            Aktuell werden keine Cookies gesetzt, außer technisch notwendigen Standard-Servercookies (falls durch Hostingprovider unvermeidbar).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">5. Drittanbieter</h2>
                        <p>
                            Zurzeit werden keine externen Dienste wie Stripe, Google Fonts, Mailchimp, Analytics oder Social Plugins aktiv verwendet.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">6. Rechte der Nutzer</h2>
                        <p>
                            Da keine personenbezogenen Daten erhoben werden, entstehen aktuell keine Betroffenenrechte nach DSGVO.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">7. Anpassung der Richtlinie</h2>
                        <p>
                            Diese Datenschutzerklärung wird aktualisiert, sobald Funktionen wie Benutzerkonten, Zahlungen oder Newsletter aktiv werden.
                        </p>
                    </section>
                </div>
            </main>

            <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/10">
                <p>&copy; {new Date().getFullYear()} Mniam App. Alle Rechte vorbehalten.</p>
            </footer>
        </div>
    );
}
