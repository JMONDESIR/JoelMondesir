import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div className="border-top"></div>
        <div className="border-right"></div>
        <div className="border-bottom"></div>
        <div className="border-left"></div>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
