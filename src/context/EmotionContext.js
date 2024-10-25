import React, { createContext, useState } from 'react';

const EmotionContext = createContext();

export const EmotionProvider = ({ children }) => {
  const [emotion, setEmotion] = useState(null);

  return (
    <EmotionContext.Provider value={{ emotion, setEmotion }}>
      {children}
    </EmotionContext.Provider>
  );
};

export default EmotionContext;
