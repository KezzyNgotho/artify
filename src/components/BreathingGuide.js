import React, { useState, useEffect } from 'react';
import { Wind } from 'lucide-react';

const BreathingGuide = () => {
  const [phase, setPhase] = useState('inhale'); // Removed TypeScript type
  const [counter, setCounter] = useState(4);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev === 1) {
          switch (phase) {
            case 'inhale':
              setPhase('hold');
              return 7;
            case 'hold':
              setPhase('exhale');
              return 8;
            case 'exhale':
              setPhase('inhale');
              return 4;
            default:
              return prev; // Default case for safety
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, phase]);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Breathing Exercise</h2>
        <Wind className="h-5 w-5 text-purple-600" />
      </div>

      <div className="flex flex-col items-center">
        <div className={`w-32 h-32 rounded-full flex items-center justify-center border-4 transition-all duration-1000 ${
          isActive ? 'border-purple-600 animate-pulse' : 'border-gray-200'
        }`}>
          <div className={`text-2xl font-bold ${
            isActive ? 'text-purple-600' : 'text-gray-400'
          }`}>
            {counter}
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-lg font-medium text-gray-700">
            {phase === 'inhale' ? 'Breathe In' : phase === 'hold' ? 'Hold' : 'Breathe Out'}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {phase === 'inhale' ? '4-7-8 Technique' : phase === 'hold' ? 'Stay Calm' : 'Release Tension'}
          </p>
        </div>

        <button
          onClick={() => setIsActive(!isActive)}
          className={`mt-6 px-6 py-2 rounded-lg font-medium transition-colors ${
            isActive
              ? 'bg-red-100 text-red-600 hover:bg-red-200'
              : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
          }`}
        >
          {isActive ? 'Stop' : 'Start'} Exercise
        </button>
      </div>
    </div>
  );
};

export default BreathingGuide;
