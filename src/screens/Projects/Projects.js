import React from 'react';

import './Projects.css';

import ProjectMain from '../../components/ProjectComponents/ProjectMain';

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbo-header">
          <h1>PROJECTS</h1>
        </div>
        <ProjectMain />
      </div>
    );
  }
}
