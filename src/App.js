import React, { Component } from "react";
import SecondPage from "./components/page-two";
import scrollToComponent from "react-scroll-to-component";
import logo from "./assets/images/solinor.png";
import "./pageStyle.css";

class App extends Component {
  // when start button is clicked change components focus from page one to page two
  handleGetStarted = () => {
    scrollToComponent(this.refs.pageTwo, {
      duration: 1500,
      ease: "outBounce"
    });
  };

  render() {
    return (
      <div>
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
              onClick={this.handleGetStarted}
              className="generateBtn"
              ref="getStarted"
            >
              Get started
            </button>
          </div>
        </div>
        <SecondPage ref="pageTwo" />
      </div>
    );
  }
}

export default App;
