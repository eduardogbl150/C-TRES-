import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onStartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after user starts scrolling past the opening hero
      if (window.scrollY > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.header
          id="main-nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-800/60"
        >
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#abertura"
              className="flex items-center group transition-opacity hover:opacity-90 py-1"
              aria-label="c·três"
            >
              <BrandLogo
                className="h-[21px] sm:h-[27px] md:h-[31px] w-auto max-w-[110px] sm:max-w-[132px] object-contain"
                alt="c·três"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#manifesto"
                className="text-xs uppercase tracking-[0.2em] font-tension text-neutral-400 hover:text-white transition-colors"
              >
                Manifesto
              </a>
              <a
                href="#portais"
                className="text-xs uppercase tracking-[0.2em] font-tension text-neutral-400 hover:text-white transition-colors"
              >
                Três Portais
              </a>
              <a
                href="#verdade"
                className="text-xs uppercase tracking-[0.2em] font-tension text-neutral-400 hover:text-white transition-colors"
              >
                A Verdade
              </a>
              <a
                href="#como-funciona"
                className="text-xs uppercase tracking-[0.2em] font-tension text-neutral-400 hover:text-white transition-colors"
              >
                Como Funciona
              </a>
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                type="button"
                onClick={onStartClick}
                className="group inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-500 text-neutral-200 text-xs font-tension uppercase tracking-[0.2em] transition-all duration-300"
              >
                <span>Começar</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-300 hover:text-white focus:outline-none"
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-neutral-800 bg-[#0a0a0a]/98 px-6 py-6 space-y-4"
              >
                <a
                  href="#manifesto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-[0.2em] font-tension text-neutral-300 hover:text-white py-2"
                >
                  Manifesto
                </a>
                <a
                  href="#portais"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-[0.2em] font-tension text-neutral-300 hover:text-white py-2"
                >
                  Três Portais
                </a>
                <a
                  href="#verdade"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-[0.2em] font-tension text-neutral-300 hover:text-white py-2"
                >
                  A Verdade por Trás da Escuridão
                </a>
                <a
                  href="#como-funciona"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-[0.2em] font-tension text-neutral-300 hover:text-white py-2"
                >
                  Como Funciona
                </a>
                <div className="pt-4 border-t border-neutral-800/80">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onStartClick();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 border border-neutral-600 bg-neutral-900 text-white font-tension uppercase tracking-[0.2em] text-xs"
                  >
                    <span>Começar</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
