import React from "react";
import Counter from "./Counter";
import TodoApp from "./TodoApp";
import "./App.css";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

import Posts from "./Posts";
import { counterReducer } from "../reducers/counter.reducer";
import { todoReducer } from "../reducers/todos.reducer";
import { postsReducer } from "../reducers/posts.reducer";

// reducer definition
const appReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  posts: postsReducer,
});

// store definition
const store = configureStore({
  reducer: appReducer,
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
