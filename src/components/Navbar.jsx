import { useState, useEffect } from 'react';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
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
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      )}

    </nav>

  );
}

export default Navbar;