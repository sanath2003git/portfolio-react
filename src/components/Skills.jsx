import "../index.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <h2 className="skills-title">Technical Skills</h2>

        <div className="skills-grid">

  <div className="skill-box">
    <div className="skill-info">
      <span>HTML, CSS & JavaScript</span>
      <span>90%</span>
    </div>

    <div className="skill-bar">
      <div
        className="skill-progress blue"
        style={{ width: "90%" }}
      ></div>
    </div>
  </div>

  <div className="skill-box">
    <div className="skill-info">
      <span>React.js</span>
      <span>75%</span>
    </div>

    <div className="skill-bar">
      <div
        className="skill-progress cyan"
        style={{ width: "75%" }}
      ></div>
    </div>
  </div>

  <div className="skill-box">
    <div className="skill-info">
      <span>Python & Flask</span>
      <span>80%</span>
    </div>

    <div className="skill-bar">
      <div
        className="skill-progress blue"
        style={{ width: "80%" }}
      ></div>
    </div>
  </div>

  <div className="skill-box">
    <div className="skill-info">
      <span>Django</span>
      <span>70%</span>
    </div>

    <div className="skill-bar">
      <div
        className="skill-progress cyan"
        style={{ width: "70%" }}
      ></div>
    </div>
  </div>

  <div className="skill-box">
    <div className="skill-info">
      <span>PHP & MySQL</span>
      <span>75%</span>
    </div>

    <div className="skill-bar">
      <div
        className="skill-progress blue"
        style={{ width: "75%" }}
      ></div>
    </div>
  </div>

  <div className="skill-box">
    <div className="skill-info">
      <span>Git & GitHub</span>
      <span>85%</span>
    </div>

    <div className="skill-bar">
      <div
        className="skill-progress cyan"
        style={{ width: "85%" }}
      ></div>
    </div>
  </div>

</div>
      </div>
    </section>
  );
}

export default Skills;