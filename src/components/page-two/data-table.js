import React from "react";
import Paper from "@material-ui/core/Paper";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./pageStyle.css";
import { Calculator } from "./s-calculator.js";
const Butt = props => {
  const data = props.data.data;
  // console.log(dd);

  // console.log(data);
  const columns = [
    {
      Header: "Person Name",
      accessor: "Person Name" // String-based value accessors!
    },
    {
      Header: "Person ID",
      accessor: "Person ID"
    },
    {
      Header: "Date",
      accessor: "Date"
    },
    {
      Header: "Start",
      accessor: "Start"
    },
    {
      Header: "End",
      accessor: "End"
    }
  ];
  if (props.data.data.length > 1) {
    console.log(props.data.data);
    return (
      <div className="wrapper">
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          style={{
            height: "400px",
            width: "50vw"
          }}
          className="-striped -highlight"
        />
        <Calculator
          data={props.data.data}
          hadleSelect={props.onSelect.bind(this)}
        />
      </div>
    );
  }

  return (
    <Paper>
      <h1>Hello Please upload your CSV</h1>
    </Paper>
  );
};
export default Butt;
