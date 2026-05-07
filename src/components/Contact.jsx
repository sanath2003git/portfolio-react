import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {

  return (

    <section
      id="contact"
      className="reveal"
    >

      <h2 className="section-title">
        Contact Me
      </h2>

      <p>
        Interested in working together or have a project idea?
        Feel free to contact me.
      </p>

      <div className="hero-buttons">

        <a href="mailto:Sanathsreekumar@gmail.com">
          <FaEnvelope />
        </a>

        <a href="https://github.com/sanath2003git" target="_blank">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/c-s-sanath-sreekumar-b930b2258/" target="_blank">
          <FaLinkedin />
        </a>

      </div>

    </section>

  );

}

export default Contact;