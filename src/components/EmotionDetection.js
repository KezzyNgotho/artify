import React from 'react';
import { Smile, BarChart2, Activity } from 'lucide-react';

const EmotionDetection = () => {
  const emotions = [
    { name: 'Joy', value: 75, color: 'bg-yellow-400' },
    { name: 'Calm', value: 60, color: 'bg-blue-400' },
    { name: 'Energy', value: 85, color: 'bg-green-400' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Current Mood</h3>
            <Smile size={24} />
          </div>
          <p className="text-3xl font-bold mt-4">Positive</p>
          <p className="mt-2 text-indigo-100">85% confidence</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Daily Track</h3>
            <BarChart2 size={24} className="text-gray-600" />
          </div>
          <div className="mt-4 space-y-4">
            {emotions.map((emotion) => (
              <div key={emotion.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{emotion.name}</span>
                  <span>{emotion.value}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-full rounded-full ${emotion.color}`}
                    style={{ width: `${emotion.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Activity Impact</h3>
            <Activity size={24} className="text-gray-600" />
          </div>
          <div className="mt-4">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
              alt="Activity Chart"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Emotion Timeline</h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="w-full bg-indigo-100 rounded-t"
              style={{
                height: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmotionDetection;