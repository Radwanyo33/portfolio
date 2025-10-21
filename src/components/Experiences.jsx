import React from 'react';
import './Experiences.css';

const Experiences = () => {
  const experiences = [
    {
      company: "Informax Technology Limited",
      position: "Software Engineer & Web Developer",
      location: "Lalmatia, Dhaka",
      period: "Sep 2025 – Continuing",
      responsibilities: [
        "Building Robust Software Solutions: Developing and maintaining high-quality software applications tailored to client needs.",
        "Web Development: Creating responsive and user-friendly websites using modern web technologies.",
        "Collaboration: Working closely with cross-functional teams to ensure seamless project execution and delivery.",
        "Support: Provide post production support and maintenance for deployed applications."
      ]
    },
    {
      company: "FinTech Point",
      position: "Card IT Specialist",
      location: "Mymensingh, Bangladesh",
      period: "Nov 2023 – Aug 2025",
      responsibilities: [
        "Designed and implemented database schemas and APIs in ASP.NET Core for FinTech applications",
        "Led enhancements for VISA and MasterCard systems including fraud rule testing and 3D secure validation",
        "Developed and tested card management systems using PowerCard modules, ensuring compliance with ISO 8583",
        "Collaborated in Agile teams with sprints, backlog grooming, and daily standups",
        "Mentored junior team members and coordinated testing across SIT and UAT phases"
      ]
    }
  ];

  return (
    <section className="experiences-section">
      <div className="container">
        <h1>Professional Experience</h1>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.position}</h3>
                <h4>{exp.company} - {exp.location}</h4>
                <p className="period">{exp.period}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;