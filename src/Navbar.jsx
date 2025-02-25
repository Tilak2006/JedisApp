import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">JEDIS</div>
      
      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
