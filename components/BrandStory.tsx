import Link from 'next/link';
import { Sparkles, Compass, Heart, ArrowUpRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="w-full bg-[#fff] py-20 px-4 sm:px-8 lg:px-16 text-gray-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Large Image with Overlapping Floating Card */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[550px] h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop" 
              alt="Himalayan Mountain Landscape" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Overlapping Floating White Card */}
          <div className="absolute bottom-8 right-4 sm:-right-6 bg-white text-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-100 max-w-[280px] sm:max-w-[320px]">
            <h4 className="text-lg font-serif font-bold text-gray-950 mb-1">One India.</h4>
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
              Endless opportunities to wander, wonder and make lasting memories.
            </p>
          </div>
        </div>

        {/* Right Side: Content & Features */}
        <div className="flex flex-col items-start">
          
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-600"></span>
            <span className="text-blue-600 text-xs font-semibold tracking-widest uppercase">
              ✦ THE DREAMDESTY WAY
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-gray-950 tracking-tight leading-[1.15] mb-6">
            Don’t just visit. <br />
            <span className="font-serif italic text-blue-600 font-light">Feel every moment.</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-sm sm:text-base font-light mb-8 leading-relaxed">
            India is more than a destination. It’s a thousand cultures, landscapes, tastes and stories. We help turn your wishlist into a personalized journey with room for the unforgettable.
          </p>

          {/* Feature List Rows */}
          <div className="space-y-6 mb-10 w-full">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-gray-900 mb-0.5">Made for your travel style</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-light">Choose the pace, experiences and cities that feel right for you.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-gray-900 mb-0.5">From icons to hidden gems</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-light">Blend celebrated highlights with quieter, meaningful experiences.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-gray-900 mb-0.5">Planning with a human touch</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-light">Discuss your needs before finalizing travel arrangements.</p>
              </div>
            </div>

          </div>

          {/* Action Button */}
          <Link 
            href="#custom-journey" 
            className="bg-[#1b73e8] hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 text-sm sm:text-base group"
          >
            Create My Dream Journey 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

        </div>

      </div>
    </section>
  );
}