import React from 'react';
import { motion } from 'motion/react';
import { Users, EyeOff, Sparkles } from 'lucide-react';
import { BrailleDots, BrailleTexture } from './BrailleMotif';

export const TruthSection: React.FC = () => {
  return (
    <section
      id="verdade"
      className="relative min-h-[85vh] py-28 md:py-36 px-6 bg-[#0a0a0a] border-t border-neutral-900 flex items-center justify-center overflow-hidden"
    >
      <BrailleTexture opacity={0.03} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-tension text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-3">
            03 / Protagonismo & Mestria
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-light text-neutral-100 mb-4">
            A verdade por trás da escuridão
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text narrative */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.0 }}
              className="space-y-6"
            >
              <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-neutral-100 font-light leading-[1.35]">
                Quem conduz você pela escuridão conhece esse universo como ninguém. A experiência é guiada por profissionais cegos e uma equipe dedicada que transformam a ausência de luz em um espetáculo de gastronomia, música e sentidos.
              </p>

              <div className="h-[1px] w-24 bg-neutral-800" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-neutral-950/60 border border-neutral-800/80">
                  <EyeOff className="w-5 h-5 text-neutral-400 mb-3" />
                  <h4 className="font-tension text-sm uppercase tracking-wider text-neutral-200 mb-1">
                    Guias Cegos
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-body">
                    Eles navegam o escuro com naturalidade e acolhimento pleno.
                  </p>
                </div>

                <div className="p-4 bg-neutral-950/60 border border-neutral-800/80">
                  <Sparkles className="w-5 h-5 text-neutral-400 mb-3" />
                  <h4 className="font-tension text-sm uppercase tracking-wider text-neutral-200 mb-1">
                    Arte & Sentidos
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-body">
                    Atores, cantores e técnicos que operam na dimensão tátil e sonora.
                  </p>
                </div>

                <div className="p-4 bg-neutral-950/60 border border-neutral-800/80">
                  <Users className="w-5 h-5 text-neutral-400 mb-3" />
                  <h4 className="font-tension text-sm uppercase tracking-wider text-neutral-200 mb-1">
                    Equipe Dedicada
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-body">
                    Produção rigorosa para segurança e impacto emocional absoluto.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual block representation */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full bg-[#121212] border border-neutral-800 p-8 flex flex-col justify-between overflow-hidden">
              {/* substituir por imagem real: Retrato em chiaroscuro da equipe e dos atores e profissionais cegos da C.três */}
              
              <div className="absolute inset-0 bg-braille-pattern opacity-10 pointer-events-none" />
              <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90 pointer-events-none" />

              <div className="relative z-10 flex justify-between items-center">
                <span className="font-tension text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                  Elenco & Condutores
                </span>
                <BrailleDots
                  pattern="⠉⠕⠝⠙⠥⠞⠕⠗⠑⠎"
                  size="xs"
                  opacity={0.55}
                />
              </div>

              <div className="relative z-10 my-auto text-center space-y-3 py-10">
                <div className="w-16 h-16 mx-auto rounded-full border border-neutral-700 flex items-center justify-center text-neutral-300">
                  <EyeOff className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-editorial text-2xl text-neutral-100 font-light">
                    Mestres do Invisível
                  </h3>
                  <p className="text-xs text-neutral-400 font-body max-w-xs mx-auto">
                    Inversão de papéis onde quem não enxerga conduz quem enxerga com segurança total.
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Inclusão Genuína</span>
                <span className="tracking-wider">Arte · Voz · Tato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
