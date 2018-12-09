import React from 'react';
import '../w3Styles.css';
import './styles.css';
import FooterCard from './FooterCard';

import { projects, labDescription } from '../../resources/projects.js';

export default class HomeFooter extends React.Component {
  render() {
    return (
      <div className="project-home-wrapper">
        <div className="project-home-initial-paragraph">
          <h1>PROJECTS</h1>
          <h6>{labDescription}</h6>
        </div>

        {projects.map((project, index) => {
          return (
            <FooterCard
              title={project.title.toUpperCase()}
              link={project.link}
              src={project.icon}
              alt={project.alt}
            />
          );
        })}
      </div>
    );
  }
}
