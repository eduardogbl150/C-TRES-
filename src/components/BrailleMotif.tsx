import React from 'react';

export type BrailleSize = 'xs' | 'sm' | 'md' | 'lg';

interface SizeConfig {
  width: number;
  height: number;
  viewBox: string;
  r: number;
  col0: number;
  col1: number;
  row0: number;
  row1: number;
  row2: number;
  cellGapClass: string;
  wordGapClass: string;
}

const SIZE_CONFIGS: Record<BrailleSize, SizeConfig> = {
  xs: {
    width: 8,
    height: 11,
    viewBox: '0 0 8 11',
    r: 1.05,
    col0: 2.4,
    col1: 5.6,
    row0: 2.3,
    row1: 5.5,
    row2: 8.7,
    cellGapClass: 'gap-x-[4px]',
    wordGapClass: 'gap-x-[10px]',
  },
  sm: {
    width: 10,
    height: 14,
    viewBox: '0 0 10 14',
    r: 1.3,
    col0: 3.0,
    col1: 7.0,
    row0: 3.0,
    row1: 7.0,
    row2: 11.0,
    cellGapClass: 'gap-x-[5px]',
    wordGapClass: 'gap-x-[12px]',
  },
  md: {
    width: 12,
    height: 17,
    viewBox: '0 0 12 17',
    r: 1.6,
    col0: 3.5,
    col1: 8.5,
    row0: 3.5,
    row1: 8.5,
    row2: 13.5,
    cellGapClass: 'gap-x-[6px]',
    wordGapClass: 'gap-x-[14px]',
  },
  lg: {
    width: 16,
    height: 23,
    viewBox: '0 0 16 23',
    r: 2.1,
    col0: 4.75,
    col1: 11.25,
    row0: 5.0,
    row1: 11.5,
    row2: 18.0,
    cellGapClass: 'gap-x-[8px]',
    wordGapClass: 'gap-x-[18px]',
  },
};

// Standard Latin to Braille 6-dot matrix
const LATIN_TO_DOTS: Record<string, boolean[]> = {
  a: [true, false, false, false, false, false],
  b: [true, true, false, false, false, false],
  c: [true, false, false, true, false, false],
  d: [true, false, false, true, true, false],
  e: [true, false, false, false, true, false],
  f: [true, true, false, true, false, false],
  g: [true, true, false, true, true, false],
  h: [true, true, false, false, true, false],
  i: [false, true, false, true, false, false],
  j: [false, true, false, true, true, false],
  k: [true, false, true, false, false, false],
  l: [true, true, true, false, false, false],
  m: [true, false, true, true, false, false],
  n: [true, false, true, true, true, false],
  o: [true, false, true, false, true, false],
  p: [true, true, true, true, false, false],
  q: [true, true, true, true, true, false],
  r: [true, true, true, false, true, false],
  s: [false, true, true, true, false, false],
  t: [false, true, true, true, true, false],
  u: [true, false, true, false, false, true],
  v: [true, true, true, false, false, true],
  w: [false, true, false, true, true, true],
  x: [true, false, true, true, false, true],
  y: [true, false, true, true, true, true],
  z: [true, false, true, false, true, true],
  '1': [true, false, false, false, false, false],
  '2': [true, true, false, false, false, false],
  '3': [true, false, false, true, false, false],
  '4': [true, false, false, true, true, false],
  '5': [true, false, false, false, true, false],
  '6': [true, true, false, true, false, false],
  '7': [true, true, false, true, true, false],
  '8': [true, true, false, false, true, false],
  '9': [false, true, false, true, false, false],
  '0': [false, true, false, true, true, false],
};

// Converts Unicode braille char (U+2800..U+28FF) to 6 dots
function parseBrailleChar(char: string): boolean[] | null {
  const code = char.charCodeAt(0);
  if (code >= 0x2800 && code <= 0x28ff) {
    const mask = code - 0x2800;
    return [
      Boolean(mask & 1),   // Dot 1 (top-left)
      Boolean(mask & 2),   // Dot 2 (mid-left)
      Boolean(mask & 4),   // Dot 3 (bot-left)
      Boolean(mask & 8),   // Dot 4 (top-right)
      Boolean(mask & 16),  // Dot 5 (mid-right)
      Boolean(mask & 32),  // Dot 6 (bot-right)
    ];
  }
  return null;
}

