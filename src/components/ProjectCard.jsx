import './ProjectCard.css';

function ProjectCard({ title, description, techStack, githubLink, image }) {
  return (
    <div className="project-card">
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
            View on GitHub →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;