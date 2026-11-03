'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Fully Dynamic Data Array (Aap aur bhi destinations add kar sakte hain)
const destinations = [
  {
    id: 1,
    title: "Kashmir",
    tag: "✦ Mountain paradise",
    subtitle: "Snowy peaks & alpine lakes",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop",
    link: "#kashmir"
  },
  {
    id: 2,
    title: "Kerala",
    tag: "✦ Backwater retreat",
    subtitle: "Backwaters & slow living",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
    link: "#kerala"
  },
  {
    id: 3,
    title: "Rajasthan",
    tag: "✦ Royal heritage",
    subtitle: "Royal forts & desert magic",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=800&auto=format&fit=crop",
    link: "#rajasthan"
  },
  {
    id: 4,
    title: "Goa",
    tag: "✦ Coastal escape",
    subtitle: "Golden beaches & sunsets",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
    link: "#goa"
  },
  {
    id: 5,
    title: "Himachal",
    tag: "✦ Alpine adventure",
    subtitle: "Valleys & pine forests",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
    link: "#himachal"
  },
  {
    id: 6,
    title: "Varanasi",
    tag: "✦ Cultural soul",
    subtitle: "Ancient ghats & spirituality",
    image: "https://images.unsplash.com/photo-1561359313-0639aad49ff6?q=80&w=800&auto=format&fit=crop",
    link: "#varanasi"
  },
  {
    id: 7,
    title: "Andaman",
    tag: "✦ Island paradise",
    subtitle: "Crystal waters & corals",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop",
    link: "#andaman"
  },
  {
    id: 8,
    title: "Agra",
    tag: "✦ Monument of love",
    subtitle: "Timeless Mughal history",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
    link: "#agra"
  }
];

export default function DestinationsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-white mt-10 py-26 px-4 sm:px-8 lg:px-6 text-gray-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header & Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-600 text-xs">✦</span>
              <span className="text-blue-600 text-xs font-semibold tracking-widest uppercase">
                DISCOVER INCREDIBLE INDIA
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-gray-950 tracking-tight">
              Every corner. A new story.
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2 font-light">
              From mountain escapes to royal cities, find the India you’ve been dreaming of.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="#all-itineraries" 
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 transition group mr-2"
            >
              See all itineraries <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Carousel Arrow Buttons */}
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white border border-gray-200 flex items-center justify-center transition shadow-sm cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white border border-gray-200 flex items-center justify-center transition shadow-sm cursor-pointer"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Scrolling Container - Exact 4 cards layout */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-2 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {destinations.map((item, index) => {
            // Har 4 items ke set me pehla item bada (wider) hoga aur baaki 3 standard honge
            const isFirstInSet = index % 4 === 0;

            return (
              <div 
                key={item.id} 
                className={`min-w-[280px] sm:min-w-[300px] ${
                  isFirstInSet ? 'lg:min-w-[380px]' : 'lg:min-w-[280px]'
                } flex-1 h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 cursor-pointer relative group flex-shrink-0`}
              >
                {/* Background Image with Gradient */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Top Tag Badge */}
                <div className="relative z-20 self-start bg-white/20 backdrop-blur-md border border-white/30 px-3.5 py-1.5 rounded-full text-xs font-medium text-white shadow-sm">
                  {item.tag}
                </div>

                {/* Bottom Content */}
                <div className="relative z-20 flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-200 group-hover:text-white transition">
                    <span>{item.subtitle}</span>
                    <span className="text-amber-300 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}