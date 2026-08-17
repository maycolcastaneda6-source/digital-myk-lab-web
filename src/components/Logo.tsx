import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = ''
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  }[size];

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-2xl'
  }[size];

  const subSizes = {
    sm: 'text-[8px]',
    md: 'text-[9px]',
    lg: 'text-[11px]',
    xl: 'text-xs'
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Logo Badge */}
      <div className={`relative ${iconDimensions} rounded-full p-[2px] bg-gradient-to-tr from-[#00d2ff] via-[#8b5cf6] to-[#f43f5e] shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-transform hover:scale-105 duration-300 shrink-0`}>
        {/* Inner dark container with circuit glow */}
        <div className="w-full h-full rounded-full bg-[#050814] flex items-center justify-center relative overflow-hidden border border-white/10">
          
          {/* Subtle radial aura */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,210,255,0.15)_0%,_transparent_70%)]" />
          
          {/* Vector Emblem: White 'D' + Gradient 'M' bars */}
          <svg viewBox="0 0 100 100" className="w-[82%] h-[82%] relative z-10" fill="none">
            <defs>
              {/* Gradient for M */}
              <linearGradient id="logoGradientM" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0070f3" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
              {/* Shadow for D */}
              <filter id="dShadow" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* D Geometric Polygon (White 3D Facet) */}
            <path
              d="M 22 24 L 44 36 L 44 68 L 22 80 L 14 74 L 14 30 Z"
              fill="#FFFFFF"
              filter="url(#dShadow)"
            />
            {/* D inner cut */}
            <path
              d="M 24 38 L 36 45 L 36 61 L 24 68 Z"
              fill="#050814"
            />
            {/* D Top facet */}
            <path
              d="M 22 24 L 44 36 L 36 42 L 17 31 Z"
              fill="#E2E8F0"
              opacity="0.9"
            />

            {/* M Pillar 1 (Left low) */}
            <polygon
              points="48,46 56,41 56,80 48,80"
              fill="url(#logoGradientM)"
            />
            {/* M Pillar 2 (Center medium) */}
            <polygon
              points="60,34 68,29 68,80 60,80"
              fill="url(#logoGradientM)"
            />
            {/* M Pillar 3 (Right high with angled top) */}
            <polygon
              points="72,22 84,15 84,80 72,80"
              fill="url(#logoGradientM)"
            />
            {/* M Slanted top connector bar */}
            <polygon
              points="48,46 84,20 84,28 48,54"
              fill="url(#logoGradientM)"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className={`font-extrabold tracking-wider ${titleSizes} flex items-center gap-1.5`}>
            <span className="text-white">DIGITAL</span>
            <span className="text-[#00d2ff] drop-shadow-[0_0_8px_rgba(0,210,255,0.6)]">MYK</span>
            <span className="text-white">LAB</span>
          </div>

          <div className={`flex items-center gap-1.5 font-bold uppercase tracking-widest text-slate-300 ${subSizes}`}>
            <span className="h-[1.5px] w-3 bg-gradient-to-r from-transparent to-[#00d2ff]" />
            <span className="text-[9px] text-slate-300 tracking-wider">SEGURIDAD Y GARANTÍA</span>
            <span className="h-[1.5px] w-3 bg-gradient-to-l from-transparent to-[#f43f5e]" />
          </div>
        </div>
      )}
    </div>
  );
};
