import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Article from "./pages/article";
import Counter from "./pages/counter";
import Post from "./pages/posts";
import User from "./pages/user";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/article">Article</Link>
              </li>
              <li>
                <Link to="/posts">Post</Link>
              </li>
              <li>
                <Link to="/users">User</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/users">
              <User />
            </Route>
            <Route path="/posts">
              <Post />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/article">
              <Article />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
