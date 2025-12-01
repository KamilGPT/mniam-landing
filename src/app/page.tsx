import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Navigation */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto z-50 relative">
        <div className="relative w-32 h-10">
          <Image
            src="/mniam-logo-green.png"
            alt="Mniam Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
        <div className="hidden md:flex gap-8 font-medium text-gray-300">
          <Link href="#features" className="hover:text-mniam-green transition-colors">Features</Link>
          <Link href="#restaurants" className="hover:text-mniam-green transition-colors">For Restaurants</Link>
          <Link href="#download" className="hover:text-mniam-green transition-colors">Download</Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm font-medium border border-white/20 px-3 py-1 rounded-full">Coming Soon</span>
          <Link
            href="#download"
            className="bg-mniam-green text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-mniam-green/20"
          >
            Get the App
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="pt-12 pb-20 md:pt-24 md:pb-32 px-6 relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0"></div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 text-center md:text-left space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Discover food <br />
                <span className="text-mniam-green">you'll love.</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Mniam is your personal food guide. Find the best dishes nearby, filter by your dietary preferences, and see what your friends are eating.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <button className="bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all backdrop-blur-sm cursor-not-allowed opacity-80">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.64 3.57-1.64.6 0 3.03.13 4.31 2.01-1.21.63-2.27 1.64-2.27 4.04 0 3.15 2.45 4.2 2.45 4.2-1.22 3.68-2.68 5.66-3.14 6.62zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.16 2.29-1.66 4.23-3.74 4.25z" /></svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Coming soon to</div>
                    <div className="text-xl font-bold leading-none">App Store</div>
                  </div>
                </button>
                <button className="bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all backdrop-blur-sm cursor-not-allowed opacity-80">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186c-.185.185-.436.25-.66.166-.225-.083-.375-.298-.375-.538V2.186c0-.24.15-.455.375-.538.224-.084.474-.02.66.166zm10.96 10.96l2.126 2.127-2.6 1.5c-.29.166-.65.166-.94 0l-2.6-1.5 3.014-3.014.001.887zm.75-1.63l4.9-2.83c.48-.27.48-1.09 0-1.36l-4.9-2.83-2.126 2.127 2.126 4.893zm-5.65-5.65l2.6-1.5c.29-.166.65-.166.94 0l2.6 1.5-3.014 3.014-.001-.887-3.125-2.127z" /></svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Coming soon to</div>
                    <div className="text-xl font-bold leading-none">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Phone Mockup Placeholder */}
            <div className="flex-1 relative flex justify-center">
              <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                {/* Screen Content Placeholder */}
                <div className="absolute inset-0 bg-white flex flex-col">
                  {/* Header */}
                  <div className="h-14 bg-white flex items-center justify-center border-b border-gray-100">
                    <span className="text-mniam-green font-bold text-xl">mniam</span>
                  </div>
                  {/* Cards */}
                  <div className="p-4 space-y-4 bg-gray-50 flex-1">
                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                      <div className="h-32 bg-gray-200 rounded-xl mb-3"></div>
                      <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                      <div className="h-32 bg-gray-200 rounded-xl mb-3"></div>
                      <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  {/* Bottom Bar */}
                  <div className="h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div className="w-12 h-12 bg-mniam-green rounded-full -mt-6 border-4 border-white shadow-lg"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mniam-green/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why you'll love Mniam</h2>
              <p className="text-xl text-gray-600">More than just a restaurant finder.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Visual Menu Discovery",
                  desc: "Don't just read the menu, see it. Browse high-quality photos of every dish before you order.",
                  icon: "📸"
                },
                {
                  title: "Dietary Filters",
                  desc: "Vegan? Gluten-free? Halal? Filter menus instantly to find exactly what you can eat.",
                  icon: "🥗"
                },
                {
                  title: "Digital Loyalty Cards",
                  desc: "Collect stamps and earn rewards automatically. No more lost paper cards.",
                  icon: "🎁"
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-mniam-green rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to eat?</h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Download Mniam today and start discovering your next favorite meal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
                  Download for iOS
                </button>
                <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
                  Download for Android
                </button>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter">mniam</div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mniam App. All rights reserved.
          </div>
          <div className="flex gap-6 text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
