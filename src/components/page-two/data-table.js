import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./pageStyle.css";
import { Random } from "react-animated-text";
import { CalculateSalary } from "./salary-calculator.js";
const DataTable = props => {
  const { employees } = props;

  // react table columns, see ReactTable documentations for further info at --> https://react-table.js.org/#/story/readme

  const columns = [
    {
      Header: " Full name",
      accessor: "Person Name"
      // String-based value accessors!
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
      Header: "Shift start",
      accessor: "Start"
    },
    {
      Header: "Shift end",
      accessor: "End"
    }
  ];

  return employees.length > 1 ? (
    // only run if csv is uploaded
    <div className="wrapper">
      <CalculateSalary employees={employees} />
    </div>
  ) : (
    // otherwise show waiting animation
    <div className="Waiting">
      <Random
        text="Waiting for your upload!"
        effect="stretch"
        effectChange={2.0}
        effectDuration={2.5}
      />
    </div>
  );
};
export default DataTable;
