import ProjectCard from '../components/ProjectCard';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Deep Neural Network - Photonic Power Splitters',
      description: 'Deep learning-based inverse design of integrated photonic power splitters using neural networks. Given a target spectral response, the neural network generates optimized hole patterns for photonic integrated circuits.',
      techStack: ['Python', 'PyTorch', 'TensorFlow', 'NumPy', 'Lumerical FDTD'],
      githubLink: 'https://github.com/wanggoldx/Deep-Neural-Network-Inverse-Design-of-Integrated-Photonic-Power-Splitters',
    },
    {
      title: 'EIE2111 - C++ Programming',
      description: 'Introduction to C++ Programming course materials. Covers fundamental programming concepts including syntax, object-oriented programming, functions, and modular programming through hands-on labs.',
      techStack: ['C++', 'C#', 'Visual Studio'],
      githubLink: 'https://github.com/wanggoldx/EIE2111',
    },
    {
      title: 'EIE3106 - Embedded Systems & Robotics',
      description: 'Embedded systems programming and robotics using microcontroller-based robot cars. Features IR remote control, line tracking sensors, ultrasound obstacle avoidance, and motor control.',
      techStack: ['C', 'Embedded C', 'STM32', 'IR Control', 'Ultrasound'],
      githubLink: 'https://github.com/wanggoldx/EIE3106-project',
    },
    {
      title: 'EIE3320 - Java Programming',
      description: 'Object-oriented programming using Java. Covers classes, objects, inheritance, polymorphism, abstract classes, interfaces, collections, exception handling, and GUI programming.',
      techStack: ['Java', 'OOP', 'AWT/Swing', 'Collections'],
      githubLink: 'https://github.com/wanggoldx/EIE3320-java',
    },
    {
      title: 'EIE3373 - Microcontroller Systems (AVR)',
      description: 'Microcontroller systems using AVR family (ATmega328P/Arduino Uno). Covers GPIO programming, timer/counter operations, interrupts, UART, ADC, and PWM.',
      techStack: ['C', 'AVR', 'ATmega328P', 'Arduino', 'Embedded Systems'],
      githubLink: 'https://github.com/wanggoldx/EIE3373-money',
    },
  ];

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