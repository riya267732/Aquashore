
import React from 'react';
import StatusBar from '../components/StatusBar';
import NavBar from '../components/NavBar';
import { Screen } from '../types';

interface FeedProps {
  onNavigate: (screen: Screen) => void;
}

const Feed: React.FC<FeedProps> = ({ onNavigate }) => {
  const slides = [
    {
      id: 1,
      title: "Whale Shark Sanctuary",
      description: "Exploring the majestic giants of Komodo National Park. Visibility 30m+ today!",
      location: "Bajo, Indonesia",
      depth: "22m Depth",
      likes: "24.5k",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo-V83sQX6kIVjOQj3hY2c2rQdU1N1FSaXfPE1TR01wQcjnZUX5vyi1UQti6lxim8ghgsWO6lQT7SB6M55mAFaeqmlsfwKwsdmB4D01AJhkZo1yvJu0FoI5PXqgPaGSgxCjiNrpk0_yfEne6nWA0kCs0v-llKbT7khtfVaXkhFHRSYMlX_G2VaRwQz4KBSkLHZCEc2qX7JTs6DD79kOI27KjU4aM7b92ZYhT7xr9xxGzdktzKVWyNZJ-yguh921HPRxfQZTvsNRqU1"
    },
    {
      id: 2,
      title: "Neon Reef Gardens",
      description: "Night diving at the Ribbon Reefs. Witness the bioluminescent magic of the spawning season.",
      location: "Queensland, AU",
      depth: "28°C Water",
      likes: "12.8k",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu1OUJ67cEsqfNLKYN9zfCLZWth6wJZIbj9rxkGNcigXP42_qms85tq4FkzAPicLHwK5v5ILfnQCsuIpryT2sKa6qfHuqmsmBw3WcX25CKYcIaEtwLtaXMgC-sasd78-_M8ZfnxzNLdtobnW7KJlIwHsgJVjyRs714ZGQCe71pI9i940QcMWZkP1tET_5gIqoQwNLjdwIutksRWkdGRhJ6q1JYmQAJulFLVzI9vUgXujxqk9ZnqFwq5JKdn3aru4i93FDc1j44ypZX"
    }
  ];

  return (
    <div className="relative h-full flex flex-col bg-background-dark">
      <StatusBar />
      
      {/* Top Navigation Tabs */}
      <div className="absolute top-12 left-0 w-full z-50 flex justify-center gap-6 py-4">
        <button className="text-white/60 font-bold text-sm">Explore</button>
        <button className="text-white font-bold text-sm border-b-2 border-primary pb-1">Travel Feed</button>
        <button className="text-white/60 font-bold text-sm">Learn</button>
      </div>

      <div className="video-container no-scrollbar flex-1">
        {slides.map((slide) => (
          <section key={slide.id} className="video-section">
            <div className="absolute inset-0">
              <img src={slide.img} className="w-full h-full object-cover" alt={slide.title} />
              <div className="absolute inset-0 gradient-overlay"></div>
            </div>

            <div className="absolute right-4 bottom-32 flex flex-col items-center gap-6 z-40">
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group active:scale-95 transition-transform">
                  <span className="material-icons-round text-white group-hover:text-red-500">favorite</span>
                </div>
                <span className="text-[10px] font-bold">{slide.likes}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary active:scale-95 transition-transform">
                  <span className="material-icons-round">bookmark</span>
                </div>
                <span className="text-[10px] font-bold">Save</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center active:scale-95 transition-transform">
                  <span className="material-icons-round">share</span>
                </div>
                <span className="text-[10px] font-bold">Share</span>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-primary p-0.5 overflow-hidden glass">
                <img src={`https://picsum.photos/50/50?random=${slide.id}`} className="w-full h-full object-cover rounded-full" alt="Profile" />
              </div>
            </div>

            <div className="absolute bottom-12 left-4 right-20 z-40 space-y-4">
              <div className="flex flex-wrap gap-2">
                <div className="glass px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="material-icons-round text-primary text-sm">location_on</span>
                  <span className="text-[10px] font-bold">{slide.location}</span>
                </div>
                <div className="glass px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="material-icons-round text-primary text-sm">water_drop</span>
                  <span className="text-[10px] font-bold">{slide.depth}</span>
                </div>
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-bold leading-tight">{slide.title}</h2>
                <p className="text-sm text-white/80 line-clamp-2">{slide.description}</p>
              </div>
              <button onClick={() => onNavigate('BOOKING')} className="bg-primary hover:bg-primary/90 text-white w-full py-3.5 rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 transition-all active:scale-[0.98]">
                Book This Dive
              </button>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
              <div className="h-full bg-primary" style={{ width: slide.id === 1 ? '66%' : '33%' }}></div>
            </div>
          </section>
        ))}
      </div>

      <NavBar currentScreen="FEED" onNavigate={onNavigate} />
    </div>
  );
};

export default Feed;
