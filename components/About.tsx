'use client';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ShieldCheck, Sparkles, Award, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f4f8fb] text-gray-900 pb-24">
      
      {/* Top Back Navigation */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">About Dreamdesty</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#0b1329] text-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              OUR HERITAGE & PHILOSOPHY
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight mb-6">
            Redefining luxury travel across Incredible India.
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
            Dreamdesty was founded with a singular vision: to curate slow, meaningful, and impeccably crafted journeys that showcase the true soul of India without compromising on comfort.
          </p>
        </div>
      </div>

      {/* Main Story & Values Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 mt-16 space-y-16">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold tracking-widest uppercase">
              <span className="w-6 h-[2px] bg-blue-600"></span> THE DREAMDESTY STORY
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-gray-950 tracking-tight leading-snug">
              Crafting memories, not just itineraries.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              We believe that true luxury lies in depth of experience, seamless logistics, and absolute peace of mind. Whether it is a private houseboat stay on the tranquil waters of Alleppey or watching the sunrise over snow-clad Himalayan peaks in Gulmarg, every moment with Dreamdesty is handpicked for the discerning traveler.
            </p>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              Our local experts work behind the scenes to ensure your journey is effortless, authentic, and completely tailored to your personal pace.
            </p>
          </div>

          <div className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop" 
              alt="Taj Mahal India Travel" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Core Pillars / Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-950">Bespoke Craftsmanship</h3>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              No two travelers are alike. We design every route from scratch around your preferences, dates, and travel style.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-950">Absolute Comfort</h3>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              Handpicked 5-star properties, heritage boutique hotels, private chauffeurs, and 24/7 dedicated concierge support.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-950">Authentic Connections</h3>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              Go beyond standard tourist spots with insider access to local artisans, private cultural tours, and hidden culinary gems.
            </p>
          </div>
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="bg-gradient-to-r from-[#0b1329] to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">Ready to experience India differently?</h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">Let our specialists curate your dream itinerary today.</p>
          </div>
          <Link 
            href="/contact" 
            className="bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold px-8 py-4 rounded-xl transition-all shadow-lg flex items-center gap-2 text-sm shrink-0"
          >
            Plan My Trip <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </div>
  );
}