import React from 'react';
import background from '../../resources/images/electricPoles.jpg';
import Button from '@material-ui/core/Button';
import HomeFooter from '../../components/HomeComponents/HomeFooter.js';

export default class Home extends React.Component {
  render() {
    return (
      <div style={{ alignItems: 'center' }}>
        <header
          className="w3-display-container w3-content w3-wide"
          style={{ maxWidth: '1500px' }}
          id="home"
        >
          <img
            className="w3-image"
            src={background}
            alt="Architect"
            width="1500"
            height="800"
          />
          <div className="w3-display-middle w3-margin-top w3-center">
            <br />
            <h1 className="w3-xxxlarge w3-text-white">
              <span className="w3-padding-x-large w3-light-black w3-opacity-min">
                <b>EERL</b>
              </span>
            </h1>
            <br />
            <br />
            <br />
            <Button
              href={'/projects'}
              size={'large'}
              variant="contained"
              style={{ backgroundColor: '#ffb805' }}
            >
              PROJECTS
            </Button>
            <Button href={'/team'}>About Us</Button>
          </div>
        </header>
        <HomeFooter />
      </div>
    );
  }
}
