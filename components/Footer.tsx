import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1329] text-gray-300 pt-20 pb-10 px-4 sm:px-8 lg:px-16 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info with Image Logo */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* Apni logo image ko 'public' folder me rakh kar yahan path de dein, e.g., /logo.png */}
              <Image 
                src="/logo.png" 
                alt="Dreamdesty Logo" 
                width={260} 
                height={70} 
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm font-light max-w-sm leading-relaxed mb-6">
              Extraordinary journeys, entirely in India. Discover the beauty of our country with trips imagined around you.
            </p>
          </div>

          {/* Column 2: Explore India */}
          <div className="flex flex-col items-start">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
              Explore India
            </h4>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><Link href="#destinations" className="hover:text-amber-400 transition">Destinations</Link></li>
              <li><Link href="#tours" className="hover:text-amber-400 transition">Tour Packages</Link></li>
              <li><Link href="#experiences" className="hover:text-amber-400 transition">Travel Experiences</Link></li>
              <li><Link href="#approach" className="hover:text-amber-400 transition">Our Approach</Link></li>
            </ul>
          </div>

          {/* Column 3: Popular Regions */}
          <div className="flex flex-col items-start">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
              Popular Regions
            </h4>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><Link href="#kashmir" className="hover:text-amber-400 transition">Kashmir</Link></li>
              <li><Link href="#kerala" className="hover:text-amber-400 transition">Kerala</Link></li>
              <li><Link href="#rajasthan" className="hover:text-amber-400 transition">Rajasthan</Link></li>
              <li><Link href="#andaman" className="hover:text-amber-400 transition">Andaman Islands</Link></li>
            </ul>
          </div>

          {/* Column 4: Travel with us */}
          <div className="flex flex-col items-start">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
              Travel with us
            </h4>
            <p className="text-sm font-light text-gray-400 mb-6 leading-relaxed">
              Have a destination in mind? Let&apos;s talk about your next India holiday.
            </p>
            <Link 
              href="#enquire" 
              className="bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-400/20 flex items-center gap-2 text-sm mb-4 cursor-pointer"
            >
              Enquire Now <ArrowUpRight className="w-4 h-4" />
            </Link>
            <span className="text-xs text-gray-400 font-light">Dreamdesty.com</span>
          </div>

        </div>

        {/* Bottom Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p>© 2026 Dreamdesty. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted for curious explorers of incredible India <span className="text-amber-400 font-bold">✦</span>
          </p>
        </div>

      </div>
    </footer>
  );
}