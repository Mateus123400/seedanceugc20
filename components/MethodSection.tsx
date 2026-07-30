import React, { useState } from 'react';
import { CheckCircle2, Lock, ArrowUpRight, X, Clock, BookOpen } from 'lucide-react';
import { COURSE_MODULES } from '../data';
import { CourseModule } from '../types';

interface MethodSectionProps {
  onOpenCheckout: () => void;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ onOpenCheckout }) => {
  const [selectedModule, setSelectedModule] = useState<CourseModule | null>(null);

  return (
    <section className="py-20 px-4 md:px-16 bg-[#101414] relative border-t border-white/10 overflow-hidden">
      <div className="grid-bg" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs text-[#44f5bd] uppercase tracking-widest terminal-underscore mb-2 block">
            O QUE VOCÊ RECEBE
          </span>
          <h2 className="font-display text-2xl md:text-4xl text-white font-bold mb-4">
            O processo completo e validado, do zero ao vídeo publicado.
          </h2>
          <p className="font-mono text-xs text-[#b9cbb9]">
            [ Clique nos cards abaixo para visualizar o cronograma detalhado de cada módulo ]
          </p>
        </div>

        {/* 6 Method Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSE_MODULES.map((module) => (
            <div
              key={module.id}
              onClick={() => setSelectedModule(module)}
              className="bg-[#0c0e14]/90 border border-white/10 p-7 rounded-2xl flex flex-col justify-between gap-6 transition-all duration-300 hover:border-[#44f5bd]/50 hover:bg-[#10131d] cursor-pointer group shadow-xl relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-semibold text-[#00ff88] tracking-widest">
                    {module.number}
                  </span>
                  <span className="text-xs font-mono text-gray-500 flex items-center gap-1 group-hover:text-[#00ff88] transition-colors">
                    Ver detalhes <ArrowUpRight size={14} />
                  </span>
                </div>
                <h3 className="font-body text-lg md:text-xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors leading-snug">
                  {module.title}
                </h3>
                <p className="font-body text-sm text-[#9ca3af] leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Community Exclusiva Box */}
        <div className="glass-panel p-6 md:p-10 rounded border-l-4 border-l-[#44f5bd] mt-6 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden bg-gradient-to-br from-[#101414] to-[#272b2a]">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#44f5bd]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex-1 z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded bg-[#44f5bd]/20 border border-[#44f5bd]/40 text-[#44f5bd] font-mono text-xs uppercase">
                COMUNIDADE VIP
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl text-white font-bold mb-3">
              Comunidade Exclusiva
            </h3>
            <p className="font-body text-base text-[#b9cbb9] mb-6">
              Não é só um curso, é um ecossistema de criadores que estão revolucionando o mercado.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 text-white text-sm">
                <CheckCircle2 size={18} className="text-[#44f5bd] shrink-0" />
                <span>Treinamento completo do zero ao vídeo publicado</span>
              </li>
              <li className="flex items-center gap-2 text-white text-sm">
                <CheckCircle2 size={18} className="text-[#44f5bd] shrink-0" />
                <span>Processo validado de direção, física e câmera</span>
              </li>
              <li className="flex items-center gap-2 text-white text-sm">
                <CheckCircle2 size={18} className="text-[#44f5bd] shrink-0" />
                <span>Método de espionagem e remodelagem de criativos</span>
              </li>
              <li className="flex items-center gap-2 text-white text-sm">
                <CheckCircle2 size={18} className="text-[#44f5bd] shrink-0" />
                <span>Caminhos de acesso gratuito - redução real de custo por vídeo</span>
              </li>
              <li className="flex items-center gap-2 text-white text-sm sm:col-span-2">
                <CheckCircle2 size={18} className="text-[#44f5bd] shrink-0" />
                <span>Comunidade ativa inclusa - sem mensalidade extra</span>
              </li>
            </ul>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto z-10">
            <button
              onClick={onOpenCheckout}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#44f5bd] text-[#05060A] font-mono text-base uppercase tracking-wider font-bold rounded neon-glow hover:bg-[#50fec5] transition-colors gap-2 w-full md:w-auto shadow-lg"
            >
              <span>Garantir Minha Vaga</span>
              <Lock size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Module Topic Details Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl glass-panel rounded-xl border border-[#44f5bd]/40 overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col gap-6 bg-[#0b0f0f]">
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2 text-[#44f5bd] font-mono text-sm font-bold mb-1">
                  <span>MÓDULO {selectedModule.number}</span>
                  <span>•</span>
                  <span>{selectedModule.duration}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {selectedModule.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedModule(null)}
                className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <p className="font-body text-sm text-[#b9cbb9]">
              {selectedModule.description}
            </p>

            <div>
              <h4 className="font-mono text-xs text-[#44f5bd] uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen size={14} /> Conteúdo das Aulas:
              </h4>
              <ul className="flex flex-col gap-2.5">
                {selectedModule.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#44f5bd] mt-2 shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => setSelectedModule(null)}
                className="px-4 py-2 rounded text-xs font-mono text-gray-400 hover:text-white"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  setSelectedModule(null);
                  onOpenCheckout();
                }}
                className="px-6 py-2.5 bg-[#44f5bd] text-[#05060A] font-mono font-bold text-xs uppercase rounded hover:bg-[#50fec5] transition-all"
              >
                Garantir Acesso ao Módulo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
