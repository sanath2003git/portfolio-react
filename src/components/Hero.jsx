import Button from './Button';

function Hero() {

  return (

    <section
      id="home"
      className="reveal"
    >

      <h1>C S Sanath Sreekumar</h1>

      <p>
        React Developer | Python Developer | MCA Student
      </p>

      <div className="hero-buttons">

        <a href="#projects">
          <Button text="View Projects" />
        </a>

        <a
          href="/resume.pdf"
          download
        >
          <Button text="Download Resume" />
        </a>

      </div>

    </section>

  );

}

export default Hero;