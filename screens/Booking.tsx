
import React, { useState } from 'react';
import StatusBar from '../components/StatusBar';
import NavBar from '../components/NavBar';
import { Screen } from '../types';

interface BookingProps {
  onNavigate: (screen: Screen) => void;
}

const Booking: React.FC<BookingProps> = ({ onNavigate }) => {
  const [numDivers, setNumDivers] = useState(2);
  const [selectedDay, setSelectedDay] = useState(14);
  const [timeSlot, setTimeSlot] = useState<'MORNING' | 'AFTERNOON'>('MORNING');

  const pricing = {
    base: 120 * numDivers,
    equipment: 45,
    fees: 18.5,
  };
  const total = pricing.base + pricing.equipment + pricing.fees;

  return (
    <div className="relative h-full flex flex-col bg-background-dark text-white">
      <StatusBar />
      
      <header className="px-6 pt-14 pb-4 flex justify-between items-center">
        <button onClick={() => onNavigate('EXPLORE')} className="w-10 h-10 rounded-full flex items-center justify-center glass text-white">
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Booking Details</h1>
        <button className="w-10 h-10 rounded-full flex items-center justify-center glass text-white">
          <span className="material-icons-round">help_outline</span>
        </button>
      </header>

      <main className="flex-1 px-6 pt-4 pb-40 overflow-y-auto no-scrollbar">
        {/* Destination Card */}
        <div className="glass rounded-3xl p-4 mb-8 flex items-center gap-4 border border-white/10">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border border-white/20">
            <img src="https://picsum.photos/100/100?random=20" className="w-full h-full object-cover" alt="GBR" />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight">Great Barrier Reef</h2>
            <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Advanced Drift Dive</p>
            <div className="flex items-center text-slate-400 text-[10px] font-bold uppercase">
              <span className="material-icons-round text-xs mr-1">location_on</span> Cairns, Australia
            </div>
          </div>
        </div>

        {/* Date Selector */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300">Select Date</h3>
            <span className="text-primary text-xs font-bold uppercase">November 2024</span>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-6 px-6">
            {[14, 15, 16, 17, 18].map((day) => (
              <button 
                key={day} 
                onClick={() => setSelectedDay(day)}
                className={`flex-shrink-0 w-16 h-20 rounded-2xl flex flex-col items-center justify-center transition-all ${
                  selectedDay === day ? 'bg-primary shadow-xl shadow-primary/30' : 'glass border border-white/5 opacity-60'
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${selectedDay === day ? 'text-white' : 'text-slate-400'}`}>
                  {['MON', 'TUE', 'WED', 'THU', 'FRI'][day - 14]}
                </span>
                <span className="text-xl font-bold">{day}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Time Slot */}
        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-4">Time Slot</h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setTimeSlot('MORNING')}
              className={`p-6 rounded-3xl flex flex-col items-center gap-2 border transition-all ${
                timeSlot === 'MORNING' ? 'bg-primary/10 border-primary ring-1 ring-primary/50' : 'glass border-white/5 opacity-60'
              }`}
            >
              <span className={`material-icons-round text-2xl ${timeSlot === 'MORNING' ? 'text-primary' : 'text-slate-400'}`}>wb_sunny</span>
              <span className="font-bold text-sm">Morning</span>
              <span className="text-[10px] font-bold text-slate-400">08:00 AM</span>
            </button>
            <button 
              onClick={() => setTimeSlot('AFTERNOON')}
              className={`p-6 rounded-3xl flex flex-col items-center gap-2 border transition-all ${
                timeSlot === 'AFTERNOON' ? 'bg-primary/10 border-primary ring-1 ring-primary/50' : 'glass border-white/5 opacity-60'
              }`}
            >
              <span className={`material-icons-round text-2xl ${timeSlot === 'AFTERNOON' ? 'text-primary' : 'text-slate-400'}`}>wb_twilight</span>
              <span className="font-bold text-sm">Afternoon</span>
              <span className="text-[10px] font-bold text-slate-400">01:30 PM</span>
            </button>
          </div>
        </section>

        {/* Number of Divers */}
        <section className="mb-10 glass p-6 rounded-3xl border border-white/5 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-sm">Number of Divers</h4>
            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Maximum 6 per guide</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setNumDivers(Math.max(1, numDivers - 1))} className="w-10 h-10 rounded-full glass flex items-center justify-center border border-primary/30 text-primary">
              <span className="material-icons-round">remove</span>
            </button>
            <span className="text-xl font-bold w-6 text-center">{numDivers.toString().padStart(2, '0')}</span>
            <button onClick={() => setNumDivers(Math.min(6, numDivers + 1))} className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-icons-round">add</span>
            </button>
          </div>
        </section>

        {/* Costing Summary */}
        <section className="mb-10 p-6 glass rounded-3xl border border-white/5 space-y-4">
          <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
            <span>Base Price ({numDivers}x $120.00)</span>
            <span className="text-white">${pricing.base.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
            <span>Equipment Rental</span>
            <span className="text-white">${pricing.equipment.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider border-b border-white/10 pb-4">
            <span>Marine Park Fees & Taxes</span>
            <span className="text-white">${pricing.fees.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="font-bold text-lg">Total Amount</span>
            <span className="text-primary font-bold text-2xl">${total.toFixed(2)}</span>
          </div>
        </section>

        <div className="flex items-center justify-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
          <span className="material-icons-round text-xs">lock</span> SECURE SSL ENCRYPTION
        </div>
      </main>

      {/* Persistent Bottom Action */}
      <div className="fixed bottom-24 left-0 right-0 p-6 z-40 bg-background-dark/80 backdrop-blur-md">
        <button className="w-full h-16 bg-primary text-white rounded-3xl font-bold text-lg shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 active:scale-95 transition-all">
          Confirm & Pay <span className="material-icons-round">arrow_forward</span>
        </button>
      </div>

      <NavBar currentScreen="BOOKING" onNavigate={onNavigate} />
    </div>
  );
};

export default Booking;
