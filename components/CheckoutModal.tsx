import React, { useState, useEffect } from 'react';
import { X, QrCode, CreditCard, ShieldCheck, CheckCircle2, Copy, Sparkles, Lock, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [copiedPix, setCopiedPix] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(899); // 14:59

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const pixCode = "00020126580014br.gov.bcb.pix0136a6111111-2222-3333-4444-5555555555555204000053039865406127.005802BR5920SEEDANCE PLATAFORMA6009SAO PAULO62070503***6304E8A9";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-panel rounded-xl border border-[#44f5bd]/50 overflow-hidden shadow-2xl bg-[#0b0f0f] flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#05060A]">
          <div className="flex items-center gap-2">
            <Lock size={18} className="text-[#44f5bd]" />
            <span className="font-mono text-xs md:text-sm text-[#44f5bd] font-bold uppercase tracking-wider">
              CHECKOUT SEGURO • SEEDANCE 2.0
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded border border-yellow-400/30 flex items-center gap-1">
              <span>Oferta expira em:</span> <strong className="font-bold">{formatTimer(timeLeft)}</strong>
            </span>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Order Summary Header */}
              <div className="p-4 rounded-lg bg-[#101414] border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-lg font-bold text-white">Seedance 2.0 - Acesso Vitalício</h4>
                  <p className="font-mono text-xs text-gray-400">Inclui todos os 6 módulos + Comunidade VIP</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-gray-400 line-through">R$ 997,00</span>
                  <p className="font-display text-2xl font-bold text-[#44f5bd]">R$ 127,00</p>
                </div>
              </div>

              {/* Personal Data Fields */}
              <div className="flex flex-col gap-3">
                <label className="font-mono text-xs text-[#b9cbb9] uppercase">Seus Dados de Acesso:</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Seu Nome Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 bg-[#101414] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#44f5bd]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Seu E-mail Principal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 bg-[#101414] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#44f5bd]"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="flex flex-col gap-3">
                <label className="font-mono text-xs text-[#b9cbb9] uppercase">Método de Pagamento:</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded border text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === 'pix'
                        ? 'bg-[#44f5bd]/20 border-[#44f5bd] text-[#44f5bd] shadow-[0_0_15px_rgba(68,245,189,0.2)]'
                        : 'bg-[#101414] border-white/10 text-gray-400'
                    }`}
                  >
                    <QrCode size={16} />
                    <span>PIX (Acesso Imediato)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded border text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-[#44f5bd]/20 border-[#44f5bd] text-[#44f5bd] shadow-[0_0_15px_rgba(68,245,189,0.2)]'
                        : 'bg-[#101414] border-white/10 text-gray-400'
                    }`}
                  >
                    <CreditCard size={16} />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Payment Body */}
              {paymentMethod === 'pix' ? (
                <div className="p-5 rounded-lg bg-[#05060A] border border-[#44f5bd]/30 flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-white rounded-lg">
                    {/* QR Code SVG Simulation */}
                    <svg className="w-36 h-36" viewBox="0 0 100 100">
                      <path fill="#000" d="M0 0h30v30H0zm40 0h20v10H40zm30 0h30v30H70zm-60 10h10v10H10zm60 0h10v10H70zm-70 30h10v20H0zm20 0h20v10H20zm30 0h10v10H50zm20 0h30v10H70zm-60 20h20v20H10zm30 0h10v10H40zm20 0h20v30H60zm-60 10h10v10H0zm20 0h10v10H20zm70 0h10v10H90zm-90 20h30v30H0zm40 0h10v10H40zm30 0h20v20H70zm-60 10h10v10H10zm70 0h10v10H80z" />
                    </svg>
                  </div>

                  <div className="w-full">
                    <p className="font-mono text-xs text-gray-300 mb-2">Chave Pix Copia e Cola:</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        readOnly
                        value={pixCode}
                        className="w-full p-2 bg-[#101414] border border-white/10 rounded text-xs text-gray-400 font-mono"
                      />
                      <button
                        type="button"
                        onClick={handleCopyPix}
                        className="px-4 py-2 bg-[#44f5bd] text-[#05060A] font-mono text-xs font-bold rounded hover:bg-[#50fec5] transition-all flex items-center gap-1 shrink-0"
                      >
                        {copiedPix ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                        <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Número do Cartão"
                    className="p-3 bg-[#101414] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#44f5bd]"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="MM/AA"
                      className="p-3 bg-[#101414] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#44f5bd]"
                    />
                    <input
                      type="text"
                      required
                      placeholder="CVV"
                      className="p-3 bg-[#101414] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#44f5bd]"
                    />
                  </div>
                  <select className="p-3 bg-[#101414] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#44f5bd]">
                    <option>1x de R$ 127,00 (À vista)</option>
                    <option>2x de R$ 66,50</option>
                    <option>6x de R$ 23,20</option>
                    <option>12x de R$ 12,70</option>
                  </select>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-[#44f5bd] text-[#05060A] font-mono text-base uppercase tracking-wider font-bold rounded neon-glow hover:bg-[#50fec5] transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span>Processando Acesso...</span>
                ) : (
                  <>
                    <span>CONFIRMAR E GERAR ACESSO VITALÍCIO</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-400 text-center">
                <ShieldCheck size={14} className="text-[#44f5bd]" />
                <span>Garantia incondicional de 7 dias • Criptografia 256-bit SSL</span>
              </div>
            </form>
          ) : (
            <div className="p-8 text-center flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#44f5bd]/20 border border-[#44f5bd] flex items-center justify-center text-[#44f5bd] neon-glow">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                  Inscrição Confirmada no Seedance 2.0!
                </h3>
                <p className="font-body text-sm text-[#b9cbb9] max-w-md mx-auto">
                  Parabéns! Enviamos os dados de acesso e o link da comunidade VIP para o e-mail informado.
                </p>
              </div>

              <div className="w-full p-4 rounded-lg bg-[#101414] border border-[#44f5bd]/30 text-left font-mono text-xs flex flex-col gap-2">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Status do Pedido:</span>
                  <span className="text-[#44f5bd] font-bold">APROVADO</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Plano:</span>
                  <span className="text-white">Acesso Vitalício + Atualizações</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Comunidade VIP Discord/Telegram:</span>
                  <span className="text-[#00ff88]">Liberado</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#44f5bd] text-[#05060A] font-mono text-sm uppercase font-bold rounded hover:bg-[#50fec5] transition-all"
              >
                Acessar Área de Membros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
