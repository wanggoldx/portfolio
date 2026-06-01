import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I'm <span className="highlight">LAU Wang Chun</span></h1>
        <h2>Engineering Student (EIE)</h2>
        <p>
          Passionate about AI and Embedded Systems. Building innovative solutions 
          that bridge the gap between hardware and software.
        </p>
        <div className="home-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
      <div className="home-visual">
        <div className="code-block">
          <div className="code-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <pre><code>{`// Engineer & Developer
const skills = [
  "AI/ML",
  "Embedded Systems",
  "TensorRT",
  "Jetson Nano"
];

function innovate() {
  return build amazing things;
}`}</code></pre>
        </div>
      </div>
    </section>
  );
}

export default Home;