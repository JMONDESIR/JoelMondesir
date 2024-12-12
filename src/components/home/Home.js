import React from 'react';
import Hero from '../hero/Hero';
import './Home.css'

function Home() {
  return <div className="home-container">
    < Hero />
    <div className="text-container">
      <h1>
        <span className="first home-title">Joel</span> 
        <span className="second home-title">Mondesir</span>
      </h1>
      <div className="subtitle">
        WEB DEVELOPER | RENAISSANCE MAN
      </div>
      <button className="button-contact">CONTACT ME</button>

    </div>
    </div>
    ;
}

export default Home;