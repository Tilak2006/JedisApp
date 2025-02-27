import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.section 
      className="contact-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="contact-container"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }} 
      >
        <motion.h1 
          className="contact-heading"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contact <span className="highlight">Us</span>
        </motion.h1>

        <motion.p 
          className="contact-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Have questions or want to collaborate? Let's connect.
        </motion.p>

        <div className="contact-details">
          <motion.a 
            href="mail to :tilakj0108@gmail.com"
            className="contact-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("tilakj0108@gmail.com");
              alert("Email copied to clipboard!");
            }}
          >
            ✉️ tilakj0108@gmail.com
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/tilak-jain-521913328/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            LinkedIn
          </motion.a>

          <motion.a 
            href="https://github.com/Tilak2006"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
