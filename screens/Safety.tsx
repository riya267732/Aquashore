
import React from 'react';
import StatusBar from '../components/StatusBar';
import NavBar from '../components/NavBar';
import { Screen } from '../types';

interface SafetyProps {
  onNavigate: (screen: Screen) => void;
}

const Safety: React.FC<SafetyProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-full flex flex-col bg-background-light dark:bg-background-dark text-slate-800 dark:text-white">
      <StatusBar dark={false} />
      
      <main className="flex-1 px-6 pt-16 pb-32 overflow-y-auto no-scrollbar">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <button onClick={() => onNavigate('EXPLORE')} className="p-1 -ml-2 text-primary">
              <span className="material-icons-round">chevron_left</span>
            </button>
            <span className="text-primary font-bold text-[10px] uppercase tracking-wider">Trip to Cozumel</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-6">Safety & Training</h1>
          
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-end mb-3">
              <div>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Your Progress</p>
                <h2 className="text-xl font-bold">Ready to Dive?</h2>
              </div>
              <span className="text-primary font-bold text-2xl">65%</span>
            </div>
            <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: '65%' }}></div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Complete 2 more items to unlock your digital dive permit.</p>
          </div>
        </header>

        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Required Forms</h3>
            <span className="text-[10px] font-bold px-2 py-1 bg-primary/10 text-primary rounded-full uppercase">3 Pending</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <span className="material-icons-round text-emerald-500">check_circle</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm">Liability Release</h4>
                <p className="text-[10px] text-slate-500">Signed on Oct 12, 2023</p>
              </div>
              <span className="material-icons-round text-slate-400">visibility</span>
            </div>
            
            <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 ring-2 ring-primary/20">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-icons-round text-primary">edit_note</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm">Medical Statement</h4>
                <p className="text-[10px] text-primary font-bold uppercase">Signature Required</p>
              </div>
              <button className="bg-primary text-white text-[10px] font-bold px-4 py-2 rounded-lg shadow-lg shadow-primary/20">SIGN</button>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-4">Training Videos</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="relative h-44 group cursor-pointer">
                <img src="https://picsum.photos/400/200?random=10" className="w-full h-full object-cover" alt="Equalization" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-xl">
                    <span className="material-icons-round text-white text-3xl ml-1">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">04:12</div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm">Equalization Techniques</h4>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wide">Proper ear pressure</p>
                </div>
                <div className="flex items-center text-emerald-500 text-[10px] font-bold uppercase">
                  <span className="material-icons-round text-sm mr-1">check_circle</span> WATCHED
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <NavBar currentScreen="SAFETY" onNavigate={onNavigate} dark={false} />
    </div>
  );
};

export default Safety;
