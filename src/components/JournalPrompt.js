import React, { useState } from 'react';
import { BookOpen, Send } from 'lucide-react';

const JournalPrompt = ({ emotion, onSave }) => {
  const [entry, setEntry] = useState('');

  const prompts = {
    joy: "What brought you joy today? How can you create more moments like this?",
    sadness: "What's weighing on your mind? Remember, it's okay to feel this way.",
    anxiety: "Let's break down what's causing these feelings. What's the first step you can take?",
    anger: "Take a moment to reflect on what triggered these emotions. What would help you feel calmer?",
    neutral: "How would you describe your emotional state right now? What would make this moment better?"
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Reflection Journal</h2>
        <BookOpen className="h-5 w-5 text-purple-600" />
      </div>

      <p className="text-sm text-gray-600 mb-4">
        {prompts[emotion] || prompts.neutral} {/* Removed TypeScript type assertion */}
      </p>

      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Start writing your thoughts..."
        className="w-full h-32 p-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all resize-none"
      />

      <div className="mt-4 flex justify-between items-center">
        <p className="text-xs text-gray-500">
          Your entries are private and secure
        </p>
        <button
          onClick={() => onSave(entry)}
          disabled={!entry.trim()}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <span>Save</span>
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default JournalPrompt;
