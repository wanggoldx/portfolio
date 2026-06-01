import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { fetchProjects } from '../services/api';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await fetchProjects();
        if (!mounted) return;
        setProjects(data);
      } catch {
        if (!mounted) return;
        setProjects([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => { mounted = false; };
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="projects-container">
          <h2>Projects</h2>
          <p className="projects-intro">
            Here are some of my GitHub repositories showcasing my work in machine learning, embedded systems, and programming.
          </p>
          <div className="projects-grid">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="project-card project-card-skeleton">
                <div className="skeleton-image" />
                <div className="project-content">
                  <div className="skeleton-line skeleton-title" />
                  <div className="skeleton-line skeleton-desc" />
                  <div className="skeleton-line skeleton-desc short" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <p className="projects-intro">
          Here are some of my GitHub repositories showcasing my work in machine learning, embedded systems, and programming.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
