import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Emotion-to-Art Translator</h1>
    <p>Turn your feelings into visual art or music in real-time!</p>
    <Link to="/generate-art">Start Generating Art</Link>
  </div>
);

export default Home;
