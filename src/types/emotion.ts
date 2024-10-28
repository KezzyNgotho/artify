import { LucideIcon } from 'lucide-react';

export type EmotionData = {
  dominant: string;
  intensity: number;
  secondary: string[];
  timestamp: number;
  audioMetrics?: {
    pitch: number;
    tempo: number;
    volume: number;
    tonality: 'positive' | 'neutral' | 'negative';
    confidence: number;
  };
  facialMetrics?: {
    smile: number;
    eyeContact: number;
    tension: number;
    expressions: {
      joy: number;
      sadness: number;
      anger: number;
      surprise: number;
      fear: number;
      disgust: number;
    };
  };
  bodyMetrics?: {
    posture: number;
    movement: number;
    gestureIntensity: number;
    confidence: number;
  };
};

export type JournalEntry = {
  id: string;
  timestamp: number;
  emotion: EmotionData;
  artworkUrl: string;
  notes: string;
  tags: string[];
};

export type EmotionInsight = {
  type: 'pattern' | 'suggestion' | 'achievement';
  title: string;
  description: string;
  actionable?: string;
  confidence: number;
};

export type EmotionArtStyle = {
  id: string;
  name: string;
  description: string;
  preview: string;
  emotionMapping: {
    [key: string]: {
      colors: string[];
      shapes: string[];
      patterns: string[];
      intensity: number;
    };
  };
};

export type EmotionSoundscape = {
  id: string;
  name: string;
  baseTrack: string;
  emotionLayers: {
    [key: string]: {
      instrument: string;
      tempo: number;
      volume: number;
      effects: string[];
    };
  };
};