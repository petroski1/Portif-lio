import React from 'react';
import './BlogSection3D.css';

const BlogSection3D = () => {
  return (
    <div className="blog-3d-elements">
      {/* Paper sheets flying */}
      <div className="paper-sheets">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="paper-sheet"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div className="paper-line"></div>
            <div className="paper-line"></div>
            <div className="paper-line"></div>
          </div>
        ))}
      </div>
      
      {/* Digital waves */}
      <div className="digital-waves">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="wave"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>
      
      {/* Binary rain */}
      <div className="binary-rain">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="binary-column"
            style={{
              left: `${5 + i * 8}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {Array.from({ length: 10 }).map((_, j) => (
              <span key={j} className="binary-digit">
                {Math.random() > 0.5 ? '1' : '0'}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection3D;
