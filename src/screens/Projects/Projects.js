import React from 'react';

import { Link } from 'react-router-dom';

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/projects">Projects!</Link>
      </div>
    );
  }
}
