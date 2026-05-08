import { useState, useEffect } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  // Close Mobile Menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Navbar Scroll Effect
  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);

  return (

    <nav
      className={
        scrolled
          ? "navbar scrolled"
          : "navbar"
      }
    >

      {/* LOGO */}
      <h1 className="logo">
        SANATH
      </h1>

      {/* DESKTOP MENU */}
      <ul className="desktop-menu">

        <li>
          <a href="#home">
            Home
          </a>
        </li>

        <li>
          <a href="#about">
            About
          </a>
        </li>

        <li>
          <a href="#skills">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact">
            Socials
          </a>
        </li>

      </ul>

      {/* MOBILE BUTTON */}
      <div className="nav-right">

        <button
          className="menu-btn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {menuOpen
            ? "✕"
            : "☰"}

        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <ul className="mobile-menu">

          <li>
            <a
              href="#home"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={closeMenu}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={closeMenu}
            >
              Socials
            </a>
          </li>

        </ul>

      )}

    </nav>

  );

}

export default Navbar;