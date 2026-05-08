import {
  FaGlobeAsia,
  FaLeaf,
  FaCodeBranch,
} from "react-icons/fa";
function About() {

  return (

    <section
      id="about"
      className="about-section reveal"
    >

      {/* LEFT SIDE */}

      <div className="about-left">

        <h2 className="about-title">
          About Me
        </h2>

        <div className="section-line"></div>

        <p>
          I am a developer driven by curiosity and
          problem-solving. While I specialize in
          building web applications with Python,
          PHP, and modern frontend technologies,
          I am also interested in GIS Mapping
          and Integrated Farming.
        </p>

        <p>
          I enjoy building clean, responsive,
          and functional digital experiences.
          My goal is to combine creativity
          with technology to solve real-world
          problems.
        </p>

      </div>

      {/* RIGHT SIDE */}

      <div className="about-right">

        <div className="interest-card">

          <h3>Core Interests</h3>

          <ul>

            <li>
              <FaGlobeAsia className="interest-icon" />
              GIS & Spatial Data
            </li>

            <li>
              <FaLeaf className="interest-icon" />
              Integrated Farming
            </li>

            <li>
              <FaCodeBranch className="interest-icon" />
              Full-Stack Development
            </li>


          </ul>

        </div>

      </div>

    </section>

  );

}

export default About;