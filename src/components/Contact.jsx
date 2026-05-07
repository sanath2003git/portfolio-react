import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {

  return (

    <section id="contact" className="reveal">

      <h2>Contact Me</h2>

      <p>
        Feel free to connect with me through email or social media.
      </p>

      <div className="contact-links">

        <a href="https://github.com/sanath2003git" target="_blank">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/c-s-sanath-sreekumar-b930b2258/" target="_blank">
          <FaLinkedin />
        </a>

        <a href="mailto:sanathsreekumar@gmail.com">
          <FaEnvelope />
        </a>

      </div>

    </section>

  );

}

export default Contact;