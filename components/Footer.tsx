import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 bg-[#101414] border-t border-white/10 flex flex-col items-center px-4 md:px-16 gap-6 mt-auto">
      <div className="font-display text-sm md:text-base text-white font-bold tracking-widest text-center">
        © 2024 SEEDANCE. NEON TECHNICALITY REDEFINED.
      </div>

      <div className="flex gap-6 flex-wrap justify-center">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="font-mono text-xs uppercase text-[#b9cbb9] hover:text-[#44f5bd] transition-colors"
        >
          Termos de Uso
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="font-mono text-xs uppercase text-[#b9cbb9] hover:text-[#44f5bd] transition-colors"
        >
          Política de Privacidade
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="font-mono text-xs uppercase text-[#b9cbb9] hover:text-[#44f5bd] transition-colors"
        >
          Suporte
        </a>
      </div>
    </footer>
  );
};
