import React, { useEffect, useRef } from 'react';

const PYTHON_KEYWORDS = [
  'def', 'class', 'import', 'lambda', 'yield', 'async', 'await',
  'return', 'try', 'except', 'finally', 'raise', 'with', 'self',
  '__init__', '[start:stop:step]', 'len()', 'isinstance()',
  'dict.get()', 'super().__init__()', '*args', '**kwargs',
  '0x7FF', 'True', 'False', 'None', 'elif', 'break'
];

export const CodeMatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Columns config
    const fontSize = 13;
    const columns = Math.floor(width / 36);
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * -100,
        speed: 0.35 + Math.random() * 0.45,
        word: PYTHON_KEYWORDS[Math.floor(Math.random() * PYTHON_KEYWORDS.length)],
        isGold: Math.random() > 0.65
      };
    }

    const render = () => {
      // Clear with soft fade
      ctx.fillStyle = 'rgba(10, 15, 29, 0.18)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        
        // Very dim and elegant opacity (3% - 6%)
        if (drop.isGold) {
          ctx.fillStyle = 'rgba(251, 191, 36, 0.055)';
        } else {
          ctx.fillStyle = 'rgba(225, 29, 72, 0.045)';
        }

        ctx.fillText(drop.word, i * 36, drop.y);

        drop.y += drop.speed;

        if (drop.y > height + 20) {
          drop.y = -20;
          drop.word = PYTHON_KEYWORDS[Math.floor(Math.random() * PYTHON_KEYWORDS.length)];
          drop.isGold = Math.random() > 0.65;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
