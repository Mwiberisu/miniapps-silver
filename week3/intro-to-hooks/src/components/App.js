import { createContext } from "react";
import "./App.css";
import Theme from "./Theme";

const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Theme />
    </ThemeContext.Provider>
  );
}

export default App;
