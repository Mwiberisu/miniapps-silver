import React, { useContext } from "react";

function Theme() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>The current theme is {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {" "}
        Change theme
      </button>
    </div>
  );
}

export default Theme;
