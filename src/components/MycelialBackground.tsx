
import React from 'react';

export const MycelialBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-natural-sage/5 to-transparent" />
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 2000 2000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="mycelialGradient" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="var(--mycelial-color-1, #87A878)" />
            <stop offset="100%" stopColor="var(--mycelial-color-2, #496F5D)" />
          </linearGradient>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"
            />
          </filter>
        </defs>
        {/* Base layer with gentle wiggling */}
        <g>
          {[...Array(8)].map((_, i) => (
            <path
              key={`wave-${i}`}
              d={`M ${-200} ${200 + i * 250} 
                 Q ${500} ${150 + i * 250 + Math.sin(i * 45) * 50} 
                   ${1000} ${200 + i * 250}
                 Q ${1500} ${250 + i * 250 + Math.cos(i * 45) * 50}
                   ${2200} ${200 + i * 250}`}
              fill="none"
              stroke="url(#mycelialGradient)"
              strokeWidth="2"
              className={`animate-[wiggle_${15 + i * 2}s_ease-in-out_infinite]`}
              style={{ animationDelay: `${-i * 1.5}s` }}
            />
          ))}
        </g>
        {/* Overlay layer with different timing */}
        <g style={{ filter: 'url(#gooey)' }}>
          {[...Array(8)].map((_, i) => (
            <path
              key={`wave-overlay-${i}`}
              d={`M ${-200} ${300 + i * 250} 
                 Q ${500} ${350 + i * 250 + Math.cos(i * 30) * 30} 
                   ${1000} ${300 + i * 250}
                 Q ${1500} ${250 + i * 250 + Math.sin(i * 30) * 30}
                   ${2200} ${300 + i * 250}`}
              fill="none"
              stroke="url(#mycelialGradient)"
              strokeWidth="1.5"
              className={`animate-[wiggle_${20 + i * 2}s_ease-in-out_infinite]`}
              style={{ animationDelay: `${-i * 2}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
