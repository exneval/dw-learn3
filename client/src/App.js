import React, { Component } from "react";
import "./App.css";
import { API, setAuthToken } from "./config/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    try {
      setAuthToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTg3MDEzNDUzfQ.A7tNDHBUODHQ_WUWd8OLmE_fz-QCiBfz-3crAhkH39Y"
      );
      const user = await API.get("/user");
      const { data } = user.data;
      this.setState({ data });
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        console.log("Network Error!");
      } else {
        const { data, status } = error.response;
        console.log(data.message, status);
      }
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">{data && <p>{data.email}</p>}</header>
      </div>
    );
  }
}

export default App;
