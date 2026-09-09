import {
  FaCodeBranch,
  FaGlobeAsia,
  FaLeaf,
} from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <div className="about-section">

        {/* LEFT — ABOUT ME */}
        <div className="about-left">
          <p className="section-label">01 — ABOUT</p>

          <h2>
            About <span>Me</span>
          </h2>

          <div className="about-line"></div>

          <p>
            I am a developer driven by curiosity and problem-solving.
            While I specialize in building web applications with Python,
            PHP, and modern frontend technologies, I am also interested
            in GIS Mapping and Integrated Farming.
          </p>

          <p>
            I enjoy building clean, responsive, and functional digital
            experiences. My goal is to combine creativity with technology
            to solve real-world problems.
          </p>
        </div>

        {/* RIGHT — CORE INTERESTS */}
        <div className="about-right">
          <p className="section-label">02 — INTERESTS</p>

          <h2>Core Interests</h2>

          <div className="interest-list">

            <div className="interest-card">
              <div className="interest-icon">
                <FaCodeBranch />
              </div>

              <div>
                <h3>Full-Stack Development</h3>
                <p>
                  Building complete web applications from frontend
                  interfaces to backend systems.
                </p>
              </div>
            </div>

            <div className="interest-card">
              <div className="interest-icon">
                <FaGlobeAsia />
              </div>

              <div>
                <h3>GIS &amp; Spatial Data</h3>
                <p>
                  Exploring maps, spatial data, and location-based
                  applications.
                </p>
              </div>
            </div>

            <div className="interest-card">
              <div className="interest-icon">
                <FaLeaf />
              </div>

              <div>
                <h3>Integrated Farming</h3>
                <p>
                  Interested in combining technology with sustainable
                  and integrated farming solutions.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;