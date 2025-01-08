import "./App.css";
import FetchData from "./components/fetch_data";
import { useState, createContext } from "react";

function App() {
  const ThemeContext = createContext();

  const [theme, setTheme] = useState("light");

  const className = theme === "light" ? "App" : "AppDark";

  document.title = "LePosts";
  return (
    <div className={className}>
      <ThemeContext.Provider value={{ theme }}>
        <div>
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "light" ? "USE DARK MODE" : "USE LIGHT MODE"}
          </button>
        </div>
      </ThemeContext.Provider>

      <FetchData />
    </div>
  );
}

export default App;
