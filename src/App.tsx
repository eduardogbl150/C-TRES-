/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { PortalsSection } from './components/PortalsSection';
import { TruthSection } from './components/TruthSection';
import { ClientsSection } from './components/ClientsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ClosingSection } from './components/ClosingSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { ContactOverlay } from './components/ContactOverlay';

export default function App() {
  const [selectedPortal, setSelectedPortal] = useState<string | null>(null);
  const [contactOverlayOpen, setContactOverlayOpen] = useState(false);

  const handleStartClick = () => {
    setSelectedPortal(null);
    setContactOverlayOpen(true);
  };

  const handleOpenContact = () => {
    setContactOverlayOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 selection:bg-neutral-200 selection:text-neutral-900">
      {/* Scroll-activated discreet navigation bar */}
      <Navbar onStartClick={handleStartClick} />

      <main className="w-full">
        {/* 1. Abertura */}
        <HeroSection />

        {/* 2. Manifesto */}
        <ManifestoSection />

        {/* 3. Três Portais */}
        <PortalsSection />

        {/* 4. A verdade por trás da escuridão */}
        <TruthSection />

        {/* 4.5. Empresas atendidas */}
        <ClientsSection />

        {/* 5. Como funciona */}
        <HowItWorksSection />

        {/* 6. Fechamento */}
        <ClosingSection
          selectedPortal={selectedPortal}
          onOpenContact={handleOpenContact}
        />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão flutuante de WhatsApp fixo */}
      <FloatingWhatsAppButton />

      {/* Overlay de Pré-Qualificação Interativo */}
      <ContactOverlay
        isOpen={contactOverlayOpen}
        onClose={() => setContactOverlayOpen(false)}
        initialPortal={selectedPortal}
      />
    </div>
  );
}

