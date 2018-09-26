import React from 'react';
import globalElectricity from '../../resources/images/globalElectricity.png';
import './styles.css';
export default class Mission extends React.Component {
  render() {
    return (
      <div style={{ alignItems: 'center' }} className={'mission-wrapper'}>
        <h1>Mission</h1>
        <img src={globalElectricity} className={'icon'} alt={'electricity'} />
      </div>
    );
  }
}
