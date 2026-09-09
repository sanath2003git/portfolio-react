import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaTools,
} from "react-icons/fa";

import {
  SiDjango,
  SiFlask,
  SiVite,
  SiMysql,
  SiSqlite,
  SiSqlalchemy,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: [
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "JavaScript",
          icon: <FaJsSquare />,
        },
        {
          name: "HTML",
          icon: <FaHtml5 />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt />,
        },
        {
          name: "React Router",
          icon: <FaReact />,
        },
        {
          name: "Vite",
          icon: <SiVite />,
        },
      ],
    },

    {
      title: "Backend",
      icon: <FaPython />,
      skills: [
        {
          name: "Python",
          icon: <FaPython />,
        },
        {
          name: "Django",
          icon: <SiDjango />,
        },
        {
          name: "Flask",
          icon: <SiFlask />,
        },
        {
          name: "PHP",
          icon: <FaPhp />,
        },
      ],
    },

    {
      title: "Databases",
      icon: <SiMysql />,
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
        {
          name: "SQLite",
          icon: <SiSqlite />,
        },
        {
          name: "SQLAlchemy",
          icon: <SiSqlalchemy />,
        },
      ],
    },

    {
      title: "Tools",
      icon: <FaTools />,
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt />,
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
        },
        {
          name: "VS Code",
          icon: <FaTools /> ,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">03 — SKILLS</p>

          <h2 className="skills-title">
            Technical <span>Skills</span>
          </h2>

          <p className="skills-description">
            Technologies and tools I use to build responsive interfaces,
            full-stack applications, and data-driven solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-box" key={category.title}>

              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {category.icon}
                </div>

                <h3>{category.title}</h3>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span
                    className="skill-tag"
                    key={skill.name}
                  >
                    <span className="skill-tag-icon">
                      {skill.icon}
                    </span>

                    {skill.name}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;