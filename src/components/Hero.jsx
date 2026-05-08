function Hero() {
  return (
    <section id="home">
      <div className="hero-content">

        <h1>
          C S Sanath Sreekumar
        </h1>

        <p>
          React Developer | Python Developer | MCA Student
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="/resume.pdf" className="btn-secondary">
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;