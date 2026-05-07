function Hero() {

  return (

    <section
      id="home"
      className="reveal"
    >

      <h1 className="hero-title">
        C S Sanath Sreekumar
      </h1>

      <p className="hero-subtitle">
        React Developer | Python Developer | MCA Student
      </p>

      <div className="hero-buttons">

        <a href="#projects">
          <button>
            View Projects
          </button>
        </a>

        <a
          href="/resume.pdf"
          download
        >
          <button>
            Download Resume
          </button>
        </a>

      </div>

    </section>

  );

}

export default Hero;