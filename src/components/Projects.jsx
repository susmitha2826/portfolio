import React from 'react';

function Projects() {
  return (
    <section id="projects" className="animate-on-scroll">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Workflow Management System</h3>
          <p>Developed and maintained backend microservices handling over 1,000 monthly users...</p>
          <div className="project-tech">
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">HTML/CSS</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">AWS S3</span>
          </div>
        </div>
        <div className="project-card">
          <h3>AI-Powered Transcription Service</h3>
          <p>Implemented backend services using NodeJs and Express...</p>
          <div className="project-tech">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">NestJS</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">AWS Lambda</span>
            <span className="tech-tag">OpenAI</span>
          </div>
        </div>
        <div className="project-card">
          <h3>Secure User Management Portal</h3>
          <p>Implemented Jenkins CI/CD pipelines and built React-based admin dashboard...</p>
          <div className="project-tech">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Express.js</span>
            <span className="tech-tag">AWS S3</span>
            <span className="tech-tag">Jenkins</span>
            <span className="tech-tag">RESTful APIs</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;