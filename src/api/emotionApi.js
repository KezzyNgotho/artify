import axios from 'axios';

export const analyzeEmotion = async (inputData) => {
  try {
    const response = await axios.post('/api/emotion', inputData);
    return response.data;
  } catch (error) {
    console.error("Emotion analysis failed:", error);
    return null;
  }
};
