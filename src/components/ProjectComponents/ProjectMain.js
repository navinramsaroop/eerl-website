import React from 'react';
import './ProjectComponents.css';
import ProjectCard from './ProjectCard';

import { projects } from '../../resources/projects.js';

export default class ProjectMain extends React.Component {
  render() {
    return (
      <div className="project-list">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.summary}
              image={project.backgroundImage}
              left={index % 2 === 0 ? true : false}
              right={index % 2 === 1 ? true : false}
            />
          );
        })}
      </div>
    );
  }
}

/*
Things to add for project pages
Team Members


*/
