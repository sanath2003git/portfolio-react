import { FaGithub } from "react-icons/fa";

function ProjectCard({
  title,
  image,
  description,
  tech,
  github,
  demo
}) {

  return (

    <div className="project-card">

      {/* PROJECT IMAGE */}
      <img
        src={image}
        alt={title}
        className="project-image"
      />

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

      {/* BUTTONS */}
      <div className="project-links">

        {/* GITHUB */}
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View Code <FaGithub />
        </a>

        {/* LIVE DEMO */}
        {demo && (

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="demo-link"
          >
            Live Demo
          </a>

        )}

      </div>

    </div>

  );

}

export default ProjectCard;