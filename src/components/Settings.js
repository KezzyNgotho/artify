import React, { useState } from 'react';
import { Bell, Shield, Palette, Volume2, Monitor, Cloud, Moon } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const settingSections = [
    {
      title: 'Preferences',
      items: [
        {
          icon: Bell,
          label: 'Notifications',
          description: 'Receive alerts about your emotional patterns',
          value: notifications,
          onChange: setNotifications
        },
        {
          icon: Moon,
          label: 'Dark Mode',
          description: 'Switch to dark theme',
          value: darkMode,
          onChange: setDarkMode
        },
        {
          icon: Volume2,
          label: 'Sound Effects',
          description: 'Enable ambient sounds during sessions',
          value: soundEnabled,
          onChange: setSoundEnabled
        }
      ]
    },
    {
      title: 'Privacy & Storage',
      items: [
        {
          icon: Shield,
          label: 'Data Privacy',
          description: 'Manage your data sharing preferences',
          href: '#privacy'
        },
        {
          icon: Cloud,
          label: 'Auto-Save',
          description: 'Automatically save your artwork',
          value: autoSave,
          onChange: setAutoSave
        }
      ]
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>
      
      <div className="space-y-8">
        {settingSections.map((section) => (
          <div key={section.title} className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.label} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <item.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{item.label}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  {'href' in item ? (
                    <a
                      href={item.href}
                      className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Manage
                    </a>
                  ) : (
                    <button
                      onClick={() => item.onChange(!item.value)}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        item.value ? 'bg-purple-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                        item.value ? 'left-7' : 'left-1'
                      }`}></div>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
