import React from "react";
export const Calculator = props => {
  const { employees } = props;
  //store employee names from csv, later filter is used to display names only once in the option tags to calculate salary
  const employeeNames = [];
  for (let employee of employees) {
    if (employee["Person Name"]) {
      employeeNames.push(employee["Person Name"]);
    }
  }

  const calculateSalary = (name, i) => {
    const salaryPerHour = 4.25;

    if (employees[i].Start && employees[i].End) {
      let shiftStartHour = employees[i].Start.split(":")[0];
      let shiftStartMin = employees[i].Start.split(":")[1];

      let shiftEndHour = employees[i].End.split(":")[0];
      let shiftEndMin = employees[i].End.split(":")[1];
      console.log(shiftStartHour, ">", shiftEndHour);
    }
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
