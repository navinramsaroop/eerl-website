import React from 'react';
import '../w3Styles.css';
import './HomeFooter.css';
export default class HomeFooter extends React.Component {
  render() {
    return (
      <div className="footer-home-wrapper">
        <div className="footer-home-initial-paragraph">
          <h1>PROJECTS</h1>
          <h6>
            Our projects involve transformative solutions to environment and
            energy problems by integrating electric, transportation, building,
            and environment systems.
          </h6>
        </div>
        <div className="footer-card" />
      </div>
    );
  }
}
