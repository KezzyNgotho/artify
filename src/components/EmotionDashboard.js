import React from 'react';
import { Sparkles, Clock, ChevronRight } from 'lucide-react';

const EmotionDashboard = ({ emotion }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Emotion Analysis</h2>
        <div className="flex items-center space-x-1 text-purple-600 text-sm">
          <Sparkles className="h-4 w-4" />
          <span>AI Powered</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-purple-50 rounded-xl p-4">
          <h3 className="text-sm font-medium text-purple-600 mb-2">Dominant Emotion</h3>
          <div className="text-3xl font-bold text-purple-700 capitalize">
            {emotion.dominant}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">Intensity</h3>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${emotion.intensity * 100}%` }}
            >
              <div className="w-full h-full opacity-75 animate-pulse"></div>
            </div>
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-400">
            <span>Subtle</span>
            <span>Intense</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">Secondary Emotions</h3>
          <div className="flex flex-wrap gap-2">
            {emotion.secondary.map((secEmotion) => (
              <span 
                key={secEmotion}
                className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-sm hover:bg-purple-50 hover:text-purple-600 transition-colors cursor-pointer"
              >
                {secEmotion}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500 flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Recent History</span>
            </h3>
            <button className="text-xs text-purple-600 hover:text-purple-700 transition-colors">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {['Joy', 'Calm', 'Focus'].map((recentEmotion, index) => (
              <div 
                key={recentEmotion}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    index === 0 ? 'bg-green-400' : index === 1 ? 'bg-blue-400' : 'bg-purple-400'
                  }`}></div>
                  <span className="text-sm text-gray-600">{recentEmotion}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-400">2m ago</span>
                  <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionDashboard;
