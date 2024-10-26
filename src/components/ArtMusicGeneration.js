// src/pages/ArtMusicGeneration.js
import React from 'react';

const ArtMusicGeneration = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold">Art & Music Generation</h2>
    <div className="border p-4 rounded bg-gray-50">
      <canvas className="border w-full h-64 rounded"></canvas>
      <audio controls className="mt-4">
        <source src="generated_music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  </section>
);

export default ArtMusicGeneration;
