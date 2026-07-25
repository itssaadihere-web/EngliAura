import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showSubtitle = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 text-lg',
    md: 'h-11 text-xl',
    lg: 'h-16 text-3xl',
  };

  const iconSizes = {
    sm: 32,
    md: 44,
    lg: 60,
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual motif: Soft lavender watercolor cloud background with book + speech bubble icon */}
      <div 
        className="relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#EEF0FB] via-[#C9CBF0] to-[#7EC8E3]/30 p-2.5 shadow-sm border border-[#C9CBF0]/60 transition-transform duration-300 hover:scale-105"
        style={{ width: iconSizes[size], height: iconSizes[size] }}
      >
        {/* Soft aura blur */}
        <div className="absolute inset-0 rounded-2xl bg-[#C9CBF0]/40 blur-sm -z-10" />
        
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full text-[#2E2A9E]"
        >
          {/* Open Book Motif */}
          <path 
            d="M8 36C12.4 34.2 18 34.5 22 37V12C18 9.5 12.4 9.2 8 11V36Z" 
            fill="#4B3FCB" 
            fillOpacity="0.85"
            stroke="#2E2A9E" 
            strokeWidth="2" 
            strokeLinejoin="round" 
          />
          <path 
            d="M40 36C35.6 34.2 30 34.5 26 37V12C30 9.5 35.6 9.2 40 11V36Z" 
            fill="#4B3FCB" 
            fillOpacity="0.85"
            stroke="#2E2A9E" 
            strokeWidth="2" 
            strokeLinejoin="round" 
          />
          
          {/* Speech Bubble Icon with 3 dots overlay */}
          <path 
            d="M24 6C17.4 6 12 10.5 12 16C12 18.8 13.4 21.3 15.6 23.1L14 28L19.2 26C20.7 26.6 22.3 27 24 27C30.6 27 36 22.5 36 17C36 11.5 30.6 6 24 6Z" 
            fill="#7EC8E3" 
            stroke="#2E2A9E" 
            strokeWidth="2" 
          />
          <circle cx="19" cy="16" r="1.5" fill="#2E2A9E" />
          <circle cx="24" cy="16" r="1.5" fill="#2E2A9E" />
          <circle cx="29" cy="16" r="1.5" fill="#2E2A9E" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-display font-extrabold tracking-tight text-[#2E2A9E] ${sizeClasses[size]} leading-none`}>
          ENGLIAURA
        </span>
        {showSubtitle && (
          <span className="font-serif italic font-semibold text-[#4B3FCB] text-[10px] md:text-xs tracking-wide">
            by Maryam
          </span>
        )}
      </div>
    </div>
  );
}
