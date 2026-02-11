
import React from 'react';
import { Screen } from '../types';

interface NavBarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  dark?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ currentScreen, onNavigate, dark = true }) => {
  const navItems = [
    { id: 'EXPLORE', icon: 'home', label: 'Home' },
    { id: 'FEED', icon: 'explore', label: 'Feed' },
    { id: 'AI_ASSISTANT', icon: 'auto_awesome', label: 'Guide' },
    { id: 'ENCYCLOPEDIA', icon: 'menu_book', label: 'Wiki' },
    { id: 'BOOKING', icon: 'calendar_today', label: 'Book' },
  ];

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 ${dark ? 'glass border-t-0' : 'bg-white/80 backdrop-blur-xl border-t border-slate-200'} px-6 pt-3 pb-8`}>
      <div className="flex justify-between items-center max-w-md mx-auto relative">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as Screen)}
            className={`flex flex-col items-center gap-1 transition-all relative ${
              currentScreen === item.id ? 'text-primary scale-110' : (dark ? 'text-white/40' : 'text-slate-400')
            }`}
          >
            <span className="material-icons-round text-2xl">{item.icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            {currentScreen === item.id && (
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_#0da6f2]"></span>
            )}
          </button>
        ))}
      </div>
      <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 ${dark ? 'bg-white/20' : 'bg-slate-300'} rounded-full`}></div>
    </div>
  );
};

export default NavBar;
