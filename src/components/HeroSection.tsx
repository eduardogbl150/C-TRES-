import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { BrailleTexture } from './BrailleMotif';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="abertura"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 bg-[#0a0a0a] text-neutral-100 overflow-hidden"
    >
      <BrailleTexture opacity={0.03} />

      {/* Subtle sensory ambient vignette */}
      <div className="absolute inset-0 bg-radial from-neutral-900/20 via-[#0a0a0a]/90 to-[#0a0a0a] pointer-events-none" />

      {/* Central Hero Statement with slow cinematic fade-in */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
        {/* Braille subtle preamble */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2.2, delay: 0.3 }}
          className="text-xs font-mono tracking-[0.4em] text-neutral-500 select-none"
          aria-hidden="true"
        >
          ⠑ ⠎ ⠑ ⠧ ⠕ ⠉ ⠑ ⠝ ⠁ ⠕ ⠏ ⠥ ⠙ ⠑ ⠎ ⠎ ⠑ ⠧ ⠑ ⠗
        </motion.div>

        {/* Impact Question */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-neutral-100 leading-[1.12]"
        >
          E se você não pudesse ver?
        </motion.h1>

        {/* Company Identity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.0, delay: 1.8 }}
          className="pt-2 sm:pt-4"
        >
          <div className="inline-flex flex-col items-center gap-2">
            <h2 className="font-tension text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.32em] text-neutral-400">
              C · TRÊS EXPERIÊNCIAS IMERSIVAS
            </h2>
            <div className="h-[1px] w-12 bg-neutral-800" />
            <span className="text-[11px] font-mono tracking-[0.3em] text-neutral-600 select-none">
              ⠉ · ⠞⠗⠑⠎
            </span>
          </div>
        </motion.div>
      </div>

      {/* Discrete scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 2.8 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 select-none"
      >
        <span className="font-tension text-[10px] uppercase tracking-[0.3em] text-neutral-500">
          Role para submergir
        </span>
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="text-neutral-500"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
