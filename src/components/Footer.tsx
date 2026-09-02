import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { BrailleDivider } from './BrailleMotif';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#070707] border-t border-neutral-900 py-16 px-6 text-neutral-400">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Logo Placeholder (Solid color block per exact instruction) */}
          <div className="md:col-span-4 flex flex-col items-start gap-3">
            {/* Logo placeholder de bloco de cor por enquanto */}
            <div className="relative w-44 h-16 bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center px-4 py-2 group">
              {/* substituir por imagem real: Logo oficial C.três Experiências Imersivas */}
              <span className="font-editorial text-xl text-neutral-100 font-light tracking-wide">
                c<span className="text-neutral-400">·</span>três
              </span>
              <span className="font-tension text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                Experiências Imersivas
              </span>
            </div>
            <span className="text-[11px] font-mono tracking-widest text-neutral-600">
              ⠉ · ⠞⠗⠑⠎
            </span>
          </div>

          {/* Contact Email */}
          <div className="md:col-span-5 flex flex-col md:items-center justify-center">
            <span className="text-[10px] font-tension uppercase tracking-[0.25em] text-neutral-500 mb-1">
              Contato Corporativo
            </span>
            <a
              href="mailto:jantarcego@jantarcego.com.br"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-body text-neutral-300 hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
              <span>jantarcego@jantarcego.com.br</span>
            </a>
          </div>

          {/* Social Icons (Instagram and LinkedIn placeholders) */}
          <div className="md:col-span-3 flex md:justify-end items-center gap-4">
            <span className="text-xs font-tension uppercase tracking-[0.2em] text-neutral-500 mr-1">
              Redes:
            </span>
            <a
              href="#"
              aria-label="Instagram C.três"
              className="w-10 h-10 border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-600 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn C.três"
              className="w-10 h-10 border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-600 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <BrailleDivider
          braille="⠉ · ⠞ ⠗ ⠑ ⠎ · ⠃ ⠗ ⠁ ⠎ ⠊ ⠇"
          text="Experiências Imersivas Corporativas"
        />

        {/* Bottom copyright notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-600 pt-4">
          <p>© {new Date().getFullYear()} C.três — Todos os direitos reservados.</p>
          <p className="tracking-widest">
            Teatro Cego · Jantar Cego · Expresso Dive
          </p>
        </div>
      </div>
    </footer>
  );
};
