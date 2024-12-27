import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logoImage from '../resources/jm_logo.png';

function Logo() {
  return (
    <div>
      <Link to="/">
        <img className="logo" src={logoImage} alt="Junction Media Logo" />
      </Link>
    </div>
  );
}

export default Logo;