import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.section 
      className="about-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="about-container"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.02 }} // Slight expansion on hover
        transition={{ duration: 0.3 }}
      >
        <motion.h1 
          className="about-heading"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About <span className="highlight">JEDIS</span>
        </motion.h1>

        <motion.p 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          JEDIS is a cutting-edge platform designed to help developers build fast, scalable applications.
          Whether you need high-performance databases, caching solutions, or a streamlined deployment process,
          JEDIS provides all the tools to supercharge your projects. 
        </motion.p>

        <motion.p 
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Join thousands of developers who trust JEDIS for their cloud and on-prem solutions.
          Get started today and build apps at lightspeed!
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;
