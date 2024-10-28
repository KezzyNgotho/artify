import React, { useEffect, useRef, useState } from 'react';
import { Camera, Mic, AlertCircle, CheckCircle2 } from 'lucide-react';

const EmotionAnalyzer = ({ onEmotionDetected, isRecording }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [metrics, setMetrics] = useState({
    face: false,
    audio: false,
    body: false,
  });

  useEffect(() => {
    if (isRecording) {
      startAnalysis();
    } else {
      stopAnalysis();
    }
  }, [isRecording]);

  const startAnalysis = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStatus('analyzing');
        // Simulate metrics detection
        setTimeout(() => setMetrics({ face: true, audio: true, body: true }), 1000);
      }
    } catch (error) {
      setStatus('error');
      console.error('Error accessing media devices:', error);
    }
  };

  const stopAnalysis = () => {
    if (videoRef.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      setStatus('idle');
      setMetrics({ face: false, audio: false, body: false });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Emotion Analysis</h2>
        <div className="flex items-center space-x-2">
          {status === 'analyzing' && (
            <span className="flex items-center text-sm text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              Analyzing
            </span>
          )}
          {status === 'error' && (
            <span className="flex items-center text-sm text-red-600">
              <AlertCircle className="w-4 h-4 mr-1" />
              Error
            </span>
          )}
        </div>
      </div>

      <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
        />
        {status === 'analyzing' && (
          <div className="absolute inset-0 border-2 border-purple-500 animate-pulse rounded-xl"></div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className={`p-3 rounded-lg ${
          metrics.face ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-500'
        }`}>
          <div className="flex items-center space-x-2">
            <Camera className="w-4 h-4" />
            <span className="text-sm font-medium">Face</span>
            {metrics.face && <CheckCircle2 className="w-4 h-4 ml-auto" />}
          </div>
        </div>
        <div className={`p-3 rounded-lg ${
          metrics.audio ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-500'
        }`}>
          <div className="flex items-center space-x-2">
            <Mic className="w-4 h-4" />
            <span className="text-sm font-medium">Voice</span>
            {metrics.audio && <CheckCircle2 className="w-4 h-4 ml-auto" />}
          </div>
        </div>
        <div className={`p-3 rounded-lg ${
          metrics.body ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-500'
        }`}>
          <div className="flex items-center space-x-2">
            <Camera className="w-4 h-4" />
            <span className="text-sm font-medium">Body</span>
            {metrics.body && <CheckCircle2 className="w-4 h-4 ml-auto" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionAnalyzer;
