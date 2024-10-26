import React from 'react';
import { Palette, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-xl">
              <Palette className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Emotion-to-Art Translator
              </h1>
              <p className="text-sm text-gray-500">Transform your feelings into art</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Gallery</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
            <button className="px-6 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Creating
            </button>
          </nav>

          <button className="md:hidden p-2 hover:bg-purple-50 rounded-lg transition-colors">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
