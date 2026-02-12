import React from 'react';
import { TrendingUp, Zap, Target } from 'lucide-react';
import { portfolioData } from '../mock';
import AboutSection3D from './sections3D/AboutSection3D';

const About = () => {
  const { achievements } = portfolioData;

  const icons = [TrendingUp, Zap, Target];

  return (
    <section id="sobre" className="about-section">
      <AboutSection3D />
      <div className="section-container">
        <h2 className="section-title animate-on-scroll">Impacto Real em Negócios</h2>
        <p className="section-description animate-on-scroll">
          Desenvolvo aplicativos e sistemas para empresas pequenas e de médio porte,
          focando em automação inteligente e eficiência operacional que gera resultados mensuráveis.
        </p>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievements.map((achievement, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={achievement.id} 
                className="achievement-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="achievement-icon">
                  <Icon size={32} />
                </div>
                <div className="achievement-metric">{achievement.metric}</div>
                <div className="achievement-description">{achievement.description}</div>
                <div className="achievement-detail">{achievement.detail}</div>
              </div>
            );
          })}
        </div>

        {/* Experience Section */}
        <div className="experience-section">
          <h3 className="subsection-title animate-on-scroll">Experiência & Formação</h3>
          <div className="experience-grid">
            {portfolioData.experience.map((exp, index) => (
              <div 
                key={exp.id} 
                className="experience-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="experience-header">
                  <h4 className="experience-title">{exp.title}</h4>
                  <span className="experience-period">{exp.period}</span>
                </div>
                {exp.institution && (
                  <p className="experience-institution">{exp.institution}</p>
                )}
                <p className="experience-description">{exp.description}</p>
                {exp.highlights && (
                  <ul className="experience-highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
