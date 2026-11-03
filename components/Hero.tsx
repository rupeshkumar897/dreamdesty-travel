import Link from 'next/link';
import { ArrowUpRight, Plane, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[65vh] flex flex-col justify-between bg-[#0b1329] overflow-visible py-8 sm:py-12 px-4 sm:px-8 lg:px-16 pb-36 sm:pb-32">
      
      {/* Background Image with Enhanced Blue-Gray Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329] via-[#0b1329]/90 to-[#0e1736]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-[#0b1329]/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1920&auto=format&fit=crop" 
          alt="Gateway of India Banner" 
          className="w-full h-full object-cover object-center filter brightness-[0.65]"
        />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-20 max-w-[1400px] mx-auto w-full my-auto py-4 sm:py-6 flex flex-col items-start">
        
        {/* Small Tagline */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 sm:mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="text-amber-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            WELCOME TO THE MAGIC OF INDIA
          </span>
        </div>

        {/* Main Headings */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-normal text-white tracking-tight max-w-4xl leading-[1.15] mb-4 sm:mb-5">
          One incredible India. <br />
          <span className="italic font-serif text-amber-400 font-light drop-shadow-md">Infinite journeys.</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-xs sm:text-sm lg:text-base max-w-xl font-light mb-6 sm:mb-8 leading-relaxed">
          From the snowy valleys of Kashmir to Kerala’s tranquil backwaters, discover extraordinary places and thoughtfully designed journeys — all across India.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-4 w-full sm:w-auto">
          <Link 
            href="#tours" 
            className="bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold px-6 sm:px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2 text-sm sm:text-base group"
          >
            Explore India Tours 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          
          <Link 
            href="#destinations" 
            className="bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-medium px-6 sm:px-7 py-3.5 rounded-xl transition-all border border-white/20 text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg"
          >
            Discover Destinations →
          </Link>
        </div>

      </div>

      {/* Overlapping Search Bar - Fully Responsive for Mobile & Desktop */}
      <div className="absolute -bottom-20 sm:-bottom-24 lg:-bottom-26 left-4 right-4 sm:left-8 sm:right-8 z-30 max-w-[1400px] mx-auto">
        <div className="bg-white text-gray-900 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-gray-100 flex flex-col gap-4 sm:gap-6">
          
          {/* Top Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2 font-serif font-bold text-lg sm:text-xl lg:text-2xl text-[#0b1329]">
              <span>Where will India take you next?</span>
              <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 rotate-45 shrink-0" />
            </div>
            <span className="text-[11px] sm:text-xs lg:text-sm text-gray-400 font-medium">
              Discover your kind of Indian getaway
            </span>
          </div>

          {/* Bottom Inputs Grid & Button Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
            
            {/* Field 1: Destination */}
            <div className="border border-gray-200 hover:border-blue-500 rounded-2xl p-3 bg-white transition cursor-pointer shadow-sm">
              <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
                YOUR DESTINATION
              </span>
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800">
                <span>Anywhere in India</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Field 2: Travel Month */}
            <div className="border border-gray-200 hover:border-blue-500 rounded-2xl p-3 bg-white transition cursor-pointer shadow-sm">
              <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
                TRAVEL MONTH
              </span>
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800">
                <span>Flexible dates</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Field 3: Travelers */}
            <div className="border border-gray-200 hover:border-blue-500 rounded-2xl p-3 bg-white transition cursor-pointer shadow-sm">
              <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
                TRAVELERS
              </span>
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800">
                <span>2 Travelers</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Field 4: Travel Style */}
            <div className="border border-gray-200 hover:border-blue-500 rounded-2xl p-3 bg-white transition cursor-pointer shadow-sm">
              <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
                TRAVEL STYLE
              </span>
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800">
                <span>All experiences</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Explore Button */}
            <div className="h-full flex items-center">
              <button className="w-full h-12 sm:h-full bg-[#1b73e8] hover:bg-blue-600 text-white font-semibold px-6 py-3.5 sm:py-4 rounded-2xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 text-sm sm:text-base">
                Explore Trips <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}