import React from "react";

const Form = props => {
  return (
    <form className="theForm">
      <div className="page-TwoHeader">
        <h1>Greetings...</h1>
        <p>Please upload your csv</p>

        <label>
          <input
            type="file"
            id="csvFileInput"
            accept=".csv"
            onChange={props.handleFiles}
          />
        </label>
        <input
          type="submit"
          value="I am ready, process my csv"
          onClick={props.onProcessCsv}
        />
      </div>
    </form>
  );
};

export default Form;
