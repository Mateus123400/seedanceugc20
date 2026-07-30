import React from 'react';
import { Bot, UserX, CodeXml, TimerOff } from 'lucide-react';
import { PAIN_POINTS } from '../data';

export const PainSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot size={32} className="text-[#ffb4ab]" />;
      case 'UserX':
        return <UserX size={32} className="text-[#c6c6cd]" />;
      case 'CodeXml':
        return <CodeXml size={32} className="text-[#c6c6cd]" />;
      case 'TimerOff':
        return <TimerOff size={32} className="text-[#c6c6cd]" />;
      default:
        return <Bot size={32} className="text-[#ffb4ab]" />;
    }
  };

  return (
    <section className="py-20 px-4 md:px-16 bg-[#0A0C12] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-4xl text-white font-bold mb-4">
            Cansado de criar vídeos com <span className="text-[#ffb4ab] text-glow-error">"cara de IA"</span>?
          </h2>
          <p className="font-body text-base md:text-lg text-[#b9cbb9] leading-relaxed">
            Você tenta automatizar, mas o resultado final denuncia a inteligência artificial a quilômetros de distância, destruindo a confiança da sua audiência.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIN_POINTS.map((point, index) => (
            <div
              key={point.id}
              className={`glass-panel p-6 rounded flex flex-col gap-3 transition-all duration-300 hover:translate-y-[-4px] ${
                index === 0
                  ? 'border-t-2 border-t-[#ffb4ab]/80 hover:border-t-[#ffb4ab]'
                  : 'border-t-2 border-t-white/20 hover:border-t-[#44f5bd]/60'
              }`}
            >
              <div className="p-2 w-fit rounded bg-black/40 border border-white/5">
                {getIcon(point.iconName)}
              </div>
              <h3 className="font-body text-lg font-bold text-white">{point.title}</h3>
              <p className="font-body text-sm text-[#b9cbb9] leading-normal">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
