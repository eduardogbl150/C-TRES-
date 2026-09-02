import React, { useState } from 'react';

interface PortalTitleAssetProps {
  portalId: string;
  portalName: string;
  className?: string;
  imageClassName?: string;
}

/**
 * Multiple file path candidates for each portal,
 * identical to the structure implemented for BrandLogo.
 * Files can be placed in /public/ or sent directly.
 */
const PORTAL_SOURCES: Record<string, string[]> = {
  'teatro-cego': [
    '/teatro-cego.png',
    '/teatro-cego.svg',
    '/teatro-cego.webp',
    '/teatro-cego.jpg',
    '/logo-teatro-cego.png',
    '/logo-teatro-cego.svg',
    '/logo-teatro-cego.jpg',
    '/teatro_cego.png',
    '/Teatro Cego.png',
    '/assets/teatro-cego.png',
  ],
  'jantar-cego': [
    '/jantar-cego.png',
    '/jantar-cego.svg',
    '/jantar-cego.webp',
    '/jantar-cego.jpg',
    '/logo-jantar-cego.png',
    '/logo-jantar-cego.svg',
    '/logo-jantar-cego.jpg',
    '/jantar_cego.png',
    '/Jantar Cego.png',
    '/assets/jantar-cego.png',
  ],
  'expresso-dive': [
    '/expresso-dive.png',
    '/expresso-dive.svg',
    '/expresso-dive.webp',
    '/expresso-dive.jpg',
    '/logo-expresso-dive.png',
    '/logo-expresso-dive.svg',
    '/logo-expresso-dive.jpg',
    '/expresso_dive.png',
    '/Expresso Dive.png',
    '/assets/expresso-dive.png',
  ],
};

export const PortalTitleAsset: React.FC<PortalTitleAssetProps> = ({
  portalId,
  portalName,
  className = 'font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-100 tracking-tight',
  imageClassName = 'h-12 sm:h-16 lg:h-20 w-auto max-w-full object-contain',
}) => {
  const sources = PORTAL_SOURCES[portalId] || [];
  const [sourceIndex, setSourceIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(false);

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((prev) => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative inline-block max-w-full">
      {/* If external asset loaded successfully, render the image inside an accessible h3 */}
      {isLoaded && !allFailed ? (
        <h3 className="flex items-center">
          <span className="sr-only">{portalName}</span>
          <img
            src={sources[sourceIndex]}
            alt={portalName}
            className={imageClassName}
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </h3>
      ) : (
        /* Fallback: preserves exact typography and styles as requested ("não gostaria que fosse mudado") */
        <h3 className={className}>
          {portalName}
        </h3>
      )}

      {/* Background preloader to test source availability without disrupting the layout */}
      {!isLoaded && !allFailed && sources.length > 0 && (
        <img
          src={sources[sourceIndex]}
          alt=""
          className="hidden"
          onLoad={handleLoad}
          onError={handleError}
          referrerPolicy="no-referrer"
          loading="eager"
          aria-hidden="true"
        />
      )}
    </div>
  );
};
