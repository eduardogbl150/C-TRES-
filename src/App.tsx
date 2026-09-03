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

export default function App() {
  const [selectedPortal, setSelectedPortal] = useState<string | null>(null);

  const handleStartClick = () => {
    setSelectedPortal(null);
    const closingEl = document.getElementById('fechamento');
    if (closingEl) {
      closingEl.scrollIntoView({ behavior: 'smooth' });
    }
    const btn = document.getElementById('btn-comecar');
    if (btn) {
      btn.click();
    }
  };

  const handlePortalSelect = (portalName: string) => {
    setSelectedPortal(portalName);
    const closingEl = document.getElementById('fechamento');
    if (closingEl) {
      closingEl.scrollIntoView({ behavior: 'smooth' });
    }
    // Trigger modal with selected portal context
    setTimeout(() => {
      const btn = document.getElementById('btn-comecar');
      if (btn) {
        btn.click();
      }
    }, 400);
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
        <PortalsSection onPortalSelect={handlePortalSelect} />

        {/* 4. A verdade por trás da escuridão */}
        <TruthSection />

        {/* 4.5. Empresas atendidas */}
        <ClientsSection />

        {/* 5. Como funciona */}
        <HowItWorksSection />

        {/* 6. Fechamento */}
        <ClosingSection selectedPortal={selectedPortal} />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
