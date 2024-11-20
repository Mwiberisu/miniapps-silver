import React from "react";
import bunnyImage from "../img/bunny.png";

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={bunnyImage} alt="Bunny" width={500} height={250} />
    </React.Fragment>
  );
}

export default Header;
