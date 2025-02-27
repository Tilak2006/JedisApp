import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">JEDIS</div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          ☰
        </div>

        {/* Navigation Links (Sidebar) */}
        <div className={`nav-links-container ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>LOGIN</Link></li>
          </ul>
        </div>

        {/* Dark overlay when menu opens */}
        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </nav>
    </>
  );
};

export default Navbar;
