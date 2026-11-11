import Link from 'next/link';
import { Clock, MapPin, Check, X, ArrowLeft, ArrowUpRight, Calendar, Users, ShieldCheck } from 'lucide-react';

// Next.js ko batane ke liye ki kaun-kaun se static paths prerender karne hain
export async function generateStaticParams() {
  return [
    { id: 'kashmir' },
    { id: 'kerala' },
    { id: 'rajasthan' },
    { id: 'goa' },
  ];
}

export default async function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const tourId = resolvedParams.id;

  // Tour details mapping based on ID/Slug
  const tourDetails: Record<string, { title: string; category: string; image: string; locations: string; duration: string; overview: string }> = {
    kashmir: {
      title: "Kashmir — Paradise in the Valley",
      category: "✦ North India • Mountain Favourite",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1600&auto=format&fit=crop",
      locations: "Srinagar • Gulmarg • Pahalgam",
      duration: "6 Days / 5 Nights",
      overview: "Experience the unmatched majesty of the Kashmir valley with our signature slow-travel itinerary. From private houseboat stays on Dal Lake to alpine snow views in Gulmarg and the lush pine forests of Pahalgam, every moment is meticulously planned for luxury and comfort."
    },
    kerala: {
      title: "Kerala — Backwaters & Beyond",
      category: "✦ South India • Slow Travel",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
      locations: "Munnar • Thekkady • Alleppey",
      duration: "7 Days / 6 Nights",
      overview: "Misty tea gardens, lush landscapes, and serene backwater cruising. Discover God's Own Country with premium houseboat stays and guided plantation tours."
    },
    rajasthan: {
      title: "Royal Rajasthan Heritage Trail",
      category: "✦ West India • Cultural Classic",
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1600&auto=format&fit=crop",
      locations: "Jaipur • Jodhpur • Udaipur",
      duration: "8 Days / 7 Nights",
      overview: "Majestic palaces, vibrant bazaars, and timeless royal heritage. Stay in heritage luxury hotels and experience the grandeur of Rajputana history."
    },
    goa: {
      title: "Goa — Sun, Sand & Soul",
      category: "✦ West India • Beach Escape",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
      locations: "North Goa • South Goa",
      duration: "5 Days / 4 Nights",
      overview: "Coastal sunsets, Portuguese heritage lanes, and an easygoing beach holiday mood tailored for ultimate relaxation."
    }
  };

  const currentTour = tourDetails[tourId] || tourDetails['kashmir'];

  const itineraryDays = [
    {
      day: 1,
      title: `Arrival & Welcome to ${currentTour.title.split('—')[0]}`,
      description: "Arrive at the destination airport where our private chauffeur greets you. Transfer to your luxury boutique hotel or resort. Enjoy a welcome dinner featuring authentic local delicacies."
    },
    {
      day: 2,
      title: "Immersive Sightseeing & Cultural Exploration",
      description: "Embark on a guided private tour covering iconic heritage landmarks, scenic viewpoints, and local artisan markets with expert storytelling."
    },
    {
      day: 3,
      title: "Scenic Excursions & Nature Trails",
      description: "Venture into picturesque valleys or coastal hideaways. Enjoy exclusive outdoor experiences curated for peace and breathtaking photography."
    },
    {
      day: 4,
      title: "Leisure, Spa & Gastronomy",
      description: "A relaxed day dedicated to rejuvenation. Enjoy an optional traditional spa session, stroll through nature trails, or dine at fine-dining rooftop venues."
    },
    {
      day: 5,
      title: "Departure — Cherished Memories",
      description: "Enjoy a leisurely breakfast, check out from your resort, and transfer to the airport for your onward flight with wonderful memories curated by Dreamdesty."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f8fb] text-gray-900 pb-24">
      
      {/* Top Navigation Bar / Back Link */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Dreamdesty Curated Itinerary</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] overflow-hidden">
        <img 
          src={currentTour.image} 
          alt={currentTour.title} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        <div className="absolute bottom-8 left-4 right-4 sm:left-8 sm:right-8 lg:px-16 max-w-[1400px] mx-auto text-white">
          <div className="inline-block bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 text-amber-300">
            {currentTour.category}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-3">
            {currentTour.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-200 font-medium">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> {currentTour.duration}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> {currentTour.locations}</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* Left Side: Overview & Itinerary */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Overview Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200/80">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-950 mb-4">Overview</h3>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed mb-6">
              {currentTour.overview}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="block text-[11px] text-gray-400 uppercase font-semibold">Duration</span>
                <span className="text-sm font-bold text-gray-900">{currentTour.duration}</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="block text-[11px] text-gray-400 uppercase font-semibold">Pace</span>
                <span className="text-sm font-bold text-gray-900">Relaxed & Scenic</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="block text-[11px] text-gray-400 uppercase font-semibold">Accommodation</span>
                <span className="text-sm font-bold text-gray-900">5-Star & Boutique</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="block text-[11px] text-gray-400 uppercase font-semibold">Meals</span>
                <span className="text-sm font-bold text-gray-900">Breakfast & Dinner</span>
              </div>
            </div>
          </div>

          {/* Day-by-Day Itinerary List */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200/80">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-950 mb-6">Day-by-Day Itinerary</h3>
            
            <div className="space-y-4">
              {itineraryDays.map((item) => (
                <div key={item.day} className="border border-gray-200 rounded-2xl p-5 bg-gray-50">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      0{item.day}
                    </span>
                    <h4 className="text-sm sm:text-base font-serif font-bold text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed pl-11">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200/80 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-base font-serif font-bold text-gray-950 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" /> What&apos;s Included
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 font-light">
                <li className="flex items-center gap-2">✓ 5-Star & Boutique hotel stays</li>
                <li className="flex items-center gap-2">✓ Private AC vehicle for all transfers</li>
                <li className="flex items-center gap-2">✓ Daily breakfast and curated dinner</li>
                <li className="flex items-center gap-2">✓ Guided sightseeing tours</li>
                <li className="flex items-center gap-2">✓ 24/7 Dreamdesty concierge support</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-serif font-bold text-gray-950 mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" /> What&apos;s Excluded
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 font-light">
                <li className="flex items-center gap-2">✗ Airfares or train tickets</li>
                <li className="flex items-center gap-2">✗ Personal expenses and tips</li>
                <li className="flex items-center gap-2">✗ Optional activity tickets</li>
                <li className="flex items-center gap-2">✗ Travel insurance</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Right Side: Sticky Enquiry & Custom Quote Box */}
        <div className="lg:sticky lg:top-28 bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200/80 flex flex-col gap-6">
          
          <div>
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest block mb-1">TAILOR-MADE JOURNEY</span>
            <h3 className="text-2xl font-serif font-bold text-gray-950">Customize & Enquire</h3>
            <p className="text-xs text-gray-500 mt-1">Discuss your dates with our India travel expert.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Preferred Start Date</label>
              <div className="flex items-center gap-3 border border-gray-200 rounded-2xl p-3 bg-gray-50">
                <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                <input 
                  type="date" 
                  defaultValue="2026-04-10"
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-gray-800 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Number of Travelers</label>
              <div className="flex items-center gap-3 border border-gray-200 rounded-2xl p-3 bg-gray-50">
                <Users className="w-4 h-4 text-blue-600 shrink-0" />
                <select 
                  defaultValue="2 Travelers"
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-gray-800 focus:outline-none cursor-pointer"
                >
                  <option>1 Traveler</option>
                  <option>2 Travelers</option>
                  <option>3-5 Travelers</option>
                  <option>Family (6+ travelers)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Your Email Address</label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full border border-gray-200 rounded-2xl p-3 text-xs sm:text-sm font-semibold text-gray-800 bg-gray-50 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <button 
            className="w-full bg-[#1b73e8] hover:bg-blue-600 text-white font-semibold py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            Request Custom Quote <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 font-medium pt-2">
            <ShieldCheck className="w-4 h-4 text-green-600" /> No upfront payment required to plan
          </div>

        </div>

      </div>

    </div>
  );
}