import React, { Component } from "react";
import PublicationCard from "../../components/PublicationComponents/PublicationCard";
import Header from "../../components/SharedComponents/Header";
import "./Publications.css";
import { publications } from "../../resources/publications.js";
import SearchInput, { createFilter } from "react-search-input";

const KEYS_TO_FILTERS = ["link", "summary", "citation", "year"];

class Publications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  render() {
    const filteredResults = publications.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <div>
        <Header title={"PUBLICATIONS"} backgroundColor={"rgb(195, 214, 237)"} />
        <div className="search-container">
          <SearchInput
            className="search-input"
            style={{ width: 300 }}
            onChange={term => {
              this.setState({ searchTerm: term });
            }}
          />
        </div>
        <div className="publication-container">
          {filteredResults.map(publication => {
            return (
              <PublicationCard
                link={publication.link}
                summary={publication.summary}
                citation={publication.citation}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Publications;
