'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0a1128] text-white sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-[#070d1f] border-b border-white/5 text-xs py-2 px-4 md:px-12 flex flex-col sm:flex-row justify-between items-center text-gray-300">
        <div className="flex items-center gap-2">
          <span className="text-amber-400">✦</span>
          <span className="font-medium text-white">Incredible India, beautifully explored.</span>
          <span className="hidden md:inline text-gray-400">Curated journeys across the country.</span>
        </div>
        <div className="text-gray-400 mt-1 sm:mt-0">
          Designed for memorable Indian holidays · <span className="text-amber-400 font-medium">Dreamdesty.com</span>
        </div>
      </div>

      {/* Main Floating Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="bg-[#0e1736] border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl">
          
       
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center">
              <Image 
                src="/logo.png" // Apni image ka path yahan dein (public folder me rakhi hui file)
                alt="Dreamdesty Logo" 
                width={180} 
                height={38} 
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-200">
            <Link href="#destinations" className="hover:text-amber-400 transition-colors">Destinations</Link>
            <Link href="#packages" className="hover:text-amber-400 transition-colors">Tour Packages</Link>
            <Link href="#experiences" className="hover:text-amber-400 transition-colors">Experiences</Link>
            <Link href="#why-us" className="hover:text-amber-400 transition-colors">Why Dreamdesty</Link>
            <Link href="#contact" className="hover:text-amber-400 transition-colors">Contact</Link>
          </nav>

          {/* Plan My Trip Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="#plan-trip" 
              className="bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-amber-400/10 flex items-center gap-1.5 text-sm"
            >
              Plan My Trip <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#0e1736] border-b border-white/10 px-6 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-3 text-base font-medium text-gray-200">
            <Link 
              href="#destinations" 
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition-colors py-1 border-b border-white/5"
            >
              Destinations
            </Link>
            <Link 
              href="#packages" 
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition-colors py-1 border-b border-white/5"
            >
              Tour Packages
            </Link>
            <Link 
              href="#experiences" 
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition-colors py-1 border-b border-white/5"
            >
              Experiences
            </Link>
            <Link 
              href="#why-us" 
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition-colors py-1 border-b border-white/5"
            >
              Why Dreamdesty
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition-colors py-1"
            >
              Contact
            </Link>
          </nav>
          <div className="pt-2">
            <Link 
              href="#plan-trip" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
            >
              Plan My Trip <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}