import React from "react";

export class CalculateSalary extends React.Component {
  state = {
    employee: []
  };
  //store employee names from csv, later filter is used to display names only once in the option tags to calculate salary
  calculateSalary(e) {
    const name = e.target.value;
    const { employees } = this.props;
    const person = employees.filter(employee => {
      return employee["Person Name"] === name;
    });

    this.setState({
      employee: person
    });
  }
  render() {
    const { employees } = this.props;
    return (
      <div className="salary_display">
        <p>
          Choose employee name from the list below to calculate his/her salary
        </p>
        <select onChange={this.calculateSalary.bind(this)}>
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
            .map(row => (
              <Calculater name={row} key={Math.random(2)} value={row} />
            ))}
        </select>
      </div>
    );
  }
}

const Calculater = props => (
  <option value={props.name["Person ID"]}>{props.name}</option>
);
