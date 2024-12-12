import React from 'react';
import './Header.css';
import Logo from '../resources/jm_logo.png';

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Your Logo" className="logo" />
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
