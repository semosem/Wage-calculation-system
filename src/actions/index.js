export const loadHandler = csv => {
  return {
    type: "CSV_ONLOAD",
    payload: csv
  };
};

export const processData = employees => {
  return {
    type: "SHOW_EXAPMLE",
    payload: employees
  };
};
