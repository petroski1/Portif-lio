import React from 'react';
import './AboutSection3D.css';

const AboutSection3D = () => {
  return (
    <div className="about-3d-elements">
      {/* DNA Helix */}
      <div className="dna-helix">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="dna-strand" style={{ animationDelay: `${i * 0.2}s` }}>
            <div className="dna-particle left"></div>
            <div className="dna-particle right"></div>
            <div className="dna-connector"></div>
          </div>
        ))}
      </div>
      
      {/* Floating data nodes */}
      <div className="data-nodes">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="data-node"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <div className="node-core"></div>
            <div className="node-ring"></div>
            <div className="node-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection3D;
