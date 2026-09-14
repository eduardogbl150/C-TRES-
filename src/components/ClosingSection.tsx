import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BrailleDivider, BrailleTexture } from './BrailleMotif';

interface ClosingSectionProps {
  selectedPortal?: string | null;
  onOpenContact?: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="fechamento"
      className="relative min-h-[80vh] py-32 md:py-44 px-6 bg-[#0a0a0a] border-t border-neutral-900 flex flex-col justify-center items-center text-center overflow-hidden"
    >
      <BrailleTexture opacity={0.03} />

      {/* Atmospheric center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neutral-800/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full space-y-10">
        <span className="font-tension text-xs uppercase tracking-[0.35em] text-neutral-500 block">
          05 / O Primeiro Passo
        </span>

        {/* Exact Title */}
        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-neutral-100 leading-[1.15]">
          Conte o que você quer que sua empresa sinta.
        </h2>

        <p className="font-body text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Cada imersão é construída sob medida para a intenção do seu encontro: liderança, celebração, integração profunda ou lançamento inesquecível.
        </p>

        <BrailleDivider braille="⠉ ⠕ ⠝ ⠞ ⠑ · ⠎ ⠥ ⠁ · ⠊ ⠝ ⠞ ⠑ ⠝ ⠉ ⠁ ⠕" />

        {/* Single Button "Fazer orçamento" */}
        <div className="pt-4 flex flex-col items-center gap-4">
          <button
            type="button"
            id="btn-comecar"
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-neutral-100 hover:bg-white text-neutral-950 font-tension text-base uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-2xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Fazer orçamento</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

