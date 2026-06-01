import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to discussing new projects, creative ideas, 
          or opportunities to be part of your vision. Feel free to 
          reach out if you'd like to collaborate or just say hi!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:wanggoldx@gmail.com">
                wanggoldx@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <a href="https://github.com/wanggoldx" target="_blank" rel="noopener noreferrer">
                github.com/wanggoldx
              </a>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/%E6%97%BA%E9%87%91-%E5%8A%89-8119452ab/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/%E6%97%BA%E9%87%91-%E5%8A%89-8119452ab/
              </a>
            </div>
          </div>

          {/* <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;