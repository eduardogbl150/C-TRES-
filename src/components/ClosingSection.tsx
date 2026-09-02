import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Mail, Sparkles, X, Check } from 'lucide-react';
import { BrailleDivider, BrailleTexture } from './BrailleMotif';

interface ClosingSectionProps {
  selectedPortal?: string | null;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ selectedPortal }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jantarcego@jantarcego.com.br');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

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

        {/* Single Button "Começar" */}
        <div className="pt-4 flex flex-col items-center gap-4">
          <button
            type="button"
            id="btn-comecar"
            onClick={() => setModalOpen(true)}
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-neutral-100 hover:bg-white text-neutral-950 font-tension text-base uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Começar</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Placeholder Modal for Step 2 */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-[#141414] border border-neutral-800 p-8 sm:p-10 text-left shadow-2xl space-y-6"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-[10px] font-tension uppercase tracking-[0.3em] text-neutral-500">
                  C · Três Experiências Imersivas
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-neutral-100 font-light">
                  Inicie o Diálogo Sensorial
                </h3>
                {selectedPortal && (
                  <p className="text-xs text-neutral-400 font-tension uppercase tracking-widest">
                    Portal de interesse: <span className="text-neutral-200">{selectedPortal}</span>
                  </p>
                )}
              </div>

              <div className="space-y-4 text-sm font-body text-neutral-300 leading-relaxed">
                <p>
                  O formulário completo de pré-qualificação detalhada será implementado na próxima etapa do projeto.
                </p>
                <p className="text-neutral-400 text-xs">
                  Por enquanto, converse diretamente com a nossa equipe de dramaturgia e produção executiva:
                </p>
              </div>

              <div className="p-4 bg-neutral-900 border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                    <Mail className="w-4 h-4 text-neutral-400" />
                    <span>jantarcego@jantarcego.com.br</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-xs font-tension uppercase tracking-wider text-neutral-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1 bg-neutral-800 rounded-none transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copiado</span>
                      </>
                    ) : (
                      <span>Copiar</span>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`mailto:jantarcego@jantarcego.com.br?subject=Interesse%20em%20Experi%C3%AAncia%20Imersiva%20C.tr%C3%AAs${
                    selectedPortal ? `:%20${encodeURIComponent(selectedPortal)}` : ''
                  }`}
                  className="flex-1 py-3 px-4 bg-neutral-100 hover:bg-white text-neutral-950 text-center font-tension text-xs uppercase tracking-[0.2em] font-bold transition-colors"
                >
                  Enviar E-mail Agora
                </a>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="py-3 px-6 border border-neutral-700 text-neutral-300 hover:text-white text-center font-tension text-xs uppercase tracking-[0.2em] transition-colors"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
