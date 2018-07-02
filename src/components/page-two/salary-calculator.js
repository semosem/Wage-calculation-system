import React from "react";
// import Moment from "react-moment";

export const Calculator = props => {
  const { employees } = props;
  //store employee names from csv, later filter is used to display names only once in the option tags to calculate salary
  const employeeNames = [];
  for (let employee of employees) {
    if (employee["Person Name"]) {
      employeeNames.push(employee["Person Name"]);
    }
  }

  const calculateSalary = (employee, i) => {
    // const salaryPerHour = 4.25;
  };

  employees.map((employee, index) => {
    return calculateSalary(employee, index);
  });
  return (
    <div className="selector">
      <p>
        Choose employee name from the list below to calculate his/her salary
      </p>
      <select>
        {employeeNames.filter((v, i, a) => a.indexOf(v) === i).map(row => {
          return (
            <option key={Math.random(2)} value={row}>
              {row}
            </option>
          );
        })}
      </select>
    </div>
  );
};
