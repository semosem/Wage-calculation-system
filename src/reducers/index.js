export function globalReducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "CHANGE_TEXT":
      return action.payload;
    case "HEADING_POSITION":
      return action.payload;
    case "CSV_ONLOAD":
      return { ...state, csv: action.payload };
    case "SHOW_EXAPMLE":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
