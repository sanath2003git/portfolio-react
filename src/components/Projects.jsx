import ProjectCard from "./ProjectCard";

import animeImage
from "../assets/anime.png";

import hostelImage
from "../assets/hostel.png";

import expenseImage
from "../assets/expense.png";

import portfolioImage
from "../assets/portfolio.png";

const projects = [

  {
    title: "Event Management System",

    category: "Full Stack",

    image: animeImage,

    description:
      "Django-based event platform with booking system, dashboards, authentication, and organizer controls.",

    tech: [
      "Django",
      "Python",
      "SQLite",
      "Bootstrap"
    ],

    github:
      "https://github.com/sanath2003git/event-management-system-2",

demo: "https://github.com/sanath2003git/event-management-system-2"
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
      "Vite"
    ],

    github:
      "https://github.com/sanath2003git/movie_",

demo: "https://github.com/sanath2003git/movie_"
  },

  {
    title:
      "Hostel Leave Management System",

    category: "Full Stack",

    image: hostelImage,

    description:
      "PHP-based hostel management platform with leave approval workflow, attendance tracking, and dashboards.",

    tech: [
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript"
    ],

    github:
      "https://github.com/sanath2003git/hostel-leave-management-system",

demo: "https://github.com/sanath2003git/hostel-leave-management-system"
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
      "SQLite"
    ],

    github:
      "https://github.com/sanath2003git/Expense-tracker",

demo: "https://github.com/sanath2003git/Expense-tracker"
  },

  {
    title:
      "React Portfolio Website",

    category: "Frontend",

    image: portfolioImage,

    description:
      "Modern responsive portfolio built using React and Vite with reusable components and dynamic analytics.",

    tech: [
      "React",
      "Vite",
      "JavaScript",
      "CSS"
    ],

    github:
      "https://github.com/sanath2003git/portfolio-react",

demo: "https://sanath-portfolio-one.vercel.app/"
  }

];

function Projects() {

  return (

    <section
      id="projects"
      className="projects-section reveal"
    >

      <div className="projects-wrapper">

        {/* HEADING */}
        <div className="projects-heading">

          <h2 className="projects-title">

            Projects

          </h2>

          <div className="section-line1"></div>

        </div>

        {/* PROJECT GRID */}
        <div className="projects-container">

          {projects.map((project) => (

            <ProjectCard

              key={project.title}

              title={project.title}

              category={project.category}

              image={project.image}

              description={
                project.description
              }

              tech={project.tech}

              github={project.github}

              demo={project.demo}

            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default Projects;