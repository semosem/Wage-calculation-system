import React from "react";
export const Calculator = props => (
  <div className="selector">
    <p>Choose employee name from the list below to calculate his/her salary</p>
    <select onChange={props.hadleSelect.bind(this)}>
      {props.data.map(row => {
        return (
          <option key={Math.random(2)} value={row["Person Name"]}>
            {row["Person Name"]}
          </option>
        );
      })}
    </select>
  </div>
);
