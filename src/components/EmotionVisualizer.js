import React, { useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, Volume2 } from 'lucide-react';

const EmotionVisualizer = ({ emotion, isPlaying, onPlayToggle }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reset canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create visualization based on emotion
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;

    // Draw base circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${emotion.intensity * 360}, 70%, 60%, 0.2)`;
    ctx.fill();

    // Draw emotion waves
    const numWaves = 5;
    for (let i = 0; i < numWaves; i++) {
      ctx.beginPath();
      ctx.arc(
        centerX,
        centerY,
        radius * (1 - i * 0.15),
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = `hsla(${emotion.intensity * 360}, 70%, 60%, ${0.1 + i * 0.1})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Animate if playing
    if (isPlaying) {
      let angle = 0;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw rotating elements
        for (let i = 0; i < 12; i++) {
          const currentAngle = angle + (i * Math.PI / 6);
          const x = centerX + Math.cos(currentAngle) * radius * 0.8;
          const y = centerY + Math.sin(currentAngle) * radius * 0.8;
          
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${emotion.intensity * 360}, 70%, 60%, ${0.5 + Math.sin(angle) * 0.5})`;
          ctx.fill();
        }
        
        angle += 0.02;
        if (isPlaying) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }
  }, [emotion, isPlaying]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Emotion Soundscape</h2>
        <div className="flex items-center space-x-2">
          <Volume2 className="w-5 h-5 text-gray-400" />
          <div className="w-24 h-1 bg-gray-200 rounded-full">
            <div className="w-3/4 h-full bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="w-full h-full"
        />
      </div>

      <div className="flex justify-center items-center space-x-4">
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <SkipBack className="w-5 h-5" />
        </button>
        <button
          onClick={onPlayToggle}
          className="p-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <SkipBack className="w-5 h-5 transform rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default EmotionVisualizer;
