
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
          {[...Array(6)].map((_, i) => (
            <path
              key={`wave-${i}`}
              d={`M ${-200 + Math.sin(i * 60) * 400} ${200 + i * 300} 
                 C ${300 + Math.cos(i * 45) * 200} ${150 + i * 300} 
                   ${800 + Math.sin(i * 30) * 300} ${400 + i * 300}
                   ${1200 + Math.cos(i * 45) * 200} ${200 + i * 300}
                 C ${1600 + Math.sin(i * 60) * 200} ${500 + i * 300}
                   ${2000 + Math.cos(i * 30) * 300} ${300 + i * 300}
                   ${2200 + Math.sin(i * 45) * 200} ${400 + i * 300}`}
              fill="none"
              stroke="url(#mycelialGradient)"
              strokeWidth="1.5"
              className={`animate-[wiggle_${20 + i * 3}s_ease-in-out_infinite]`}
              style={{ animationDelay: `${-i * 2}s` }}
            />
          ))}
        </g>
        {/* Overlay layer with different timing */}
        <g style={{ filter: 'url(#gooey)' }}>
          {[...Array(5)].map((_, i) => (
            <path
              key={`wave-overlay-${i}`}
              d={`M ${-200 + Math.cos(i * 45) * 300} ${300 + i * 350} 
                 C ${400 + Math.sin(i * 30) * 200} ${500 + i * 350}
                   ${900 + Math.cos(i * 45) * 300} ${200 + i * 350}
                   ${1300 + Math.sin(i * 60) * 200} ${400 + i * 350}
                 C ${1700 + Math.cos(i * 30) * 200} ${300 + i * 350}
                   ${2100 + Math.sin(i * 45) * 300} ${500 + i * 350}
                   ${2400 + Math.cos(i * 60) * 200} ${200 + i * 350}`}
              fill="none"
              stroke="url(#mycelialGradient)"
              strokeWidth="1"
              className={`animate-[wiggle_${25 + i * 4}s_ease-in-out_infinite]`}
              style={{ animationDelay: `${-i * 3}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
