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
