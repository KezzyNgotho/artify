// src/pages/UserInteraction.js
import React from 'react';

const UserInteraction = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold">User Interaction</h2>
    <div className="flex flex-col space-y-2">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Choose Art Style</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Save to Emotion Diary</button>
    </div>
  </section>
);

export default UserInteraction;
