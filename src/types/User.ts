import { EmotionData } from './emotion';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinDate: string;
  preferences: {
    theme: string;
    notifications: boolean;
    privacy: 'public' | 'private';
    soundEnabled: boolean;
  };
  stats: {
    totalSessions: number;
    totalArtworks: number;
    dominantEmotion: string;
    averageSessionTime: number;
  };
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  progress: number;
}

export interface Session {
  id: string;
  date: string;
  duration: number;
  emotions: EmotionData[];
  artworks: string[];
}