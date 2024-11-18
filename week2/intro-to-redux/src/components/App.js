import React from "react";
import Counter from "./Counter";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// reducer definition
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state + 1;
  }
};

// store definition
const store = configureStore({ reducer: counterReducer });

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Counter />
      </Provider>
    </React.Fragment>
  );
}

export default App;
