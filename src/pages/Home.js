import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Art Generator</h1>
      <p>Click below to generate AI-based artwork.</p>
      <Link to="/generate-art">
        <button className="generate-button">Generate Art</button>
      </Link>
    </div>
  );
}

export default Home;
