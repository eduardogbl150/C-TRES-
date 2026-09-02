import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  alt?: string;
}

const LOGO_SOURCES = [
  '/ChatGPT Image 30 de jul. de 2026, 19_52_15.png',
  '/logo.png',
  '/logo.svg',
  '/logo-ctres.png',
  '/logo-c3.png',
];

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'h-14 w-auto object-contain',
  alt = 'c·três',
}) => {
  const [sourceIndex, setSourceIndex] = useState(0);

  const handleError = () => {
    if (sourceIndex < LOGO_SOURCES.length - 1) {
      setSourceIndex((prev) => prev + 1);
    }
  };

  return (
    <img
      src={LOGO_SOURCES[sourceIndex]}
      alt={alt}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
      loading="eager"
    />
  );
};
