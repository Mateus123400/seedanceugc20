import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 px-4 md:px-16 bg-[#0b0f0f] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="text-center">
          <span className="font-mono text-xs text-[#44f5bd] uppercase tracking-widest terminal-underscore mb-2 block">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="font-display text-2xl md:text-4xl text-white font-bold mb-3">
            Perguntas & Respostas
          </h2>
          <p className="font-body text-sm md:text-base text-[#b9cbb9]">
            Tudo o que você precisa saber antes de se juntar ao Seedance 2.0
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-panel rounded-lg border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#44f5bd]/50 bg-[#101414]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-body font-bold text-base md:text-lg text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#44f5bd] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 font-body text-sm text-[#b9cbb9] leading-relaxed border-t border-white/5 mt-1">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
