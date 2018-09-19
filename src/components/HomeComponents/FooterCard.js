import React from 'react';
import '../w3Styles.css';
import './HomeFooter.css';
import { Link } from 'react-router-dom';
export default class FooterCard extends React.Component {
  render() {
    return (
      <div className="project-card">
        <Link to={this.props.link} className="card-link">
          <img src={this.props.src} alt={this.props.alt} />
          <h3>{this.props.title}</h3>
        </Link>
      </div>
    );
  }
}
