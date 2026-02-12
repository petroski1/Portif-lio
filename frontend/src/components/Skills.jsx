import React from 'react';
import { Code, Database, Cloud, Server, Layout, Boxes } from 'lucide-react';
import { portfolioData } from '../mock';
import SkillsSection3D from './sections3D/SkillsSection3D';

const Skills = () => {
  const { skills } = portfolioData;

  const categoryIcons = {
    'Frontend': Layout,
    'Backend': Server,
    'Cloud/DevOps': Cloud
  };

  return (
    <section id="habilidades" className="skills-section">
      <SkillsSection3D />
      <div className="section-container">
        <h2 className="section-title animate-on-scroll">Stack Técnica</h2>
        <p className="section-description animate-on-scroll">
          Tecnologias e ferramentas que domino para entregar soluções completas,
          do frontend à infraestrutura em nuvem.
        </p>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skillCategory, idx) => {
            const Icon = categoryIcons[skillCategory.category];
            return (
              <div 
                key={idx} 
                className="skill-category-card animate-on-scroll"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="skill-category-title">{skillCategory.category}</h3>
                </div>
                <div className="skill-tags">
                  {skillCategory.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
