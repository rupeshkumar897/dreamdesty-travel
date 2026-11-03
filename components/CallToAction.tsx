import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative w-full bg-[#0b1329] py-10 px-4 sm:px-8 lg:px-16 text-white overflow-hidden border-t border-white/10">
      
      {/* Background Subtle Watermark or Glow */}
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 text-white/[0.03] font-serif font-bold text-[180px] sm:text-[250px] pointer-events-none select-none">
        INDIA
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        
        {/* Left Content (Tagline, Title & Subtitle) */}
        <div className="flex flex-col items-start max-w-3xl">
          
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-amber-400"></span>
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              ✦ YOUR INDIA STORY STARTS HERE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15] mb-4">
            Ready to chase the extraordinary?
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-sm font-light leading-relaxed">
            Tell us where you’d love to go. We’ll help you shape a trip that’s truly yours.
          </p>

        </div>

        {/* Right Yellow CTA Button */}
        <div className="shrink-0 w-full lg:w-auto flex justify-start lg:justify-end">
          <Link 
            href="#plan-trip" 
            className="bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl transition-all shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2 text-sm sm:text-base group"
          >
            Let&apos;s Plan My India Trip 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}