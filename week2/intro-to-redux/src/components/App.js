import React from "react";
// import Counter from "./Counter";
import TodoApp from "./TodoApp";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// reducer definition
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now, text: action.input, completed: false }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

// store definition
const store = configureStore({ reducer: todoReducer });

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        {/* <Counter /> */}
        <TodoApp />
      </Provider>
    </React.Fragment>
  );
}

export default App;
