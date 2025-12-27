import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="bg-black shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/images/pawcare.png" alt="PawCare Logo" width={40} height={40} />
            <span className="text-xl font-bold text-amber-500">PawCare</span>
          </div>
          <div className="flex gap-6">
            <Link href="/login" className="text-gray-300 hover:text-amber-500 font-medium">
              Login
            </Link>
            <Link href="/register" className="bg-amber-500 text-black px-6 py-2 rounded-lg hover:bg-amber-600 transition font-semibold">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Pet&apos;s Health, <span className="text-amber-500">Our Priority</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              PawCare is your comprehensive pet health management platform. Monitor your Pet&apos;s wellness, 
              schedule vet appointments, and keep all health records in one secure place.
            </p>
            <div className="flex gap-4">
              <Link href="/register" className="bg-amber-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition transform hover:scale-105">
                Start Free Trial
              </Link>
              <Link href="/about" className="bg-gray-700 text-amber-500 border-2 border-amber-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-600 transition">
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Cat Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-amber-600 rounded-3xl transform rotate-6 blur-2xl opacity-20"></div>
              <Image
                src="/images/cat.png"
                alt="PawCare Cat"
                width={400}
                height={400}
                className="relative z-10 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose PawCare?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Records</h3>
              <p className="text-gray-600">Keep all medical records, vaccination history, and prescriptions organized and accessible.</p>
            </div>
            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Appointments</h3>
              <p className="text-gray-600">Schedule and manage vet appointments with reminders and follow-up notifications.</p>
            </div>
            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Tracking</h3>
              <p className="text-gray-600">Monitor your Pet&apos;s weight, medications, and wellness with insightful analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Care for Your Pet Better?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of pet owners who trust PawCare for their Pet&apos;s wellness.</p>
          <Link href="/register" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-block">
            Get Started Today - It&apos;s Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/images/pawcare.png" alt="PawCare" width={30} height={30} />
                <span className="font-bold text-white">PawCare</span>
              </div>
              <p>Your Pet&apos;s health, our priority</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2025 PawCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

