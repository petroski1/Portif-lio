import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../mock';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projetos" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Projetos em Destaque</h2>
        <p className="section-description">
          Uma seleção dos meus trabalhos mais recentes, desde dashboards financeiros
          até plataformas SaaS completas.
        </p>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project Image */}
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-category">{project.category}</div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="project-stack">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                    >
                      <ExternalLink size={18} />
                      Ver Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
