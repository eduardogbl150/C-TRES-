import React from 'react';
import { ArrowRight, Wind, Utensils, Ear, Hand, Brain } from 'lucide-react';
import { BrailleDots, BrailleTexture } from './BrailleMotif';
import teatroCegoImg from '@/assets/teatro-cego.png';

const WHATSAPP_NUMBER = "5511915617506";
const whatsappLink = (mensagem: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

interface SenseItem {
  icon: React.ElementType;
  label: string;
  desc: string;
}

interface PortalItem {
  id: string;
  number: string;
  name: string;
  accentColor: string;
  accentBorder: string;
  accentGlow: string;
  brailleText: string;
  tagline: string;
  description: string;
  ctaText: string;
  whatsappUrl: string;
  ctaClasses: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
  badge: string;
  sensoryTraits: string[];
  stats: string;
  senses?: SenseItem[];
}

interface PortalsSectionProps {
  onPortalSelect?: (portalName: string) => void;
}

export const PortalsSection: React.FC<PortalsSectionProps> = ({ onPortalSelect }) => {
  const portals: PortalItem[] = [
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
      ctaText: 'Reservar Teatro Cego',
      whatsappUrl: whatsappLink('Olá! Quero saber mais sobre o Teatro Cego.'),
      ctaClasses:
        'bg-white/[0.08] hover:bg-white/[0.15] border-white/25 hover:border-white/50 text-neutral-100',
      image: teatroCegoImg,
      fallbackImage: '/teatro-cego.jpg',
      imageAlt: 'Óculos com tabela de visão formando as palavras Teatro Cego',
      badge: 'Cênico & Imersivo',
      sensoryTraits: ['Audição espacial', 'Estímulos táteis', 'Atores no mesmo plano da plateia'],
      stats: '6 peças no repertório · Público adulto e infantil',
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
        'Um jantar servido por garçons cegos que também cantam. Cada prato é uma revelação sensorial; cada voz, uma iluminação. Disponível em formato de jantar ou almoço, para até 120 pessoas simultaneamente. Gastronomia, música e escuridão a serviço da cultura, engajamento e retenção que sua empresa quer construir.',
      ctaText: 'Reservar Jantar Cego',
      whatsappUrl: whatsappLink('Olá! Quero saber mais sobre o Jantar Cego.'),
      ctaClasses:
        'bg-[#C9A227]/[0.10] hover:bg-[#C9A227]/[0.18] border-[#C9A227]/30 hover:border-[#C9A227]/60 text-[#DFC15D] shadow-[0_4px_20px_rgba(201,162,39,0.05)] hover:shadow-[0_4px_25px_rgba(201,162,39,0.15)]',
      image: '/jantar-cego.png',
      fallbackImage: '/jantar-cego.jpg',
      imageAlt: 'Jantar Cego - Gastronomia sensorial e música vocal',
      badge: 'Gastronômico & Musical',
      sensoryTraits: ['Paladar & olfato aguçados', 'Garçons cantores', 'Música Vocal'],
      stats: 'Até 120 pessoas · Jantar ou Almoço',
    },
    {
      id: 'expresso-dive',
      number: '03',
      name: 'Expresso Dive',
      accentColor: '#C81E2D',
      accentBorder: 'border-[#C81E2D]/40',
      accentGlow: 'text-glow-red',
      brailleText: '⠑⠭⠏⠗⠑⠎⠎⠕ ⠙⠊⠧⠑',
      tagline: 'Você entra em um vagão. E a viagem acontece no escuro.',
      description:
        'Um trem reconstruído inteiramente para simular uma viagem imersiva no escuro, com paisagens sonoras, temperatura e aromas. Ciclos de até 30 minutos permitem rotatividade inteligente, levando dezenas de pessoas por sessão a um novo estado de consciência, com imersão rápida e impacto duradouro.',
      ctaText: 'Reservar Expresso Dive',
      whatsappUrl: whatsappLink('Olá! Quero saber mais sobre o Expresso Dive.'),
      ctaClasses:
        'bg-[#C81E2D]/[0.10] hover:bg-[#C81E2D]/[0.18] border-[#C81E2D]/35 hover:border-[#C81E2D]/65 text-[#F05365] shadow-[0_4px_20px_rgba(200,30,45,0.05)] hover:shadow-[0_4px_25px_rgba(200,30,45,0.15)]',
      image: '/expresso-dive.png',
      fallbackImage: '/expresso-dive.jpg',
      imageAlt: 'Expresso Dive - Viagem sinestésica no escuro',
      badge: 'Cenográfico & Sinestésico',
      sensoryTraits: ['Vagão cenográfico', 'Paisagens sonoras dinâmicas', 'Aromas & temperatura'],
      stats: 'Ciclos de 30min · Até 50 pessoas por sessão',
      senses: [
        { icon: Wind, label: 'Olfato', desc: 'Guarda memórias' },
        { icon: Utensils, label: 'Paladar', desc: 'Se aguça' },
        { icon: Ear, label: 'Audição', desc: 'Se abre ao outro' },
        { icon: Hand, label: 'Tato', desc: 'Conecta' },
        { icon: Brain, label: 'Mente', desc: 'Permite sentir' },
      ],
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
                <div className="font-body text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light space-y-4">
                  {portal.description.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

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

                {/* Discrete Statistics Line */}
                {portal.stats && (
                  <div className="pt-2">
                    <p className="font-tension text-[11px] sm:text-xs uppercase tracking-wider text-neutral-300">
                      {portal.stats}
                    </p>
                  </div>
                )}

                {/* Activated Senses Grid */}
                {portal.senses && (
                  <div className="pt-3">
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-3 max-w-2xl">
                      {portal.senses.map((sense) => {
                        const SenseIcon = sense.icon;
                        return (
                          <div key={sense.label} className="flex flex-col items-start gap-1">
                            <SenseIcon className="w-4 h-4 text-neutral-400 stroke-[1.5]" />
                            <span className="font-tension text-[11px] uppercase tracking-wider text-neutral-300 font-semibold">
                              {sense.label}
                            </span>
                            <span className="font-body text-xs text-neutral-400 font-light leading-snug">
                              {sense.desc}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Highlighted Portal CTA */}
                <div className="pt-4 sm:pt-6">
                  <a
                    href={portal.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 sm:gap-5 min-h-[46px] sm:min-h-[48px] px-5 sm:px-6 py-3 sm:py-3.5 border transition-all duration-300 ease-out hover:shadow-lg ${portal.ctaClasses}`}
                  >
                    <span className="text-xs sm:text-sm font-tension uppercase tracking-[0.22em] font-semibold sm:font-bold">
                      {portal.ctaText}
                    </span>
                    <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110" />
                  </a>
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

                  {/* Top indicator of visual block - unboxed clean category badge and braille */}
                  <div className="relative z-10 p-6 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-tension uppercase tracking-[0.22em] text-neutral-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {portal.badge}
                    </span>
                    <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      <BrailleDots
                        pattern={portal.brailleText}
                        size="xs"
                        accentColor={portal.accentColor}
                        opacity={0.85}
                      />
                    </div>
                  </div>

                  {/* Bottom metadata tag */}
                  <div className="relative z-10 p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                    <span className="font-tension uppercase tracking-wider text-neutral-300">Imersão Total</span>
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
