import React from "react";
import Paper from "@material-ui/core/Paper";
import "./pageStyle.css";
const Butt = props => {
  if (props.data.data) {
    return (
      <ul className="theList">
        {props.data.data.map(item => {
          if (item) {
            console.log(item);
            return item.map(i => <li>{i}</li>);
          }
          return 0;
        })}
      </ul>
    );
  }

  return <Paper>hello</Paper>;
};
export default Butt;
