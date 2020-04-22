import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../_actions/post";

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }
  componentDidMount() {
    // this.props.getPosts();
    this.setState({ id: 1 }, () => this.props.getPosts(this.state.id));
  }

  render() {
    const { id } = this.state;
    const { data, loading, error } = this.props.posts;
    if (error) return <h1>There's unknown error</h1>;
    if (loading) return <h1>Now loading...</h1>;
    return (
      <>
        <h1>This is Posts Page</h1>
        {data.length &&
          data.map((item, index) => <p key={index}>{item.title}</p>)}
        {id > 0 && <p>{data.title}</p>}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (id) => dispatch(getPosts(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
