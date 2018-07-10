export function globalReducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case "CSV_ONLOAD":
      return { ...state, csv: payload };
    case "PROCESS_DATA":
      return { ...state, employees: payload };
    case "CALCULATE_SALARY":
      return { ...state, salary: payload };

    default:
      return state;
  }
}
