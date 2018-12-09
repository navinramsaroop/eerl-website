import React from 'react';

import Header from '../../components/SharedComponents/Header';
import ProjectMain from '../../components/ProjectComponents/ProjectMain';

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div>
        <Header title={'PROJECTS'} />
        <ProjectMain />
      </div>
    );
  }
}
