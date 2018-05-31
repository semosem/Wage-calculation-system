import React, { Component } from "react";
import logo from "./solinor.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Crafting awesome digital services</h1>
        </header>
        <p className="App-intro">
          Scroll down to see the solution, you can also see the source code on
          <a href="gihub.com/semosem"> gihub</a>
        </p>
      </div>
    );
  }
}

export default App;
