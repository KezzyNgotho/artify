import React from 'react';
import { Brain, Lightbulb, Trophy, ArrowRight } from 'lucide-react';

const EmotionInsights = ({ insights }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'pattern': return Brain;
      case 'suggestion': return Lightbulb;
      case 'achievement': return Trophy;
      default: return null; // Handle the default case
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">AI Insights</h2>
      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = getIcon(insight.type);
          return (
            <div 
              key={index}
              className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {Icon && <Icon className="h-5 w-5 text-purple-600" />}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{insight.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                  {insight.actionable && (
                    <button className="mt-3 text-sm text-purple-600 hover:text-purple-700 flex items-center space-x-1">
                      <span>Try this</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmotionInsights;
