import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsData = {
        languages: ["PHP","C#","Python","Javascript","Java","SQL","TypeScript"],
        frameworks: ["ASP.NET Core","Laravel","Django","Next.js","React","Node.js","Bootstrap"],
        databases: ["SQL Server", "Oracle", "MySQL", "PostgreSQL"],
        tools: ["Axios", "Ajax", "Git/GitHub", "JIRA", "Postman", "SoapUI", "XAMPP"],
        methodologies: ["Agile (Scrum)", "Waterfall"],
        specialized: ["PowerCard modules", "VISA & MasterCard systems", "ISO 8583 knowledge","VISA and MasterCard Compliance"]
    };

    return (
        <section className="skills=section">
            <div className="container">
                <h1>Skills and Expertise</h1>
                <div className="skills-container">
                    <div className="skill-category">
                        <h3>Programming Languages</h3>
                        <div className="skills-list">
                            {skillsData.languages.map((skill, index) => (
                                <span key={index} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Frameworks and Libraries</h3>
                        <div className="skills-list">
                            {skillsData.frameworks.map((skill, index) => (
                                <span key={index} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Database</h3>
                        <div className="skills-list">
                            {skillsData.databases.map((skill, index) => (
                                <span key={index} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Tools</h3>
                        <div className="skills-list">
                            {skillsData.tools.map((skill, index) => (
                                <span key={index} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Software Methodologies</h3>
                        <div className="skills-list">
                            {skillsData.methodologies.map((skill, index) => (
                                <span key={index} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Card Payment Sector</h3>
                        <div className="skills-list">
                            {skillsData.specialized.map((skill, index) => (
                                <span key={index} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;