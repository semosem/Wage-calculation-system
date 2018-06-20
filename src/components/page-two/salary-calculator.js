import React from "react";
export const Calculator = props => {
  const employees = []; //store employee names from csv, later filter is used to display names only once in the option tags to calculate salary

  for (let employee of props.data) {
    if (employee["Person Name"]) {
      employees.push(employee["Person Name"]);
    }
  }

  return (
    <div className="selector">
      <p>
        Choose employee name from the list below to calculate his/her salary
      </p>
      <select onChange={props.hadleSelect.bind(this)}>
        {employees.filter((v, i, a) => a.indexOf(v) === i).map(row => {
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
