import React from 'react';
import './MeteorBackground.css';

const MeteorBackground = () => {
  // Criar múltiplos meteoros com posições e delays aleatórios
  const meteors = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 10,
    animationDuration: 2 + Math.random() * 3,
    size: 1 + Math.random() * 2
  }));

  return (
    <div className="meteor-background">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: `${meteor.left}%`,
            animationDelay: `${meteor.animationDelay}s`,
            animationDuration: `${meteor.animationDuration}s`,
            width: `${meteor.size}px`,
            height: `${meteor.size}px`
          }}
        >
          <div className="meteor-tail"></div>
        </div>
      ))}
    </div>
  );
};

export default MeteorBackground;
