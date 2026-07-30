import React from 'react';
import { ProofItem } from '../types';

interface ProofSectionProps {
  onSelectProof: (proof: ProofItem) => void;
}

const PROOF_IMAGES = [
  '/images/mulherfoto1.png',
  '/images/mulherfoto2.png',
  '/images/mulherfoto3.png',
  '/images/mulherfoto4.png',
  '/images/mulherfoto5.png',
  '/images/mulherfoto6.png'
];

export const ProofSection: React.FC<ProofSectionProps> = () => {
  return (
    <section className="py-20 px-4 md:px-16 bg-[#0A0C12] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs text-[#44f5bd] uppercase tracking-widest terminal-underscore mb-2 block">
            PROVA
          </span>
          <h2 className="font-display text-2xl md:text-4xl text-white font-bold mb-4">
            Os resultados que esse processo gera na prática.
          </h2>
          <p className="font-body text-base md:text-lg text-[#b9cbb9] leading-relaxed">
            Milhões de visualizações geradas de forma 100% orgânica. Estes são os números de canais operados exclusivamente com nosso framework de inteligência artificial.
          </p>
        </div>

        {/* Aggregate Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-panel rounded-xl border border-[#44f5bd]/20 bg-gradient-to-r from-[#0b0f0f] via-[#101414] to-[#0b0f0f]">
          <div className="flex flex-col items-center text-center p-2">
            <span className="font-display text-2xl md:text-3xl font-bold text-[#44f5bd] text-glow">+40M</span>
            <span className="font-mono text-xs text-gray-400 uppercase mt-1">Visualizações Totais</span>
          </div>
          <div className="flex flex-col items-center text-center p-2 border-l border-white/5">
            <span className="font-display text-2xl md:text-3xl font-bold text-[#60ff99] text-glow">84.2%</span>
            <span className="font-mono text-xs text-gray-400 uppercase mt-1">Taxa Média de Retenção</span>
          </div>
          <div className="flex flex-col items-center text-center p-2 border-l border-white/5">
            <span className="font-display text-2xl md:text-3xl font-bold text-[#44f5bd] text-glow">100%</span>
            <span className="font-mono text-xs text-gray-400 uppercase mt-1">Canais Sem Aparentar IA</span>
          </div>
          <div className="flex flex-col items-center text-center p-2 border-l border-white/5">
            <span className="font-display text-2xl md:text-3xl font-bold text-[#50fec5] text-glow">&lt; 15 min</span>
            <span className="font-mono text-xs text-gray-400 uppercase mt-1">Tempo de Produção / Vídeo</span>
          </div>
        </div>

        {/* Horizontal Marquee Scroll */}
        <div className="mt-8 overflow-hidden w-full relative h-[450px] md:h-[550px] flex items-center">
          {/* Gradient Edges to Fade Out the sides */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0C12] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0C12] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
            {/* Duplicating the array so it seamlessly loops */}
            {[...PROOF_IMAGES, ...PROOF_IMAGES].map((src, idx) => (
              <div 
                key={idx} 
                className="w-[260px] md:w-[320px] h-[450px] md:h-[550px] flex-shrink-0 bg-[#181c1c] rounded-2xl overflow-hidden relative border-2 border-[#44f5bd]/30 shadow-[0_0_15px_rgba(68,245,189,0.2)] transition-all duration-300 hover:border-[#44f5bd] hover:shadow-[0_0_30px_rgba(68,245,189,0.7)] group"
              >
                <img 
                  src={src} 
                  alt={`Resultado ${idx}`}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Footer */}
        <p className="font-mono text-xs text-center text-[#b9cbb9]/50 mt-2">
          * Os resultados podem variar. O sucesso depende da aplicação consistente do método.
        </p>
      </div>
    </section>
  );
};
