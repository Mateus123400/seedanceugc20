import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, Sparkles, CheckCircle2, X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenCheckout }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(84); // 01:24
  const [duration] = useState(300); // 05:00
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState<'demo' | 'chapters' | 'prompts'>('demo');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen && isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => (prev >= duration ? 0 : prev + 1));
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, isPlaying, duration]);

  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const percentage = (currentTime / duration) * 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl glass-panel rounded-xl border border-[#44f5bd]/40 overflow-hidden shadow-[0_0_50px_rgba(68,245,189,0.2)] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3b4b3d]/40 bg-[#0b0f0f]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#00ff88] animate-ping" />
            <span className="font-mono text-sm text-[#44f5bd] font-bold uppercase tracking-wider">
              DEMONSTRAÇÃO AO VIVO • SESSIONS 2.0
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video bg-[#05060A] overflow-hidden flex flex-col justify-between group">
          {/* Animated Background Canvas Simulation */}
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Holographic Neural Mesh Background */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#101414]/90 via-[#0a0c12]/95 to-[#0b0f0f]">
              <div className="w-20 h-20 rounded-full bg-[#44f5bd]/10 border border-[#44f5bd]/30 flex items-center justify-center mb-4 neon-glow animate-pulse">
                <Sparkles size={36} className="text-[#44f5bd]" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-white font-bold mb-2">
                Como automatizar vídeos virais com qualidade 4K em minutos
              </h3>
              <p className="font-mono text-xs md:text-sm text-[#b9cbb9] max-w-lg mb-6">
                [Audio HD & Video Output generated via Seedance AI Engine v2.4]
              </p>

              {/* Subtitle simulation overlay */}
              <div className="bg-[#0b0f0f]/90 border border-[#44f5bd]/30 px-6 py-3 rounded-lg text-sm md:text-base font-medium text-[#f1ffef] shadow-lg max-w-xl">
                {currentTime < 100 && '"... e é assim que você clona uma voz realista sem perder a entonação humana nos primeiros 3 segundos."'}
                {currentTime >= 100 && currentTime < 200 && '"... mantendo o mesmo personagem com consistência perfeita em todos os enquadramentos."' }
                {currentTime >= 200 && '"... pronto para publicar no TikTok, Reels e Shorts e hackear a retenção organica."' }
              </div>
            </div>
          </div>

          {/* Video Overlay Controls */}
          <div className="relative z-20 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-2">
            {/* Scrubber Progress Bar */}
            <div
              className="w-full h-2 bg-white/20 rounded-full cursor-pointer relative overflow-hidden group/bar"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setCurrentTime(Math.floor(pos * duration));
              }}
            >
              <div
                className="h-full bg-[#44f5bd] transition-all duration-100"
                style={{ width: `${percentage}%` }}
              />
            </div>

            {/* Control Buttons Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-gray-300 pt-1">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-[#44f5bd] text-black hover:scale-105 transition-transform font-bold"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#44f5bd] transition-colors"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <span className="text-[#44f5bd] font-bold">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-[#44f5bd]/20 border border-[#44f5bd]/40 text-[#44f5bd] text-[10px]">
                  4K 60FPS
                </span>
                <button
                  onClick={() => setCurrentTime(0)}
                  className="hover:text-[#44f5bd] transition-colors"
                  title="Reiniciar"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Tabs & CTA */}
        <div className="p-6 bg-[#101414] border-t border-[#3b4b3d]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono">
            <CheckCircle2 size={16} className="text-[#44f5bd]" />
            <span className="text-gray-300">Método 100% gravado + atualizações semanais da comunidade</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full md:w-auto px-6 py-3 bg-[#44f5bd] text-[#05060A] font-mono font-bold uppercase rounded hover:bg-[#50fec5] transition-all flex items-center justify-center gap-2 neon-glow"
          >
            <span>QUERO ACESSO COMPLETO POR R$ 127</span>
          </button>
        </div>
      </div>
    </div>
  );
};
