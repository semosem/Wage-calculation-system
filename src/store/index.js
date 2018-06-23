import { createStore } from "redux";
import { globalReducer } from "../reducers";

export const store = createStore(
  globalReducer,
  {
    employees: [],
    visible: false
  },

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
