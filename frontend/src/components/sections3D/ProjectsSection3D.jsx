import React from 'react';
import './ProjectsSection3D.css';

const ProjectsSection3D = () => {
  return (
    <div className="projects-3d-elements">
      {/* Circuit board pattern */}
      <div className="circuit-board">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="circuit-line" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }} />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="circuit-node" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }} />
        ))}
      </div>
      
      {/* Floating code blocks */}
      <div className="code-blocks">
        {['{ }', '< >', '[ ]', '( )', '/>', '()=>'].map((symbol, i) => (
          <div
            key={i}
            className="code-symbol"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection3D;
