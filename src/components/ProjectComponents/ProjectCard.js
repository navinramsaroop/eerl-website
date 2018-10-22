import React from 'react';
import './ProjectComponents.css';

const HEIGHT_OF_PROJECT = 400;

export default class ProjectMain extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  render() {
    let left = null;
    let right = null;

    if (this.props.left) {
      left = 0;
    } else {
      right = 0;
    }

    return (
      <div className="project-outer-container" id={this.props.id}>
        <div
          className="project-wrapper"
          style={{
            height: HEIGHT_OF_PROJECT
          }}
        >
          <div className="project-overlay" style={{ left: left, right: right }}>
            <div className="project-description">{this.props.description}</div>
            <div className="project-title-container">
              <h1> {this.props.title} </h1>
            </div>
          </div>

          <img src={this.props.image} alt={this.props.title} />
        </div>
      </div>
    );
  }
}
