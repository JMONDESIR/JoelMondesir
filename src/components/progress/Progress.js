import React, { useEffect, useState } from 'react';
import './Progress.css';

function Progress() {
  const progressData = [
    { degree: 77, color: '#daa520', label: 'HTML' },
    { degree: 64, color: '#5eda20', label: 'CSS' },
    { degree: 68, color: '#27aae1', label: 'JavaScript' },
  ];

  return (
    <div className="guage-container">
      {progressData.map((item, index) => (
        <ProgressCircle
          key={index}
          targetDegree={item.degree}
          color={item.color}
          label={item.label}
        />
      ))}
    </div>
  );
}

function ProgressCircle({ targetDegree, color, label }) {
  const [degree, setDegree] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDegree((prev) => {
        if (prev >= targetDegree) {
          clearInterval(interval);
          return targetDegree;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [targetDegree]);

  return (
    <div className="circle" style={{ background: `conic-gradient(${color} ${degree}%, #222 0%)` }}>
      <h2 className="number">
        {degree}
        <span>%</span>
      </h2>
      <h4>{label}</h4>
    </div>
  );
}

export default Progress;
