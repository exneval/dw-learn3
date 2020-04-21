import React, { Component } from "react";
import { connect } from "react-redux";

class Article extends Component {
  render() {
    const { articles } = this.props;
    return (
      <>
        <h1>This is Article Page</h1>
        {articles.data.length > 0 &&
          articles.data.map((article, index) => (
            <h1 key={index}>{article.title}</h1>
          ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

export default connect(mapStateToProps)(Article);
