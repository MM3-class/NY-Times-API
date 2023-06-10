import React from "react";
import Nav from "./nav/Nav";
import "../header/header.css"
import SearchTerm from "../../features/searchTerm/SearchTerm.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <SearchTerm />
      </div>
      <nav>
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
