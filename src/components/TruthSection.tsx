import React from 'react';
import { motion } from 'motion/react';
import { Users, EyeOff, Sparkles } from 'lucide-react';
import { BrailleDots, BrailleTexture } from './BrailleMotif';
import elencoImg from '@/src/assets/images/elenco_ctres_foto_1788544957683.jpg';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    year: '2012',
    title: 'O início',
    description:
      'Em 2012, a C.três deu os primeiros passos com o Teatro Cego, o primeiro formato do tipo no Brasil, com espetáculos totalmente no escuro e atores cegos.',
  },
  {
    year: '2019',
    title: 'Inovação',
    description:
      'Lançou o Jantar Cego, experiência gastronômica no escuro que desafia a percepção e une gastronomia, música e sensorialidade.',
  },
  {
    year: '2026',
    title: 'Novas experiências',
    description:
      'Chega o Expresso Dive, uma nova forma de viver a escuridão em movimento, dentro de um vagão cenográfico.',
  },
];

export const TruthSection: React.FC = () => {
  const [imgSrc, setImgSrc] = React.useState<string>('/elenco.png');

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

              {/* Top indicator of visual block */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <span className="font-tension text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-neutral-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Elenco & Condutores
                </span>
                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center">
                  <BrailleDots
                    pattern="⠑ ⠇ ⠑ ⠝ ⠉ ⠕"
                    size="xs"
                    accentColor="#e5e5e5"
                    opacity={0.85}
                  />
                </div>
              </div>

              {/* Bottom metadata tag */}
              <div className="relative z-10 p-5 flex items-center justify-between text-[11px] text-neutral-300 font-mono">
                <span className="font-tension uppercase tracking-wider text-white text-xs drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-2 py-0.5 bg-black/60 backdrop-blur-md border border-white/10">Inclusão Genuína</span>
                <span className="uppercase tracking-widest text-[10px] px-2 py-0.5 border border-white/10 bg-black/60 backdrop-blur-md text-neutral-200">Arte · Voz · Tato</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marcos Históricos (3 colunas lado a lado separadas por linha vertical sutil) */}
        <div className="mt-20 md:mt-24 pt-14 md:pt-18 border-t border-neutral-800/60">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-800/60">
            {MILESTONES.map((milestone, idx) => (
              <div
                key={milestone.year}
                className={`py-6 md:py-2 ${
                  idx === 0
                    ? 'md:pr-8 lg:pr-12'
                    : idx === 1
                    ? 'md:px-8 lg:px-12'
                    : 'md:pl-8 lg:pl-12'
                } flex flex-col items-start text-left`}
              >
                {/* Ano em destaque (fonte serifada, tamanho médio) */}
                <span className="font-editorial text-3xl sm:text-4xl text-neutral-100 font-normal tracking-tight mb-2">
                  {milestone.year}
                </span>

                {/* Título curto abaixo do ano (uppercase, tracking largo, tamanho pequeno) */}
                <h3 className="font-tension text-xs uppercase tracking-[0.25em] text-neutral-300 font-semibold mb-3">
                  {milestone.title}
                </h3>

                {/* Descrição breve abaixo (corpo de texto regular, menor) */}
                <p className="font-body text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
