import ProjectCard from './ProjectCard';

const projects = [

  {
    title: "Event Management System",

    description:
      "A Django-based event management platform with event booking, authentication, and organizer dashboards.",

    tech: ["Django", "Python", "SQLite", "Bootstrap"],

    github:
      "https://github.com/sanath2003git/event-management-system-2"
  },

  {
    title: "Anime Movie Website",

    description:
      "A responsive website for exploring anime movie details and information.",

    tech: ["React"],

    github:
      "https://github.com/sanath2003git/movie_"
  },

  {
    title: "Hostel Leave Management",

    description:
      "A PHP/MySQL portal for managing hostel leave requests and approvals.",

    tech: ["PHP", "MySQL"],

    github:
      "https://github.com/sanath2003git/hostel-leave-management-system"
  },

  {
    title: "Expense Tracker",

    description:
      "A Python Flask-based expense tracking application.",

    tech: ["Python", "Flask"],

    github:
      "https://github.com/sanath2003git/Expense-tracker"
  }

];

function Projects() {

  return (

    <section
      id="projects"
      className="projects-section reveal">

      <div className="projects-wrapper">

        <div className="projects-heading">

  <h2 className="projects-title">
    Projects
  </h2>

  <div className="section-line1"></div>

</div>

        <div className="projects-container">

          {projects.map((project) => (

            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default Projects;