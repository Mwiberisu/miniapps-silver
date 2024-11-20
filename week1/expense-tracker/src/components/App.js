import React from "react";
import Header from "./Header";
import "./App.css";
import MainPage from "./MainPage";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <MainPage />
      </div>
    </React.Fragment>
  );
}

export default App;
