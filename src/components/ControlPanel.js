import React, { useState } from 'react';
import { Camera, Mic, Settings, Share2, HelpCircle } from 'lucide-react';

const ControlPanel = ({ isRecording, onToggleRecording }) => {
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [micEnabled, setMicEnabled] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Input Controls</h2>
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <HelpCircle className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className={`flex items-center justify-between p-4 rounded-xl border ${
            cameraEnabled ? 'border-purple-200 bg-purple-50' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex items-center space-x-3">
              <Camera className={`h-5 w-5 ${cameraEnabled ? 'text-purple-600' : 'text-gray-400'}`} />
              <div>
                <span className="text-sm font-medium block">Camera</span>
                <span className="text-xs text-gray-500">For facial expression analysis</span>
              </div>
            </div>
            <button 
              onClick={() => setCameraEnabled(!cameraEnabled)}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                cameraEnabled ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                cameraEnabled ? 'left-7' : 'left-1'
              }`}></div>
            </button>
          </div>

          <div className={`flex items-center justify-between p-4 rounded-xl border ${
            micEnabled ? 'border-purple-200 bg-purple-50' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex items-center space-x-3">
              <Mic className={`h-5 w-5 ${micEnabled ? 'text-purple-600' : 'text-gray-400'}`} />
              <div>
                <span className="text-sm font-medium block">Microphone</span>
                <span className="text-xs text-gray-500">For voice tone analysis</span>
              </div>
            </div>
            <button 
              onClick={() => setMicEnabled(!micEnabled)}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                micEnabled ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                micEnabled ? 'left-7' : 'left-1'
              }`}></div>
            </button>
          </div>

          <button
            onClick={onToggleRecording}
            disabled={!cameraEnabled && !micEnabled}
            className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
              isRecording
                ? 'bg-red-500 text-white hover:bg-red-600'
                : cameraEnabled || micEnabled
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
