import ProjectCard from './ProjectCard';

const projects = [

  {
    title: "Event Management System",

    description:
      "A Django-based event management platform with event booking, authentication, and organizer dashboards.",

    tech: ["Django", "Python", "SQLite", "Bootstrap"]
  },

  {
    title: "Anime Movie Website",

    description:
      "A responsive website for exploring anime movie details and information.",

    tech: ["React"]
  },

  {
    title: "Hostel Leave Management",

    description:
      "A PHP/MySQL portal for managing hostel leave requests and approvals.",

    tech: ["PHP", "MySQL"]
  },

  {
    title: "Expense Tracker",

    description:
      "A Python Flask-based expense tracking application.",

    tech: ["Python", "Flask"]
  }

];

function Projects() {

  return (

    <section id="projects" className="reveal">

      <h2>Projects</h2>

      <div className="projects-container">

        {projects.map((project) => (

          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />

        ))}

      </div>

    </section>

  );

}

export default Projects;