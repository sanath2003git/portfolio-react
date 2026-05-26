import ProjectCard from './ProjectCard';
import animeImage from "../assets/anime.png";

import hostelImage from "../assets/hostel.png";

import expenseImage from "../assets/expense.png";

import portfolioImage from "../assets/portfolio.png";

const projects = [

  {
  title: "Event Management System",

  image: animeImage,

  description:
    "A Django-based event management platform featuring event creation, booking management, user authentication, role-based dashboards, seat management, and organizer controls.",

  tech: [
    "Django",
    "Python",
    "SQLite",
    "Bootstrap",
    "HTML",
    "CSS",
    "JavaScript"
  ],

    github:
      "https://github.com/sanath2003git/event-management-system-2",
  },

  {
  title: "Anime Movie App",

  image: animeImage,

  description:
    "A React-based anime movie application with movie search, favorites system, dynamic movie details pages, responsive UI, and localStorage support.",

  tech: ["React", "JavaScript", "CSS", "React Router", "Vite"],

    github:
      "https://github.com/sanath2003git/movie_"
  },

  {
  title: "Hostel Leave Management System",

  image: hostelImage,

  description:
    "A PHP-based hostel management platform featuring online leave requests, leave approval workflow, attendance tracking, unauthorized absence detection, student outing monitoring, automated email notifications, and role-based dashboards for students and wardens.",

  tech: [
    "PHP",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "PHPMailer",
    "Bootstrap"
  ],

    github:
      "https://github.com/sanath2003git/hostel-leave-management-system"
  },

  {
  title: "Expense Tracker System",

  image: expenseImage,

  description:
    "A Flask-based expense tracking platform featuring user authentication, friend-based expense splitting, balance tracking, multi-user expense management, responsive dashboards, expense history, category-based expense organization, and secure CRUD operations.",

  tech: [
    "Python",
    "Flask",
    "SQLAlchemy",
    "SQLite",
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript"
  ],

    github:
      "https://github.com/sanath2003git/Expense-tracker"
  },{
  title: "React Portfolio Website",

  image: portfolioImage,

  description:
    "A modern responsive portfolio website built with React and Vite featuring smooth scrolling, reusable components, responsive design, animated sections, and project showcase cards.",

  tech: [
    "React",
    "Vite",
    "JavaScript",
    "CSS",
    "HTML",
    "React Icons"
  ],

  github:
    "https://github.com/sanath2003git/portfolio-react"
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
              image={project.image}
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