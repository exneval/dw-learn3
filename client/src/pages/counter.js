import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    const { counter } = this.props;
    return (
      <>
        <h1>This is Counter Page</h1>
        <h1>{counter.number}</h1>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

export default connect(mapStateToProps)(Counter);
