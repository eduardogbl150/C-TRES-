import React from 'react';
import { motion } from 'motion/react';
import { Users, EyeOff, Sparkles } from 'lucide-react';
import { BrailleDots, BrailleTexture } from './BrailleMotif';
import elencoImg from '@/src/assets/images/elenco_ctres_foto_1788544957683.jpg';

export const TruthSection: React.FC = () => {
  const [imgSrc, setImgSrc] = React.useState<string>('/elenco.jpg');

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
            <div className="relative aspect-[4/5] w-full bg-[#141414] border border-neutral-800 flex flex-col justify-between overflow-hidden group rounded-sm shadow-2xl">
              {/* Photo with subtle hover scale effect */}
              <img
                src={imgSrc}
                alt="Elenco e condutores da C.três - Profissionais e atores cegos"
                referrerPolicy="no-referrer"
                onError={() => {
                  if (imgSrc === '/elenco.jpg') {
                    setImgSrc('/elenco.png');
                  } else if (imgSrc === '/elenco.png') {
                    setImgSrc('/ChatGPT Image 4 de set. de 2026, 14_52_19.png');
                  } else if (imgSrc !== elencoImg) {
                    setImgSrc(elencoImg);
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dramatic multi-layer dark gradient overlay for cinematic contrast and readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/60 pointer-events-none" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />

              {/* Top indicator of visual block */}
              <div className="relative z-10 p-6 flex items-center justify-between">
                <span className="font-tension text-[10px] sm:text-[11px] uppercase tracking-[0.25em] px-2.5 py-1 bg-black/75 backdrop-blur-sm border border-neutral-800 text-neutral-300">
                  Elenco & Condutores
                </span>
                <div className="px-2 py-1 bg-black/75 backdrop-blur-sm border border-neutral-800/80">
                  <BrailleDots
                    pattern="⠉⠕⠝⠙⠥⠞⠕⠗⠑⠎"
                    size="xs"
                    opacity={0.8}
                  />
                </div>
              </div>

              {/* Bottom metadata tag */}
              <div className="relative z-10 p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span className="font-tension uppercase tracking-wider text-neutral-300">Inclusão Genuína</span>
                <span className="uppercase tracking-widest text-[10px] px-2 py-0.5 border border-neutral-800 bg-black/60">Arte · Voz · Tato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
