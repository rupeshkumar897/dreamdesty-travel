'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, MapPin, Compass } from 'lucide-react';

const allDestinations = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    region: 'North India',
    tag: 'Mountain Favourite',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
    description: 'Snow-capped peaks, alpine valleys, and luxury houseboats on Dal Lake.',
    toursCount: '4 Curated Itineraries'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    region: 'South India',
    tag: 'Slow Travel',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    description: 'Serene backwaters, lush green tea plantations, and tropical beaches.',
    toursCount: '3 Curated Itineraries'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    region: 'West India',
    tag: 'Cultural Classic',
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=800&auto=format&fit=crop',
    description: 'Majestic royal palaces, historic forts, and vibrant desert culture.',
    toursCount: '5 Curated Itineraries'
  },
  {
    id: 'goa',
    name: 'Goa',
    region: 'West India',
    tag: 'Beach Escape',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    description: 'Sun-kissed coastline, Portuguese heritage lanes, and vibrant nightlife.',
    toursCount: '3 Curated Itineraries'
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    region: 'North India',
    tag: 'Himalayan Magic',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    description: 'Pine forests, roaring rivers, and high-altitude mountain passes.',
    toursCount: '4 Curated Itineraries'
  },
  {
    id: 'andaman',
    name: 'Andaman Islands',
    region: 'Islands',
    tag: 'Island Serenity',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop',
    description: 'Turquoise blue waters, white sandy beaches, and pristine coral reefs.',
    toursCount: '2 Curated Itineraries'
  }
];

const regions = ["All Regions", "North India", "South India", "West India", "Islands"];

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const filteredDestinations = selectedRegion === "All Regions"
    ? allDestinations
    : allDestinations.filter(d => d.region === selectedRegion);

  return (
    <div className="min-h-screen bg-[#f4f8fb] text-gray-900 pb-24">
      
      {/* Top Back Navigation */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Dreamdesty Destinations</span>
        </div>
      </div>

      {/* Page Header Banner */}
      <div className="bg-[#0b1329] text-white py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4">
            <Compass className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              EXPLORE INCREDIBLE INDIA
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight mb-4">
            Destinations designed for the curious traveler.
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
            From snow-capped northern mountains to southern tropical backwaters, choose your next unforgettable Indian getaway.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 mt-12">
        
        {/* Region Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-10">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition cursor-pointer ${
                selectedRegion === reg
                  ? 'bg-[#1b73e8] text-white font-semibold shadow-md scale-105'
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div 
              key={dest.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-gray-800 shadow-sm">
                  ✦ {dest.tag}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-medium text-amber-300 uppercase tracking-wider block mb-1">{dest.region}</span>
                  <h3 className="text-2xl font-serif font-bold">{dest.name}</h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {dest.description}
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {dest.toursCount}
                  </span>
                  
                  <Link 
                    href={`/tours/${dest.id}`}
                    className="bg-gray-100 hover:bg-[#1b73e8] hover:text-white text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1 border border-gray-200"
                  >
                    View Itineraries <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}