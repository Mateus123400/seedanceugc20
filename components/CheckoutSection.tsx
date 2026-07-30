import React from 'react';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import { ShinyButton } from './ShinyButton';

interface CheckoutSectionProps {
  onOpenCheckout: () => void;
}

export const CheckoutSection: React.FC<CheckoutSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="checkout" className="py-24 px-4 md:px-16 bg-[#05060A] relative border-t border-white/10 overflow-hidden">
      {/* Radial Green Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-[#44f5bd]/15 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 relative z-10">
        {/* Title */}
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-center uppercase tracking-tight text-white font-bold leading-tight">
          O preço de <span className="text-[#ffb4ab] text-glow-error">continuar estagnado</span> é muito maior que R$ 127.
        </h2>

        {/* Offer Card */}
        <div className="w-full glass-panel p-6 sm:p-10 rounded-xl flex flex-col md:flex-row gap-8 md:gap-12 items-center border border-[#44f5bd]/60 shadow-[0_0_50px_rgba(68,245,189,0.15)] bg-[#101414]/90 backdrop-blur-xl">
          {/* Features List Column */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded bg-[#44f5bd]/20 border border-[#44f5bd]/40 text-[#44f5bd] font-mono text-xs uppercase font-bold">
                OFERTA ESPECIAL
              </span>
              <span className="text-xs font-mono text-[#00ff88]">Desconto de 87% Ativo</span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl text-[#44f5bd] font-bold mb-6 uppercase tracking-wider">
              Acesso Completo
            </h3>

            <ul className="flex flex-col gap-4 mb-2">
              <li className="flex items-center gap-3 text-white">
                <div className="p-1 rounded bg-[#44f5bd]/20 text-[#44f5bd]">
                  <Check size={16} />
                </div>
                <span className="font-body text-base font-medium">Treinamento completo do zero ao vídeo publicado</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="p-1 rounded bg-[#44f5bd]/20 text-[#44f5bd]">
                  <Check size={16} />
                </div>
                <span className="font-body text-base font-medium">Processo validado de direção, física e câmera</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="p-1 rounded bg-[#44f5bd]/20 text-[#44f5bd]">
                  <Check size={16} />
                </div>
                <span className="font-body text-base font-medium">Método de espionagem e remodelagem de criativos</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="p-1 rounded bg-[#44f5bd]/20 text-[#44f5bd]">
                  <Check size={16} />
                </div>
                <span className="font-body text-base font-medium">Caminhos de acesso gratuito - redução real de custo por vídeo</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="p-1 rounded bg-[#44f5bd]/20 text-[#44f5bd]">
                  <Check size={16} />
                </div>
                <span className="font-body text-base font-medium">Comunidade ativa inclusa - sem mensalidade extra</span>
              </li>
            </ul>
          </div>

          {/* Pricing Box Column */}
          <div className="w-full md:w-[360px] flex flex-col items-center p-6 sm:p-8 bg-[#0b0f0f] border border-white/10 rounded-lg text-center shadow-xl">
            <span className="font-mono text-xs text-[#b9cbb9] line-through mb-1">
              De R$ 997,00 por apenas
            </span>

            <div className="font-display text-5xl md:text-6xl font-bold text-white leading-none mb-4 flex items-start justify-center">
              <span className="text-xl mt-2 mr-1 text-[#44f5bd]">R$</span>
              <span>127</span>
            </div>

            <ShinyButton
              onClick={onOpenCheckout}
              className="w-full py-3.5 text-sm uppercase tracking-wider"
            >
              COMPRAR AGORA
            </ShinyButton>

            <span className="font-mono text-xs text-[#b9cbb9]/70 mt-3 flex items-center justify-center gap-1">
              <Zap size={12} className="text-[#44f5bd]" /> Pagamento único. Acesso vitalício.
            </span>
          </div>
        </div>

        {/* Guarantee Badge */}
        <div className="flex items-center gap-2.5 text-[#b9cbb9] bg-[#101414] px-6 py-3 rounded-full border border-white/10 shadow-md">
          <ShieldCheck size={22} className="text-[#44f5bd]" />
          <span className="font-body text-sm font-bold text-white">
            Risco Zero: 7 dias de garantia incondicional.
          </span>
        </div>
      </div>
    </section>
  );
};
