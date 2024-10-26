import { useState, useEffect } from 'react';
import { themes } from '../types/theme';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    const theme = themes[currentTheme];
    
    // Set CSS variables for theme colors
    document.documentElement.style.setProperty('--color-primary', theme.colors.primary);
    document.documentElement.style.setProperty('--color-secondary', theme.colors.secondary);
    document.documentElement.style.setProperty('--color-accent', theme.colors.accent);
    document.documentElement.style.setProperty('--color-background', theme.colors.background);
    document.documentElement.style.setProperty('--color-surface', theme.colors.surface);
    document.documentElement.style.setProperty('--color-text', theme.colors.text);
    document.documentElement.style.setProperty('--color-border', theme.colors.border);
    
    // Update body background and text color
    document.body.style.backgroundColor = theme.colors.background;
    document.body.style.color = theme.colors.text;
  }, [currentTheme]);

  return {
    currentTheme,
    setCurrentTheme,
    theme: themes[currentTheme]
  };
};
