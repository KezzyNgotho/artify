import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArtGenerator from './pages/ArtGenerator';


export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate-art" element={<ArtGenerator />} />
         
        </Routes>
      </div>
    </Router>
  );
}