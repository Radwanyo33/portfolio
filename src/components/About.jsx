import React from 'react';
import './About.css';

const About = ({ data }) => {
  if (!data) {
    return <div>No data available</div>;
  }

  const handleDownloadResume = () => {
    // You can replace this with your actual resume file path
    const resumeUrl = 'resume/Myresume.pdf'; // Place your resume in public folder as resume.pdf
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Md_Radwanul_Hoque_Rafi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about-section">
      <div className="container">
        <h1>About Me</h1>
        <div className="about-content">
          {/* Left Side - Personal Info & Image */}
          <div className="personal-info">
            <div className="profile-image-container">
              <img 
                src="/assets/profile.png" // Update this path to your image
                alt="Md. Radwanul Hoque Rafi"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <h2>Md. Radwanul Hoque Rafi</h2>
            <p className="title">Software Engineer & Web Developer</p>
            
            <div className="contact-info">
              <p>📧 {data.email}</p>
              <p>📞 {data.phone}</p>
              <p>📍 {data.location}</p>
            </div>

            {/* Download Resume Button */}
            <div className="resume-download">
              <button className="download-btn" onClick={handleDownloadResume}>
                <span className="download-icon">📄</span>
                Download Resume
              </button>
            </div>

            <div className="social-links">
              <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={data.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          {/* Right Side - Summary, Education & Hobbies */}
          <div className="content-right">
            <div className="summary">
              <h3>Professional Summary</h3>
              <p>{data.summary}</p>
            </div>

            <div className="education">
              <h3>Educational Qualifications</h3>
              <div className="education-list">
                <div className="education-item">
                  <h4>B.Sc. in Computer Science & Engineering</h4>
                  <p className="institution">Mymensingh Engineering College</p>
                  <p className="duration">2019 – 2022 | CGPA: 3.28</p>
                </div>
                <div className="education-item">
                  <h4>Higher Secondary Certificate</h4>
                  <p className="institution">Government Science College</p>
                  <p className="duration">2016 – 2018 | GPA: 4.25</p>
                </div>
                <div className="education-item">
                  <h4>Secondary School Certificate</h4>
                  <p className="institution">Ideal School and College</p>
                  <p className="duration">2015 – 2016 | GPA: 5.00</p>
                </div>
              </div>
            </div>

            <div className="hobbies">
              <h3>Hobbies & Interests</h3>
              <div className="hobbies-list">
                {data.hobbies && data.hobbies.map((hobby, index) => (
                  <div key={index} className="hobby-item">
                    {hobby}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;