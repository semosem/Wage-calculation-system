import React from "react";

export const Calculator = props => {
  const { employees } = props;
  //store employee names from csv, later filter is used to display names only once in the option tags to calculate salary
  return (
    <div className="salary_display">
      <p>
        Choose employee name from the list below to calculate his/her salary
      </p>
      <select>
        {employees
          .map(employee => {
            if (employee["Person ID"]) {
              return employee["Person Name"];
            }
          })
          .filter((v, i, a) => a.indexOf(v) === i)
          .map(row => {
            return (
              <CalculateSalary name={row} key={Math.random(2)} value={row} />
            );
          })}
      </select>
    </div>
  );
};

const CalculateSalary = props => {
  return <option>{props.name}</option>;
};
