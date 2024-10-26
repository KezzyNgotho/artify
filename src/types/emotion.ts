export type EmotionData = {
  dominant: string;
  intensity: number;
  secondary: string[];
  timestamp: number;
  audioMetrics?: {
    pitch: number;
    tempo: number;
    volume: number;
  };
  facialMetrics?: {
    smile: number;
    eyeContact: number;
    tension: number;
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
};