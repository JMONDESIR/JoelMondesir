import React from 'react';
import './OverlappingCards.css';
import Headshot from '../resources/jm_full.jpeg'


const OverlappingCards = () => {
  return (
    <div className="cards-container">
      <div className="large-card">
        <img class="hero" src={Headshot} alt="Joel Mondesir" />
      </div>
      <div className="small-card">Contant Me</div>
    </div>
  );
};

export default OverlappingCards;
