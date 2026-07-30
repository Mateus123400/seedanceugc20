import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  icon = <ArrowRight size={20} />,
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
        relative overflow-hidden group
        px-7 py-3.5 rounded-xl
        bg-gradient-to-r from-[#44f5bd] via-[#50fec5] to-[#60ff99]
        text-[#05060A] font-mono font-black uppercase tracking-wider
        shadow-[0_0_25px_rgba(68,245,189,0.3)]
        hover:shadow-[0_0_40px_rgba(68,245,189,0.5)]
        hover:scale-[1.02] active:scale-[0.98]
        transition-all duration-300
        flex items-center justify-center gap-2.5
        border border-[#7effd4]/50
        ${className}
      `}
    >
      {/* Shiny Light Sweep Effect Overlay */}
      <span className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-lg">
        <span className="absolute top-0 left-[-100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/70 to-transparent transform -skew-x-25 group-hover:animate-shiny-sweep animate-shiny-loop" />
      </span>

      {/* Button Content */}
      <span className="relative z-10 font-mono tracking-wider">{children}</span>

      {/* Optional Icon */}
      {icon && <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
