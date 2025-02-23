import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">JEDIS</div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>  {/* Updated Link */}
        <li><Link to="/contact">CONTACT</Link></li>  {/* Future Contact Page */}
      </ul>
    </nav>
  );
};

export default Navbar;
