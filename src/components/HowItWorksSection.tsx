import React from 'react';
import { motion } from 'motion/react';
import { Ear, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { BrailleDots, BrailleTexture } from './BrailleMotif';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      braille: '⠼⠁',
      icon: Ear,
      title: 'A Escuta',
      text: 'Escutamos o que sua empresa quer provocar. Não o formato: o efeito.',
      detail: 'Antes de qualquer detalhe logístico, entendemos a pulsação do encontro.',
    },
    {
      num: '02',
      braille: '⠼⠃',
      icon: Compass,
      title: 'O Desenho Sob Medida',
      text: 'Desenhamos a experiência sob medida: qual portal, qual intensidade, quais sentidos, qual duração.',
      detail: 'Dramaturgia, cardápio sonoro, estímulos táteis e aromas calibrados para o seu objetivo.',
    },
    {
      num: '03',
      braille: '⠼⠉',
      icon: ShieldCheck,
      title: 'A Condução',
      text: 'Executamos com equipe própria de profissionais cegos e produção técnica dedicada. Você conduz seus convidados; nós conduzimos o escuro.',
      detail: 'Protocolos de segurança absolutos e acolhimento humano minucioso.',
    },
    {
      num: '04',
      braille: '⠼⠙',
      icon: Sparkles,
      title: 'A Intenção Soberana',
      text: 'Qualquer um dos três portais pode ser adaptado a qualquer objetivo corporativo: celebração, treinamento, lançamento, integração, premiação. O formato serve à intenção, nunca o contrário.',
      detail: 'A escuridão é um território maleável para a identidade da sua marca.',
    },
  ];

  return (
    <section
      id="como-funciona"
      className="relative min-h-screen py-28 md:py-36 px-6 bg-[#0a0a0a] border-t border-neutral-900 overflow-hidden"
    >
      <BrailleTexture opacity={0.03} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <span className="font-tension text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-3">
            04 / O Método
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light text-neutral-100 mb-4">
            Como funciona
          </h2>
          <p className="font-body text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Quatro etapas que transformam uma sala corporativa em uma experiência indelével.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group relative p-8 sm:p-10 bg-[#121212]/80 border border-neutral-800 hover:border-neutral-700 transition-colors duration-500 flex flex-col justify-between"
              >
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between pb-6 border-b border-neutral-800/80 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-tension text-2xl font-light text-neutral-300">
                      {step.num}
                    </span>
                    <BrailleDots
                      pattern={step.braille}
                      size="xs"
                      opacity={0.55}
                    />
                  </div>
                  <Icon className="w-5 h-5 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                </div>

                {/* Core Pillar Text */}
                <div className="space-y-4 my-2">
                  <h4 className="font-tension text-sm uppercase tracking-[0.2em] text-neutral-400 font-bold">
                    {step.title}
                  </h4>
                  <p className="font-editorial text-2xl sm:text-3xl text-neutral-100 font-light leading-snug">
                    "{step.text}"
                  </p>
                </div>

                {/* Bottom detail note */}
                <div className="pt-6 mt-4 border-t border-neutral-800/50">
                  <p className="text-xs text-neutral-500 font-body leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
