"use client";

import React, { useState } from 'react';
import { Apple, Phone, Mail, User, CheckCircle, ArrowRight, Loader2, MapPin, Star, Clock, Home } from 'lucide-react';

const TIME_SLOTS = [
  "08:00 AM - 09:00 AM",
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM"
];

const LOCATIONS = [
  { id: "ranch-1", name: "Ranch One (Monterey Hwy.)", address: "10900 Monterey Road, Morgan Hill, CA 95037" },
  { id: "ranch-2", name: "Ranch Two (Gilroy)", address: "8990 Marcella Ave, Gilroy, CA 95020" },
  { id: "ranch-3", name: "Ranch Three (Godfrey)", address: "2905 Godfrey Road, Gilroy, CA 95020" },
  { id: "ranch-4", name: "Ranch Four (101 Ranch)", address: "55 Castro Valley Road, Gilroy, CA 95020" }
];

export default function ElegantOrchard() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      location: formData.get('location'),
      timeSlot: formData.get('timeSlot'),
      timestamp: new Date().toLocaleString(),
    };

    try {
      // Replace YOUR_SHEET_MONKEY_URL with the actual URL from the owner
      const response = await fetch("https://api.sheetmonkey.io/form/YOUR_SHEET_MONKEY_URL", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission failed", error);
      // Fallback for demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#fffcf5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'serif' }}>
        <div style={{ backgroundColor: 'white', padding: '48px', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', textAlign: 'center', maxWidth: '400px', width: '100%', border: '1px solid #f5f5f0' }}>
          <div style={{ width: '80px', height: '80px', backgroundColor: '#f0fdf4', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <CheckCircle size={40} />
          </div>
          <h2 style={{ fontSize: '28px', marginBottom: '12px', fontWeight: 'bold', fontStyle: 'italic' }}>Reserved</h2>
          <p style={{ color: '#78716c', fontFamily: 'sans-serif', fontSize: '14px', lineHeight: '1.6', marginBottom: '32px' }}>We've received your request. Borello & Borugi Farms will see you soon.</p>
          <button onClick={() => setIsSubmitted(false)} style={{ width: '100%', padding: '16px', backgroundColor: '#1c1917', color: 'white', borderRadius: '16px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Done</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fffcf5', color: '#1c1917', fontFamily: 'sans-serif', paddingBottom: '80px' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '400px', background: 'linear-gradient(180deg, rgba(239, 68, 68, 0.05) 0%, rgba(255, 252, 245, 0) 100%)', pointerEvents: 'none' }} />

      <header style={{ padding: '60px 24px 40px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', padding: '16px', backgroundColor: 'white', borderRadius: '24px', boxShadow: '0 10px 30px rgba(239, 68, 68, 0.1)', marginBottom: '24px' }}>
          <Apple size={32} color="#ef4444" />
        </div>
        <h1 style={{ fontFamily: 'serif', fontSize: '42px', fontStyle: 'italic', fontWeight: '900', margin: '0 0 8px' }}>Borello Farms</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#a8a29e', fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <MapPin size={14} color="#f87171" />
          <span>Multiple Ranch Locations</span>
        </div>
      </header>

      <main style={{ maxWidth: '440px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ backgroundColor: '#f0fdf4', color: '#15803d', padding: '6px 16px', borderRadius: '100px', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid #dcfce7' }}>
            ● Peak Cherry Season
          </span>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '32px', padding: '40px', boxShadow: '0 30px 60px rgba(28, 25, 23, 0.04)', border: '1px solid #f5f5f0' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'serif', fontSize: '24px', fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 4px' }}>Secure your spot</h2>
            <p style={{ color: '#a8a29e', fontSize: '14px' }}>Choose your ranch and time slot.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a8a29e', marginLeft: '4px' }}>Full Name</label>
              <div style={{ position: 'relative' }}>
                <User style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: '#e7e5e4' }} size={20} />
                <input required name="name" type="text" placeholder="Henry Xiao" style={{ width: '100%', padding: '12px 0 12px 32px', backgroundColor: 'transparent', border: 'none', borderBottom: '2px solid #f5f5f4', fontSize: '18px', outline: 'none', fontWeight: '500' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a8a29e', marginLeft: '4px' }}>Mobile</label>
              <div style={{ position: 'relative' }}>
                <Phone style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: '#e7e5e4' }} size={20} />
                <input required name="phone" type="tel" placeholder="(408) 000-0000" style={{ width: '100%', padding: '12px 0 12px 32px', backgroundColor: 'transparent', border: 'none', borderBottom: '2px solid #f5f5f4', fontSize: '18px', outline: 'none', fontWeight: '500' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a8a29e', marginLeft: '4px' }}>Select Ranch Location</label>
              <div style={{ position: 'relative' }}>
                <Home style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: '#e7e5e4' }} size={20} />
                <select 
                  required 
                  name="location" 
                  style={{ 
                    width: '100%', 
                    padding: '12px 0 12px 32px', 
                    backgroundColor: 'transparent', 
                    border: 'none', 
                    borderBottom: '2px solid #f5f5f4', 
                    fontSize: '16px', 
                    outline: 'none', 
                    fontWeight: '500',
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="" disabled selected>Pick a ranch</option>
                  {LOCATIONS.map(loc => <option key={loc.id} value={loc.name}>{loc.name}</option>)}
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a8a29e', marginLeft: '4px' }}>Time Slot (1 Hour)</label>
              <div style={{ position: 'relative' }}>
                <Clock style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: '#e7e5e4' }} size={20} />
                <select 
                  required 
                  name="timeSlot" 
                  style={{ 
                    width: '100%', 
                    padding: '12px 0 12px 32px', 
                    backgroundColor: 'transparent', 
                    border: 'none', 
                    borderBottom: '2px solid #f5f5f4', 
                    fontSize: '16px', 
                    outline: 'none', 
                    fontWeight: '500',
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="" disabled selected>Select a time</option>
                  {TIME_SLOTS.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                </select>
              </div>
            </div>

            <button type="submit" disabled={isLoading} style={{ marginTop: '16px', width: '100%', padding: '20px', backgroundColor: '#ef4444', color: 'white', borderRadius: '20px', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', border: 'none', boxShadow: '0 15px 30px rgba(239, 68, 68, 0.3)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : <>Request Spot <ArrowRight size={18} /></>}
            </button>
          </form>
        </div>

        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '24px', textAlign: 'center', border: '1px solid #f5f5f0' }}>
            <span style={{ fontSize: '9px', fontWeight: '900', color: '#d6d3d1', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>Pricing</span>
            <span style={{ fontSize: '20px', fontFamily: 'serif', fontWeight: 'bold', fontStyle: 'italic', color: '#ef4444' }}>$6.50/lb</span>
          </div>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '24px', textAlign: 'center', border: '1px solid #f5f5f0' }}>
            <span style={{ fontSize: '9px', fontWeight: '900', color: '#d6d3d1', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>Entry</span>
            <span style={{ fontSize: '20px', fontFamily: 'serif', fontWeight: 'bold', fontStyle: 'italic' }}>FREE</span>
          </div>
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '12px' }}>
            {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#fdba74" stroke="none" />)}
          </div>
          <p style={{ color: '#a8a29e', fontSize: '13px', fontFamily: 'serif', fontStyle: 'italic' }}>"The best picking experience in Morgan Hill & Gilroy."</p>
        </div>
      </main>
    </div>
  );
}
