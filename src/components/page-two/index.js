import React, { Component } from "react";
import DataTable from "./data-table";
import { connect } from "react-redux";
import { loadHandler, processData } from "../../actions";
import Papa from "papaparse";
import Form from "./form";
import { Calculator } from "./salary-calculator.js";

import "./pageStyle.css";

class SecondPage extends Component {
  // handle upload files input
  handleFiles(files) {
    // Check for File API support in the browser.
    if (window.FileReader && files.target.files[0]) {
      let reader = new FileReader();
      reader.readAsText(files.target.files[0]);
      // if File API exists and input file is looded, run loadHandler func
      reader.onload = this.loadHandler.bind(this);
    } else {
      alert("FileReader is not supported in this browser.");
    }
  }
  // send the uploaded csv as an action
  loadHandler(event) {
    const csv = event.target.result;
    this.props.onLoadHandler(csv);
  }
  // "process" btn handler. uses Papa library to parse csv to an array and update redux state tree
  onProcessCsv(event) {
    event.preventDefault();
    if (this.props.csv) {
      const { csv } = this.props;
      const csvToArr = Papa.parse(csv, {
        header: true
      });
      this.props.onProcessData(csvToArr.data);
    } else {
      alert("Please upload a csv first");
    }
  }

  render() {
    const { employees } = this.props;
    return (
      <div className="page-Two">
        <Form
          handleFiles={this.handleFiles.bind(this)}
          onProcessCsv={this.onProcessCsv.bind(this)}
        />
        <DataTable employees={employees} />
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
