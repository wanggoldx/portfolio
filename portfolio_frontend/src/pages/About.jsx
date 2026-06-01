import './About.css';

function About() {
  const skills = [
    { name: 'Python', level: 85 },
    { name: 'Embedded Systems', level: 75 },
    { name: 'C/C++', level: 70 },
    { name: 'React', level: 50 },
    { name: 'AI agent', level: 30 },
  ];

  const highlights = [
    'Engineering (EIE) Student',
    'Strong Team Player',
    'Embedded Systems',
    'gRPC project experience',
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-intro">
          I'm an Engineering student specializing in Electronic & Information Engineering (EIE), with a passion for building intelligent systems that integrate hardware and software. 
          I'm also skilled in software development, allowing me to work effectively across both system-level and application-level projects.
        </p>
        <div className="about-content">
          <div className="about-section">
            <h3>What I Do</h3>
            <div className="highlights">
              {highlights.map((item, index) => (
                <span key={index} className="highlight-item">{item}</span>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h3>Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;