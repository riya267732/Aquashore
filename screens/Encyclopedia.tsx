
import React, { useState } from 'react';
import StatusBar from '../components/StatusBar';
import NavBar from '../components/NavBar';
import { Screen, Species } from '../types';
import { GoogleGenAI } from "@google/genai";

const SPECIES_LIST: Species[] = [
  {
    id: '1',
    name: 'Manta Ray',
    scientificName: 'Mobula alfredi',
    description: 'The graceful giants of the ocean. Manta rays are sensitive; touching them damages their protective mucus layer.',
    rarity: 'Rare Species',
    maxSize: '7.0 Meters',
    maxDepth: '1,000m',
    temper: 'Gentle',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAttyF6aSB6bCzAS8iWGNDteKvASmeFiJ1d0MWCK12R9-u1aswD0-dInntPs1G5skd0mpsLAusVu-f6Y3RFNP49P9YAJi-xmYqZAKujMVFU2wBgBXXkDlrR422j4iIrc4DUmXwykfcC3d6Z5sZyQPc0Qh2BCZxZ_Tfo-dkwj_ltVHduLnWJwLQY_mKxH4Dz75Spq9SwrWqQL2Ys1EatR6jbhVKts0fxEJ37DR-BhWGVTVLtIWtfsBBoKiEwGVzKVkCZ3XvqZ1u92Pz5'
  },
  {
    id: '2',
    name: 'Clownfish',
    scientificName: 'Amphiprioninae',
    description: 'Bright orange fish that live in a symbiotic relationship with sea anemones.',
    rarity: 'Common',
    maxSize: '10 cm',
    maxDepth: '15m',
    temper: 'Territorial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwDZAiEfLvUTG2bv77-XcZxtEIiUwFc4OwzHBILj42QGJKpoTPWErELP6G3V1kX5J3PORMAHJFbH0IiP0_XAf_x_H7M_SzIShF5gmNJd9UP2hx0eyFPbPdko-kqnO_HAzYrIMAfmAl-GmlGJ9OeebGWxHDSI0j3jk5sU55VUNzGgJl7PmSxndccztw7wOUW2Cxo0X3QxX6-REXZul6OY0d0YNHttlked5Bkim8jJWC2ygccSWE0yuiu3tdE4AUMEGlgMo1-MqCuNvy'
  },
  {
    id: '3',
    name: 'Barracuda',
    scientificName: 'Sphyraena',
    description: 'Large, predatory ray-finned fish known for their fearsome appearance and ferocious behavior.',
    rarity: 'Uncommon',
    maxSize: '1.5 Meters',
    maxDepth: '100m',
    temper: 'Aggressive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuaHnJZ4SmKBZIHtdNGXjjJkLCai2wLEc6spm6Wd-8r9roO49z7wUpwrOjPfd4EhwJKTUVr8akeMRH23NAMgr6CEad039H3-7IFtOi3E-qCGtG-XWTiuYP1LPCRslyfI5u_sDAyZVq-Vqa45TLskB0lPRYmFc4SG3EGAbMJhyBkfp0rp7R-qg8B-quCC_JxUr54sraLfzcaH71shCczROg1-KQYn61AoZIyLGYJMdC6Rq8jkQdW0wTLSES-Ly_RehYaf0LXs_PVu2m'
  }
];

interface EncyclopediaProps {
  onNavigate: (screen: Screen) => void;
}

