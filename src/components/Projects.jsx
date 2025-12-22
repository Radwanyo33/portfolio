import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Digital Album",
      technologies: [
        "C#",
        "ASP.NET Core",
        "Razor Engine",
        "Tailwind CSS",
        "Javascript",
      ],
      description:
        "Digital Album is a full-stack ASP.NET Core MVC blog and Album website dedicated to documenting precious moments of a father's journey with his son. This beautiful web application allows you to create blog posts, manage photo albums, and preserve memories in an elegant digital format.",
      features: [
        "A dedicated admin panel with dedicated but secured admin route, content and user management facilities.",
        "A dedicated Blog Section where you can share your journey with your son or beloved ones through image along with a sweet note from yourself. Blog Management can be done through Admin access.",
        "A beautifully designed responsive Album section which provides you to upload every bitter-sweet memory of your son or beloved ones. Here you will have an Image Gallery, Interactive Slideshow Feature and Image Management facilities.",
        "The project is keennly focused on authentication and security. Role-Based authentication, Secure Login, Anti-Forgery Tokens and Input Validation is applied here.",
      ],
      github: "https://github.com/Radwanyo33/Digital-Album",
    },
    {
      name: "Live Movie Database",
      technologies: [
        "ASP.NET Core",
        "React",
        "CSS",
        "Tailwind CSS",
        "Javascript",
      ],
      description:
        "A movie server, providing you the live movie enjoyment experience.",
      features: [
        "A dedicated admin panel to perform CRUD operations on Movies. (Create Movie has separate form.)",
        "A dedicated user view where user can find their recommended movies (Bengali and Hindi for now with IMDB ratings ranging from 7-10).",
        "Search box for searching movies based on rating, genre, name, cast and release year.3",
        "Watch button to enjoy the movie in live mode.",
      ],
      github: "https://github.com/Radwanyo33/movie-app",
    },
    {
      name: "SZMC Event Registration Form with Admin Panel & Payment Gateway",
      technologies: ["Laravel", "PHP"],
      description: "Event registration system with payment integration",
      features: [
        "Dedicated form for event participants",
        "Calculated amount features based on guest preference",
        "Image upload and preview segment",
        "Integrated Bkash payment gateway",
        "Dedicated admin panel for registration management",
      ],
      link: "https://szmcday.next-onetech.com/",
    },
    {
      name: "Jera MPL Website Alignment Issue Solution",
      technologies: ["Laravel", "PHP"],
      description: "Fixed landing page event segment functionality",
      features: [
        "Created method on Controller",
        "Adjusted views and linked routes",
        "Resolved website functionality issues",
      ],
      link: "https://jerampl.com/",
    },
    {
      name: "Phone Book Project with Authenticated API",
      technologies: ["Laravel", "PHP", "Lumen"],
      description: "Secure REST APIs with authentication",
      features: [
        "Built secure REST APIs using Laravel Lumen",
        "Database schema with Eloquent ORM",
        "Client-side API testing with Postman",
        "Applied OOP and clean code practices",
      ],
      github:
        "https://github.com/Radwanyo33/Laravel-Projects-for-growth/tree/master",
    },
    {
      name: "Loan Management Solution",
      technologies: ["ASP.NET Core", "C#"],
      description: "Financial management system",
      features: [
        "Built secure REST APIs and database schema with Entity Framework",
        "Applied OOP and clean code practices",
        "Agile methodology implementation",
      ],
    },
    {
      name: "Blood Life – Blood Donation Web App",
      technologies: ["ASP.NET Core", "C#", "JavaScript"],
      description: "Full-stack blood donation platform",
      features: [
        "Developed full-stack web app with ASP.NET Core",
        "JavaScript frontend integration",
        "Authentication and donor/adopter management modules",
      ],
      github: "https://github.com/Radwanyo33/BloodLife",
    },
  ];
  return (
    <section className="projects-section">
      <div className="container">
        <h1>Key Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              {project.status && (
                <span className="status">{project.status}</span>
              )}
              <p className="description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="features">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
