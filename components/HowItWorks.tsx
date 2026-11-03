import { Plane } from 'lucide-react';

const stepsData = [
  {
    num: "01",
    title: "Tell us your dream",
    description: "Share where you’d like to go, preferred travel dates, group size and budget."
  },
  {
    num: "02",
    title: "Shape your itinerary",
    description: "Discuss destinations, suggested routes, experiences and travel arrangements."
  },
  {
    num: "03",
    title: "Begin the adventure",
    description: "Confirm the details and get ready to create your very own India story."
  }
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-4 sm:px-8 lg:px-16 text-gray-900 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-blue-600"></span>
            <span className="text-blue-600 text-xs font-semibold tracking-widest uppercase">
              ✦ SIMPLE AS 1, 2, 3
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-gray-950 tracking-tight">
            From dreaming to discovering.
          </h2>
        </div>

        {/* 3 Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stepsData.map((step) => (
            <div 
              key={step.num}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-serif font-light text-blue-200 block mb-4">
                  {step.num}
                </span>
                <h3 className="text-xl font-serif font-bold text-gray-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / Wanderlust Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-200/80 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 font-serif font-bold text-xl sm:text-2xl text-gray-950 mb-1">
              <span>A little wanderlust in your inbox.</span>
              <Plane className="w-5 h-5 text-blue-600 rotate-45" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-light">
              Be inspired by travel stories and destination ideas across India.
            </p>
          </div>

          {/* Email Input & Button Form */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full sm:w-80 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-blue-500 transition shadow-inner"
            />
            <button className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold px-8 py-4 rounded-2xl transition-all shadow-md text-sm whitespace-nowrap cursor-pointer flex items-center justify-center gap-1">
              Stay Inspired ↗
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}