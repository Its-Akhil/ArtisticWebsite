import React, { useEffect, useRef } from 'react';

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const gridSize = 30; 
    const lineLength = 12;
    
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const drawSketchyLine = (x1: number, y1: number, x2: number, y2: number) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      
      // Add slight randomness for sketchy effect
      const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * 1.5;
      const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * 1.5;
      
      ctx.quadraticCurveTo(midX, midY, x2, y2);
      ctx.stroke();
    };

    const drawGrid = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#94a3b8'; 
      ctx.lineWidth = 0.8; 

      const offsetX = (mouseX - canvas.width / 2) * 0.03;
      const offsetY = (mouseY - canvas.height / 2) * 0.03;

      // Draw grid points with sketchy connecting lines
      for (let x = 0; x < canvas.offsetWidth + gridSize; x += gridSize) {
        for (let y = 0; y < canvas.offsetHeight + gridSize; y += gridSize) {
          const distanceToMouse = Math.sqrt(
            Math.pow((x - mouseX), 2) + Math.pow((y - mouseY), 2)
          );
          
          const distanceFactor = Math.min(1, distanceToMouse / 300);
          const movement = (1 - distanceFactor) * 8;
          
          const currentX = x + offsetX * (1 - distanceFactor);
          const currentY = y + offsetY * (1 - distanceFactor);

          // Draw sketchy cross at each point
          if (Math.random() > 0.05) { 
            drawSketchyLine(
              currentX - lineLength + Math.random() * 2,
              currentY + Math.random() * 2,
              currentX + lineLength + Math.random() * 2,
              currentY + Math.random() * 2
            );
            drawSketchyLine(
              currentX + Math.random() * 2,
              currentY - lineLength + Math.random() * 2,
              currentX + Math.random() * 2,
              currentY + lineLength + Math.random() * 2
            );
          }

          // Connect to neighbors with sketchy lines
          if (x + gridSize < canvas.offsetWidth && Math.random() > 0.2) {
            drawSketchyLine(
              currentX + movement * Math.random(),
              currentY + movement * Math.random(),
              currentX + gridSize + movement * Math.random(),
              currentY + movement * Math.random()
            );
          }
          if (y + gridSize < canvas.offsetHeight && Math.random() > 0.2) {
            drawSketchyLine(
              currentX + movement * Math.random(),
              currentY + movement * Math.random(),
              currentX + movement * Math.random(),
              currentY + gridSize + movement * Math.random()
            );
          }
        }
      }

      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      requestAnimationFrame(drawGrid);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    resize();
    drawGrid();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ touchAction: 'none' }}
    />
  );
}