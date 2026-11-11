'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Mail, Phone, MapPin, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      destination: formData.get('destination'),
      travelDate: formData.get('travelDate'),
      travelers: formData.get('travelers'),
      message: formData.get('message'),
      website: formData.get('website'), // Honeypot spam trap
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const result = await res.json();
        alert(`Error: ${result.error || 'Something went wrong'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f8fb] text-gray-900 pb-24">
      
      {/* Top Back Navigation */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Dreamdesty Concierge</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#0b1329] text-white py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              TAILOR-MADE LUXURY TRAVEL
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight mb-4">
            Let&apos;s design your next journey.
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
            Connect with our expert India travel specialists to craft a bespoke itinerary customized completely to your schedule, preferences, and style.
          </p>
        </div>
      </div>

      {/* Main Form & Contact Info Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* Left Side: Contact Details & Office Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200/80 space-y-6">
            <h3 className="text-xl font-serif font-bold text-gray-950">Direct Concierge</h3>
            
            <div className="space-y-4 text-xs sm:text-sm text-gray-600 font-light">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-gray-900 font-medium mb-0.5">Headquarters</strong>
                  <span>Connaught Place, New Delhi, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-gray-900 font-medium mb-0.5">Email Support</strong>
                  <span>concierge@dreamdesty.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-gray-900 font-medium mb-0.5">Direct Line</strong>
                  <span>+91 98765 43210</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-gray-900 font-medium mb-0.5">Working Hours</strong>
                  <span>Mon – Sat: 9:00 AM – 8:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0b1329] to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
            <h4 className="text-lg font-serif font-bold text-amber-300">The Dreamdesty Promise</h4>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Every itinerary is crafted from scratch with handpicked luxury stays, private chauffeur transfers, and 24/7 on-ground support across India.
            </p>
          </div>
        </div>

        {/* Right Side: Detailed Enquiry Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-200/80">
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
              <h3 className="text-2xl font-serif font-bold text-gray-950">Enquiry Received Successfully!</h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto font-light">
                Thank you for reaching out to Dreamdesty. Our luxury travel advisor will review your preferences and get in touch with you within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-[#1b73e8] text-white text-xs font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 transition cursor-pointer"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest block mb-1">BESPOKE PLANNING FORM</span>
                <h3 className="text-2xl font-serif font-bold text-gray-950">Tell us about your dream holiday</h3>
              </div>

              {/* Hidden Honeypot Field */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    placeholder="Rupesh Kumar" 
                    className="w-full border border-gray-200 rounded-2xl p-3.5 text-xs sm:text-sm font-semibold text-gray-800 bg-gray-50 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="name@example.com" 
                    className="w-full border border-gray-200 rounded-2xl p-3.5 text-xs sm:text-sm font-semibold text-gray-800 bg-gray-50 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="+91 98765 43210" 
                    className="w-full border border-gray-200 rounded-2xl p-3.5 text-xs sm:text-sm font-semibold text-gray-800 bg-gray-50 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Destination of Interest</label>
                  <select name="destination" className="w-full border border-gray-200 rounded-2xl p-3.5 text-xs sm:text-sm font-semibold text-gray-800 bg-gray-50 focus:outline-none cursor-pointer">
                    <option>Kashmir Valley</option>
                    <option>Kerala Backwaters</option>
                    <option>Royal Rajasthan</option>
                    <option>Goa Beach Escape</option>
                    <option>Leh Ladakh Adventure</option>
                    <option>Custom Multi-State Tour</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Approximate Travel Date</label>
                  <input 
                    type="date" 
                    name="travelDate"
                    className="w-full border border-gray-200 rounded-2xl p-3.5 text-xs sm:text-sm font-semibold text-gray-800 bg-gray-50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Number of Travelers</label>
                  <select name="travelers" className="w-full border border-gray-200 rounded-2xl p-3.5 text-xs sm:text-sm font-semibold text-gray-800 bg-gray-50 focus:outline-none cursor-pointer">
                    <option>1 Traveler</option>
                    <option>2 Travelers</option>
                    <option>3-5 Travelers</option>
                    <option>Family (6+ travelers)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Specific Requirements or Preferences</label>
                <textarea 
                  name="message"
                  rows={4} 
                  placeholder="Share details about hotel preferences, traveling with kids, dietary requirements, or specific landmarks you'd love to explore..."
                  className="w-full border border-gray-200 rounded-2xl p-3.5 text-xs sm:text-sm font-semibold text-gray-800 bg-gray-50 focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#1b73e8] hover:bg-blue-600 text-white font-semibold py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-50"
              >
                {loading ? 'Submitting Enquiry...' : <>Submit Travel Enquiry <ArrowUpRight className="w-4 h-4" /></>}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-green-600" /> Your information is kept completely private and secure.
              </div>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}