import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Form from '../form/Form';
import './Contact.css';

function Contact() {
  return (
    <div className="formPage-container">
      <div className="contact-container">
        <h2 className="contact">Contact me, let's work together.</h2>
        <div className="icon-container">
        <div className="icon-item">
            <a href="mailto:joey.m.dev@gmail.com" className="icon-link" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="icon" />
            </a>
          </div>
          <div className="icon-item">
            <a href="https://github.com/JMONDESIR" className="icon-link" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
          </div>

          <div className="icon-item">
            <a href="https://www.linkedin.com/in/joelmondesir/" className="icon-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default Contact;
