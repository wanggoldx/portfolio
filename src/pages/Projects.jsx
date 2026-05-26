import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { fetchRepos } from '../services/github';
import './Projects.css';

const PROJECTS_CONFIG = [
  {
    repo: 'Deep-Neural-Network-Inverse-Design-of-Integrated-Photonic-Power-Splitters',
    title: 'Deep Neural Network - Photonic Power Splitters',
    description: 'Deep learning-based inverse design of integrated photonic power splitters using neural networks. Given a target spectral response, the neural network generates optimized hole patterns for photonic integrated circuits.',
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'NumPy', 'Lumerical FDTD'],
  },
  {
    repo: 'EIE2111',
    title: 'EIE2111 - C++ Programming',
    description: 'Introduction to C++ Programming course materials. Covers fundamental programming concepts including syntax, object-oriented programming, functions, and modular programming through hands-on labs.',
    techStack: ['C++', 'C#', 'Visual Studio'],
  },
  {
    repo: 'EIE3106-project',
    title: 'EIE3106 - Embedded Systems & Robotics',
    description: 'Embedded systems programming and robotics using microcontroller-based robot cars. Features IR remote control, line tracking sensors, ultrasound obstacle avoidance, and motor control.',
    techStack: ['C', 'Embedded C', 'STM32', 'IR Control', 'Ultrasound'],
  },
  {
    repo: 'EIE3320-java',
    title: 'EIE3320 - Java Programming',
    description: 'Object-oriented programming using Java. Covers classes, objects, inheritance, polymorphism, abstract classes, interfaces, collections, exception handling, and GUI programming.',
    techStack: ['Java', 'OOP', 'AWT/Swing', 'Collections'],
  },
  {
    repo: 'EIE3373-money',
    title: 'EIE3373 - Microcontroller Systems (AVR)',
    description: 'Microcontroller systems using AVR family (ATmega328P/Arduino Uno). Covers GPIO programming, timer/counter operations, interrupts, UART, ADC, and PWM.',
    techStack: ['C', 'AVR', 'ATmega328P', 'Arduino', 'Embedded Systems'],
  },
];

function capitalizeTopics(topics) {
  return topics.map(t => t.charAt(0).toUpperCase() + t.slice(1));
}

function buildProject(config, apiRepo) {
  const imageUrl = apiRepo
    ? `https://opengraph.githubassets.com/1/wanggoldx/${config.repo}`
    : null;

  return {
    title: config.title,
    description: config.description,
    techStack: apiRepo?.topics?.length ? capitalizeTopics(apiRepo.topics) : config.techStack,
    githubLink: apiRepo?.html_url || `https://github.com/wanggoldx/${config.repo}`,
    demoLink: apiRepo?.homepage || '',
    primaryLanguage: apiRepo?.language || null,
    image: imageUrl,
  };
}

function Projects() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const repoNames = PROJECTS_CONFIG.map(c => c.repo);
        const repos = await fetchRepos(repoNames);
        if (!mounted) return;
        setProjects(PROJECTS_CONFIG.map((c, i) => buildProject(c, repos[i])));
      } catch {
        if (!mounted) return;
        setProjects(PROJECTS_CONFIG.map(c => buildProject(c, null)));
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
            {PROJECTS_CONFIG.map((_, i) => (
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
