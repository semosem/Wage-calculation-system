import React, { Component } from "react";

class SecondPage extends Component {
  handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
      console.log(files);
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
        <div className="page-TwoHeader">c</div>
      </div>
    );
  }
}

export default SecondPage;
