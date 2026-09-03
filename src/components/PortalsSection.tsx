import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BrailleDots, BrailleTexture } from './BrailleMotif';
interface PortalsSectionProps {
  onPortalSelect: (portalName: string) => void;
}

export const PortalsSection: React.FC<PortalsSectionProps> = ({ onPortalSelect }) => {
  const portals = [
    {
      id: 'teatro-cego',
      number: '01',
      name: 'Teatro Cego',
      accentColor: '#f5f5f5',
      accentBorder: 'border-neutral-700',
      accentGlow: 'text-glow-white',
      brailleText: '⠞⠑⠁⠞⠗⠕ ⠉⠑⠛⠕',
      tagline: 'A plateia não está diante da cena. Está dentro dela.',
      description:
        'Uma peça encenada no escuro absoluto, conduzida por atores cegos. O público não assiste: respira, escuta, toca, é tocado. Ideal para lançamentos, convenções e ativações onde a empresa precisa deixar marca no corpo, não na retina.',
      ctaText: 'Explorar Teatro Cego',
      image: '/teatro-cego.png',
      fallbackImage: '/teatro-cego.jpg',
      imageAlt: 'Teatro Cego - Experiência imersiva no escuro',
      badge: 'Cênico & Imersivo',
      sensoryTraits: ['Audição espacial', 'Estímulos táteis', 'Atores no mesmo plano da plateia'],
    },
    {
      id: 'jantar-cego',
      number: '02',
      name: 'Jantar Cego',
      accentColor: '#C9A227',
      accentBorder: 'border-[#C9A227]/40',
      accentGlow: 'text-glow-gold',
      brailleText: '⠚⠁⠝⠞⠁⠗ ⠉⠑⠛⠕',
      tagline: 'O sabor chega antes da imagem. E fica muito depois.',
      description:
        'Um jantar servido por garçons cegos que também cantam. Cada prato é uma revelação sensorial; cada voz, uma iluminação. Gastronomia, música e escuridão a serviço do encontro que sua empresa quer provocar.',
      ctaText: 'Explorar Jantar Cego',
      image: '/jantar-cego.png',
      fallbackImage: '/jantar-cego.jpg',
      imageAlt: 'Jantar Cego - Gastronomia sensorial e música vocal',
      badge: 'Gastronômico & Musical',
      sensoryTraits: ['Paladar & olfato aguçados', 'Garçons cantores', 'Música vocal ao vivo'],
    },
    {
      id: 'expresso-dive',
      number: '03',
      name: 'Expresso Dive',
      accentColor: '#C81E2D',
      accentBorder: 'border-[#C81E2D]/40',
      accentGlow: 'text-glow-red',
      brailleText: '⠑⠭⠏⠗⠑⠎⠎⠕ ⠙⠊⠧⠑',
      tagline: 'Você entra em um vagão. Não é o vagão que se move.',
      description:
        'Um trem reconstruído inteiramente para simular uma viagem imersiva no escuro: trilhos, vibração, paisagens sonoras, temperatura, aromas. Um deslocamento sem imagem, projetado sob medida para o objetivo do seu evento.',
      ctaText: 'Explorar Expresso Dive',
      image: '/expresso-dive.png',
      fallbackImage: '/expresso-dive.jpg',
      imageAlt: 'Expresso Dive - Viagem sinestésica sobre trilhos no escuro',
      badge: 'Cenográfico & Sinestésico',
      sensoryTraits: ['Vibração de trilhos reais', 'Paisagens sonoras dinâmicas', 'Aromas & temperatura'],
    },
  ];

  return (
    <section id="portais" className="relative w-full bg-[#0a0a0a] text-neutral-100">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="font-tension text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-3">
          02 / As Três Dimensões
        </span>
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light text-neutral-100 mb-4">
          Três Portais
        </h2>
        <p className="font-body text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Três caminhos distintos para desligar a visão e acender todos os outros sentidos da sua equipe e convidados.
        </p>
      </div>

      {/* Three Full-Bleed Vertical Blocks in Sequence */}
      <div className="flex flex-col w-full">
        {portals.map((portal, index) => (
          <article
            key={portal.id}
            id={portal.id}
            className="relative min-h-[90vh] flex items-center justify-center py-24 px-6 sm:px-12 border-t border-neutral-900 overflow-hidden bg-[#0c0c0c]"
          >
            {/* Ambient sensory background */}
            <BrailleTexture opacity={0.025} />
            <div
              className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-10"
              style={{ backgroundColor: portal.accentColor }}
            />

            <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Textual Narrative Column */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                {/* Product identification */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-tension text-xs tracking-[0.25em] uppercase font-bold"
                      style={{ color: portal.accentColor }}
                    >
                      Portal {portal.number}
                    </span>
                  </div>

                  <h3 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-100 tracking-tight">
                    {portal.name}
                  </h3>
                </div>

                {/* Tagline / Impact Phrase */}
                <blockquote
                  className="font-editorial text-2xl sm:text-3xl text-neutral-200 italic font-light leading-snug pl-4 sm:pl-6 border-l-2"
                  style={{ borderColor: portal.accentColor }}
                >
                  "{portal.tagline}"
                </blockquote>

                {/* Exact Product Description */}
                <p className="font-body text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                  {portal.description}
                </p>

                {/* Sensory Traits / Details */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {portal.sensoryTraits.map((trait, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-neutral-900/80 border border-neutral-800 text-xs font-tension uppercase tracking-widest text-neutral-400"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: portal.accentColor }}
                        />
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Discrete CTA link (text with arrow, not a flashy button) */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => onPortalSelect(portal.name)}
                    className="group inline-flex items-center gap-3 text-sm font-tension uppercase tracking-[0.25em] transition-all duration-300 hover:translate-x-1"
                    style={{ color: portal.accentColor }}
                  >
                    <span>{portal.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </button>
                </div>
              </div>

              {/* Visual Image Card with Photorealistic Asset */}
              <div className="lg:col-span-5">
                <div
                  className={`relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full bg-[#141414] border ${portal.accentBorder} flex flex-col justify-between overflow-hidden group rounded-sm shadow-2xl`}
                >
                  {/* Photo with subtle hover scale effect */}
                  <img
                    src={portal.image}
                    alt={portal.imageAlt}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.endsWith('.png')) {
                        target.src = portal.fallbackImage;
                      }
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dramatic multi-layer dark gradient overlay for cinematic contrast and readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />

                  {/* Top indicator of visual block */}
                  <div className="relative z-10 p-6 flex items-center justify-between">
                    <span className="text-[10px] font-tension uppercase tracking-[0.2em] px-2.5 py-1 bg-black/70 backdrop-blur-sm border border-neutral-800 text-neutral-300">
                      {portal.badge}
                    </span>
                    <div className="px-2 py-1 bg-black/70 backdrop-blur-sm border border-neutral-800/80">
                      <BrailleDots
                        pattern={portal.brailleText}
                        size="xs"
                        accentColor={portal.accentColor}
                        opacity={0.8}
                      />
                    </div>
                  </div>

                  {/* Bottom metadata tag */}
                  <div className="relative z-10 p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                    <span className="font-tension uppercase tracking-wider text-neutral-300">Imersão Total</span>
                    <span className="uppercase tracking-widest text-[10px] px-2 py-0.5 border border-neutral-800 bg-black/60">Escuridão 100%</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
