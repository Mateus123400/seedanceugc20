import React, { useState } from 'react';
import { Play, ShieldCheck, Zap } from 'lucide-react';
import { ShinyButton } from './ShinyButton';

interface HeroProps {
  onOpenVideo: () => void;
  onOpenCheckout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo, onOpenCheckout }) => {
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlightPos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 md:px-16 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="grid-bg" />

      {/* Dynamic Radial Spotlight Background */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(68, 245, 189, 0.12) 0%, transparent 55%)`
        }}
      />

      <div className="max-w-5xl w-full mx-auto text-center z-10 flex flex-col items-center gap-8">
        {/* Terminal Access Tag */}
        <div className="inline-flex items-center gap-2 bg-[#44f5bd]/10 border border-[#44f5bd]/20 px-3 py-1 rounded text-xs font-mono text-[#44f5bd] uppercase tracking-widest neon-glow">
          <span className="w-2 h-2 rounded-full bg-[#44f5bd] animate-ping" />
          <span className="terminal-underscore">Acesso Imediato</span>
        </div>

        {/* Display Headline */}
        <h1 className="font-display text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight max-w-4xl leading-[1.15]">
          Domine a arte de criar vídeos realistas com IA sem{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44f5bd] to-[#60ff99] text-glow">
            "ter cara de IA"
          </span>{' '}
          usando SDC 2.0
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-lg md:text-xl text-[#b9cbb9] max-w-3xl mx-auto leading-relaxed">
          Aprenda o que eu aplico todos os dias para gerar conteúdo de IA que engaja e converte em vendas.
        </p>

        {/* Youtube Shorts Embedded */}
        <div className="w-full max-w-[300px] sm:max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden relative border-4 border-[#44f5bd]/30 neon-glow mt-4 shadow-2xl transition-all duration-300 hover:border-[#44f5bd]">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/Jdy2gQM7dv8?autoplay=1&mute=1&loop=1&playlist=Jdy2gQM7dv8" 
            title="YouTube Shorts" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3 w-full md:w-auto mt-2">
          <ShinyButton
            onClick={onOpenCheckout}
            className="w-full md:w-auto px-8 py-4 text-sm sm:text-base md:text-lg tracking-wider font-extrabold"
          >
            QUERO O MÉTODO COMPLETO
          </ShinyButton>

          <div className="flex items-center gap-4 text-xs font-mono text-[#b9cbb9]/70 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-[#44f5bd]" /> 7 dias de garantia
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Zap size={14} className="text-[#44f5bd]" /> Acesso imediato no e-mail
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
