import React from 'react';
import './Logo.css';
import logoImage from '../resources/jm_logo.png'

function Logo() {
  return (
    <div >
      <img className="logo" src={logoImage} alt="Junction Media Logo" />
    </div>
  );
}

export default Logo;