import React from "react";
import ReactTable from "react-table";

export class CalculateSalary extends React.Component {
  state = {
    employee: []
  };
  //store employee names from csv, later filter is used to display names only once in the option tags to calculate salary
  calculateSalary = e => {
    const name = e.target.value;
    const { employees } = this.props;
    const person = employees.filter(employee => {
      return employee["Person Name"] === name;
    });

    this.setState({
      employee: person
    });
  };
  render() {
    const { employees } = this.props;
    return (
      <div className="salary_display">
        <p>
          Choose employee name from the list below to calculate his/her salary
        </p>
        <select onChange={this.calculateSalary}>
          {employees
            .map(employee => {
              if (employee["Person ID"]) {
                return employee["Person Name"];
              }
              return "";
            })
            .filter((v, i, a) => {
              return a.indexOf(v) === i;
            })
            .map(row => <DisplayWindow uniqueName={row} />)}
        </select>
        <ReactTable
          data={this.state.employee}
          columns={columns}
          defaultPageSize={10}
          style={{
            height: "400px",
            width: "50vw"
          }}
          className=" -highlight"
        />
      </div>
    );
  }
}
const columns = [
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
const DisplayWindow = props => {
  return (
    <option value={props.uniqueName["Person ID"]}>{props.uniqueName}</option>
  );
};
