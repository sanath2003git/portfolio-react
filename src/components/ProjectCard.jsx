import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  title,
  image,
  description,
  tech,
  github,
  demo,
  category = "Full Stack",
  featured = false,
}) {
  return (
    <article className={`project-card ${featured ? "featured-card" : ""}`}>
      {/* PROJECT IMAGE */}
      <div className="project-image">
        <img
          src={image}
          alt={`${title} project screenshot`}
        />
      </div>

      {/* PROJECT CONTENT */}
      <div className="project-card-content">

        <span className="project-category">
          {category}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        {/* TECHNOLOGIES */}
        <div className="tech-stack">
          {tech.map((technology) => (
            <span
              className="tech-badge"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="project-links">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub />
            <span>View Code</span>
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link demo-link"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;