import React from "react";
import { NavLink } from "react-router-dom";
import "../nav/nav.css"

const Nav = () => {
  return (
    <div className="navbar">
      <NavLink to="/ny-times-api">Home</NavLink>
      <NavLink to="/fashion">Fashion</NavLink>
      <NavLink to="/art">Art's</NavLink>
      <NavLink to="/us">U.S.</NavLink>
    </div>
  );
};

export default Nav;
