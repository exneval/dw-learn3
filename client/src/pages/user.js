import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, postUser } from "../_actions/user";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postUser(this.state.data);
    this.setState({ data: {} });
  };

  render() {
    const { data } = this.state;
    const { data: userData, loading, error } = this.props.users;

    if (error) return <h1>There's unknown error</h1>;
    if (loading) return <h1>Now loading...</h1>;

    return (
      <>
        <h1>This is User page</h1>
        {userData.length > 0 &&
          userData.map((user, index) => (
            <p key={index}>{`${user.firstName} ${user.lastName}`}</p>
          ))}
        <form style={{ marginTop: 20 }} onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              name="firstName"
              style={{ marginRight: 20, marginLeft: 10 }}
              type="text"
              value={data.firstName ? data.firstName : ""}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              name="lastName"
              style={{ marginRight: 20, marginLeft: 10 }}
              type="text"
              value={data.lastName ? data.lastName : ""}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              style={{ marginRight: 20, marginLeft: 10 }}
              type="email"
              value={data.email ? data.email : ""}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              style={{ marginRight: 20, marginLeft: 10 }}
              type="password"
              value={data.password ? data.password : ""}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">SAVE</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
    postUser: (data) => dispatch(postUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
