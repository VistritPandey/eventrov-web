import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './About';
import Feature from './Feature';
import Access from './Access';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Testimonial from './Testimonial';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/services" element={<Access />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
