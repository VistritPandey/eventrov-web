import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './About';
import Feature from './Feature';
import Access from './Access';
import Home from './Home';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/access" element={<Access />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
