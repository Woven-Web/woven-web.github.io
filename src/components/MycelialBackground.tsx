
import React from 'react';
import { cn } from '@/lib/utils';

interface MycelialBackgroundProps {
  className?: string;
  color?: string;
  secondaryColor?: string;
  animationSpeed?: 'slow' | 'medium' | 'fast';
  density?: 'low' | 'medium' | 'high';
  opacity?: number;
}

export const MycelialBackground = ({
  className,
  color = '#87A878',
  secondaryColor = '#496F5D',
  animationSpeed = 'medium',
  density = 'medium',
  opacity = 0.1,
}: MycelialBackgroundProps) => {
  const getAnimationDuration = () => {
    switch (animationSpeed) {
      case 'slow': return '40s';
      case 'fast': return '20s';
      default: return '30s';
    }
  };

  const getPathCount = () => {
    switch (density) {
      case 'low': return 4;
      case 'high': return 8;
      default: return 6;
    }
  };

  const generateRandomCurve = (index: number) => {
    const baseY = 200 + index * 300;
    const amplitude = 200;
    const frequency = 0.01;
    
    return `
      M ${-200 + Math.sin(index * 60) * amplitude} ${baseY}
      C ${300 + Math.cos(index * 45) * amplitude} ${baseY - 100}
        ${800 + Math.sin(index * 30) * amplitude} ${baseY + 200}
        ${1200 + Math.cos(index * 45) * amplitude} ${baseY}
      C ${1600 + Math.sin(index * 60) * amplitude} ${baseY + 300}
        ${2000 + Math.cos(index * 30) * amplitude} ${baseY}
        ${2200 + Math.sin(index * 45) * amplitude} ${baseY + 200}
    `;
  };

  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden pointer-events-none", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-natural-sage/5 to-transparent" />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 2000 2000"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity }}
      >
        <defs>
          <linearGradient id="mycelialGradient" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="flowFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="flow"
            />
          </filter>
        </defs>

        {/* Base structure layer */}
        <g>
          {[...Array(getPathCount())].map((_, i) => (
            <path
              key={`base-${i}`}
              d={generateRandomCurve(i)}
              fill="none"
              stroke={`url(#mycelialGradient)`}
              strokeWidth="1.5"
              className="opacity-60"
              style={{
                animation: `pulse ${getAnimationDuration()} ease-in-out infinite`,
                animationDelay: `${-i * 2}s`
              }}
            />
          ))}
        </g>

        {/* Flowing energy layer */}
        <g filter="url(#flowFilter)">
          {[...Array(getPathCount() - 1)].map((_, i) => (
            <path
              key={`flow-${i}`}
              d={generateRandomCurve(i + 0.5)}
              fill="none"
              stroke={`url(#mycelialGradient)`}
              strokeWidth="1"
              className="opacity-40"
              style={{
                animation: `flow ${getAnimationDuration()} ease-in-out infinite`,
                animationDelay: `${-i * 3}s`
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
