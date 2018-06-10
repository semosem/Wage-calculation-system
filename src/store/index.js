import { createStore } from "redux";
import { globalReducer } from "../reducers";

export const store = createStore(
  globalReducer,
  {
    data: [],
    inputVisible: false,
    clickCount: 0
  },

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
