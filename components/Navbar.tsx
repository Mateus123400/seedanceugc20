import React from 'react';
import { Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#101414]/80 backdrop-blur-md border-b border-[#3b4b3d]/30 shadow-[0_0_20px_rgba(68,245,189,0.1)] flex justify-between items-center px-4 md:px-16 h-20">
      <a href="#" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded bg-[#44f5bd]/10 border border-[#44f5bd]/30 flex items-center justify-center text-[#44f5bd] group-hover:shadow-[0_0_15px_rgba(68,245,189,0.4)] transition-all">
          <Terminal size={18} className="text-[#44f5bd]" />
        </div>
      </a>
    </nav>
  );
};