const Encyclopedia: React.FC<EncyclopediaProps> = ({ onNavigate }) => {
  const [selectedSpecies, setSelectedSpecies] = useState(SPECIES_LIST[0]);
  const [scanning, setScanning] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);

  const startAIScan = async () => {
    setScanning(true);
    setAiAnalysis(null);
    
    // Simulating Gemini analysis of the selected species
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Provide 3 unique, expert-level trivia facts about the ${selectedSpecies.name}. Each fact should be a single sentence.`,
        config: {
          systemInstruction: "You are a world-class marine biologist.",
        }
      });
      setAiAnalysis(response.text || "No extra data found.");
    } catch (err) {
      setAiAnalysis("Analysis failed. Dive back in later!");
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="relative h-full flex flex-col bg-background-dark">
      <StatusBar />
      
      <header className="px-6 pt-14 pb-4 flex justify-between items-center z-30">
        <button onClick={() => onNavigate('EXPLORE')} className="w-10 h-10 rounded-full flex items-center justify-center glass text-white">
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Species Guide</h1>
        <button onClick={startAIScan} className="w-10 h-10 rounded-full flex items-center justify-center glass text-primary shadow-[0_0_15px_#0da6f233]">
          <span className={`material-icons-round ${scanning ? 'animate-spin' : ''}`}>
            {scanning ? 'autorenew' : 'auto_awesome'}
          </span>
        </button>
      </header>

      <main className="flex-1 px-4 flex flex-col gap-6 pb-32 overflow-y-auto no-scrollbar">
        {/* Immersive View */}
        <section className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-primary/30 to-background-dark border border-white/10 group transition-all duration-700">
          <img 
            key={selectedSpecies.id}
            src={selectedSpecies.image} 
            className="w-full h-full object-cover mix-blend-overlay scale-110 animate-fade-in" 
            alt={selectedSpecies.name} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-transparent to-transparent"></div>
          
          {scanning && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-primary/40 absolute top-0 animate-[scan_2s_infinite]"></div>
              <div className="glass px-6 py-4 rounded-2xl flex flex-col items-center gap-2">
                <span className="material-icons-round text-primary animate-pulse text-3xl">biotech</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">AI Analyzing...</span>
              </div>
            </div>
          )}

          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Currently Viewing</span>
            <h2 className="text-4xl font-bold text-white leading-tight">
              {selectedSpecies.name}<br/>
              <span className="text-xl font-light text-white/50">{selectedSpecies.scientificName}</span>
            </h2>
            
            {aiAnalysis && (
              <div className="mt-4 p-4 glass border-primary/20 rounded-2xl animate-fade-in-up">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-icons-round text-primary text-sm">auto_awesome</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">AI Insight</span>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">{aiAnalysis}</p>
              </div>
            )}
          </div>
        </section>

        {/* Info Grid */}
        <section className="grid grid-cols-2 gap-4">
          <div className="glass p-4 rounded-2xl border-white/5">
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Max Depth</p>
            <p className="font-bold text-white">{selectedSpecies.maxDepth}</p>
          </div>
          <div className="glass p-4 rounded-2xl border-white/5">
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Max Size</p>
            <p className="font-bold text-white">{selectedSpecies.maxSize}</p>
          </div>
        </section>

        {/* Species Carousel */}
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-end px-2">
            <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Quick Select</h3>
            <span className="text-[10px] text-primary font-bold uppercase">Database Online</span>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar">
            {SPECIES_LIST.map((s) => (
              <button 
                key={s.id} 
                onClick={() => {
                  setSelectedSpecies(s);
                  setAiAnalysis(null);
                }}
                className={`flex-shrink-0 w-32 group cursor-pointer transition-all duration-500 ${selectedSpecies.id === s.id ? 'scale-105' : 'opacity-40 grayscale blur-[1px]'}`}
              >
                <div className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-colors ${selectedSpecies.id === s.id ? 'border-primary shadow-[0_0_15px_#0da6f244]' : 'border-white/10'}`}>
                  <img src={s.image} className="w-full h-full object-cover" alt={s.name} />
                </div>
                <p className={`mt-2 text-center text-[10px] font-bold uppercase tracking-wider ${selectedSpecies.id === s.id ? 'text-primary' : 'text-white'}`}>{s.name}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="glass p-6 rounded-3xl border-white/5 mb-10">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="material-icons-round text-primary text-lg">info</span> About this species
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">{selectedSpecies.description}</p>
        </section>
      </main>

      <div className="fixed bottom-24 left-0 right-0 px-6 flex justify-center pointer-events-none z-40">
        <button onClick={() => onNavigate('BOOKING')} className="w-full max-w-sm h-14 bg-primary text-white rounded-2xl font-bold text-sm shadow-[0_12px_30px_rgba(13,166,242,0.4)] flex items-center justify-center gap-3 active:scale-95 transition-transform pointer-events-auto">
          <span className="material-icons-round">scuba_diving</span>
          Book Expedition
        </button>
      </div>

      <NavBar currentScreen="ENCYCLOPEDIA" onNavigate={onNavigate} />
      
      <style>{`
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out; }
      `}</style>
    </div>
  );
};

export default Encyclopedia;
