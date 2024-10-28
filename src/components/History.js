import React, { useState } from 'react';
import { Calendar, Clock, Download, ChevronDown, Filter } from 'lucide-react';

const History = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const mockHistory = [
    {
      id: '1',
      date: '2024-03-10',
      time: '14:30',
      emotion: 'Joy',
      duration: '15m',
      artworkUrl: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d',
      intensity: 0.8,
    },
    {
      id: '2',
      date: '2024-03-09',
      time: '10:15',
      emotion: 'Calm',
      duration: '20m',
      artworkUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab',
      intensity: 0.6,
    },
    {
      id: '3',
      date: '2024-03-08',
      time: '16:45',
      emotion: 'Focus',
      duration: '10m',
      artworkUrl: 'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9',
      intensity: 0.7,
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">History</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
              <Calendar className="h-4 w-4" />
              <span>This Week</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 text-sm font-medium text-gray-500">
          <div className="col-span-3">Date & Time</div>
          <div className="col-span-2">Emotion</div>
          <div className="col-span-2">Duration</div>
          <div className="col-span-3">Artwork</div>
          <div className="col-span-2">Intensity</div>
        </div>

        {mockHistory.map((entry) => (
          <div
            key={entry.id}
            className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 transition-colors"
          >
            <div className="col-span-3">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-800">{entry.date}</p>
                  <p className="text-sm text-gray-500">{entry.time}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                {entry.emotion}
              </span>
            </div>
            <div className="col-span-2 text-gray-600">{entry.duration}</div>
            <div className="col-span-3">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img
                    src={entry.artworkUrl}
                    alt={`Artwork for ${entry.emotion}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Download className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="col-span-2">
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-600 rounded-full"
                  style={{ width: `${entry.intensity * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
