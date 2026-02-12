import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const { personalInfo } = portfolioData;

  return (
    <footer id="contato" className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Vamos Conversar?</h3>
          <p className="footer-description">
            Estou disponível para novos projetos e oportunidades.
            Entre em contato comigo!
          </p>
        </div>

        {/* Contact Links */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Contato</h4>
          <div className="footer-links">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="footer-link"
            >
              <Mail size={18} />
              {personalInfo.email}
            </a>
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>

        {/* Education */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Educação</h4>
          <p className="footer-text">
            {personalInfo.institution}
          </p>
          <p className="footer-text-small">
            Engenharia da Computação
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} {personalInfo.fullName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
