function ProjectCard({ title, description, tech }) {

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

      <button>
        View Project
      </button>

    </div>

  );

}

export default ProjectCard;