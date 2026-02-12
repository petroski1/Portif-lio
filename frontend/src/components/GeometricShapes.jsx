import React from 'react';
import './GeometricShapes.css';

const GeometricShapes = () => {
  const shapes = [
    { id: 1, type: 'cube', size: 80, left: 15, top: 20 },
    { id: 2, type: 'pyramid', size: 60, left: 85, top: 35 },
    { id: 3, type: 'cube', size: 50, left: 10, top: 70 },
    { id: 4, type: 'pyramid', size: 70, left: 90, top: 80 },
    { id: 5, type: 'cube', size: 40, left: 50, top: 50 }
  ];

  return (
    <div className="geometric-shapes-container">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`geometric-shape ${shape.type}`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            animationDelay: `${shape.id * 0.5}s`
          }}
        >
          {shape.type === 'cube' && (
            <>
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face left"></div>
              <div className="cube-face right"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </>
          )}
          {shape.type === 'pyramid' && (
            <>
              <div className="pyramid-face front"></div>
              <div className="pyramid-face right"></div>
              <div className="pyramid-face back"></div>
              <div className="pyramid-face left"></div>
              <div className="pyramid-base"></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default GeometricShapes;
