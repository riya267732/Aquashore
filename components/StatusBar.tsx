
import React from 'react';

const StatusBar: React.FC<{ dark?: boolean }> = ({ dark = true }) => (
  <div className="w-full flex justify-between px-8 py-4 items-center absolute top-0 left-0 z-[60] pointer-events-none">
    <span className={`text-sm font-semibold ${dark ? 'text-white' : 'text-slate-800'}`}>9:41</span>
    <div className="flex gap-2 items-center">
      <span className={`material-icons-round text-lg ${dark ? 'text-white' : 'text-slate-800'}`}>signal_cellular_alt</span>
      <span className={`material-icons-round text-lg ${dark ? 'text-white' : 'text-slate-800'}`}>wifi</span>
      <span className={`material-icons-round text-lg ${dark ? 'text-white' : 'text-slate-800'}`}>battery_full</span>
    </div>
  </div>
);

export default StatusBar;
