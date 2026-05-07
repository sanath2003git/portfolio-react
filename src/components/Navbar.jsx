import { useState, useEffect } from 'react';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close Mobile Menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Navbar Scroll Effect
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup Function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (

    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>

      <h1>SANATH</h1>

      {/* Desktop Menu */}
      <ul className="desktop-menu">

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

      </ul>

      {/* Right Side */}
      <div className="nav-right">

        <button
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <ul className="mobile-menu">

          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

        </ul>

      )}

    </nav>

  );
}

export default Navbar;