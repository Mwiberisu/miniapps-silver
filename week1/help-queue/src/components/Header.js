import React from "react";
import bunnyImage from "../img/bunny.png";

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={bunnyImage} alt="Bunny" />
    </React.Fragment>
  );
}

export default Header;
