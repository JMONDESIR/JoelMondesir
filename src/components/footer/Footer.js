import React, { useEffect, useState } from 'react';
import quotes from '../resources/quotes.json';
import './Footer.css';

function Footer() {
  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  return (
    <footer className="footer">
      <p className="quote">
        <em>"{randomQuote.quote}"</em>
        <br />
        <span className="author">- {randomQuote.author}</span>
      </p>
    </footer>
  );
}

export default Footer;
