import React from 'react'
import './Hero.css'
import Headshot from '../resources/jm_full.jpeg'

function Hero() {
  return (
    <div className="hero-container">
    <img class="hero" src={Headshot} alt="Joel Mondesir" />
  </div>
  )
}

export default Hero
