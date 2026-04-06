"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, Phone, Mail, User, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

export default function SimpleOrchardBooking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // 模拟提交
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-sm w-full space-y-6"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-bold text-stone-900">Booking Confirmed!</h2>
          <p className="text-stone-500">We've saved your spot. See you at the orchard!</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-red-600 font-bold text-sm uppercase tracking-widest"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Hero Section */}
      <header className="bg-red-600 px-6 py-16 text-white text-center rounded-b-[40px] shadow-lg">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-center mb-4"
        >
          <Apple size={48} />
        </motion.div>
        <h1 className="text-4xl font-black tracking-tight mb-2">U-Pick Cherries</h1>
        <p className="opacity-90 font-medium">Borugi Farms · Morgan Hill, CA</p>
      </header>

      <main className="max-w-md mx-auto px-6 -mt-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Secure Your Spot</h2>
            <p className="text-stone-400 text-sm">Fill in your details to book a picking session.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                <input 
                  required
                  type="text" 
                  placeholder="Henry Xiao"
                  className="w-full pl-12 pr-4 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                <input 
                  required
                  type="email" 
                  placeholder="henry@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 ml-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                <input 
                  required
                  type="tel" 
                  placeholder="(408) 000-0000"
                  className="w-full pl-12 pr-4 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-5 bg-red-600 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-xl shadow-red-100 active:scale-95 transition-all disabled:bg-stone-200"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  <span>Confirm Booking</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-10 text-center space-y-4 pb-20">
          <p className="text-xs text-stone-400 font-medium">
            No entrance fee. $6.50/lb for all varieties.
          </p>
          <div className="flex justify-center space-x-4">
             <div className="px-4 py-2 bg-stone-200/50 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-500">Parking: Free</div>
             <div className="px-4 py-2 bg-stone-200/50 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-500">Pets: No</div>
          </div>
        </div>
      </main>
    </div>
  );
}
