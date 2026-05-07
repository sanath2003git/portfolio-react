import { useState } from 'react';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>

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

        {/* Toggle Button */}
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