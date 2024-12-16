import React from 'react';
import Hero from '../hero/Hero';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return <div className="home-container">
    <Hero />
      <div className="text-container">
      <div className="home-title">
        <h1>Joel <span className="last"> Mondesir</span></h1>
      </div>
      <div className="subtitle">
      WEB DEVELOPER & RENAISSANCE MAN
      </div>
        <Link to="/contact">
          <button className="button-contact">CONTACT ME</button>
        </Link>

      </div>
    </div>
    ;
}

export default Home;