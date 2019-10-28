import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header text-white">
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Here Logo
        </Link>
        <Link to="/about">About us</Link>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Header;
