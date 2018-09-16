import React from 'react';
import '../w3Styles.css';
import Ripple from 'react-material-ripple';
export default class NavBar extends React.Component {
  render() {
    return (
      <div className="w3-top">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <Ripple>
            <a href="#home" className="w3-bar-item w3-button">
              <b>EERL</b>
              <strong> Energy and the Environment Research Laboratory</strong>
            </a>
          </Ripple>
          <div className="w3-right w3-hide-small">
            <Ripple>
              <a href="#projects" className="w3-bar-item w3-button">
                Projects
              </a>
            </Ripple>
            <Ripple>
              <a href="#about" className="w3-bar-item w3-button">
                About
              </a>
            </Ripple>
            <Ripple>
              <a href="#contact" className="w3-bar-item w3-button">
                Contact
              </a>
            </Ripple>
            <Ripple>
              <a href="#publications" className="w3-bar-item w3-button">
                Publications
              </a>
            </Ripple>
          </div>
        </div>
      </div>
    );
  }
}
