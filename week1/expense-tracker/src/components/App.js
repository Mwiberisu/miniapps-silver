import React from "react";
import Header from "./Header";
import "./App.css";
import ExpenseList from "./ExpenseList";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <ExpenseList />
      </div>
    </React.Fragment>
  );
}

export default App;
