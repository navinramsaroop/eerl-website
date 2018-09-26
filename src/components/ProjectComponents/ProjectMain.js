import React from 'react';
import './ProjectComponents.css';
import buildingPic from '../../resources/images/buildings.png';
import cornellCampus from '../../resources/images/cornellCampus.png';
import airPollution from '../../resources/images/airPollution2.png';
import ProjectCard from './ProjectCard';

export default class ProjectMain extends React.Component {
  render() {
    return (
      <div className="project-list">
        <ProjectCard
          id="networkofbuildings"
          title={'Statewide IoT Network'}
          description={
            'While the Internet of Things (IoT) could be a game-changer for sustainability, scaling current success stories is a key challenge. Considering its long-range coverage, open standard, reliability, affordability, Long Range Wide Area Network (LoRaWAN) can serve as public IoT infrastructure for a resilient rural-urban system to scale up IoT deployment. In the proposed project, we will create a complete LoRaWAN network for research purposes. Thirty Cornell Cooperative Extension office across New York State, equipped with LoRaWAN-based electricity and water metering, will actively participate in the research network. The proposed research will place Cornell on the leading edge of IoT research.'
          }
          image={cornellCampus}
          left
        />
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
          right
        />
        <ProjectCard
          id="woodsmokesensors"
          title={'Woodsmoke Alert System'}
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

/*
Things to add for project pages
Team Members


*/
