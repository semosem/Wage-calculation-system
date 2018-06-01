import React, { Component } from "react";
import "./pageStyle.css";
// import csvFile from "../../assets/HourList201403.csv";
class SecondPage extends Component {
  handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
      // console.log(files);
    } else {
      alert("FileReader are not supported in this browser.");
    }
  }
  render() {
    return (
      <div className="page-Two">
        <div className="page-TwoTop">
          <input
            type="file"
            id="csvFileInput"
            onChange={this.handleFiles(this.files)}
            accept=".csv"
          />
        </div>
        <div className="page-TwoHeader">
          <h1>Hello E</h1>
          <p>
            Please upload your csv using the above button or just press the
            button below to to use the monthly wage calculation system to test
            with the example csv
          </p>
        </div>
        <button class="btn_loadExample">Show me an example</button>
      </div>
    );
  }
}

export default SecondPage;
