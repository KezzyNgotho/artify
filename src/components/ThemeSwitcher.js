import React from 'react';
import { Palette } from 'lucide-react';
import { themes } from '../types/theme';

const ThemeSwitcher = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="relative group">
      <button className="p-2 hover:bg-opacity-80 rounded-lg transition-colors flex items-center space-x-2">
        <Palette className="h-5 w-5" />
        <span className="text-sm font-medium hidden md:inline">Theme</span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-2">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => onThemeChange(key)}
              className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                currentTheme === key 
                  ? 'bg-gray-100 dark:bg-gray-700' 
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div 
                className={`w-6 h-6 rounded-full bg-gradient-to-r ${theme.gradient}`}
              />
              <span className="text-sm font-medium">{theme.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
