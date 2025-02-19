import React, { useEffect, useRef, useState } from 'react';

interface MycelialBackgroundProps {
  color?: string;
  density?: number;
  animationSpeed?: number;
  glowIntensity?: number;
}

export const MycelialBackground: React.FC<MycelialBackgroundProps> = ({
  color = '#4a9eff',
  density = 0.7,
  animationSpeed = 1,
  glowIntensity = 0.6,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Node structure for mycelial network
  interface Node {
    x: number;
    y: number;
    connections: Node[];
    energy: number;
    angle: number;
    radius: number;
    rotationSpeed: number;
    controlPoints: { x1: number; y1: number; x2: number; y2: number; };
  }

  // Initialize nodes
  const initializeNodes = (width: number, height: number): Node[] => {
    const nodeCount = Math.floor((width * height) / 15000 * density);
    const nodes: Node[] = [];
    
    // Calculate extended boundaries for node placement
    const extendedWidth = width * 1.4;  // 20% wider on each side
    const extendedHeight = height * 1.4; // 20% taller on each side
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Create nodes with varied distribution patterns
    for (let i = 0; i < nodeCount; i++) {
      let x, y, radius, angle;
      
      // Mix different distribution patterns
      if (Math.random() < 0.7) {
        // Circular pattern with extended radius
        radius = Math.random() * Math.max(extendedWidth, extendedHeight) * 0.6;
        angle = Math.random() * Math.PI * 2;
        x = centerX + radius * Math.cos(angle);
        y = centerY + radius * Math.sin(angle);
      } else {
        // Random distribution across extended area
        x = (Math.random() * extendedWidth) - (extendedWidth - width) / 2;
        y = (Math.random() * extendedHeight) - (extendedHeight - height) / 2;
        radius = Math.hypot(x - centerX, y - centerY);
        angle = Math.atan2(y - centerY, x - centerX);
      }
      
      nodes.push({
        x: x,
        y: y,
        connections: [],
        energy: Math.random(),
        angle: angle,
        radius: radius,
        rotationSpeed: (Math.random() - 0.5) * 0.001, // Random rotation speed
        controlPoints: { x1: 0, y1: 0, x2: 0, y2: 0 } // Will be set when creating connections
      });
    }

    // Create connections between nearby nodes
    // Create organic connections with control points
    nodes.forEach(node => {
      nodes.forEach(otherNode => {
        if (node !== otherNode) {
          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
          const maxDistance = 250 * (1 + (Math.min(node.radius, otherNode.radius) / (Math.max(width, height) * 0.6)));
          if (distance < maxDistance) { // Dynamic connection distance based on radius
            // Calculate control points for curved connections
            const midX = (node.x + otherNode.x) / 2;
            const midY = (node.y + otherNode.y) / 2;
            const perpX = -(otherNode.y - node.y);
            const perpY = otherNode.x - node.x;
            // Curve intensity varies based on distance and position
            const distanceFactor = Math.min(1, distance / maxDistance);
            const curveFactor = (Math.random() * 0.3 + 0.3) * distanceFactor;
            
            node.controlPoints = {
              x1: midX + perpX * curveFactor,
              y1: midY + perpY * curveFactor,
              x2: midX - perpX * curveFactor,
              y2: midY - perpY * curveFactor
            };
            
            node.connections.push(otherNode);
          }
        }
      });
    });

    return nodes;
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { clientWidth, clientHeight } = document.documentElement;
        setDimensions({
          width: clientWidth,
          height: clientHeight
        });
        canvasRef.current.width = clientWidth;
        canvasRef.current.height = clientHeight;
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let nodes = initializeNodes(dimensions.width, dimensions.height);
    let animationFrameId: number;

    const render = (timestamp: number) => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Update and draw nodes
      // Update node positions with gentle circular motion
      nodes.forEach(node => {
        const centerX = dimensions.width / 2;
        const centerY = dimensions.height / 2;
        
        // Update angle for circular motion
        node.angle += node.rotationSpeed * animationSpeed;
        
        // Update position based on circular motion
        // Add subtle drift to node positions
        const drift = Math.sin(timestamp * 0.0002 + node.angle) * 2;
        const driftX = Math.cos(node.angle * 1.5) * drift;
        const driftY = Math.sin(node.angle * 1.5) * drift;
        
        node.x = centerX + node.radius * Math.cos(node.angle) + driftX;
        node.y = centerY + node.radius * Math.sin(node.angle) + driftY;
        
        // Update energy levels with a wave pattern
        node.energy = (Math.sin(timestamp * 0.001 * animationSpeed + node.angle) + 1) / 2;

        // Draw connections with energy flow effect and curves
        node.connections.forEach(connection => {
          const gradient = ctx.createLinearGradient(
            node.x, node.y, connection.x, connection.y
          );

          const alpha = Math.min(node.energy, connection.energy) * glowIntensity;
          const baseColor = hexToRgb(color);
          
          gradient.addColorStop(0, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${alpha})`);
          gradient.addColorStop(0.5, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${alpha * 0.7})`);
          gradient.addColorStop(1, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${alpha * 0.3})`);

          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          
          // Draw curved path using bezier curves
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.bezierCurveTo(
            node.controlPoints.x1,
            node.controlPoints.y1,
            node.controlPoints.x2,
            node.controlPoints.y2,
            connection.x,
            connection.y
          );
          ctx.stroke();
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, color, density, animationSpeed, glowIntensity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
};

// Utility function to convert hex color to RGB
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

export default MycelialBackground;
