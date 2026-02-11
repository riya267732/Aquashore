
import React from 'react';
import StatusBar from '../components/StatusBar';

interface WelcomeProps {
  onNext: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  return (
    <div className="relative h-full flex flex-col items-center justify-between px-8 pt-16 pb-12 overflow-hidden bg-background-dark">
      <StatusBar />
      
      <div className="fixed inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbsoUeIU5U3YfZPNRoMBLUwM3Ic_ZQ47IypqBWqBADmBTnAHOXWoxFyY5-uIhRfAPBHt38Z8JSPrWOube3TMBO69WJzjB5eHNM3KEu3CeM3pNhOfLKBPQP7xZaKVZGGPABDAtE5Xo08qWBxCqGGmlWQTTkFYrkKExBw3sCEbTUpfUKjaheupTN0TIgcvZ1HwJk4lc08a3f0v5r6KlCr5wDcAoa-RRo2XI1btCAf8sFUHVrfZ_-0WoXCth01Vu8-nEAyiHUO_fjEz1W" 
          className="w-full h-full object-cover" 
          alt="Diver silhouette"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-transparent to-background-dark/90"></div>
        <div className="absolute inset-0 vignette opacity-60"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center mt-20">
        <div className="mb-4">
          <span className="material-icons-round text-primary text-6xl drop-shadow-[0_0_15px_rgba(13,166,242,0.6)]">scuba_diving</span>
        </div>
        <h1 className="font-serif text-6xl tracking-tight mb-2 text-white drop-shadow-lg">
          Aquashore
        </h1>
        <p className="text-primary font-bold tracking-[0.25em] uppercase text-xs">
          Premium Scuba Expeditions
        </p>
      </div>

      <div className="w-full relative z-10 space-y-4">
        <button 
          onClick={onNext}
          className="w-full py-5 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl shadow-2xl shadow-primary/40 transition-all flex items-center justify-center space-x-2 active:scale-95"
        >
          <span className="text-lg">Dive In</span>
          <span className="material-icons-round">chevron_right</span>
        </button>
        <button className="w-full py-5 glass border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/5 transition-all">
          Explore Destinations
        </button>
        <div className="pt-4 text-center">
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
            Uncover the hidden depths
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-20"></div>
    </div>
  );
};

export default Welcome;
