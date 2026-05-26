import { FaGithub } from "react-icons/fa";
function ProjectCard({
  title,
  description,
  tech,
  github
}) {

  return (

    <div className="project-card">

      {/* TITLE */}
      <h3>{title}</h3>

      {/* DESCRIPTION */}
      <p>{description}</p>

      {/* TECH STACK */}
      <div className="tech-stack">

        {tech?.map((item) => (

          <span
            key={item}
            className="tech-badge"
          >
            {item}
          </span>

        ))}

      </div>

      {/* BUTTON */}
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View Code <FaGithub />
      </a>

    </div>

  );

}

export default ProjectCard;