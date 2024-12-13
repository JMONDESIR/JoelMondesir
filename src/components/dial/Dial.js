import React, { useState } from 'react';
import './Dial.css';

const Dial = ({ percentage }) => {
return (
    <div className="dial-container">
      <div className="outer">
        <div className="inner" style={{ '--percentage': `${percentage}%` }}>
          <div className="dial-text">{percentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default Dial;