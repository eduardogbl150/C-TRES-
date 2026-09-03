import React from 'react';
import { Home, Lightbulb, Compass } from 'lucide-react';
import { clientesAtendidos } from '@/src/data/clientes';

interface Milestone {
  icon: React.ElementType;
  title: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    icon: Home,
    title: 'O início',
    description:
      'Fundada em 2005, a C.três destacou-se na produção de projetos musicais e teatrais.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description:
      'Em 2012, inovou ao introduzir o Teatro Cego no Brasil, uma proposta que oferece espetáculos totalmente no escuro, com atores cegos, promovendo inclusão e uma nova forma de apreciação teatral.',
  },
  {
    icon: Compass,
    title: 'Novas experiências',
    description:
      'Em 2019, a C.três lançou o Jantar Cego, experiência gastronômica no escuro, combinando sua expertise em criar eventos únicos que desafiam a percepção e valorizam a diversidade.',
  },
];

interface MediaCard {
  publication: string;
  headline: string;
  summary: string;
  url: string;
}

const MEDIA_CARDS: MediaCard[] = [
  {
    publication: 'SÃO PAULO SECRETO',
    headline: 'Jantar Cego: descubra como a escuridão pode transformar sua percepção',
    summary:
      'Garçons com deficiência visual conduzem os participantes em uma jornada gastronômica regada à empatia, inclusão e igualdade.',
    url: 'https://saopaulosecreto.com/jantar-cego-sp/',
  },
  {
    publication: 'VEJA SP',
    headline: 'Capital ganha espaço para jantar, boteco e teatro realizados no escuro',
    summary:
      'Eventos no Espaço Dive exploram outros sentidos e são criados em colaboração com pessoas com deficiência visual.',
    url: 'https://vejasp.abril.com.br/cultura-lazer/espaco-dive-teatro-cego-jantar-boteco',
  },
  {
    publication: 'ADRIANE GALISTEU',
    headline: 'Experiência sensorial no Jantar Cego',
    summary:
      'Experiência sensorial composta por um jantar completo, com couvert, entrada, prato principal, sobremesa e harmonização com vinhos, servido completamente no escuro.',
    url: 'https://www.adrianegalisteu.com.br/2021/07/experiencia-sensorial-no-jantar-cego/',
  },
];

export const ClientsSection: React.FC = () => {
  const companiesList = [...clientesAtendidos, ...clientesAtendidos];

  return (
    <section
      id="credibilidade"
      aria-label="Credibilidade e empresas atendidas"
      className="relative py-24 md:py-32 bg-[#0a0a0a] border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 space-y-20 md:space-y-24">
        {/* Bloco 1 — Linha do Tempo (3 Marcos) */}
        <div className="relative">
          {/* Connecting horizontal line for desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-6 lg:top-7 left-[16.666%] right-[16.666%] h-[1px] bg-neutral-800 z-0 pointer-events-none"
          />

          {/* Grid of 3 milestones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative z-10">
            {MILESTONES.map((milestone, idx) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={milestone.title}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon inside uncolored thin-outlined square */}
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#0a0a0a] border border-neutral-700/80 flex items-center justify-center text-neutral-300 mb-6 transition-colors duration-300 group-hover:border-neutral-500">
                    <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 stroke-[1.5] text-neutral-200" />
                  </div>

                  {/* Serif Title */}
                  <h3 className="font-editorial text-2xl sm:text-[26px] text-neutral-100 mb-3 font-normal tracking-wide">
                    {milestone.title}
                  </h3>

                  {/* Body description */}
                  <p className="font-body text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-xs md:max-w-none">
                    {milestone.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bloco 2 — Na mídia (Cards) */}
        <div className="space-y-8 pt-4">
          <div className="text-center">
            <h3 className="font-editorial text-2xl sm:text-3xl text-neutral-100 font-normal tracking-wide">
              Na mídia
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {MEDIA_CARDS.map((card) => (
              <div
                key={card.publication}
                className="bg-white/[0.04] hover:bg-white/[0.07] border border-neutral-800/80 hover:border-neutral-700 rounded-lg p-6 sm:p-7 flex flex-col justify-between transition-colors duration-300 group"
              >
                <div className="space-y-4">
                  {/* Nome da publicação */}
                  <p className="font-tension text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 font-medium">
                    {card.publication}
                  </p>

                  {/* Headline */}
                  <h4 className="font-editorial text-lg sm:text-xl text-neutral-100 font-bold leading-snug">
                    {card.headline}
                  </h4>

                  {/* Texto resumo */}
                  <p className="font-body text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {card.summary}
                  </p>
                </div>

                {/* Link Leia mais */}
                <div className="pt-6 mt-2 border-t border-neutral-800/50">
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs sm:text-sm font-medium text-neutral-200 hover:text-white underline decoration-neutral-500 hover:decoration-white underline-offset-4 transition-colors"
                  >
                    Leia mais &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 3 — Rótulo da Esteira de Clientes */}
        <div className="text-center pt-2">
          <p className="font-tension text-[11px] sm:text-xs uppercase tracking-[0.3em] text-neutral-500 select-none">
            EMPRESAS QUE JÁ VIVERAM A EXPERIÊNCIA
          </p>
        </div>
      </div>

      {/* Bloco 3 — Esteira horizontal contínua de clientes */}
      <div className="relative w-full overflow-hidden marquee-container mt-8 md:mt-10">
        {/* Left Gradient Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent"
        />

        {/* Right Gradient Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent"
        />

        {/* Moving Track */}
        <div className="marquee-track flex items-center w-max">
          {/* Primary List */}
          <ul className="flex items-center shrink-0 list-none m-0 p-0">
            {companiesList.map((company, index) => (
              <li key={`company-1-${index}`} className="flex items-center">
                <span className="font-tension text-sm sm:text-base md:text-lg font-medium tracking-[0.3em] sm:tracking-[0.35em] uppercase text-neutral-300 opacity-55 hover:opacity-100 transition-opacity duration-300 cursor-default select-none whitespace-nowrap">
                  {company}
                </span>
                <span
                  aria-hidden="true"
                  className="text-neutral-700 select-none px-6 sm:px-10 text-xs sm:text-sm font-light"
                >
                  ·
                </span>
              </li>
            ))}
          </ul>

          {/* Identical Duplicate for Seamless Infinite Loop */}
          <ul
            aria-hidden="true"
            className="flex items-center shrink-0 list-none m-0 p-0 marquee-duplicate"
          >
            {companiesList.map((company, index) => (
              <li key={`company-2-${index}`} className="flex items-center">
                <span className="font-tension text-sm sm:text-base md:text-lg font-medium tracking-[0.3em] sm:tracking-[0.35em] uppercase text-neutral-300 opacity-55 hover:opacity-100 transition-opacity duration-300 cursor-default select-none whitespace-nowrap">
                  {company}
                </span>
                <span
                  aria-hidden="true"
                  className="text-neutral-700 select-none px-6 sm:px-10 text-xs sm:text-sm font-light"
                >
                  ·
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

