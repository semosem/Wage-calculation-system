import React, { Component } from "react";
import logo from "./assets/images/solinor.png";
import SecondPage from "./components/page-two";
import "./App.css";

class App extends Component {
  state = {
    data: {}
  };
  componentDidMount() {
    let url = "https://jsonplaceholder.typicode.com/posts/1";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }
  render() {
    console.log(this.state.data.title);
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
          <button className="generateBtn">Get started</button>
        </div>

        <SecondPage />
      </div>
    );
  }
}

export default App;
