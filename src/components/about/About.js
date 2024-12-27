import React from 'react';
import './About.css';
import Progress from '../progress/Progress';
import Joel from '../resources/head_II.jpeg';

const About = () => {
  return (
    <div className="about-container">
    <section className="about-section">
      <div className="about-content">
        <div className="about-description">
          <h1 className="about-title">Hi! I'm Joel Mondesir.</h1>
          <p>
            I build interactive and engaging websites. 
            My passion lies in creating eye-catching and dynamic user experiences that merge design with functionality...and even fun.
          </p>
        </div>

          <img src={Joel} alt="Joel Mondesir" className="about-image" />

        
      </div>
    </section>
    <Progress />

    </div>
  );
};

export default About;
