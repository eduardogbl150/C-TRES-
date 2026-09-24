import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#070707] border-t border-neutral-900 py-16 px-6 text-neutral-400">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Logo */}
          <div className="md:col-span-4 flex flex-col items-start gap-3">
            <a
              href="#abertura"
              className="inline-block transition-opacity hover:opacity-90"
              aria-label="C-Três"
            >
              <BrandLogo
                className="h-[29px] sm:h-[35px] md:h-[42px] w-auto max-w-[105px] sm:max-w-[133px] object-contain"
                alt="C-Três"
              />
            </a>
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
          <div className="md:col-span-3 flex md:justify-end items-center gap-3">
            <a
              href="https://www.instagram.com/ctres.experiencias/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram C-Três Experiências"
              className="p-1.5 text-neutral-400 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/ctresexperienciasimersivas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn C-Três"
              className="p-1.5 text-neutral-400 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="h-[1px] w-full bg-neutral-900" />

        {/* Bottom copyright notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-600 pt-4">
          <p>© {new Date().getFullYear()} C-Três — Todos os direitos reservados.</p>
          <p className="tracking-widest">
            Teatro Cego · Jantar Cego · Expresso Dive
          </p>
        </div>
      </div>
    </footer>
  );
};
