import React, { Component } from "react";
import logo from "./assets/images/solinor.png";
import SecondPage from "./components/page-two";
import scrollToComponent from "react-scroll-to-component";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  handleGetStarted() {
    scrollToComponent(this.refs.hello, {
      duration: 1500,
      ease: "outBounce"
    });
    window.removeEventListener("wheel", () => {});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">
          <h1 className="title">Crafting awesome digital services</h1>

          <h2 className="App-title">Monthly Wage Calculation System</h2>
        </div>

        <div className="App-footer">
          <button
            onClick={this.handleGetStarted.bind(this)}
            className="generateBtn"
            ref="getStarted"
          >
            Get started
          </button>
        </div>

        <SecondPage ref="hello" />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  hello: "hello"
};
export default connect(mapStateToProps, mapActionsToProps)(App);
