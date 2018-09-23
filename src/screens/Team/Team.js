import React from 'react';

import './Team.css';

import TeamCard from '../../components/TeamComponents/TeamCard';

export default class TeamPage extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbo-header-team">
          <h1>THE TEAM</h1>
        </div>
        <h2>PRINCIPAL INVESTIGATOR</h2>
        <TeamCard/>
      </div>

    );
  }
}