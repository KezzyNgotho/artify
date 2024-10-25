import React from 'react';
import EmotionForm from '../components/EmotionForm';
import ArtDisplay from '../components/ArtDisplay';

const ArtGenerator = () => (
  <div>
    <h1>Generate Art from Emotion</h1>
    <EmotionForm />
    <ArtDisplay />
  </div>
);

export default ArtGenerator;
