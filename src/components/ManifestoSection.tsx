import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BrailleDivider, BrailleTexture } from './BrailleMotif';

export const ManifestoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const sentences = [
    {
      text: 'A escuridão não é ausência. É convite.',
      emphasis: true,
      braille: '⠁ ⠑⠎⠉⠥⠗⠊⠙⠁⠕ ⠝⠁⠕ ⠑ ⠁⠥⠎⠑⠝⠉⠊⠁ · ⠑ ⠉⠕⠝⠧⠊⠞⠑',
    },
    {
      text: 'É onde a pele começa a ouvir, o ouvido começa a ver, e a memória se torna a única imagem possível.',
      emphasis: false,
      braille: '⠕⠥⠧⠊⠗ · ⠧⠑⠗ · ⠍⠑⠍⠕⠗⠊⠁',
    },
    {
      text: 'Criamos experiências corporativas que apagam a luz para que algo mais fundo se acenda.',
      emphasis: false,
      braille: '⠁⠏⠁⠛⠁⠗ ⠁ ⠇⠥⠵ · ⠁⠉⠑⠝⠙⠑⠗ ⠕ ⠎⠑⠝⠞⠊⠙⠕',
    },
    {
      text: 'O que sua marca quer que seja lembrado, não visto?',
      emphasis: true,
      braille: '⠇⠑⠍⠃⠗⠁⠙⠕ · ⠝⠁⠕ ⠧⠊⠎⠞⠕',
    },
  ];

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="relative min-h-screen py-32 md:py-48 px-6 bg-[#0a0a0a] flex flex-col justify-center items-center border-t border-neutral-900/80"
    >
      <BrailleTexture opacity={0.03} />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Section marker */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-tension text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-2">
            01 / O Princípio
          </span>
          <BrailleDivider braille="⠍ ⠁ ⠝ ⠊ ⠋ ⠑ ⠎ ⠞ ⠕" text="Manifesto" />
        </div>

        {/* The Exact Manifesto Text with Progressive Light Reveal */}
        <div className="space-y-12 md:space-y-20 text-center">
          {sentences.map((sentence, index) => (
            <ManifestoLine
              key={index}
              index={index}
              sentence={sentence}
            />
          ))}
        </div>

        {/* Section bottom motif */}
        <div className="mt-20 md:mt-28 flex justify-center">
          <div className="h-16 w-[1px] bg-gradient-to-b from-neutral-800 via-neutral-700 to-transparent" />
        </div>
      </div>
    </section>
  );
};

interface ManifestoLineProps {
  sentence: {
    text: string;
    emphasis: boolean;
    braille: string;
  };
  index: number;
}

const ManifestoLine: React.FC<ManifestoLineProps> = ({ sentence, index }) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, {
    margin: '-20% 0px -20% 0px',
    amount: 0.5,
  });

  return (
    <motion.div
      ref={lineRef}
      initial={{ opacity: 0.15, filter: 'blur(3px)', y: 15 }}
      animate={
        isInView
          ? { opacity: 1, filter: 'blur(0px)', y: 0 }
          : { opacity: 0.22, filter: 'blur(1px)', y: 5 }
      }
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="group relative select-text"
    >
      <div className="flex flex-col items-center gap-3">
        <span
          className="text-xs font-mono tracking-[0.25em] text-neutral-600 transition-opacity duration-700"
          aria-hidden="true"
        >
          {sentence.braille}
        </span>
        <p
          className={`font-editorial ${
            sentence.emphasis
              ? 'text-3xl sm:text-5xl md:text-6xl text-neutral-100 font-normal leading-[1.25]'
              : 'text-2xl sm:text-4xl md:text-5xl text-neutral-300 font-light leading-[1.3]'
          } max-w-4xl mx-auto transition-all duration-700`}
        >
          {sentence.text}
        </p>
      </div>
    </motion.div>
  );
};
