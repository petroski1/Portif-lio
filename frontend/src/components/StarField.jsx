import React, { useEffect, useRef } from 'react';
import './StarField.css';

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 2000;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.z -= this.speed;
        if (this.z <= 0) {
          this.z = 2000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Pulsating effect
        this.pulsePhase += this.pulseSpeed;
        this.opacity = 0.3 + Math.sin(this.pulsePhase) * 0.3;
      }

      draw() {
        const x = (this.x - canvas.width / 2) * (2000 / this.z) + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * (2000 / this.z) + canvas.height / 2;
        const size = (1 - this.z / 2000) * this.size;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 209, ${this.opacity})`;
        ctx.fill();

        // Glow effect
        if (size > 0.5) {
          ctx.beginPath();
          ctx.arc(x, y, size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 209, ${this.opacity * 0.3})`;
          ctx.fill();
        }
      }
    }

    const stars = Array.from({ length: 200 }, () => new Star());

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="star-field"
    />
  );
};

export default StarField;
