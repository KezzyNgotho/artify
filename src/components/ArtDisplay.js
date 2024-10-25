import React, { useContext } from 'react';
import EmotionContext from '../context/EmotionContext';

const ArtDisplay = () => {
  const { emotion } = useContext(EmotionContext);

  if (!emotion) return <p>No emotion detected yet. Describe your feelings first!</p>;

  return (
    <div>
      <h2>Art Based on Your Emotion: {emotion.label}</h2>
      {/* This will display the art generated based on the emotion */}
      {/* Placeholder image or animation */}
      <img src={emotion.artURL} alt="Generated Art" />
    </div>
  );
};

export default ArtDisplay;
