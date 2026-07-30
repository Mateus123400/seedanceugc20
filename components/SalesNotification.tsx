import React, { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { RECENT_SALES } from '../data';

export const SalesNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show initial notification after 4 seconds
    const showTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Cycle through sales every 14 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_SALES.length);
        setIsVisible(true);
      }, 1000);
    }, 14000);

    return () => {
      clearTimeout(showTimeout);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  const sale = RECENT_SALES[currentIndex];

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm glass-panel p-3.5 rounded-lg border border-[#44f5bd]/40 shadow-[0_0_25px_rgba(68,245,189,0.2)] bg-[#0b0f0f]/95 backdrop-blur-md animate-slideUp flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 ${sale.avatarBg} border border-[#44f5bd]/30`}>
          <ShoppingBag size={16} />
        </div>
        <div>
          <p className="font-body text-xs font-bold text-white flex items-center gap-1.5">
            <span>{sale.name}</span>
            <span className="text-[10px] font-mono text-gray-400">({sale.city})</span>
          </p>
          <p className="font-mono text-[11px] text-[#44f5bd] flex items-center gap-1">
            <span>Adquiriu Seedance 2.0</span>
            <span>•</span>
            <span className="text-gray-400">{sale.timeAgo}</span>
          </p>
        </div>
      </div>

      <button
        onClick={() => setIsDismissed(true)}
        className="p-1 rounded text-gray-400 hover:text-white transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
};
