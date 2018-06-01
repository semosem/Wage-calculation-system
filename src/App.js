import React, { Component } from "react";
import logo from "./assets/images/solinor.png";
import SecondPage from "./components/page-two";
import scrollToComponent from "react-scroll-to-component";

import "./App.css";

class App extends Component {
  state = {
    data: {}
  };
  componentDidMount() {
    // window.addEventListener("wheel", () => {
    //   window.requestAnimationFrame(this.handleGetStarted.bind(this));
    // });
  }

  handleGetStarted() {
    // if (window.scrollY > 150) {
    //   this.refs.getStarted.style.display = "none";
    // } else {
    //   this.refs.getStarted.style.display = "block";
    // }
  }

  handleScroll(r) {
    scrollToComponent(this.refs.hello, {
      duration: 500
    });
    window.removeEventListener("wheel", () => {});
  }

  render() {
    // console.log(this.state.data.title);
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
            onClick={this.handleScroll.bind(this)}
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

export default App;
