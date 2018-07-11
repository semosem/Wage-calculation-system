export const loadHandler = csv => {
  return {
    type: "CSV_ONLOAD",
    payload: csv
  };
};

export const processData = employees => {
  return {
    type: "PROCESS_DATA",
    payload: employees
  };
};
