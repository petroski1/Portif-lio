import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../mock';

const Hero = () => {
  const { personalInfo } = portfolioData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side - Content */}
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              {personalInfo.fullName}
            </h1>
            <h2 className="hero-subtitle">
              {personalInfo.title}
            </h2>
            <p className="hero-institution">
              {personalInfo.institution}
            </p>
            <p className="hero-bio">
              {personalInfo.bio}
            </p>

            {/* Social Links */}
            <div className="hero-social-links">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={20} />
                GitHub
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="social-link"
              >
                <Mail size={20} />
                Email
              </a>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('projetos')}
              className="btn-primary hero-cta"
            >
              Ver Projetos
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Side - Photo + 3D Background */}
        <div className="hero-visual">
          {/* 3D Spline Background */}
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
          </div>
          
          {/* Photo Placeholder */}
          <div className="hero-photo-wrapper">
            <img 
              src={personalInfo.photoPlaceholder} 
              alt={personalInfo.fullName}
              className="hero-photo"
            />
            <div className="photo-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
