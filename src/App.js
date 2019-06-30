import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./Components/List.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
          </div>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/TodoApp" exact component={List} />
          </div>
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div style={{ width: "45%", color: "black" }}>
      <p style={{ fontSize: "1.6em", color: "black" }}>
        Welcome to my website, I build WebApplications with <big>React js</big>{" "}
        and <big>Django</big>, on this website all applications are built using{" "}
        <big>Reactjs.</big>
        <br /> The is a link to my Django applications in the Navigation Bar.
      </p>
    </div>
  </div>
);

export default App;
