import React from 'react';
import { 
  User, Medal, Clock, Image, Calendar, Bell, Shield, 
  ChevronRight, LogOut, Settings, ExternalLink 
} from 'lucide-react';

const UserProfile = ({ onClose, onLogout }) => {
  const mockUser = {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    joinDate: '2024-01-15',
    preferences: {
      theme: 'light',
      notifications: true,
      privacy: 'public',
      soundEnabled: true
    },
    stats: {
      totalSessions: 42,
      totalArtworks: 38,
      dominantEmotion: 'Joy',
      averageSessionTime: 15
    },
    achievements: [
      {
        id: '1',
        title: 'Early Explorer',
        description: 'Completed first emotion analysis session',
        icon: '🎨',
        unlockedAt: '2024-01-16',
        progress: 100
      },
      {
        id: '2',
        title: 'Emotion Master',
        description: 'Track emotions for 30 consecutive days',
        icon: '🎯',
        progress: 60
      }
    ]
  };

  const confirmLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      onLogout();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Profile</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Profile Header */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="relative">
              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 p-1 bg-purple-600 text-white rounded-full">
                <User className="w-4 h-4" />
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{mockUser.name}</h3>
              <p className="text-gray-500">{mockUser.email}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-purple-50 p-4 rounded-xl">
              <div className="flex items-center space-x-2 text-purple-600 mb-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Sessions</span>
              </div>
              <p className="text-2xl font-bold">{mockUser.stats.totalSessions}</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-xl">
              <div className="flex items-center space-x-2 text-pink-600 mb-2">
                <Image className="w-4 h-4" />
                <span className="font-medium">Artworks</span>
              </div>
              <p className="text-2xl font-bold">{mockUser.stats.totalArtworks}</p>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Achievements</h4>
            <div className="space-y-4">
              {mockUser.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-gray-50 p-4 rounded-xl flex items-center space-x-4"
                >
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h5 className="font-medium">{achievement.title}</h5>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                    <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-600 rounded-full transition-all duration-500"
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-gray-400" />
                <span>Notifications</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <span>Privacy</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 text-gray-400" />
                <span>Settings</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 space-y-4">
            <button className="w-full flex items-center justify-center space-x-2 p-3 text-purple-600 hover:bg-purple-50 rounded-xl transition-colors">
              <ExternalLink className="w-5 h-5" />
              <span>Share Profile</span>
            </button>
            <button
              onClick={confirmLogout}
              className="w-full flex items-center justify-center space-x-2 p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
