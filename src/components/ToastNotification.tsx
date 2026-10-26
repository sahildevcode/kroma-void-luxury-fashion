import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles } from 'lucide-react';

export const ToastNotification: React.FC = () => {
  const { notification } = useStore();

  if (!notification) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="luxury-glass px-5 py-3.5 border border-white/20 shadow-2xl flex items-center space-x-3 text-xs font-mono text-white">
        <Sparkles className="w-4 h-4 text-metallic animate-pulse" />
        <span className="tracking-wider uppercase">{notification}</span>
      </div>
    </div>
  );
};
