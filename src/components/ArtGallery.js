import React, { useState } from 'react';
import { Grid, List, Filter, Download, Share2, Heart } from 'lucide-react';

const ArtGallery = () => {
  const [viewMode, setViewMode] = useState('grid'); // Can be 'grid' or 'list'
  const [filter, setFilter] = useState('all'); // For future use

  const mockArtworks = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d',
      emotion: 'Joy',
      date: '2024-03-10',
      likes: 24,
      isLiked: false,
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab',
      emotion: 'Serenity',
      date: '2024-03-09',
      likes: 18,
      isLiked: true,
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9',
      emotion: 'Energy',
      date: '2024-03-08',
      likes: 32,
      isLiked: false,
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Art Gallery</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white rounded-lg shadow-sm p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className={`grid gap-6 ${
        viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
      }`}>
        {mockArtworks.map((artwork) => (
          <div
            key={artwork.id}
            className={`bg-white rounded-xl shadow-sm overflow-hidden group ${
              viewMode === 'list' ? 'flex' : ''
            }`}
          >
            <div className={`relative ${viewMode === 'list' ? 'w-48 h-48' : 'aspect-square'}`}>
              <img
                src={artwork.imageUrl}
                alt={`Artwork representing ${artwork.emotion}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Download className="h-5 w-5 text-gray-700" />
                </button>
                <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Share2 className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
            <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-gray-800">{artwork.emotion}</h3>
                  <p className="text-sm text-gray-500">{artwork.date}</p>
                </div>
                <button className={`p-2 rounded-full ${
                  artwork.isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                } transition-colors`}>
                  <Heart className="h-5 w-5" fill={artwork.isLiked ? 'currentColor' : 'none'} />
                </button>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>{artwork.likes} likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
