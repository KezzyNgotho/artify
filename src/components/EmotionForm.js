import React, { useState, useContext } from 'react';
import EmotionContext from '../context/EmotionContext';
import { analyzeEmotion } from '../api/emotionApi';

const EmotionForm = () => {
  const { setEmotion } = useContext(EmotionContext);
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emotionData = await analyzeEmotion({ text: inputText });
    setEmotion(emotionData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Describe your feelings..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">Analyze Emotion</button>
    </form>
  );
};

export default EmotionForm;