// Fallback decorative cells for abstract patterns
const DECORATIVE_PRESETS: boolean[][] = [
  [true, false, true, true, false, true],
  [false, true, true, true, false, false],
  [true, true, false, false, true, true],
  [true, false, false, true, true, false],
  [false, true, false, true, true, true],
  [true, true, true, false, false, true],
  [false, false, true, true, true, false],
];

type Token =
  | { type: 'cell'; dots: boolean[] }
  | { type: 'separator'; char: string };

function tokenizePattern(pattern?: string, cellsCount?: number): Token[][] {
  if (!pattern && cellsCount) {
    const cells: Token[] = Array.from({ length: cellsCount }, (_, i) => ({
      type: 'cell',
      dots: DECORATIVE_PRESETS[i % DECORATIVE_PRESETS.length],
    }));
    return [cells];
  }

  if (!pattern) {
    return [[{ type: 'cell', dots: DECORATIVE_PRESETS[0] }]];
  }

  // Detect if pattern uses spaced-out single braille glyphs (e.g. "⠍ ⠁ ⠝ ⠊ ⠋" or "⠞ ⠗ ⠑ ⠎ · ⠏ ⠕ ⠗ ⠞")
  // If it has separators like '·' or '/', we split by those major parts.
  const hasSeparators = pattern.includes('·') || pattern.includes('•') || pattern.includes('/');
  
  // If it has '·', split into chunks by separator to keep words cohesive
  if (hasSeparators) {
    const rawParts = pattern.split(/([·•/])/g);
    const words: Token[][] = [];

    for (const part of rawParts) {
      const trimmed = part.trim();
      if (!trimmed) continue;

      if (trimmed === '·' || trimmed === '•' || trimmed === '/') {
        words.push([{ type: 'separator', char: trimmed }]);
        continue;
      }

      // Inside a phrase chunk, collect all cells
      const chunkTokens: Token[] = [];
      for (const char of trimmed) {
        if (char === ' ') continue; // collapse interior single spaces between letters
        const brailleDots = parseBrailleChar(char);
        if (brailleDots) {
          chunkTokens.push({ type: 'cell', dots: brailleDots });
        } else {
          const normalized = char.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
          if (LATIN_TO_DOTS[normalized]) {
            chunkTokens.push({ type: 'cell', dots: LATIN_TO_DOTS[normalized] });
          }
        }
      }
      if (chunkTokens.length > 0) {
        words.push(chunkTokens);
      }
    }
    return words.length > 0 ? words : [[{ type: 'cell', dots: DECORATIVE_PRESETS[0] }]];
  }

  // Check if string is a sequence of single characters separated by spaces (e.g. "⠍ ⠁ ⠝ ⠊ ⠋ ⠑ ⠎ ⠞ ⠕")
  const spaceTokens = pattern.trim().split(/\s+/);
  const allSingleChars = spaceTokens.length > 2 && spaceTokens.every(t => t.length === 1);

  if (allSingleChars) {
    // Treat as one cohesive word of cells
    const cells: Token[] = [];
    for (const token of spaceTokens) {
      const char = token[0];
      const brailleDots = parseBrailleChar(char);
      if (brailleDots) {
        cells.push({ type: 'cell', dots: brailleDots });
      } else {
        const normalized = char.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        if (LATIN_TO_DOTS[normalized]) {
          cells.push({ type: 'cell', dots: LATIN_TO_DOTS[normalized] });
        }
      }
    }
    return [cells];
  }

  // Standard multi-word parsing
  const words: Token[][] = [];
  for (const wordStr of spaceTokens) {
    const wordTokens: Token[] = [];
    for (const char of wordStr) {
      if (char === '·' || char === '•' || char === '/' || char === '-') {
        wordTokens.push({ type: 'separator', char });
        continue;
      }
      const brailleDots = parseBrailleChar(char);
      if (brailleDots) {
        wordTokens.push({ type: 'cell', dots: brailleDots });
        continue;
      }
      const normalized = char.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      if (LATIN_TO_DOTS[normalized]) {
        wordTokens.push({ type: 'cell', dots: LATIN_TO_DOTS[normalized] });
        continue;
      }
      wordTokens.push({
        type: 'cell',
        dots: DECORATIVE_PRESETS[char.charCodeAt(0) % DECORATIVE_PRESETS.length],
      });
    }
    if (wordTokens.length > 0) {
      words.push(wordTokens);
    }
  }

  return words.length > 0 ? words : [[{ type: 'cell', dots: DECORATIVE_PRESETS[0] }]];
}

export interface BrailleDotsProps {
  pattern?: string;
  cells?: number;
  size?: BrailleSize;
  accentColor?: string;
  opacity?: number;
  showInactive?: boolean;
  inactiveOpacity?: number;
  className?: string;
}

