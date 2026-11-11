'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Plane, ChevronDown, Check, X } from 'lucide-react';

const destinations = ["Anywhere in India", "Kashmir", "Kerala", "Rajasthan", "Goa", "Himachal", "Andaman", "Leh Ladakh", "Varanasi"];
const months = ["Flexible dates", "January - March", "April - June", "July - September", "October - December"];
const travelerOptions = ["1 Traveler", "2 Travelers", "3-5 Travelers", "Family (6+ travelers)"];
const travelStyles = ["All experiences", "Mountain favourite", "Slow travel", "Cultural classic", "Beach escape", "Spiritual", "Adventure"];

export default function Hero() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [destination, setDestination] = useState("Anywhere in India");
  const [month, setMonth] = useState("Flexible dates");
  const [travelers, setTravelers] = useState("2 Travelers");
  const [style, setStyle] = useState("All experiences");

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      // Background me backend API (/api/contact) ko quick search details email karne ke liye
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destination, month, travelers, style }),
      });
    } catch (err) {
      console.error("Hero search log error:", err);
    }

    // User ko query params ke sath tours page par redirect kar dein
    window.location.href = `/tours?destination=${encodeURIComponent(destination)}&style=${encodeURIComponent(style)}`;
  };

  return (
    <section className="relative w-full flex flex-col justify-between bg-[#0b1329] overflow-visible py-10 sm:py-16 px-4 sm:px-8 lg:px-16 pb-24 lg:pb-36">
      
      {/* Background Image with Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329] via-[#0b1329]/50 to-[#0e1736]/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-[#0b1329]/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1920&auto=format&fit=crop" 
          alt="India Travel Banner" 
          className="w-full h-full object-cover object-center filter brightness-[0.6]"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto w-full my-auto py-6 sm:py-10 flex flex-col items-start">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 sm:mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="text-amber-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            WELCOME TO THE MAGIC OF INDIA
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-normal text-white tracking-tight max-w-4xl leading-[1.15] mb-4 sm:mb-5">
          One incredible India. <br />
          <span className="italic font-serif text-amber-400 font-light drop-shadow-md">Infinite journeys.</span>
        </h1>

        <p className="text-gray-300 text-xs sm:text-sm lg:text-base max-w-xl font-light mb-8 leading-relaxed">
          From the snowy valleys of Kashmir to Kerala’s tranquil backwaters, discover extraordinary places and thoughtfully designed journeys — all across India.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
          <Link 
            href="/tours" 
            className="bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold px-6 sm:px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2 text-sm sm:text-base group"
          >
            Explore India Tours 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          
          <Link 
            href="/destinations" 
            className="bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-medium px-6 sm:px-7 py-3.5 rounded-xl transition-all border border-white/20 text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg"
          >
            Discover Destinations →
          </Link>
        </div>

      </div>

      {/* Mobile Backdrop Overlay when dropdown is open */}
      {activeDropdown && (
        <div 
          onClick={() => setActiveDropdown(null)} 
          className="fixed inset-0 bg-black/70 z-40 lg:hidden backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Centered Search Bar Box */}
      <div className="relative lg:absolute lg:-bottom-24 left-0 right-0 z-30 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 mt-6 lg:mt-0 flex justify-center">
        <div className="bg-white text-gray-900 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-gray-100 flex flex-col gap-4 sm:gap-6 w-full relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2 font-serif font-bold text-lg sm:text-xl lg:text-2xl text-[#0b1329]">
              <span>Where will India take you next?</span>
              <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 rotate-45 shrink-0" />
            </div>
            <span className="text-[11px] sm:text-xs lg:text-sm text-gray-400 font-medium">
              Discover your kind of Indian getaway
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-center relative">
            
            {/* Field 1: Destination */}
            <div className="relative">
              <div 
                onClick={() => toggleDropdown('destination')}
                className="border border-gray-200 hover:border-blue-500 rounded-2xl p-3 bg-white transition cursor-pointer shadow-sm select-none"
              >
                <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
                  YOUR DESTINATION
                </span>
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800">
                  <span className="truncate">{destination}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === 'destination' ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {activeDropdown === 'destination' && (
                <div className="fixed inset-x-0 bottom-0 lg:absolute lg:inset-auto lg:top-full lg:left-0 lg:mt-2 lg:w-full bg-white border-t lg:border border-gray-100 rounded-t-[30px] lg:rounded-2xl shadow-2xl py-6 px-4 z-50 max-h-[60vh] lg:max-h-60 overflow-y-auto">
                  <div className="flex justify-between items-center pb-3 mb-2 lg:hidden border-b border-gray-100">
                    <span className="font-bold text-xs text-gray-500 uppercase tracking-wider">Select Destination</span>
                    <button onClick={() => setActiveDropdown(null)} className="p-1 rounded-full bg-gray-100"><X className="w-5 h-5 text-gray-600" /></button>
                  </div>
                  {destinations.map((item) => (
                    <div
                      key={item}
                      onClick={() => { setDestination(item); setActiveDropdown(null); }}
                      className="px-4 py-3.5 lg:py-2.5 text-sm hover:bg-blue-50 hover:text-blue-600 cursor-pointer flex items-center justify-between rounded-xl transition"
                    >
                      <span>{item}</span>
                      {destination === item && <Check className="w-4 h-4 text-blue-600" />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Field 2: Month */}
            <div className="relative">
              <div 
                onClick={() => toggleDropdown('month')}
                className="border border-gray-200 hover:border-blue-500 rounded-2xl p-3 bg-white transition cursor-pointer shadow-sm select-none"
              >
                <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
                  TRAVEL MONTH
                </span>
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800">
                  <span className="truncate">{month}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === 'month' ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {activeDropdown === 'month' && (
                <div className="fixed inset-x-0 bottom-0 lg:absolute lg:inset-auto lg:top-full lg:left-0 lg:mt-2 lg:w-full bg-white border-t lg:border border-gray-100 rounded-t-[30px] lg:rounded-2xl shadow-2xl py-6 px-4 z-50 max-h-[60vh] lg:max-h-60 overflow-y-auto">
                  <div className="flex justify-between items-center pb-3 mb-2 lg:hidden border-b border-gray-100">
                    <span className="font-bold text-xs text-gray-500 uppercase tracking-wider">Select Month</span>
                    <button onClick={() => setActiveDropdown(null)} className="p-1 rounded-full bg-gray-100"><X className="w-5 h-5 text-gray-600" /></button>
                  </div>
                  {months.map((item) => (
                    <div
                      key={item}
                      onClick={() => { setMonth(item); setActiveDropdown(null); }}
                      className="px-4 py-3.5 lg:py-2.5 text-sm hover:bg-blue-50 hover:text-blue-600 cursor-pointer flex items-center justify-between rounded-xl transition"
                    >
                      <span>{item}</span>
                      {month === item && <Check className="w-4 h-4 text-blue-600" />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Field 3: Travelers */}
            <div className="relative">
              <div 
                onClick={() => toggleDropdown('travelers')}
                className="border border-gray-200 hover:border-blue-500 rounded-2xl p-3 bg-white transition cursor-pointer shadow-sm select-none"
              >
                <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
                  TRAVELERS
                </span>
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800">
                  <span className="truncate">{travelers}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === 'travelers' ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {activeDropdown === 'travelers' && (
                <div className="fixed inset-x-0 bottom-0 lg:absolute lg:inset-auto lg:top-full lg:left-0 lg:mt-2 lg:w-full bg-white border-t lg:border border-gray-100 rounded-t-[30px] lg:rounded-2xl shadow-2xl py-6 px-4 z-50 max-h-[60vh] lg:max-h-60 overflow-y-auto">
                  <div className="flex justify-between items-center pb-3 mb-2 lg:hidden border-b border-gray-100">
                    <span className="font-bold text-xs text-gray-500 uppercase tracking-wider">Select Travelers</span>
                    <button onClick={() => setActiveDropdown(null)} className="p-1 rounded-full bg-gray-100"><X className="w-5 h-5 text-gray-600" /></button>
                  </div>
                  {travelerOptions.map((item) => (
                    <div
                      key={item}
                      onClick={() => { setTravelers(item); setActiveDropdown(null); }}
                      className="px-4 py-3.5 lg:py-2.5 text-sm hover:bg-blue-50 hover:text-blue-600 cursor-pointer flex items-center justify-between rounded-xl transition"
                    >
                      <span>{item}</span>
                      {travelers === item && <Check className="w-4 h-4 text-blue-600" />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Field 4: Travel Style */}
            <div className="relative">
              <div 
                onClick={() => toggleDropdown('style')}
                className="border border-gray-200 hover:border-blue-500 rounded-2xl p-3 bg-white transition cursor-pointer shadow-sm select-none"
              >
                <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
                  TRAVEL STYLE
                </span>
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800">
                  <span className="truncate">{style}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === 'style' ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {activeDropdown === 'style' && (
                <div className="fixed inset-x-0 bottom-0 lg:absolute lg:inset-auto lg:top-full lg:left-0 lg:mt-2 lg:w-full bg-white border-t lg:border border-gray-100 rounded-t-[30px] lg:rounded-2xl shadow-2xl py-6 px-4 z-50 max-h-[60vh] lg:max-h-60 overflow-y-auto">
                  <div className="flex justify-between items-center pb-3 mb-2 lg:hidden border-b border-gray-100">
                    <span className="font-bold text-xs text-gray-500 uppercase tracking-wider">Select Travel Style</span>
                    <button onClick={() => setActiveDropdown(null)} className="p-1 rounded-full bg-gray-100"><X className="w-5 h-5 text-gray-600" /></button>
                  </div>
                  {travelStyles.map((item) => (
                    <div
                      key={item}
                      onClick={() => { setStyle(item); setActiveDropdown(null); }}
                      className="px-4 py-3.5 lg:py-2.5 text-sm hover:bg-blue-50 hover:text-blue-600 cursor-pointer flex items-center justify-between rounded-xl transition"
                    >
                      <span>{item}</span>
                      {style === item && <Check className="w-4 h-4 text-blue-600" />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Explore Button with Loading State */}
            <div className="h-full flex items-center">
              <button 
                onClick={handleSearch}
                disabled={loading}
                className="w-full h-12 sm:h-full bg-[#1b73e8] hover:bg-blue-600 text-white font-semibold px-6 py-3.5 sm:py-4 rounded-2xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Finding Trips...
                  </>
                ) : (
                  <>Explore Trips <ArrowUpRight className="w-4 h-4" /></>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}