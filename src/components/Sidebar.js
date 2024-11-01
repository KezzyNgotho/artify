import React from 'react';
import { LayoutDashboard, PaintBucket, History, Settings, Palette, LogOut } from 'lucide-react';

const Sidebar = ({ currentView, onViewChange, theme }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'gallery', icon: PaintBucket, label: 'Art Gallery' },
    { id: 'history', icon: History, label: 'History' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-20 lg:w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center justify-center lg:justify-start px-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-100 p-2 rounded-xl">
            <Palette className="h-6 w-6 text-purple-600" />
          </div>
          <span className="hidden lg:block font-bold text-gray-800">Artify</span>
        </div>
      </div>

      <nav className="flex-1 pt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center px-6 py-4 space-x-3 transition-colors ${
              currentView === item.id
                ? 'text-purple-600 bg-purple-50 border-r-4 border-purple-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="hidden lg:block">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-gray-200">
        <button className="w-full flex items-center space-x-3 text-gray-600 hover:text-gray-800 transition-colors">
          <LogOut className="h-5 w-5" />
          <span className="hidden lg:block">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
