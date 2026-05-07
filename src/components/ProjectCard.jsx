function ProjectCard({
  title,
  description,
  tech,
  github
}) {

  return (

    <div className="project-card">

      <h3>{title}</h3>

      <p>{description}</p>

      {/* Tech Stack */}
      <div className="tech-stack">

        {tech.map((item) => (

          <span
            key={item}
            className="tech-badge"
          >
            {item}
          </span>

        ))}

      </div>

      {/* GitHub Button */}
      <div className="project-buttons">

        <a
          href={github}
          target="_blank"
        >
          <button>
            GitHub
          </button>
        </a>

      </div>

    </div>

  );

}

export default ProjectCard;