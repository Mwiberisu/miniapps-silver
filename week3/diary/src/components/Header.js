import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul className="header">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/deardiary">New Entry</Link>
        </li>
        <li>
          <Link to="/pastentries">Past Entries</Link>
        </li>
        <li>
          <Link to="/logout">Log Out</Link>
        </li>
      </ul>
      <hr />
      <h1>Stories From My Life</h1>
      <p>A collection of notes from my life</p>
    </div>
  );
}

export default Header;
