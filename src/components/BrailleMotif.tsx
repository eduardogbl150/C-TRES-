import React from 'react';

interface BrailleDividerProps {
  text?: string;
  braille?: string;
  accentColor?: string;
  className?: string;
}

export const BrailleDivider: React.FC<BrailleDividerProps> = ({
  text,
  braille = '⠇ ⠥ ⠵ / ⠑ ⠎ ⠉ ⠥ ⠗ ⠕',
  accentColor = '#f5f5f5',
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 select-none ${className}`}>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-neutral-800" />
      <div className="flex items-center gap-3 text-xs tracking-widest text-neutral-600 font-mono">
        <span
          className="text-base tracking-[0.25em] transition-colors duration-500"
          style={{ color: accentColor }}
          aria-hidden="true"
        >
          {braille}
        </span>
        {text && (
          <span className="text-[10px] uppercase font-tension tracking-[0.2em] text-neutral-500">
            {text}
          </span>
        )}
      </div>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-neutral-800" />
    </div>
  );
};

interface BrailleCellProps {
  dots?: boolean[]; // array of 6 booleans [1, 2, 3, 4, 5, 6]
  accentColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrailleCell: React.FC<BrailleCellProps> = ({
  dots = [true, false, true, true, false, false],
  accentColor = '#f5f5f5',
  size = 'md',
}) => {
  const dotSizes = {
    sm: 'w-1 h-1',
    md: 'w-1.5 h-1.5',
    lg: 'w-2 h-2',
  };

  const gapSizes = {
    sm: 'gap-1',
    md: 'gap-1.5',
    lg: 'gap-2',
  };

  return (
    <div className={`grid grid-cols-2 ${gapSizes[size]} p-1 inline-flex items-center`}>
      {dots.slice(0, 6).map((isActive, index) => (
        <span
          key={index}
          className={`rounded-full transition-all duration-300 ${dotSizes[size]} ${
            isActive ? 'opacity-90' : 'bg-neutral-800/40 opacity-30'
          }`}
          style={isActive ? { backgroundColor: accentColor } : {}}
        />
      ))}
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
