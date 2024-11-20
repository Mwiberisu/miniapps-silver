import React from "react";
import Header from "./Header";
import "./App.css";
import MainPage from "./MainPage";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
