import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Event Management System",

    description:
      "A Django-based event management platform with event booking, authentication, and organizer dashboards."
  },

  {
    title: "Anime Movie Website",

    description:
      "A responsive website for exploring anime movie details and information."
  },

  {
    title: "Hostel Leave Management",

    description:
      "A PHP/MySQL portal for managing hostel leave requests and approvals."
  }
];

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;