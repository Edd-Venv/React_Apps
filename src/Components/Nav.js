import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "black"
  };
  return (
    <div>
      <nav>
        <h1 style={{ color: "brown", fontSize: "1.7em" }}>
          <big>
            <i>Welcome</i>
          </big>
        </h1>
        <ul className="nav-links " style={{ fontSize: "1.2em" }}>
          <Link to="/TodoApp" style={navStyle}>
            TodoApp
          </Link>
          <Link to="/" style={navStyle}>
            Home
          </Link>
          <Link style={navStyle}>Github</Link>
          <Link to="edwinushibantu.eu.pythonanywhere.com/" style={navStyle}>
            Django Applications
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
