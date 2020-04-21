import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../_actions";
import { actionINC, actionDEC } from "../_actions/counter";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  componentDidMount() {}

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addArticle({ title: this.state.value });
    this.setState({ value: "" });
  };

  render() {
    const { articles, counter, addNumber, subNumber } = this.props;
    const { value } = this.state;
    return (
      <div>
        {articles.data.length > 0 &&
          articles.data.map((article, index) => (
            <h1 key={index}>{article.title}</h1>
          ))}
        <h1>{counter.number}</h1>
        <button
          style={{ marginRight: 20 }}
          onClick={() => addNumber(counter.number + 1)}
        >
          Increment Me
        </button>
        <button onClick={() => subNumber(counter.number - 1)}>
          Decrement Me
        </button>
        <form style={{ marginTop: 20 }} onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// State = global state in reducers
const mapStateToProps = (state) => {
  return { articles: state.articles, counter: state.counter };
};

// Call actions to dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => dispatch(addArticle(article)),
    addNumber: (number) => dispatch(actionINC(number)),
    subNumber: (number) => dispatch(actionDEC(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
