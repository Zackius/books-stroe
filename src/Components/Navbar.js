import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-link">

        <Link  to="/">Soma..</Link>
        <Link to="books">Books</Link>
        <Link to="add">Add Books</Link>
      </div>
    </nav>
  );
};

export default Navbar;
