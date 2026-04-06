"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, Phone, Mail, User, CheckCircle, ArrowRight, Loader2, MapPin, Calendar, Star, Leaf } from 'lucide-react';

export default function EnhancedOrchardBooking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // NOTE FOR HENRY: In a real production setup, we would use a service like 
    // Formspree or a simple Cloudflare Worker to send this data to your email.
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    console.log("Booking Data Captured:", data);

    // Simulated API Call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#fffcf5] flex items-center justify-center p-6 font-serif">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-[40px] shadow-2xl text-center max-w-sm w-full space-y-8 border border-stone-100"
        >
          <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle size={48} strokeWidth={1.5} />
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-stone-900 italic">Reservation Confirmed</h2>
            <p className="text-stone-500 font-sans text-sm leading-relaxed">Your spot in the orchard is waiting. A confirmation has been logged for Borugi Farms.</p>
          </div>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="w-full py-4 bg-stone-900 text-white rounded-2xl font-bold font-sans text-sm uppercase tracking-widest active:scale-95 transition-all"
          >
            Done
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffcf5] text-stone-900 font-sans pb-20 selection:bg-red-100">
      {/* Visual Background Element */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-red-50/50 to-transparent pointer-events-none -z-10" />

      {/* Header / Hero */}
      <header className="px-6 pt-16 pb-24 text-center space-y-6">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-flex p-4 bg-white rounded-3xl shadow-xl shadow-red-100/50 mb-4"
        >
          <Apple size={40} className="text-red-600" />
        </motion.div>
        <div className="space-y-3">
            <h1 className="text-5xl font-serif italic font-black tracking-tight text-stone-900">Borugi Farms</h1>
            <div className="flex items-center justify-center space-x-2 text-stone-400 text-xs font-bold uppercase tracking-[0.2em]">
                <MapPin size={14} className="text-red-400" />
                <span>Morgan Hill, California</span>
            </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 -mt-12">
        {/* Availability Badge */}
        <div className="flex justify-center mb-8">
            <div className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center space-x-2 border border-green-200">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span>Current Status: Peak Harvest</span>
            </div>
        </div>

        <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-stone-50 p-10 space-y-10 relative overflow-hidden">
          {/* Decorative Leaf */}
          <Leaf className="absolute -top-4 -right-4 text-stone-50 rotate-45" size={100} />
          
          <div className="space-y-2 relative z-10">
            <h2 className="text-2xl font-bold font-serif italic text-stone-800">Secure your session</h2>
            <p className="text-stone-400 text-sm font-medium">Simple, fast, no login required.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            {/* Input Group */}
            <div className="space-y-6">
                <div className="space-y-2 group">
                    <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 ml-1 group-focus-within:text-red-500 transition-colors">Name</label>
                    <div className="relative">
                        <User className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-red-400 transition-colors" size={20} />
                        <input 
                        name="name"
                        required
                        type="text" 
                        placeholder="e.g. Henry Xiao"
                        className="w-full pl-8 pr-4 py-4 bg-transparent border-b-2 border-stone-100 focus:border-red-600 outline-none transition-all font-medium text-lg placeholder:text-stone-200"
                        />
                    </div>
                </div>

                <div className="space-y-2 group">
                    <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 ml-1 group-focus-within:text-red-500 transition-colors">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-red-400 transition-colors" size={20} />
                        <input 
                        name="email"
                        required
                        type="email" 
                        placeholder="henry@example.com"
                        className="w-full pl-8 pr-4 py-4 bg-transparent border-b-2 border-stone-100 focus:border-red-600 outline-none transition-all font-medium text-lg placeholder:text-stone-200"
                        />
                    </div>
                </div>

                <div className="space-y-2 group">
                    <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 ml-1 group-focus-within:text-red-500 transition-colors">Mobile</label>
                    <div className="relative">
                        <Phone className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-red-400 transition-colors" size={20} />
                        <input 
                        name="phone"
                        required
                        type="tel" 
                        placeholder="(408) 000-0000"
                        className="w-full pl-8 pr-4 py-4 bg-transparent border-b-2 border-stone-100 focus:border-red-600 outline-none transition-all font-medium text-lg placeholder:text-stone-200"
                        />
                    </div>
                </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-6 bg-red-600 text-white rounded-3xl font-bold font-sans text-sm uppercase tracking-[0.2em] shadow-2xl shadow-red-200 active:scale-95 transition-all disabled:bg-stone-200 flex items-center justify-center space-x-3"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  <span>Request Spot</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Pricing Info Card */}
        <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-[30px] border border-stone-50 shadow-sm flex flex-col items-center text-center space-y-2">
                <span className="text-[9px] uppercase font-black text-stone-300 tracking-widest">Pricing</span>
                <span className="text-xl font-serif italic font-bold text-red-600">$6.50/lb</span>
                <span className="text-[8px] font-bold text-stone-400">Rainier & Bing</span>
            </div>
            <div className="bg-white p-6 rounded-[30px] border border-stone-50 shadow-sm flex flex-col items-center text-center space-y-2">
                <span className="text-[9px] uppercase font-black text-stone-300 tracking-widest">Entry</span>
                <span className="text-xl font-serif italic font-bold text-stone-800">FREE</span>
                <span className="text-[8px] font-bold text-stone-400">Parking included</span>
            </div>
        </div>

        <div className="mt-12 flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-orange-300 text-orange-300" />)}
            </div>
            <p className="text-stone-400 text-xs font-serif italic">"The sweetest cherries in Morgan Hill."</p>
        </div>
      </main>
    </div>
  );
}
