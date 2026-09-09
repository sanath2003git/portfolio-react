import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">

        {/* SECTION LABEL */}
        <p className="section-label">05 — CONNECT</p>

        {/* HEADING */}
        <h2 className="contact-heading">
          Let's Build Something <span>Together</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="contact-description">
          Have an idea, project, or opportunity in mind?
          I'd love to hear about it and explore how we can
          turn it into something meaningful.
        </p>

        {/* CONTACT CARDS */}
        <div className="contact-cards">

          {/* EMAIL */}
          <a
            href="mailto:Sanathsreekumar@gmail.com"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <FaEnvelope />
            </div>

            <div className="contact-card-content">
              <span className="contact-card-label">
                Email
              </span>

              <span className="contact-card-value">
                Sanathsreekumar@gmail.com
              </span>
            </div>

            <FaArrowRight className="contact-arrow" />
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/sanath2003git"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <FaGithub />
            </div>

            <div className="contact-card-content">
              <span className="contact-card-label">
                GitHub
              </span>

              <span className="contact-card-value">
                github.com/sanath2003git
              </span>
            </div>

            <FaArrowRight className="contact-arrow" />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/c-s-sanath-sreekumar-b930b2258/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <FaLinkedin />
            </div>

            <div className="contact-card-content">
              <span className="contact-card-label">
                LinkedIn
              </span>

              <span className="contact-card-value">
                Connect with me on LinkedIn
              </span>
            </div>

            <FaArrowRight className="contact-arrow" />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;