import React from "react";

import "./NewsCard.css";

/*
Props:
link
title
date (in the form of a string)
author
excerpt

*/
export default class NewsCard extends React.Component {
  render() {
    return (
      <div className="newscard-wrapper">
        <div className="newscard-container">
          <a className="newscard-link" target="_blank" href={this.props.link}>
            <div className="newscard-header">{this.props.title}</div>
          </a>
          <div className="newscard-date">
            {this.props.date + " - " + this.props.author}
          </div>
          <div className="newscard-excerpt">{this.props.excerpt}</div>
        </div>
      </div>
    );
  }
}
