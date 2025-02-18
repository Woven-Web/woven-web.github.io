
import React from 'react';

export const MycelialBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-natural-sage/5 to-transparent" />
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1000 1000"
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
        {/* Base layer with slower animation */}
        <g className="animate-[flow_20s_linear_infinite]">
          {[...Array(5)].map((_, i) => (
            <path
              key={`wave-${i}`}
              d={`M ${-200 + i * 200} 500 
                 C ${-100 + i * 200} ${400 + Math.sin(i * 30) * 50} 
                   ${0 + i * 200} ${500 + Math.cos(i * 45) * 50} 
                   ${100 + i * 200} 500 
                 C ${200 + i * 200} ${600 + Math.sin(i * 60) * 50} 
                   ${300 + i * 200} ${500 + Math.cos(i * 45) * 50} 
                   ${400 + i * 200} 500`}
              fill="none"
              stroke="url(#mycelialGradient)"
              strokeWidth="2"
              className={`animate-[pulse_${8 + i * 2}s_ease-in-out_infinite]`}
              style={{ animationDelay: `${-i * 2}s` }}
            />
          ))}
        </g>
        {/* Overlay layer with faster animation */}
        <g className="animate-[flow_15s_linear_infinite]" style={{ filter: 'url(#gooey)' }}>
          {[...Array(5)].map((_, i) => (
            <path
              key={`wave-overlay-${i}`}
              d={`M ${-200 + i * 200} 500 
                 C ${-100 + i * 200} ${450 + Math.cos(i * 45) * 30} 
                   ${0 + i * 200} ${500 + Math.sin(i * 30) * 30} 
                   ${100 + i * 200} 500 
                 C ${200 + i * 200} ${550 + Math.cos(i * 60) * 30} 
                   ${300 + i * 200} ${500 + Math.sin(i * 45) * 30} 
                   ${400 + i * 200} 500`}
              fill="none"
              stroke="url(#mycelialGradient)"
              strokeWidth="1.5"
              className={`animate-[pulse_${6 + i * 2}s_ease-in-out_infinite]`}
              style={{ animationDelay: `${-i * 1.5}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
