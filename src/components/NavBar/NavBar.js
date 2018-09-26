import React from 'react';
import '../w3Styles.css';
import Ripple from 'react-material-ripple';
import { Link } from 'react-router-dom';
export default class NavBar extends React.Component {
  render() {
    return (
      <div className="w3-top">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <Ripple>
            <Link to="/home" className="w3-bar-item w3-button">
              <b>EERL</b>
              <strong> energy and the environment research laboratory</strong>
            </Link>
          </Ripple>
          <div className="w3-right w3-hide-small">
            <Ripple>
              <Link to="/projects" className="w3-bar-item w3-button">
                projects
              </Link>
            </Ripple>
            <Ripple>
              <Link to="/team" className="w3-bar-item w3-button">
                team
              </Link>
            </Ripple>
            <Ripple>
              <Link to="/news" className="w3-bar-item w3-button">
                news
              </Link>
            </Ripple>
            <Ripple>
              <Link to="/publications" className="w3-bar-item w3-button">
                publications
              </Link>
            </Ripple>
          </div>
        </div>
      </div>
    );
  }
}
