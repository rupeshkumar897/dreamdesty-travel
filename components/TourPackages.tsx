'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Heart, ArrowUpRight, Clock, MapPin } from 'lucide-react';

const packagesData = [
  {
    id: 1,
    category: "North India",
    title: "Kashmir — Paradise in the Valley",
    tag: "✦ Mountain favourite",
    duration: "6 Days / 5 Nights",
    locations: "Srinagar • Gulmarg • Pahalgam",
    description: "Houseboat moments, alpine scenery and unforgettable Himalayan views.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop",
    link: "#kashmir"
  },
  {
    id: 2,
    category: "South India",
    title: "Kerala — Backwaters & Beyond",
    tag: "✦ Slow travel",
    duration: "7 Days / 6 Nights",
    locations: "Munnar • Thekkady • Alleppey",
    description: "Misty tea gardens, lush landscapes and serene backwater cruising.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
    link: "#kerala"
  },
  {
    id: 3,
    category: "West India",
    title: "Royal Rajasthan Heritage Trail",
    tag: "✦ Cultural classic",
    duration: "8 Days / 7 Nights",
    locations: "Jaipur • Jodhpur • Udaipur",
    description: "Palaces, colorful markets and timeless royal architecture.",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=800&auto=format&fit=crop",
    link: "#rajasthan"
  },
  {
    id: 4,
    category: "West India",
    title: "Goa — Sun, Sand & Soul",
    tag: "✦ Beach escape",
    duration: "5 Days / 4 Nights",
    locations: "North Goa • South Goa",
    description: "Coastal sunsets, charming lanes and an easygoing holiday mood.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
    link: "#goa"
  },
  {
    id: 5,
    category: "North India",
    title: "Himachal — Into the Mountains",
    tag: "✦ Himalayan magic",
    duration: "7 Days / 6 Nights",
    locations: "Shimla • Manali • Solang",
    description: "Mountain air, pine valleys and scenic Himalayan roads.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
    link: "#himachal"
  },
  {
    id: 6,
    category: "Islands",
    title: "Andaman — Island Serenity",
    tag: "✦ Island escape",
    duration: "6 Days / 5 Nights",
    locations: "Port Blair • Havelock • Neil",
    description: "Turquoise coastlines, beach days and tropical island bliss.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop",
    link: "#andaman"
  },
  {
    id: 7,
    category: "Spiritual",
    title: "Varanasi & Agra — Spiritual Soul",
    tag: "✦ Heritage & Culture",
    duration: "5 Days / 4 Nights",
    locations: "Varanasi • Agra • Delhi",
    description: "Ancient ghats, evening aartis and the timeless Taj Mahal.",
    image: "https://images.unsplash.com/photo-1561359313-0639aad49ff6?q=80&w=800&auto=format&fit=crop",
    link: "#varanasi"
  },
  {
    id: 8,
    category: "Adventure",
    title: "Leh Ladakh — High Altitude",
    tag: "✦ Extreme adventure",
    duration: "8 Days / 7 Nights",
    locations: "Leh • Nubra • Pangong",
    description: "High mountain passes, crystal clear lakes and starry desert nights.",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7bb73d2?q=80&w=800&auto=format&fit=crop",
    link: "#ladakh"
  }
];

const categories = ["All Tours", "North India", "South India", "West India", "East & Northeast", "Islands", "Honeymoon", "Adventure", "Spiritual"];

export default function TourPackages() {
  const [selectedCategory, setSelectedCategory] = useState("All Tours");

  const filteredPackages = selectedCategory === "All Tours" 
    ? packagesData 
    : packagesData.filter(pkg => pkg.category === selectedCategory);

  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-4 sm:px-8 lg:px-16 text-gray-900 border-t border-gray-200 relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-blue-600"></span>
              <span className="text-blue-600 text-xs font-semibold tracking-widest uppercase">
                HANDPICKED INDIAN ITINERARIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-gray-950 tracking-tight">
              Journeys worth remembering.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 font-light max-w-xl">
              Inspiring sample routes, customizable around your dates and preferences.
            </p>
          </div>

          <div>
            <Link 
              href="#custom-itinerary" 
              className="bg-[#1b73e8] hover:bg-blue-600 text-white font-medium px-6 py-3.5 rounded-xl transition-all shadow-lg flex items-center gap-2 text-sm"
            >
              Get a Custom Itinerary <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0b1329] text-white font-semibold shadow-md scale-105'
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
                
                {/* Mountain/Travel Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-gray-800 shadow-sm">
                  {pkg.tag}
                </div>

                {/* Wishlist Heart Button */}
                <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white backdrop-blur-md flex items-center justify-center text-gray-700 shadow-md transition cursor-pointer group/btn" aria-label="Add to wishlist">
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
                  
                  {/* Duration & Locations */}
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
                    href={pkg.link}
                    className="bg-gray-100 hover:bg-[#1b73e8] hover:text-white text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1 border border-gray-200"
                  >
                    View Itinerary →
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered Button */}
        <div className="flex justify-center mt-14">
          <button className="bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold px-9 py-4 rounded-xl transition-all shadow-md text-sm sm:text-base flex items-center gap-2 cursor-pointer hover:scale-105">
            View Every India Tour ↗
          </button>
        </div>

      </div>
    </section>
  );
}