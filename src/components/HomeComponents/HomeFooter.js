import React from 'react';
import '../w3Styles.css';
import './HomeFooter.css';
import homeIcon from '../../resources/images/home.png';
import circleLines from '../../resources/images/circleWithLines.png';
import factory from '../../resources/images/factory.png';
import FooterCard from './FooterCard';
export default class HomeFooter extends React.Component {
  render() {
    return (
      <div className="project-home-wrapper">
        <div className="project-home-initial-paragraph">
          <h1>PROJECTS</h1>
          <h6>
            Our projects involve transformative solutions to environment and
            energy problems by integrating electric, transportation, building,
            and environment systems.
          </h6>
        </div>
        <FooterCard
          title={'MAPLEWOOD APARTMENTS'}
          link={'/projects/#maplewoodapartments'}
          src={homeIcon}
          alt={'homeicon'}
        />
        <FooterCard
          title={'NETWORK OF BUILDINGS'}
          link={'/projects/#networkofbuildings'}
          src={circleLines}
          alt={'network of buildings'}
        />
        <FooterCard
          title={'WOODSMOKE SENSORS'}
          link={'/projects/#woodsmokesensors'}
          src={factory}
          alt={'woodsmoke sensors'}
        />
      </div>
    );
  }
}
