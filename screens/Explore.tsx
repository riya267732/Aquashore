
import React from 'react';
import StatusBar from '../components/StatusBar';
import NavBar from '../components/NavBar';
import { Screen } from '../types';

interface ExploreProps {
  onNavigate: (screen: Screen) => void;
}

const Explore: React.FC<ExploreProps> = ({ onNavigate }) => {
  const destinations = [
    { name: 'Raja Ampat, Indonesia', rating: '4.9', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-qDjgedhrSDFFnPqjylDnz3RV9Id2JJzIvQT11wRskckq131bmgARG0xBo2OzS8bOvDzILF3nG4XvyeuwZYbJJz3kd-MpCbout3jBBq2V6GZOVHlZYsAGha5Oiu4rBJOJN399d89v-WusaapiA0LcXZ761oEx-HaPZC8av8p4YaXM8wABSUXHtDq82YP-C0AOnxaZ2dhbKYlUacSZQp_uEqGzhGHd0Ji7yl1uaevhzH65KGxxKQEnCEITLHLq2ccbFp5kGMtu5DJg' },
    { name: 'Great Barrier Reef', rating: '4.8', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl8FRWmmVezrnIapVLt7grcAlafe_b1kBOfsxpPBriBdDOFgvEw9KYs7UlEEyIUnG3xmp2zdkpeTUDsSb6JbfmXCaUELGLqilk4qgELWIHZ5_9QHE_tGfXK0PaV1dB_Bcmw0liOF68FIeTzT5aZPPZajaoAnhqJHt-ZQcIwldPAN2l6KebZO_-qtFoEedn92wsDUWAT49OT4Wj8-XhYWm7QjSJPoU7ahb02755ZNfzAC63mm6mSY3ymle2iD7s8zrDIKDDFr3cb42h' },
    { name: 'Blue Hole, Belize', rating: '5.0', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHkbWMh0WmRtXKKsj9Deg2IaAwOy2ZarcAbkDjc0BaYCVP7dyWiCZlcsCos4cKn2S7Isc8lEw8FHxrF9PGFHPCDPXwU7tvRF_HaIkThg_R1lnaU1UNU_pcHOUA0KXCK0PcqC-NKVpYIgHMzQZ-9RH7WJjbUuFpvtbxz_h4klEA-0BCHlFESbr3G8WbTjSVg9hjgAPr85gXBd_Qafmz3qWytAH9KTUYzJkoBJRZ_mHNgSfv2JW7zw5Vcq748qzOpOmLAYgWKKCgWjLD' },
  ];

  return (
    <div className="relative h-full flex flex-col bg-background-dark overflow-hidden">
      <StatusBar />
      
      <div className="absolute inset-0 z-0 h-[60%]">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjDZPSXp9sxie5p_ODCuP7dF69edT7YTW4mWATnvBUg0GjO7BHgH89Ruu0A94NYskmcuIAvjh2MRr_grxK9jnRJMz3QXykNeXu5haQxV_HUTc1WsGMMFubhiv5XUgst90RyEnOWFb6ivgWHwgew8aiG_SHk598nqLZbAW6ZOOlGD19iNuEqzvZKLY19wT2AoyEmY6ZNfwUnAUYPnVvBm8Vinp05wooMcHFlpphDnysgp6iUcttsMFiOmx56jqz0kJXnDNRGKD736Zz"
          className="w-full h-full object-cover"
          alt="Coral reef"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-transparent to-background-dark"></div>
      </div>

      <header className="relative z-10 flex justify-between items-center px-6 pt-14 pb-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/30">
            <span className="material-icons-round text-primary">scuba_diving</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight uppercase">Aqua<span className="text-primary">shore</span></h1>
            <p className="text-[10px] text-slate-300 uppercase tracking-[0.2em] font-bold leading-none">Exploration Agency</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <span className="material-icons-round text-white text-xl">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
            <img src="https://picsum.photos/100/100?random=1" className="w-full h-full object-cover" alt="Profile" />
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 px-6 flex flex-col pb-32 overflow-y-auto no-scrollbar">
        <div className="mt-8 mb-8">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold mb-3 inline-block border border-primary/30 uppercase tracking-wider">Now Live</span>
          <h2 className="text-4xl font-bold leading-tight mb-2">Deep Sea<br/>Expedition</h2>
          <p className="text-slate-300 text-sm max-w-[280px]">Join our expert divers in the Great Blue Hole for a once-in-a-lifetime journey.</p>
        </div>

        <div className="space-y-3 mb-10">
          <button onClick={() => onNavigate('FEED')} className="w-full h-14 bg-primary text-white rounded-full flex items-center px-6 space-x-4 shadow-lg shadow-primary/20 active:scale-95 transition-transform">
            <span className="material-icons-round">play_circle</span>
            <span className="font-bold text-sm tracking-wide">Watch Travel Videos</span>
          </button>
          <button onClick={() => onNavigate('BOOKING')} className="w-full h-14 glass text-white rounded-full flex items-center px-6 space-x-4 active:scale-95 transition-transform">
            <span className="material-icons-round text-primary">calendar_today</span>
            <span className="font-bold text-sm tracking-wide">Book a Dive</span>
          </button>
          <button onClick={() => onNavigate('ENCYCLOPEDIA')} className="w-full h-14 glass text-white rounded-full flex items-center px-6 space-x-4 active:scale-95 transition-transform">
            <span className="material-icons-round text-primary">menu_book</span>
            <span className="font-bold text-sm tracking-wide">Species Guide</span>
          </button>
        </div>

        <div>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-lg font-bold">Trending Destinations</h3>
            <button className="text-primary text-xs font-bold uppercase tracking-wider">See All</button>
          </div>
          <div className="flex overflow-x-auto space-x-4 no-scrollbar -mx-6 px-6 pb-4">
            {destinations.map((dest, i) => (
              <div key={i} className="flex-shrink-0 w-44 h-56 rounded-2xl overflow-hidden relative group active:scale-[0.98] transition-transform">
                <img src={dest.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={dest.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center space-x-1 mb-1">
                    <span className="material-icons-round text-[12px] text-yellow-400">star</span>
                    <span className="text-[10px] font-bold">{dest.rating}</span>
                  </div>
                  <p className="text-sm font-bold leading-tight">{dest.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <NavBar currentScreen="EXPLORE" onNavigate={onNavigate} />
    </div>
  );
};

export default Explore;
