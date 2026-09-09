import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-content">

        {/* COPYRIGHT */}
        <p>
          © 2026 C S Sanath Sreekumar
        </p>

        {/* BUILT WITH */}
        <p className="footer-built">
          Built with <span>React</span> &amp; Vite
        </p>

        {/* SOCIAL LINKS */}
        <div className="footer-socials">
          <a
            href="mailto:Sanathsreekumar@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/sanath2003git"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/c-s-sanath-sreekumar-b930b2258/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;