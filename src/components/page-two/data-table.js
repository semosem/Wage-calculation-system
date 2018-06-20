import React from "react";
import Paper from "@material-ui/core/Paper";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./pageStyle.css";
import { Calculator } from "./salary-calculator.js";
const Butt = props => {
  const { data, onSelect } = props;

  // react table columns, see ReactTable documentations for further info at --> https://react-table.js.org/#/story/readme
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

  if (data.data.length > 1) {
    // only run if csv is uploaded

    const calculateSalary = name => {
      let shiftStart;
      let shiftEnd;
      console.log(data.data, name);
    };
    calculateSalary("name");
    return (
      <div className="wrapper">
        <ReactTable
          data={data.data}
          columns={columns}
          defaultPageSize={10}
          style={{
            height: "400px",
            width: "50vw"
          }}
          className="-striped -highlight"
        />
        <Calculator data={data.data} hadleSelect={onSelect.bind(this)} />
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
