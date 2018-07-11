export function globalReducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case "CSV_ONLOAD":
      return { ...state, csv: payload };
    case "PROCESS_DATA":
      return { ...state, employees: payload };

    default:
      return state;
  }
}
