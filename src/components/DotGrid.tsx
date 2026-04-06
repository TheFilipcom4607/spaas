import { useEffect, useRef } from 'react';

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      const spacing = 35;
      const radius = 1.2;
      const maxDistance = 250;

      for (let x = 0; x < window.innerWidth; x += spacing) {
        for (let y = 0; y < window.innerHeight; y += spacing) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let currentRadius = radius;
          let opacity = 0.15;
          
          // Base dot color (subtle zinc)
          let r = 63, g = 63, b = 70; // zinc-700

          if (distance < maxDistance) {
            const scale = 1 - distance / maxDistance;
            currentRadius = radius + scale * 2.5;
            opacity = 0.15 + scale * 0.8;
            
            // Glow color (violet-500: 139, 92, 246)
            r = 63 + (139 - 63) * scale;
            g = 63 + (92 - 63) * scale;
            b = 70 + (246 - 70) * scale;
          }

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
