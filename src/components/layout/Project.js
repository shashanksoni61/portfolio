import React from 'react';
import { FaGithubSquare, FaExternalLinkAlt } from 'react-icons/fa';
const Project = ({ id, img, title, description, url, github, type, stack }) => {
  return (
    <article className='project'>
      <div className='project-img'>
        <img src={img} alt='' />
      </div>
      <div className='project-info'>
        <h3 className='project-number'>0{id}</h3>
        <h2 className='project-title'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {title}
          </a>
        </h2>
        <p className='project-type'>
          Project Type :<span>{` ${type}`}</span> Project
        </p>
        <p className='project-description'>{description}</p>
        <div className='project-stack'>
          {stack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
        <p className='project-links'>
          <a href={github}>
            <FaGithubSquare />
          </a>
          <a href={url}>
            <FaExternalLinkAlt />
          </a>
        </p>
      </div>
    </article>
  );
};

export default Project;
