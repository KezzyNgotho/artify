import React, { useState,useRef } from 'react';
import { Camera, Mic, LayoutDashboard, PaintBucket, History, Settings, User, HelpCircle } from 'lucide-react';
import EmotionDashboard from '../components/EmotionDashboard';
import ArtCanvas from '../components/ArtCanvas';
import ControlPanel from '../components/ControlPanel';
import Sidebar from '../components/Sidebar';
import ThemeSwitcher from '../components/ThemeSwitcher';
import EmotionInsights from '../components/EmotionInsights';
import BreathingGuide from '../components/BreathingGuide';
import JournalPrompt from '../components/JournalPrompt';
import ArtGallery from '../components/ArtGallery';
import HistoryView from '../components/History';
import SettingsView from '../components/Settings';
import EmotionAnalyzer from '../components/EmotionAnalyzer';
import EmotionVisualizer from '../components/EmotionVisualizer';
import UserProfile from '../components/UserProfile';
import { useTheme } from '../hooks/useTheme';

// Define the initial emotion data as a plain JavaScript object
const initialEmotionData = {
  dominant: 'neutral',
  intensity: 0.5,
  secondary: ['calm', 'focused'],
  timestamp: Date.now(),
  facialMetrics: {
    smile: 0.6,
    eyeContact: 0.8,
    tension: 0.3,
    expressions: {
      joy: 0.7,
      sadness: 0.1,
      anger: 0.1,
      surprise: 0.2,
      fear: 0.1,
      disgust: 0.1
    }
  },
  audioMetrics: {
    pitch: 0.5,
    tempo: 0.6,
    volume: 0.4,
    tonality: 'positive',
    confidence: 0.8
  },
  bodyMetrics: {
    posture: 0.7,
    movement: 0.4,
    gestureIntensity: 0.5,
    confidence: 0.75
  }
};

// Mock insights data as a plain JavaScript array of objects
const mockInsights = [
  {
    type: 'pattern',
    title: 'Emotional Pattern Detected',
    description: 'Your anxiety levels tend to peak during afternoon hours. Consider taking short breaks.',
    actionable: 'Schedule 5-minute breathing sessions',
    confidence: 0.85
  },
  {
    type: 'suggestion',
    title: 'Try This Exercise',
    description: 'Based on your current state, a quick mindfulness session might help center your thoughts.',
    actionable: 'Start breathing exercise',
    confidence: 0.92
  },
  {
    type: 'achievement',
    title: 'Emotional Growth',
    description: 'You have maintained balanced emotions for 3 days straight. Keep up the great work!',
    confidence: 0.95
  }
];

const Dashboard = () => {
  const { currentTheme, setCurrentTheme, theme } = useTheme();
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [showProfile, setShowProfile] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState(initialEmotionData);

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const handleJournalSave = (entry) => {
    console.log('Saving journal entry:', entry);
  };

  const handleEmotionDetected = (emotion) => {
    setCurrentEmotion(emotion);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'gallery':
        return <ArtGallery />;
      case 'history':
        return <HistoryView />;
      case 'settings':
        return <SettingsView />;
      default:
        return (
          <div className="p-8">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-4 space-y-6">
                <EmotionAnalyzer 
                  onEmotionDetected={handleEmotionDetected}
                  isRecording={isRecording}
                />
                <EmotionDashboard 
                  emotion={currentEmotion}
                  theme={theme}
                />
                <BreathingGuide />
              </div>
              <div className="col-span-12 lg:col-span-4 space-y-6">
                <ArtCanvas 
                  emotion={currentEmotion}
                  isRecording={isRecording}
                  theme={theme}
                />
                <EmotionVisualizer
                  emotion={currentEmotion}
                  isPlaying={isPlaying}
                  onPlayToggle={() => setIsPlaying(!isPlaying)}
                />
              </div>
              <div className="col-span-12 lg:col-span-4 space-y-6">
                <EmotionInsights insights={mockInsights} />
                <JournalPrompt 
                  emotion={currentEmotion.dominant}
                  onSave={handleJournalSave}
                />
                <ControlPanel 
                  isRecording={isRecording} 
                  onToggleRecording={toggleRecording}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen" style={{ background: theme.colors.background }}>
      <Sidebar currentView={currentView} onViewChange={setCurrentView} theme={theme} />
      
      <main className="flex-1 overflow-auto">
        <div className="mb-8 flex justify-between items-center px-8 pt-8">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: theme.colors.text }}>
              {currentView === 'dashboard' ? 'Emotion Studio' :
               currentView === 'gallery' ? 'Art Gallery' :
               currentView === 'history' ? 'History' : 'Settings'}
            </h1>
            <p style={{ color: theme.colors.secondary }}>
              {currentView === 'dashboard' ? 'Transform your emotions into digital art' :
               currentView === 'gallery' ? 'Your emotional journey in art' :
               currentView === 'history' ? 'Track your emotional patterns' : 'Customize your experience'}
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
            <button 
              onClick={() => setShowProfile(true)}
              className="p-2 hover:bg-opacity-80 rounded-lg transition-colors"
            >
              <User className="h-5 w-5" style={{ color: theme.colors.primary }} />
            </button>
          </div>
        </div>

        {renderContent()}

        {showProfile && (
          <UserProfile
            onClose={() => setShowProfile(false)}
            onLogout={handleLogout}
          />
        )}
      </main>
    </div>
  );
}

export default Dashboard;
