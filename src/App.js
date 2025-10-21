import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Skills from './components/Skills';

import { portfolioApi } from './api/portfolioApi';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [portfolioData, setPortfolioData] = useState({
    about: null,
    experiences: [],
    projects: [],
    skills: {}
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPortfolioData();
  }, []);

  const loadPortfolioData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // For now, use static data until API is set up
      setPortfolioData(getStaticData());
    } catch (err) {
      console.error('Failed to load portfolio data:', err);
      setError('Failed to load portfolio data. Please try again later.');
      setPortfolioData(getStaticData());
    } finally {
      setLoading(false);
    }
  };

  const getStaticData = () => {
    return {
      about: {
        summary: "Fullstack developer with experience in Laravel,ASP.NET Core, Django, React.js, Database design, and FinTech systems. Skilled in building scalable REST APIs, database integration, and project collaboration using Agile/Scrum. Strong foundation in C#, PHP, Javascript and Python with hands-on project delivery in finance, healthcare, and web applications.",
        hobbies: [
          "Programming & Learning New Technologies",
          "Open Source Contribution", 
          "Problem Solving",
          "Building New Software Projects",
          "Reading Novels",
          "Gardening"
        ],
        email: "radwanul.informax@gmail.com",
        phone: "+880 1918428380",
        location: "Dhaka, Bangladesh",
        linkedinUrl: "https://linkedin.com/in/radwanul-hoque-rafi-2406911b9",
        githubUrl: "https://github.com/Radwanyo33"
      },
      experiences: [
        {
          company: "Informax Technology Limited",
          position: "Software Engineer & Web Developer", 
          location: "Lalmatia, Dhaka",
          startDate: "2025-09-01",
          endDate: null,
          isCurrent: true,
          responsibilities: [
            "Provide Software Support",
            "Assist Building Robust Software"
          ]
        },
        {
          company: "FinTech Point",
          position: "Card IT Specialist",
          location: "Mymensingh, Bangladesh",
          startDate: "2023-11-01", 
          endDate: "2025-08-31",
          isCurrent: false,
          responsibilities: [
            "Designed and implemented database schemas and APIs in ASP.NET Core for FinTech applications",
            "Led enhancements for VISA and MasterCard systems including fraud rule testing and 3D secure validation",
            "Developed and tested card management systems using PowerCard modules, ensuring compliance with ISO 8583",
            "Collaborated in Agile teams with sprints, backlog grooming, and daily standups",
            "Mentored junior team members and coordinated testing across SIT and UAT phases"
          ]
        }
      ],
      projects: [
        {
          name: "SZMC Event Registration Form with Admin Panel & Payment Gateway",
          description: "Event registration system with payment integration",
          technologies: ["Laravel", "PHP"],
          features: [
            "Dedicated form for event participants",
            "Calculated amount features based on guest preference", 
            "Image upload and preview segment",
            "Integrated Bkash payment gateway",
            "Dedicated admin panel for registration management"
          ],
          status: "Under Development",
          projectUrl: "",
          githubUrl: ""
        }
      ],
      skills: {
        languages: [
          { name: "PHP", proficiency: 85 },
          { name: "C#", proficiency: 80 },
          { name: "Python", proficiency: 75 },
          { name: "Java", proficiency: 70 },
          { name: "JavaScript", proficiency: 80 },
          { name: "SQL", proficiency: 85 }
        ],
        frameworks: [
          { name: "Laravel", proficiency: 85 },
          { name: "ASP.NET Core", proficiency: 80 },
          { name: "Django", proficiency: 70 }
        ],
        databases: [
          { name: "SQL Server", proficiency: 80 },
          { name: "Oracle", proficiency: 75 },
          { name: "MySQL", proficiency: 85 },
          { name: "PostgreSQL", proficiency: 80 }
        ],
        tools: [
          { name: "Axios", proficiency: 80 },
          { name: "Ajax", proficiency: 75 },
          { name: "Git/GitHub", proficiency: 85 },
          { name: "JIRA", proficiency: 80 },
          { name: "Postman", proficiency: 85 },
          { name: "SoapUI", proficiency: 70 },
          { name: "XAMPP", proficiency: 80 }
        ],
        methodologies: [
          { name: "Agile (Scrum)", proficiency: 85 },
          { name: "Waterfall", proficiency: 75 }
        ],
        specialized: [
          { name: "PowerCard modules", proficiency: 80 },
          { name: "VISA & MasterCard systems", proficiency: 75 },
          { name: "ISO 8583 knowledge", proficiency: 70 }
        ]
      }
    };
  };

  const renderSection = () => {
    if (loading) {
      return (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading portfolio data...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="error-container">
          <p>{error}</p>
          <button onClick={loadPortfolioData}>Retry</button>
        </div>
      );
    }

    switch (activeSection) {
      case 'about':
        return <About data={portfolioData.about} />;
      case 'experiences':
        return <Experiences data={portfolioData.experiences} />;
      case 'projects':
        return <Projects data={portfolioData.projects} />;
      case 'skills':
        return <Skills data={portfolioData.skills} />;
      default:
        return <About data={portfolioData.about} />;
    }
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;