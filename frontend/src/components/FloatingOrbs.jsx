import React, { useEffect, useRef } from 'react';
import './FloatingOrbs.css';

const FloatingOrbs = () => {
  const orbsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      orbsRef.current.forEach((orb, index) => {
        if (orb) {
          const speed = 0.05 + (index * 0.02);
          const offset = scrollY * speed;
          orb.style.transform = `translateY(${offset}px) translateZ(${index * 20}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const orbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 60 + Math.random() * 120,
    left: 10 + Math.random() * 80,
    top: 10 + (i * 15),
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 12
  }));

  return (
    <div className="floating-orbs-container">
      {orbs.map((orb, index) => (
        <div
          key={orb.id}
          ref={el => orbsRef.current[index] = el}
          className="floating-orb"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
