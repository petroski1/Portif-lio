import React from 'react';
import './SkillsSection3D.css';

const SkillsSection3D = () => {
  return (
    <div className="skills-3d-elements">
      {/* Network connections */}
      <svg className="network-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgba(0, 255, 209, 0)', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: 'rgba(0, 255, 209, 0.6)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(0, 255, 209, 0)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={i}
            className="network-line"
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
      
      {/* Tech icons floating */}
      <div className="tech-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="tech-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            <div className="tech-hex"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection3D;
