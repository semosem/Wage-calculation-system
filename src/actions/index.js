export function sliderChange(text) {
  return {
    type: "CHANGE_TEXT",
    payload: {
      text: text,
      top: 5
    }
  };
}
export function headingPosition(top) {
  return {
    type: "HEADING_POSITION",
    payload: { top: top }
  };
}
export const loadHandler = csv => {
  return {
    type: "CSV_ONLOAD",
    payload: csv
  };
};

export const processData = lines => {
  return {
    type: "SHOW_EXAPMLE",
    payload: lines
  };
};
