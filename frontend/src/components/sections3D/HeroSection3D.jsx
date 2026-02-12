import React from 'react';
import './HeroSection3D.css';

const HeroSection3D = () => {
  return (
    <div className="hero-3d-elements">
      {/* Grid 3D de fundo */}
      <div className="hero-3d-grid"></div>
      
      {/* Anéis orbitais */}
      <div className="hero-orbital-ring ring-1"></div>
      <div className="hero-orbital-ring ring-2"></div>
      <div className="hero-orbital-ring ring-3"></div>
      
      {/* Partículas flutuantes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
      
      {/* Holographic lines */}
      <div className="hero-holo-lines">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="hero-holo-line" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection3D;
