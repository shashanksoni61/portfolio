import React from 'react';
import Project from './Project';
import projects from '../../constants/projects';
const Projects = () => {
  return (
    <section className='section section-projects'>
      <div className='section-title'>Projects</div>
      <div className='underline'></div>
      <div className='section-center projects-center'>
        {projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
