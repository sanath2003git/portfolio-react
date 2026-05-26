import "../index.css";

import calculateSkills
from "../utils/calculateSkills";

function Skills() {

  const skills =
    calculateSkills();

  return (

    <section
      className="skills-section"
      id="skills"
    >

      <div className="skills-container">

        <h2 className="skills-title">
          Technical Skills
        </h2>

        <div className="skills-grid">

          {
            skills.map((skill, index) => (

              <div
                className="skill-box"
                key={index}
              >

                {/* TOP */}
                <div className="skill-info">

                  <span>
                    {skill.name}
                  </span>

                  <span>
                    {skill.percentage}%
                  </span>

                </div>

                {/* BAR */}
                <div className="skill-bar">

                  <div
                    className={`skill-progress ${
                      index % 2 === 0
                        ? "blue"
                        : "cyan"
                    }`}
                    style={{
                      width:
                        `${skill.percentage}%`
                    }}
                  ></div>

                </div>

                {/* FEATURES */}
                <div className="skill-tags">

                  {
                    skill.features.map(
                      (feature, i) => (

                        <span
                          key={i}
                          className="skill-tag"
                        >

                          {feature}

                        </span>

                      )
                    )
                  }

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Skills;