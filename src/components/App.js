import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Genshin from './Genshin';
import StarRail from './StarRail';
import WutheringWaves from './WutheringWaves';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="sidebar">
          <ul>
            <Link to="/"><li>Inicio</li></Link>
            <Link to="/genshin"><li>Genshin</li></Link>
            <Link to="/star-rail"><li>Star Rail</li></Link>
            <Link to="/wuthering-waves"><li>Wuthering Waves</li></Link>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genshin" element={<Genshin />} />
            <Route path="/star-rail" element={<StarRail />} />
            <Route path="/wuthering-waves" element={<WutheringWaves />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
