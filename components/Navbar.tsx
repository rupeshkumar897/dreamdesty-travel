'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white text-blue-950 sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-[#f4f8fb] border-b border-gray-200 text-xs py-2 px-4 md:px-12 flex flex-col sm:flex-row justify-between items-center text-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-amber-500 font-bold">✦</span>
          <span className="font-semibold text-blue-900">Incredible India, beautifully explored.</span>
          <span className="hidden md:inline text-gray-500">Curated journeys across the country.</span>
        </div>
        <div className="text-gray-500 mt-1 sm:mt-0">
          Designed for memorable Indian holidays · <span className="text-blue-600 font-semibold">Dreamdesty.com</span>
        </div>
      </div>

      {/* Main Floating Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="bg-white border border-gray-200/80 rounded-2xl px-5 py-3 flex items-center justify-between shadow-md">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Dreamdesty Logo" 
                width={180} 
                height={38} 
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-blue-950">
            <Link href="/destinations" className="hover:text-blue-600 transition-colors">Destinations</Link>
            <Link href="/tour" className="hover:text-blue-600 transition-colors">Tour Packages</Link>
            <Link href="/experiences" className="hover:text-blue-600 transition-colors">Experiences</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">Why Dreamdesty</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </nav>

          {/* Plan My Trip Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/contact" 
              className="bg-[#1b73e8] hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-1.5 text-sm"
            >
              Plan My Trip <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-blue-950 hover:text-blue-600 p-1 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation - White Background with Blue Text */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 pt-4 pb-6 space-y-4 shadow-xl relative z-50">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-blue-950">
            <Link 
              href="/destinations" 
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition-colors py-1 border-b border-gray-100"
            >
              Destinations
            </Link>
            <Link 
              href="/tour" 
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition-colors py-1 border-b border-gray-100"
            >
              Tour Packages
            </Link>
            <Link 
              href="/experiences" 
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition-colors py-1 border-b border-gray-100"
            >
              Experiences
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition-colors py-1 border-b border-gray-100"
            >
              Why Dreamdesty
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition-colors py-1"
            >
              Contact
            </Link>
          </nav>
          <div className="pt-2">
            <Link 
              href="#plan-trip" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#1b73e8] hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
            >
              Plan My Trip <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}