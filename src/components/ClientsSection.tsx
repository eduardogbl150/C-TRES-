import React from 'react';
import { clientesAtendidos } from '@/src/data/clientes';

export const ClientsSection: React.FC = () => {
  const companiesList = [...clientesAtendidos, ...clientesAtendidos];

  return (
    <section
      id="empresas-atendidas"
      aria-label="Empresas atendidas"
      className="relative py-20 md:py-28 bg-[#0a0a0a] border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 mb-8 md:mb-10 text-center">
        <p className="font-tension text-[11px] sm:text-xs uppercase tracking-[0.3em] text-neutral-500 select-none">
          EMPRESAS QUE JÁ VIVERAM A EXPERIÊNCIA
        </p>
      </div>

      {/* Marquee Wrapper with Edge Gradient Masks */}
      <div className="relative w-full overflow-hidden marquee-container">
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
