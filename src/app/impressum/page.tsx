import Link from "next/link";

export default function Impressum() {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            {/* Navigation */}
            <nav className="w-full py-8 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="text-mniam-green font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
                    mniam
                </Link>
            </nav>

            <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
                <h1 className="text-3xl md:text-4xl font-bold mb-12 text-mniam-green">Impressum</h1>

                <div className="space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                        <p>
                            Kamil Jacek Krzyzanowski<br />
                            Benjamin-Franklin-Straße 3a<br />
                            63457 Hanau<br />
                            Deutschland
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">Kontakt</h2>
                        <p>
                            E-Mail: <a href="mailto:hello@mniam.app" className="text-mniam-green hover:underline">hello@mniam.app</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                        <p>
                            Kamil Jacek Krzyzanowski<br />
                            Benjamin-Franklin-Straße 3a<br />
                            63457 Hanau<br />
                            Deutschland
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
