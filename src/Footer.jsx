import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiRedis } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/tilak-jain-521913328/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/Tilak2006" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://leetcode.com/u/Tilak_Jain_01/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode /> LeetCode
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a href="mailto:your-tilakj0108@.com">
          <FaEnvelope /> Email
        </a>
        <a href="https://redis.io" target="_blank" rel="noopener noreferrer">
          <SiRedis /> Redis
        </a>
      </div>

    

      
    </footer>
  );
};

export default Footer;
