export function globalReducer(state, action) {
  switch (action.type) {
    case "CSV_ONLOAD":
      return { ...state, csv: action.payload };

    case "SHOW_EXAPMLE":
      return { ...state, employees: action.payload };
    default:
      return state;
  }
}
