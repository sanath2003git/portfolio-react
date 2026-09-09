import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function ProjectCard({
  title,
  image,
  description,
  tech,
  github,
  demo,
  category = "Full Stack Project",
  featured = false,
}) {
  return (
    <article
      className={`project-card ${
        featured ? "featured-card" : ""
      }`}
    >
      <div className="project-image">
        <img
          src={image}
          alt={`${title} project screenshot`}
        />
      </div>

      <div className="project-card-content">
        <span className="project-category">
          {category}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="tech-stack">
          {tech.map((item) => (
            <span
              className="tech-badge"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>

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