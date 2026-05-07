const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "PHP"
];

function Skills() {
  return (
    <section className="reveal">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
  <h3 key={skill}>{skill}</h3>
        ))}
      </div>
    </section>
  );
}

export default Skills;