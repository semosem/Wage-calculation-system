import React, { Component } from "react";
import DataTable from "./data-table";
import { connect } from "react-redux";
import { loadHandler, processData } from "../../actions";
import Papa from "papaparse";

import "./pageStyle.css";

class SecondPage extends Component {
  handleFiles(files) {
    // Check for File API support in the browser.
    if (window.FileReader) {
      let reader = new FileReader();
      reader.readAsText(files.target.files[0]);
      // if File API exists and input file is looded, run loadHandler
      reader.onload = this.loadHandler.bind(this);
    } else {
      alert("FileReader is not supported in this browser.");
    }
  }

  loadHandler(event) {
    // send the uploaded csv as an action
    let csv = event.target.result;
    this.props.onLoadHandler(csv);
  }

  onShowmeExample() {
    if (this.props.csv) {
      this.processData(this.props.csv);
    } else {
      alert("You must upload a csv");
    }
  }

  processData(csv) {
    let csvToArr = Papa.parse(csv, {
      header: true
    });
    // console.log(csvToArr);
    this.props.onProcessData(csvToArr.data);
  }

  hadleOnSelect(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <div className="page-Two">
        <div className="page-TwoTop">
          <input
            type="file"
            id="csvFileInput"
            accept=".csv"
            onChange={this.handleFiles.bind(this)}
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

        <DataTable data={this.props} onSelect={this.hadleOnSelect.bind(this)} />
        <button
          onClick={this.onShowmeExample.bind(this)}
          className="btn_loadExample"
        >
          Show me an example
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => state;
const mapActionsToProps = {
  onLoadHandler: loadHandler,
  onProcessData: processData
};
export default connect(mapStateToProps, mapActionsToProps)(SecondPage);
