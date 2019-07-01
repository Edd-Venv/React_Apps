import React from "react";
import { NavLink } from "react-router-dom";
import Link from "./Link.js";

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
          <NavLink
            to="/TodoApp"
            style={navStyle}
            activeStyle={{ color: "brown" }}
            exact
          >
            TodoApp
          </NavLink>
          <NavLink
            exact
            to="/"
            style={navStyle}
            activeStyle={{ color: "brown" }}
          >
            Home
          </NavLink>
          <Link
            exact
            to="https://github.com/Edd-Venv/React_Apps/tree/master/src"
            style={navStyle}
            activeStyle={{ color: "brown" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <Link
            exact
            to="https://edwinushibantu.eu.pythonanywhere.com/"
            style={navStyle}
            activeStyle={{ color: "brown" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Django Applications
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
