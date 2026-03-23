import React, { useState } from 'react';
import Presentation from './Presentation';
import Dashboard from './Dashboard';
import { BarChart3, Presentation as PresentationIcon } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'presentation' | 'dashboard'>('presentation');

  return (
    <div className="w-screen h-screen flex flex-col bg-[#050505] overflow-hidden">
      {/* Global Navigation */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] flex p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
        <button 
          onClick={() => setView('presentation')}
          className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${
            view === 'presentation' 
            ? 'bg-white text-black shadow-lg shadow-white/10' 
            : 'text-white/40 hover:text-white hover:bg-white/5'
          }`}
        >
          <PresentationIcon size={16} />
          <span>발표 모드</span>
        </button>
        <button 
          onClick={() => setView('dashboard')}
          className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${
            view === 'dashboard' 
            ? 'bg-white text-black shadow-lg shadow-white/10' 
            : 'text-white/40 hover:text-white hover:bg-white/5'
          }`}
        >
          <BarChart3 size={16} />
          <span>대시보드 모드</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {view === 'presentation' ? <Presentation /> : <Dashboard />}
      </div>
    </div>
  );
}
