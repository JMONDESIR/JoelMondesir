import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops! The page you're looking for doesn't exist. Select a link above, or...</p>
      <Link to="/" className="notfound-link">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;