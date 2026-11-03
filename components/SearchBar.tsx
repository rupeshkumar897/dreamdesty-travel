import { Plane, ChevronDown, ArrowUpRight } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative z-30 w-full max-w-[1400px] mx-auto px-4 sm:px-8 -mt-10 mb-12">
      {/* Outer wrapper jo background ko completely block karega */}
      <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-200 flex flex-col gap-6">
        
        {/* Top Header Row: Title on Left, Subtitle on Right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-2">
          <div className="flex items-center gap-2 font-serif font-bold text-xl sm:text-2xl text-[#0b1329]">
            <span>Where will India take you next?</span>
            <Plane className="w-5 h-5 text-amber-500 rotate-45" />
          </div>
          <span className="text-xs sm:text-sm text-gray-500 font-medium">
            Discover your kind of Indian getaway
          </span>
        </div>

        {/* Bottom Inputs Grid & Button Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          
          {/* Field 1: Destination */}
          <div className="border border-gray-200 hover:border-blue-500 rounded-2xl p-3.5 bg-white transition cursor-pointer shadow-sm">
            <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
              YOUR DESTINATION
            </span>
            <div className="flex items-center justify-between text-sm font-semibold text-gray-800">
              <span>Anywhere in India</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Field 2: Travel Month */}
          <div className="border border-gray-200 hover:border-blue-500 rounded-2xl p-3.5 bg-white transition cursor-pointer shadow-sm">
            <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
              TRAVEL MONTH
            </span>
            <div className="flex items-center justify-between text-sm font-semibold text-gray-800">
              <span>Flexible dates</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Field 3: Travelers */}
          <div className="border border-gray-200 hover:border-blue-500 rounded-2xl p-3.5 bg-white transition cursor-pointer shadow-sm">
            <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
              TRAVELERS
            </span>
            <div className="flex items-center justify-between text-sm font-semibold text-gray-800">
              <span>2 Travelers</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Field 4: Travel Style */}
          <div className="border border-gray-200 hover:border-blue-500 rounded-2xl p-3.5 bg-white transition cursor-pointer shadow-sm">
            <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
              TRAVEL STYLE
            </span>
            <div className="flex items-center justify-between text-sm font-semibold text-gray-800">
              <span>All experiences</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Explore Button */}
          <div className="h-full flex items-center">
            <button className="w-full h-full bg-[#1b73e8] hover:bg-blue-600 text-white font-semibold px-6 py-4 rounded-2xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 text-sm sm:text-base">
              Explore Trips <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}