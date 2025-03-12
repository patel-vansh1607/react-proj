import React from "react";
import "./navBar.css"; 
import logo from "../images/f1-logo.png"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="F1 Logo" className="logo" />
    </nav>
  );
};

export default Navbar;
