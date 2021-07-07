import React from 'react';

import './PublicationCard.css';

export default class PublicationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <a href={this.props.link} target="_blank" className="wrapper">
        <div className="container">
          <div className="summary">{this.props.summary}</div>
          <br />
          <div className="citation">{this.props.citation}</div>
        </div>
      </a>
    );
  }
}
