import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Contact() {

  return (

    <section
      id="contact"
      className="contact-section"
    >

      <div className="contact-wrapper">

        <h2 className="contact-heading">
          Let's Connect
        </h2>

        <div className="contact-icons">

          <a
            href="mailto:Sanathsreekumar@gmail.com"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/sanath2003git"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/c-s-sanath-sreekumar-b930b2258/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </section>

  );

}

export default Contact;