import React, { useState } from 'react';
import { Camera, Mic, LayoutDashboard, PaintBucket, History, Settings, User, HelpCircle } from 'lucide-react';
import EmotionDashboard from '../components/EmotionDashboard';
import ArtCanvas from '../components/ArtCanvas';
import ControlPanel from '../components/ControlPanel';
import Sidebar from '../components/Sidebar';
import ThemeSwitcher from '../components/ThemeSwitcher';
import EmotionInsights from '../components/EmotionInsights';
import BreathingGuide from '../components/BreathingGuide';
import JournalPrompt from '../components/JournalPrompt';
import { useTheme } from '../hooks/useTheme';
import type { EmotionInsight } from '../types/emotion';

function Dashboard() {
  const { currentTheme, setCurrentTheme, theme } = useTheme();
  const [isRecording, setIsRecording] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState({
    dominant: 'neutral',
    intensity: 0.5,
    secondary: ['calm', 'focused']
  });

  const mockInsights: EmotionInsight[] = [
    {
      type: 'pattern',
      title: 'Emotional Pattern Detected',
      description: 'Your anxiety levels tend to peak during afternoon hours. Consider taking short breaks.',
      actionable: 'Schedule 5-minute breathing sessions'
    },
    {
      type: 'suggestion',
      title: 'Try This Exercise',
      description: 'Based on your current state, a quick mindfulness session might help center your thoughts.',
      actionable: 'Start breathing exercise'
    },
    {
      type: 'achievement',
      title: 'Emotional Growth',
      description: 'You have maintained balanced emotions for 3 days straight. Keep up the great work!',
    }
  ];

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const handleJournalSave = (entry: string) => {
    console.log('Saving journal entry:', entry);
    // Here you would typically save to your backend
  };

  return (
    <div className="flex h-screen" style={{ background: theme.colors.background }}>
      <Sidebar theme={theme} />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: theme.colors.text }}>
                Emotion Studio
              </h1>
              <p style={{ color: theme.colors.secondary }}>
                Transform your emotions into digital art
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeSwitcher 
                currentTheme={currentTheme}
                onThemeChange={setCurrentTheme}
              />
              <button className="p-2 hover:bg-opacity-80 rounded-lg transition-colors">
                <HelpCircle className="h-5 w-5" style={{ color: theme.colors.primary }} />
              </button>
              <button className="p-2 hover:bg-opacity-80 rounded-lg transition-colors">
                <User className="h-5 w-5" style={{ color: theme.colors.primary }} />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Controls & Stats */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <ControlPanel 
                isRecording={isRecording} 
                onToggleRecording={toggleRecording}
                theme={theme}
              />
              <EmotionDashboard 
                emotion={currentEmotion}
                theme={theme}
              />
              <BreathingGuide />
            </div>

            {/* Middle Column - Art Display */}
            <div className="col-span-12 lg:col-span-4">
              <ArtCanvas 
                emotion={currentEmotion}
                isRecording={isRecording}
                theme={theme}
              />
            </div>

            {/* Right Column - Insights & Journal */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <EmotionInsights insights={mockInsights} />
              <JournalPrompt 
                emotion={currentEmotion.dominant}
                onSave={handleJournalSave}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
