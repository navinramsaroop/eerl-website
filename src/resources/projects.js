import homeIcon from './images/home.png';
import circleLines from './images/circleWithLines.png';
import factory from './images/factory.png';
import cornellCampus from './images/cornellCampus.png';
import airPollution from './images/airPollution2.png';
import buildingPic from './images/buildings.png';

export const labDescription =
  'Our projects involve transformative solutions to environment and energy problems by integrating electric, transportation, building, and environment systems.';

export const projects = [
  {
    title: 'Network of Buildings',
    link: '/projects/#networkofbuildings',
    icon: circleLines,
    alt: 'Network of Buildings',
    summary:
      'While the Internet of Things (IoT) could be a game-changer for sustainability, scaling current success stories is a key challenge. Considering its long-range coverage, open standard, reliability, affordability, Long Range Wide Area Network (LoRaWAN) can serve as public IoT infrastructure for a resilient rural-urban system to scale up IoT deployment. In the proposed project, we will create a complete LoRaWAN network for research purposes. Thirty Cornell Cooperative Extension office across New York State, equipped with LoRaWAN-based electricity and water met ering, will actively participate in the research network. The proposed research will place Cornell on the leading edge of IoT research.',
    backgroundImage: cornellCampus,
    id: 'maplewoodapartments'
  },
  {
    title: 'Maplewood Apartments',
    link: '/projects/#maplewoodapartments',
    icon: homeIcon,
    alt: 'Maplewood Apartments',
    summary: 'Lorem ipsum',
    backgroundImage: buildingPic,
    id: 'maplewoodapartments'
  },

  {
    title: 'Woodsmoke Sensors',
    link: '/projects/#woodsmokesensors',
    icon: factory,
    alt: 'Woodsmoke Sensors',
    summary: 'Lorem ipsum',
    backgroundImage: airPollution,
    id: 'woodsmokesensors'
  }
];
