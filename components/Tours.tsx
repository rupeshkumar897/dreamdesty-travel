'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock, MapPin, Heart, Compass } from 'lucide-react';

const allPackages = [
  {
    id: 'kashmir',
    category: "North India",
    title: "Kashmir — Paradise in the Valley",
    tag: "✦ Mountain favourite",
    duration: "6 Days / 5 Nights",
    locations: "Srinagar • Gulmarg • Pahalgam",
    description: "Houseboat moments, alpine scenery and unforgettable Himalayan views.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'kerala',
    category: "South India",
    title: "Kerala — Backwaters & Beyond",
    tag: "✦ Slow travel",
    duration: "7 Days / 6 Nights",
    locations: "Munnar • Thekkady • Alleppey",
    description: "Misty tea gardens, lush landscapes and serene backwater cruising.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'rajasthan',
    category: "West India",
    title: "Royal Rajasthan Heritage Trail",
    tag: "✦ Cultural classic",
    duration: "8 Days / 7 Nights",
    locations: "Jaipur • Jodhpur • Udaipur",
    description: "Palaces, colorful markets and timeless royal architecture.",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'goa',
    category: "West India",
    title: "Goa — Sun, Sand & Soul",
    tag: "✦ Beach escape",
    duration: "5 Days / 4 Nights",
    locations: "North Goa • South Goa",
    description: "Coastal sunsets, charming lanes and an easygoing holiday mood.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'himachal',
    category: "North India",
    title: "Himachal — Into the Mountains",
    tag: "✦ Himalayan magic",
    duration: "7 Days / 6 Nights",
    locations: "Shimla • Manali • Solang",
    description: "Mountain air, pine valleys and scenic Himalayan roads.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'andaman',
    category: "Islands",
    title: "Andaman — Island Serenity",
    tag: "✦ Island escape",
    duration: "6 Days / 5 Nights",
    locations: "Port Blair • Havelock • Neil",
    description: "Turquoise coastlines, beach days and tropical island bliss.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop"
  }
];

const categories = ["All Tours", "North India", "South India", "West India", "Islands"];

export default function AllToursPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Tours");

  const filteredPackages = selectedCategory === "All Tours"
    ? allPackages
    : allPackages.filter(pkg => pkg.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f4f8fb] text-gray-900 pb-24">
      
      {/* Top Back Navigation */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Dreamdesty Collection</span>
        </div>
      </div>

      {/* Hero Header Banner */}
      <div className="bg-[#0b1329] text-white py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4">
            <Compass className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              HANDPICKED INDIAN ITINERARIES
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight mb-4">
            Journeys worth remembering.
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
            Explore our complete collection of luxury sample routes, fully customizable around your dates and personal preferences.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 mt-12">
        
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1b73e8] text-white font-semibold shadow-md scale-105'
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4-Column Grid for Tour Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 group"
            >
              {/* Card Image & Top Tags */}
              <div className="relative h-60 w-full overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-gray-800 shadow-sm">
                  {pkg.tag}
                </div>

                <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/85 hover:bg-white backdrop-blur-md flex items-center justify-center text-gray-700 shadow-md transition cursor-pointer group/btn" aria-label="Add to wishlist">
                  <Heart className="w-4 h-4 group-hover/btn:text-red-500 transition" />
                </button>
              </div>

              {/* Card Body Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-blue-600 uppercase mb-1.5 flex items-center gap-1.5">
                    <span>{pkg.category}</span>
                    <span className="w-1 h-1 rounded-full bg-blue-600"></span>
                    <span>INDIA</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {pkg.title}
                  </h3>
                  
                  <div className="text-xs text-gray-500 mb-3.5 space-y-1">
                    <div className="flex items-center gap-1.5 font-medium text-gray-700 bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium text-gray-500 px-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate text-xs">{pkg.locations}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 font-light line-clamp-2 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase font-medium">Custom plan</span>
                    <span className="text-xs font-bold text-gray-900">Request quote</span>
                  </div>
                  <Link 
                    href={`/tours/${pkg.id}`}
                    className="bg-gray-100 hover:bg-[#1b73e8] hover:text-white text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1 border border-gray-200"
                  >
                    View Itinerary →
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