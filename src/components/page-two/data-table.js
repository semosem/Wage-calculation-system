import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./pageStyle.css";
import { Calculator } from "./salary-calculator.js";
import { Random } from "react-animated-text";
const DataTable = props => {
  const { employees } = props;

  // react table columns, see ReactTable documentations for further info at --> https://react-table.js.org/#/story/readme

  const columns = [
    {
      Header: "Person Name",
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
      Header: "Start",
      accessor: "Start"
    },
    {
      Header: "End",
      accessor: "End"
    }
  ];

  return employees.length > 1 ? (
    // only run if csv is uploaded
    <div className="wrapper">
      <ReactTable
        data={employees}
        columns={columns}
        defaultPageSize={10}
        style={{
          height: "400px",
          width: "50vw"
        }}
        className="-striped -highlight"
      />
      <Calculator employees={employees} />
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
