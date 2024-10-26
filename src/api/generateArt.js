import axios from 'axios';

export const generateArt = async (style, theme) => {
  try {
    const response = await axios.post('/api/generate-art', { style, theme });
    return response.data;
  } catch (error) {
    console.error("Error generating art:", error);
    throw error;
  }
};
