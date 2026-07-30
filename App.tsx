import React, { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MethodSection } from './components/MethodSection';
import { ProofSection } from './components/ProofSection';
import { CheckoutSection } from './components/CheckoutSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { ProofLightbox } from './components/ProofLightbox';
import { CheckoutModal } from './components/CheckoutModal';

import { ProofItem } from './types';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedProof, setSelectedProof] = useState<ProofItem | null>(null);

  const handleOpenCheckout = () => {
    window.location.href = 'https://pay.cakto.com.br/33y5mga_1004856';
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#05060A] text-[#e0e3e2] selection:bg-[#44f5bd] selection:text-[#101414] relative">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Navigation Header */}
      <Navbar
        onOpenCheckout={handleOpenCheckout}
      />

      {/* Main Content Layout */}
      <main className="flex-1 flex flex-col">
        {/* Section 1: HERO */}
        <Hero
          onOpenVideo={() => setIsVideoOpen(true)}
          onOpenCheckout={handleOpenCheckout}
        />

        {/* Section 2: O QUE VOCÊ RECEBE (The Method) */}
        <MethodSection onOpenCheckout={handleOpenCheckout} />

        {/* Section 4: PROVA (Proof) */}
        <ProofSection onSelectProof={(proof) => setSelectedProof(proof)} />

        {/* Section 5: CTA FINAL (Checkout & Offer) */}
        <CheckoutSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer */}
      <Footer />



      {/* Video Demo Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onOpenCheckout={handleOpenCheckout}
      />

      {/* Proof Lightbox Modal */}
      <ProofLightbox
        proof={selectedProof}
        onClose={() => setSelectedProof(null)}
        onOpenCheckout={handleOpenCheckout}
      />

    </div>
  );
}
