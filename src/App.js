import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'
import Logo from './components/logo/Logo'
import NotFound from './components/notFound/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div className="bd border-top"></div>
        <div className="bd border-right"></div>
        <div className="bd border-bottom"></div>
        <div className="bd border-left"></div>
        <NavBar />
        <Logo />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
