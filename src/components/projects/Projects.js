import React from 'react';
import './Projects.css';
import Network from '../resources/SCRNetwork.png'
import Wireless from '../resources/scrWireless.png'


function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        <div className="project-item">
        <h2 className="project-header">Velocity Strike</h2>

          <div className="video-container">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1038817320?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Velocity Strike"
              ></iframe>
            </div>
          </div>
          <p className="project-description">
            A behind-the-scenes look at my most ambitious project yet, 
            featuring Blender modeling, Unity development, and C# scripting.
          </p>
        </div>

        <div className="project-item">
          <h2 className="project-header">SCRNCOM Wireless</h2>
          <a href="https://scrwireless.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img
              src={Wireless}
              alt="SCR Wireless"
              className="project-screenshot"
            />
          </a>
          <p className="project-description">
            A responsive ISP website built from the ground up using HTML, CSS and Bootstrap. The site utilizes simple navigation and a description of internet packages offered by the company.
          </p>
        </div>

        <div className="project-item">
        <h2 className="project-header">SCR Network</h2>

          <a href="https://scrnetwork.com" target="_blank" rel="noopener noreferrer">
            <img
              src={Network}
              alt="Project 2 Screenshot"
              className="project-screenshot"
            />
          </a>
          <p className="project-description">
          A responsive IT services website built with React.js, offering on-demand IT solutions for businesses. Features a sleek design, seamless navigation, and a user-friendly experience across devices. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
