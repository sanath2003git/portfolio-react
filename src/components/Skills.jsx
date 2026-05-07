const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Django",
  "Flask",
  "PHP",
  "Git",
  "GitHub"
];

function Skills() {

  return (

    <section
      id="skills"
      className="reveal"
    >

      <h2 className="section-title">
        My Skills
      </h2>

      <div className="skills-container">

        {skills.map((skill) => (

          <h3 key={skill}>
            {skill}
          </h3>

        ))}

      </div>

    </section>

  );

}

export default Skills;