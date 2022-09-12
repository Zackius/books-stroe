import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-link">
        <a href="/" className="logo">
          SoMa....
        </a>
        <a href="/">Home</a>
        <a href="/">Books</a>
        <input type="text" placeholder="Search your book here......" />
        <button>Submit </button>
        <a href="/">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
