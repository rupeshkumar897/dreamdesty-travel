'use client';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Compass, Sparkles, MapPin, Clock } from 'lucide-react';

const experiencesData = [
  {
    id: 1,
    title: "Private Shikara Sunset Cruise",
    location: "Dal Lake, Srinagar",
    duration: "2 Hours",
    category: "Mountain Romance",
    description: "Glide across the mirrored waters of Dal Lake in a traditionally carved luxury Shikara as the sun sets behind the Himalayan peaks, accompanied by steaming Kashmiri kahwa.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Misty Tea Plantation Private Tasting",
    location: "Munnar, Kerala",
    duration: "Half Day",
    category: "Slow Travel & Nature",
    description: "Walk through emerald-green organic tea gardens with an expert planter, learn the fine art of tea processing, and enjoy a private tea-tasting session overlooking the mist-clad hills.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Royal Palace Dine-Around",
    location: "Udaipur & Jaipur, Rajasthan",
    duration: "Evening Experience",
    category: "Heritage & Culture",
    description: "Dine like royalty at historic palace courtyards lit by hundreds of candles, accompanied by classical live instrumental music and traditional Rajasthani folk performances.",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Himalayan Gondola Luxury Ride",
    location: "Gulmarg, Kashmir",
    duration: "3-4 Hours",
    category: "Alpine Adventure",
    description: "Ascend one of the world's highest operating cable cars up to Phase 2 of Apharwat Peak for breathtaking panoramic views of snow-covered Himalayan ranges.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Backwater Houseboat Cruise",
    location: "Alleppey, Kerala",
    duration: "Full Day / Overnight",
    category: "Serene Escape",
    description: "Cruise the tranquil, palm-fringed backwaters of Kerala aboard a traditional rice barge converted into a luxury floating villa with an onboard personal chef.",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Starry Desert Night & Folk Music",
    location: "Thar Desert, Jaisalmer",
    duration: "Evening to Night",
    category: "Cultural Magic",
    description: "Experience an exclusive evening in the golden dunes with private luxury tents, stargazing through high-powered telescopes, and soulful local music by the bonfire.",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7bb73d2?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-[#f4f8fb] text-gray-900 pb-24">
      
      {/* Top Back Navigation */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Dreamdesty Experiences</span>
        </div>
      </div>

      {/* Hero Header Banner */}
      <div className="bg-[#0b1329] text-white py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              CURATED SIGNATURE MOMENTS
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight mb-4">
            Experiences that define a journey.
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
            Go beyond standard sightseeing. Every Dreamdesty itinerary can be enriched with these exclusive, handpicked local encounters.
          </p>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiencesData.map((exp) => (
          <div 
            key={exp.id}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 group"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src={exp.image} 
                alt={exp.title} 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-gray-800 shadow-sm">
                ✦ {exp.category}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <span className="text-xs font-medium text-amber-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {exp.location}
                </span>
                <span className="text-xs bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> {exp.duration}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-950 mb-2 group-hover:text-blue-600 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Customizable in tour</span>
                <Link 
                  href="/contact"
                  className="bg-gray-100 hover:bg-[#1b73e8] hover:text-white text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1 border border-gray-200"
                >
                  Inquire Experience <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 mt-16">
        <div className="bg-gradient-to-r from-[#0b1329] to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">Want these experiences in your itinerary?</h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">Let our travel specialists weave them into your custom trip.</p>
          </div>
          <Link 
            href="/contact" 
            className="bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold px-8 py-4 rounded-xl transition-all shadow-lg flex items-center gap-2 text-sm shrink-0"
          >
            Design Custom Trip <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}