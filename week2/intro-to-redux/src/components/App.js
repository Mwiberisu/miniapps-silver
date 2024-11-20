import React from "react";
import Counter from "./Counter";
import TodoApp from "./TodoApp";
import "./App.css";

import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

import Posts from "./Posts";

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
    case "COMPLETE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const postsReducer = (
  state = { posts: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_POSTS_SUCCESS":
      return { posts: action.payload, loading: false, error: "" };
    case "FETCH_POSTS_FAILURE":
      return { posts: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

// store definition
const store = configureStore({
  reducer: postsReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        {/* <Counter /> */}
        {/* <TodoApp /> */}
        <Posts />
      </Provider>
    </React.Fragment>
  );
}

export default App;
