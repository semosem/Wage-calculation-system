import React from "react";
import Paper from "@material-ui/core/Paper";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./pageStyle.css";
import { Calculator } from "./salary-calculator.js";
const DataTable = props => {
  const { employees, onSelect } = props;

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

  if (employees.length > 1) {
    // only run if csv is uploaded
    const calculateSalary = (name, i) => {
      const salaryPerHour = 4.25;
      let shiftStart = employees[i].Start;
      let shiftEnd = employees[i].End;
      // console.table(shiftStart, shiftEnd);
      if (shiftStart) {
        let timeAtWork = parseInt(shiftEnd) - parseInt(shiftStart);
      }
    };

    employees.map((employee, index) => {
      calculateSalary(employee, index);
    });

    return (
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
    );
  }

  return (
    <Paper>
      <h1>Hello please upload your CSV</h1>
    </Paper>
  );
};
export default DataTable;
