import ProjectCard from "./ProjectCard";

import eventImage from "../assets/event.png";
import animeImage from "../assets/anime.png";
import hostelImage from "../assets/hostel.png";
import expenseImage from "../assets/expense.png";
import portfolioImage from "../assets/portfolio.png";

function Projects() {
  const projects = [
    {
      title: "Event Management System",
      category: "Full Stack",
      image: eventImage,
      description:
        "Django-based event platform with booking system, dashboards, authentication, and organizer controls.",
      tech: [
        "Django",
        "Python",
        "SQLite",
        "Bootstrap",
      ],
      github:
        "https://github.com/sanath2003git/event-management-system-2",
      demo:
        "https://sanathsreekumar.pythonanywhere.com/",
    },

    {
      title: "Anime Movie App",
      category: "Frontend",
      image: animeImage,
      description:
        "React anime movie app with search, routing, favorites system, and responsive UI.",
      tech: [
        "React",
        "JavaScript",
        "CSS",
        "React Router",
        "Vite",
      ],
      github:
        "https://github.com/sanath2003git/movie_",
      demo:
        "https://github.com/sanath2003git/movie_",
    },

    {
      title: "Hostel Leave Management System",
      category: "Full Stack",
      image: hostelImage,
      description:
        "PHP-based hostel management platform with leave approval workflow, attendance tracking, and dashboards.",
      tech: [
        "PHP",
        "MySQL",
        "Bootstrap",
        "JavaScript",
      ],
      github:
        "https://github.com/sanath2003git/hostel-leave-management-system",
      demo:
        "https://github.com/sanath2003git/hostel-leave-management-system",
    },

    {
      title: "Expense Tracker System",
      category: "Backend",
      image: expenseImage,
      description:
        "Flask expense tracker with authentication, expense splitting, dashboards, and CRUD operations.",
      tech: [
        "Python",
        "Flask",
        "SQLAlchemy",
        "SQLite",
      ],
      github:
        "https://github.com/sanath2003git/Expense-tracker",
      demo:
        "https://github.com/sanath2003git/Expense-tracker",
    },

    {
      title: "React Portfolio Website",
      category: "Frontend",
      image: portfolioImage,
      description:
        "Modern responsive portfolio built using React and Vite with reusable components and dynamic analytics.",
      tech: [
        "React",
        "Vite",
        "JavaScript",
        "CSS",
      ],
      github:
        "https://github.com/sanath2003git/portfolio-react",
      demo:
        "https://sanath-portfolio-one.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <div className="section-label">
            04 — PROJECTS
          </div>

          <h2 className="projects-title">
            Featured <span>Projects</span>
          </h2>

          <p className="projects-description">
            A selection of applications and projects I
            have built using modern frontend, backend,
            and database technologies.
          </p>
        </div>

        {/* Featured Project */}
        <div className="featured-project">
          <ProjectCard
            {...projects[0]}
            featured
          />
        </div>

        {/* Other Projects */}
        <div className="project-list">
          {projects.slice(1).map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;