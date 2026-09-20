import React from 'react';
import mainLogo from '../assets/Main-logo-cropped.png';

interface LogoProps {
  isDarkBackground?: boolean;
  className?: string;
  imgClassName?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({
  className = '',
  imgClassName = '',
  size = 'md'
}: LogoProps) {
  // Height classes scaled for crisp, proportional and prominent display:
  // - sm: mobile drawer / compact header (approx 48px - 54px)
  // - md: main navigation bar (approx 56px on mobile, 68px on tablet, 80px - 88px on desktop)
  // - lg: footer brand section (approx 76px on mobile, 96px on tablet, 120px - 130px on desktop)
  // - xl: showcase / large presentations
  const heightClass =
    size === 'sm'
      ? 'h-[44px] sm:h-[52px]'
      : size === 'lg'
      ? 'h-[76px] sm:h-[96px] md:h-[114px] lg:h-[130px]'
      : size === 'xl'
      ? 'h-[110px] sm:h-[140px] md:h-[170px]'
      : 'h-[52px] sm:h-[64px] md:h-[76px] lg:h-[86px]';

  return (
    <div
      id="brand-logo-raarchitex"
      className={`inline-flex items-center select-none ${className}`}
      title="RAARCHITEX | Architecture | Design | Engineering"
    >
      <img
        src={mainLogo}
        alt="RAARCHITEX | Architecture | Design | Engineering"
        className={`${heightClass} w-auto max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[560px] object-contain transition-all duration-200 ${imgClassName}`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}



