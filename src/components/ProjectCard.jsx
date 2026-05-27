import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

function ProjectCard({

  title,
  image,
  description,
  tech,
  github,
  demo,
  category = "Full Stack Project"

}) {

  return (

    <div className="project-card">

      {/* PROJECT IMAGE */}
      <div className="project-image-wrapper">

        <img
          src={image}
          alt={title}
          className="project-image"
        />

      </div>

      {/* CONTENT */}
      <div className="project-card-content">

        {/* CATEGORY */}
        <span className="project-category">

          {category}

        </span>

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

          {/* GITHUB BUTTON */}
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >

            <FaGithub />

            <span>
              View Code
            </span>

          </a>

          {/* DEMO BUTTON */}
          {demo && (

            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="demo-link"
            >

              <FaExternalLinkAlt />

              <span>
                Live Demo
              </span>

            </a>

          )}

        </div>

      </div>

    </div>

  );

}

export default ProjectCard;