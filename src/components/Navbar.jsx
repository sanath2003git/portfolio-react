import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* LOGO */}
      <a href="#home" className="logo">
        SANATH
      </a>

      {/* DESKTOP NAVIGATION */}
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Connect</a>
        </li>

        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* MOBILE NAVIGATION */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#contact" onClick={closeMenu}>
          Connect
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          onClick={closeMenu}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;