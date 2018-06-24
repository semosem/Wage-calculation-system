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
    const csv = event.target.result;
    // send the uploaded csv as an action
    this.props.onLoadHandler(csv);
  }

  onShowmeExample(event) {
    event.preventDefault();
    if (this.props.csv) {
      this.processData(this.props.csv);
    } else {
      alert("You must upload a csv");
    }
  }
  processData(csv) {
    const csvToArr = Papa.parse(csv, {
      header: true
    });
    this.props.onProcessData(csvToArr.data);
  }

  hadleOnSelect(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="page-Two">
        <div className="page-TwoHeader">
          <h1>Greetings...</h1>
          <p>Please upload your csv</p>

          <form className="theForm">
            <label>
              <input
                type="file"
                id="csvFileInput"
                accept=".csv"
                onChange={this.handleFiles.bind(this)}
              />
            </label>
            <input
              type="submit"
              value="Show me"
              onClick={this.onShowmeExample.bind(this)}
            />
          </form>
        </div>
        <DataTable employees={this.props.employees} />
      </div>
    );
  }
}
const mapStateToProps = state => state;
const mapActionsToProps = {
  onLoadHandler: loadHandler,
  onProcessData: processData
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(SecondPage);
