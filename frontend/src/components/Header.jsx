import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="dark-header">
      <div className="dark-logo-text">
        Davi Medeiros
      </div>

      {/* Desktop Navigation */}
      <nav className="dark-nav">
        <button onClick={() => scrollToSection('sobre')} className="dark-nav-link">
          Sobre
        </button>
        <button onClick={() => scrollToSection('projetos')} className="dark-nav-link">
          Projetos
        </button>
        <button onClick={() => scrollToSection('habilidades')} className="dark-nav-link">
          Habilidades
        </button>
        <button onClick={() => scrollToSection('blog')} className="dark-nav-link">
          Blog
        </button>
        <button onClick={() => scrollToSection('contato')} className="dark-nav-link">
          Contato
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection('sobre')} className="mobile-menu-link">
            Sobre
          </button>
          <button onClick={() => scrollToSection('projetos')} className="mobile-menu-link">
            Projetos
          </button>
          <button onClick={() => scrollToSection('habilidades')} className="mobile-menu-link">
            Habilidades
          </button>
          <button onClick={() => scrollToSection('blog')} className="mobile-menu-link">
            Blog
          </button>
          <button onClick={() => scrollToSection('contato')} className="mobile-menu-link">
            Contato
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