/**
 * BrailleDots: High-definition visual Braille component rendered via crisp SVG circles.
 * Replaces raw Unicode font glyphs with clean, evenly spaced geometric tactile dots.
 */
export const BrailleDots: React.FC<BrailleDotsProps> = ({
  pattern,
  cells,
  size = 'sm',
  accentColor = '#d4d4d4',
  opacity = 0.55,
  showInactive = true,
  inactiveOpacity = 0.08,
  className = '',
}) => {
  const cfg = SIZE_CONFIGS[size];
  const words = tokenizePattern(pattern, cells);

  return (
    <span
      className={`inline-flex flex-wrap items-center justify-center align-middle select-none ${cfg.wordGapClass} ${className}`}
      aria-hidden="true"
      role="img"
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className={`inline-flex items-center ${cfg.cellGapClass}`}>
          {word.map((token, tIdx) => {
            if (token.type === 'separator') {
              return (
                <span
                  key={tIdx}
                  className="inline-flex items-center justify-center px-0.5 text-neutral-600 select-none text-[10px]"
                >
                  {token.char === '·' || token.char === '•' ? (
                    <svg
                      width={cfg.width * 0.5}
                      height={cfg.height}
                      viewBox={`0 0 ${cfg.width * 0.5} ${cfg.height}`}
                      className="inline-block"
                    >
                      <circle
                        cx={(cfg.width * 0.5) / 2}
                        cy={cfg.height / 2}
                        r={cfg.r}
                        fill={accentColor}
                        opacity={opacity * 0.8}
                      />
                    </svg>
                  ) : (
                    <span className="opacity-40">{token.char}</span>
                  )}
                </span>
              );
            }

            const dots = token.dots;
            // 6 dot coordinates in standard Braille cell:
            // Dot 1: col0, row0 | Dot 4: col1, row0
            // Dot 2: col0, row1 | Dot 5: col1, row1
            // Dot 3: col0, row2 | Dot 6: col1, row2
            const dotCoords = [
              { cx: cfg.col0, cy: cfg.row0, active: dots[0] },
              { cx: cfg.col0, cy: cfg.row1, active: dots[1] },
              { cx: cfg.col0, cy: cfg.row2, active: dots[2] },
              { cx: cfg.col1, cy: cfg.row0, active: dots[3] },
              { cx: cfg.col1, cy: cfg.row1, active: dots[4] },
              { cx: cfg.col1, cy: cfg.row2, active: dots[5] },
            ];

            return (
              <svg
                key={tIdx}
                width={cfg.width}
                height={cfg.height}
                viewBox={cfg.viewBox}
                className="inline-block flex-shrink-0 transition-opacity duration-300"
              >
                {dotCoords.map((d, dIdx) => {
                  if (d.active) {
                    return (
                      <circle
                        key={dIdx}
                        cx={d.cx}
                        cy={d.cy}
                        r={cfg.r}
                        fill={accentColor}
                        opacity={opacity}
                      />
                    );
                  }
                  if (showInactive) {
                    return (
                      <circle
                        key={dIdx}
                        cx={d.cx}
                        cy={d.cy}
                        r={cfg.r}
                        fill="#ffffff"
                        opacity={inactiveOpacity}
                      />
                    );
                  }
                  return null;
                })}
              </svg>
            );
          })}
        </span>
      ))}
    </span>
  );
};

interface BrailleDividerProps {
  text?: string;
  braille?: string;
  accentColor?: string;
  className?: string;
  size?: BrailleSize;
}

export const BrailleDivider: React.FC<BrailleDividerProps> = ({
  text,
  braille = '⠇ ⠥ ⠵ / ⠑ ⠎ ⠉ ⠥ ⠗ ⠕',
  accentColor = '#d4d4d4',
  className = '',
  size = 'sm',
}) => {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 select-none ${className}`}>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-neutral-800" />
      <div className="flex items-center gap-3">
        <BrailleDots
          pattern={braille}
          size={size}
          accentColor={accentColor}
          opacity={0.6}
        />
        {text && (
          <span className="text-[10px] uppercase font-tension tracking-[0.2em] text-neutral-500 pl-1">
            {text}
          </span>
        )}
      </div>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-neutral-800" />
    </div>
  );
};

export const BrailleTexture: React.FC<{ opacity?: number; className?: string }> = ({
  opacity = 0.04,
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none bg-braille-pattern ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};
