function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <button>View Project</button>
    </div>
  );
}

export default ProjectCard;