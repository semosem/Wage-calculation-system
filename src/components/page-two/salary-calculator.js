import React from "react";
export const Calculator = props => {
  console.log(props);
  const { employees } = props;
  console.log(employees);
  //store employee names from csv, later filter is used to display names only once in the option tags to calculate salary
  const employeeNames = [];
  for (let employee of employees) {
    if (employee["Person Name"]) {
      employeeNames.push(employee["Person Name"]);
    }
  }

  return (
    <div className="selector">
      <p>
        Choose employee name from the list below to calculate his/her salary
      </p>
      <select>
        {employeeNames.filter((v, i, a) => a.indexOf(v) === i).map(row => {
          console.log(row);
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
