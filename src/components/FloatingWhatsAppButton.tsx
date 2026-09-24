import React from 'react';

const WHATSAPP_URL =
  'https://wa.me/5511915617506?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20uma%20experi%C3%AAncia%20C-Tr%C3%AAs';

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <aside
      aria-label="Atendimento rápido por WhatsApp"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40"
      style={{
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
        right: 'calc(1.5rem + env(safe-area-inset-right, 0px))',
      }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp sobre uma experiência C-Três"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#121212]/85 hover:bg-[#1a1a1a]/95 text-neutral-200 hover:text-white border border-white/20 hover:border-white/40 shadow-xl shadow-black/60 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black"
      >
        {/* Monochromatic WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-[26px] sm:h-[26px] transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.93.548 3.737 1.503 5.275L2 22l4.85-1.464A9.96 9.96 0 0 0 12.004 22C17.525 22 22 17.525 22 12.004 22 6.48 17.525 2 12.004 2zm0 18.27a8.23 8.23 0 0 1-4.202-1.147l-.301-.18-3.117.94.957-3.04-.197-.313a8.243 8.243 0 0 1-1.409-4.526c0-4.568 3.716-8.284 8.269-8.284 4.553 0 8.269 3.716 8.269 8.284 0 4.568-3.716 8.284-8.269 8.284zm4.536-6.19c-.248-.124-1.47-.726-1.698-.808-.228-.083-.394-.124-.56.124-.166.248-.643.808-.788.974-.145.166-.29.186-.539.062-.248-.124-1.05-.387-2-1.234-.74-.66-1.24-1.476-1.385-1.724-.145-.248-.016-.382.108-.506.112-.112.249-.29.373-.435.124-.145.166-.248.249-.414.083-.166.041-.31-.021-.435-.062-.124-.56-1.35-.767-1.848-.201-.486-.406-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.31-.228.248-.87.85-.87 2.073 0 1.224.891 2.407 1.015 2.573.124.166 1.754 2.678 4.249 3.755.594.257 1.058.41 1.42.525.597.19 1.14.163 1.57.099.479-.072 1.47-.601 1.677-1.182.207-.58.207-1.077.145-1.181-.062-.104-.228-.166-.477-.29z" />
        </svg>

        {/* Subtle tooltip on desktop hover */}
        <span className="sr-only">Falar pelo WhatsApp</span>
      </a>
    </aside>
  );
};
