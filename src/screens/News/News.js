import React, { Component } from "react";
import Header from "../../components/SharedComponents/Header.js";
import "./News.css";
import "../Publications/Publications.css"; // to get the search input styles
import NewsCard from "../../components/NewsComponents/NewsCard";
import { news } from "../../resources/news.js";
import SearchInput, { createFilter } from "react-search-input";
const KEYS_TO_FILTERS = ["title", "author", "date", "excerpt", "link"];
class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  render() {
    const filteredNews = news.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    let newsComponents = filteredNews.map((article, index) => {
      return (
        <NewsCard
          key={article.title}
          title={article.title}
          author={article.author}
          date={article.date}
          excerpt={article.excerpt}
          link={article.link}
        />
      );
    });

    return (
      <div className="news-container">
        <Header title={"NEWS"} />
        <div className="search-container">
          <SearchInput
            className="search-input"
            style={{ width: 300 }}
            onChange={term => {
              this.setState({ searchTerm: term });
            }}
          />
        </div>
        {newsComponents}
      </div>
    );
  }
}

export default News;
