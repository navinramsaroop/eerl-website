import React from 'react';
import './ProjectComponents.css';
import buildingPic from '../../resources/images/buildings.png';
import cornellCampus from '../../resources/images/cornellCampus.png';
import airPollution from '../../resources/images/airPollution2.jpg';
import ProjectCard from './ProjectCard';

export default class ProjectMain extends React.Component {
  render() {
    return (
      <div className="project-list">
        <ProjectCard
          id="maplewoodapartments"
          title={'Maplewood Apartments'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
              aliquip ex ea commodo consequat. Duis aute irure dolor in \
              reprehenderit in voluptate velit esse cillum dolore eu fugiat \
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, \
              sunt in culpa qui officia deserunt mollit anim id est laborum'
          }
          image={buildingPic}
          left
        />
        <ProjectCard
          id="networkofbuildings"
          title={'Network Of Buildings'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\
           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
            aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat \
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, \
            sunt in culpa qui officia deserunt mollit anim id est laborum'
          }
          image={cornellCampus}
          right
        />
        <ProjectCard
          id="woodsmokesensors"
          title={'Woodsmoke Sensors'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\
           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
            aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat \
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, \
            sunt in culpa qui officia deserunt mollit anim id est laborum'
          }
          image={airPollution}
          left
        />
      </div>
    );
  }
}
