import React, { useEffect, useRef, useState } from 'react';
import { Download, Share2, Maximize2, RefreshCw } from 'lucide-react';

const ArtCanvas = ({ emotion, isRecording }) => {
  const canvasRef = useRef(null);
  const [artStyle, setArtStyle] = useState('abstract');
  const [colorTheme, setColorTheme] = useState('dynamic');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Example visualization with more dynamic elements
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#c084fc');
    gradient.addColorStop(0.5, '#8b5cf6');
    gradient.addColorStop(1, '#db2777');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Create multiple shapes based on emotion
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = (50 + Math.random() * 100) * emotion.intensity;
      
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`;
      ctx.fill();
    }
  }, [emotion, isRecording, artStyle, colorTheme]);

  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 1500);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Generated Artwork</h2>
        <div className="flex space-x-2">
          <button 
            onClick={handleRegenerate}
            className="p-2 hover:bg-purple-50 rounded-lg transition-colors group"
          >
            <RefreshCw className={`h-5 w-5 text-purple-600 transition-transform duration-700 ${
              isGenerating ? 'rotate-180' : ''
            } group-hover:rotate-180`} />
          </button>
          <button className="p-2 hover:bg-purple-50 rounded-lg transition-colors">
            <Share2 className="h-5 w-5 text-purple-600" />
          </button>
          <button className="p-2 hover:bg-purple-50 rounded-lg transition-colors">
            <Download className="h-5 w-5 text-purple-600" />
          </button>
          <button className="p-2 hover:bg-purple-50 rounded-lg transition-colors">
            <Maximize2 className="h-5 w-5 text-purple-600" />
          </button>
        </div>
      </div>

      <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden group">
        <canvas
          ref={canvasRef}
          className="w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {isRecording && (
          <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm">Recording</span>
          </div>
        )}
        {isGenerating && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
            <div className="flex items-center space-x-3 bg-white/90 px-4 py-2 rounded-lg">
              <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm font-medium">Generating...</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Art Style</h3>
          <select 
            value={artStyle}
            onChange={(e) => setArtStyle(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all"
          >
            <option value="abstract">Abstract</option>
            <option value="surreal">Surreal</option>
            <option value="minimalist">Minimalist</option>
            <option value="geometric">Geometric</option>
          </select>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Color Theme</h3>
          <select 
            value={colorTheme}
            onChange={(e) => setColorTheme(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all"
          >
            <option value="dynamic">Dynamic</option>
            <option value="warm">Warm</option>
            <option value="cool">Cool</option>
            <option value="monochrome">Monochrome</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ArtCanvas;
