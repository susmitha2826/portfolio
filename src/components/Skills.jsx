import React from 'react';

function Skills() {
  return (
    <section id="skills" className="animate-on-scroll">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend Technologies</h3>
          <ul className="skill-list">
            <li>React</li><li>HTML5</li><li>CSS3</li><li>JavaScript</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Backend Technologies</h3>
          <ul className="skill-list">
            <li>NodeJS</li><li>NestJS</li><li>ExpressJS</li><li>RESTful APIs</li><li>Jenkins CI/CD</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Databases & Cloud</h3>
          <ul className="skill-list">
            <li>MongoDB</li><li>AWS S3</li><li>AWS Lambda</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Core Competencies</h3>
          <ul className="skill-list">
            <li>Software Design</li><li>Optimization</li><li>Problem Solving</li><li>Team Collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;