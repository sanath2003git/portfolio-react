import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaCode,
  FaDatabase,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiSqlalchemy,
  SiMongoose,
  SiGraphql,
  SiPostman,
  SiXampp,
  SiVercel,
  SiVite,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode />,
      skills: [
        {
          name: "Python",
          icon: <FaPython />,
        },
        {
          name: "Java",
          icon: <FaJava />,
        },
        {
          name: "C",
          icon: <FaCode />,
        },
        {
          name: "JavaScript",
          icon: <FaJsSquare />,
        },
        {
          name: "SQL",
          icon: <FaDatabase />,
        },
        {
          name: "PHP",
          icon: <FaPhp />,
        },
      ],
    },

    {
      title: "Frontend",
      icon: <FaReact />,
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt />,
        },
        {
          name: "JavaScript",
          icon: <FaJsSquare />,
        },
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
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
          name: "Django",
          icon: <SiDjango />,
        },
        {
          name: "Django REST Framework",
          icon: <SiDjango />,
        },
        {
          name: "Flask",
          icon: <SiFlask />,
        },
      ],
    },

    {
      title: "Databases & ORM",
      icon: <FaDatabase />,
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
        {
          name: "SQLite",
          icon: <SiSqlite />,
        },
        {
          name: "SQLAlchemy",
          icon: <SiSqlalchemy />,
        },
        {
          name: "Django ORM",
          icon: <SiDjango />,
        },
        {
          name: "Mongoose",
          icon: <SiMongoose />,
        },
      ],
    },

    {
      title: "APIs & Data",
      icon: <FaCode />,
      skills: [
        {
          name: "REST APIs",
          icon: <FaCode />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql />,
        },
        {
          name: "JSON",
          icon: <FaCode />,
        },
        {
          name: "Graphene-Django",
          icon: <SiGraphql />,
        },
        {
          name: "JWT",
          icon: <FaShieldAlt />,
        },
      ],
    },

    {
      title: "Tools & Platforms",
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
          name: "Postman",
          icon: <SiPostman />,
        },
        {
          name: "VS Code",
          icon: <FaTools />,
        },
        {
          name: "XAMPP",
          icon: <SiXampp />,
        },
        {
          name: "MongoDB Atlas",
          icon: <SiMongodb />,
        },
        {
          name: "Vercel",
          icon: <SiVercel />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section reveal">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">03 — SKILLS</p>

          <h2 className="skills-title">
            Technical <span>Skills</span>
          </h2>

          <p className="skills-description">
            Technologies and tools I use to build responsive interfaces,
            full-stack applications, APIs, and data-driven solutions.
          </p>
        </div>

        <div className="skills-grid reveal-stagger">
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