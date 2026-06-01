import { getLanguageColor } from '../services/github';
import './ProjectCard.css';

function ProjectCard({ title, description, techStack, githubLink, image, demoLink, primaryLanguage }) {
  return (
    <div className="project-card">
      {image && (
        <div className="project-image">
          <img
            src={image}
            alt={title}
            onError={(e) => { e.target.parentElement.style.display = 'none'; }}
          />
        </div>
      )}
      <div className="project-content">
        <div className="title-row">
          <h3>{title}</h3>
          {primaryLanguage && (
            <span className="language-badge">
              <span className="language-dot" style={{ background: getLanguageColor(primaryLanguage) }} />
              {primaryLanguage}
            </span>
          )}
        </div>
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="card-links">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
              Live Demo →
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
