import React from 'react';
import { X, CheckCircle, ExternalLink, BarChart, ShieldAlert } from 'lucide-react';
import { ProofItem } from '../types';

interface ProofLightboxProps {
  proof: ProofItem | null;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const ProofLightbox: React.FC<ProofLightboxProps> = ({ proof, onClose, onOpenCheckout }) => {
  if (!proof) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl glass-panel rounded-xl border border-[#44f5bd]/40 overflow-hidden shadow-2xl bg-[#0b0f0f] flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#05060A]">
          <div className="flex items-center gap-2">
            <BarChart size={18} className="text-[#44f5bd]" />
            <span className="font-mono text-xs md:text-sm text-[#44f5bd] font-bold uppercase tracking-wider">
              {proof.niche} • {proof.views}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6">
          <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black">
            <img
              src={proof.imageUrl}
              alt={proof.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
              {proof.title}
            </h3>
            <p className="font-body text-sm text-[#b9cbb9] leading-relaxed">
              {proof.description}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#181c1c] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
              <CheckCircle size={16} className="text-[#44f5bd]" />
              <span>Método 100% livre de bloqueios ou penalizações de algoritmo</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full md:w-auto px-6 py-2.5 bg-[#44f5bd] text-[#05060A] font-mono text-xs font-bold uppercase rounded hover:bg-[#50fec5] transition-all whitespace-nowrap"
            >
              Aplicar Esse Método Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
