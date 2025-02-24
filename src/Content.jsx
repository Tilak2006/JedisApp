import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom"; // For navigation
import "./Content.css";
import Group1 from "./assets/groupp.png";
import Computer from "./assets/computer.png";

const Content = () => {
  const controls = useAnimation();
  const [typingDone, setTypingDone] = useState(false);
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    const section = document.querySelector(".grid-container");

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [controls]);

  return (
    <>
      {/* Hero Section */}
      <section className="body1">
        <div className="content">
          <div className="text-container">
            <motion.div
              className="heading-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading">
                GET STARTED WITH&nbsp;
                <span className="highlight typing-effect">
                  <span className={typingDone ? "hide-cursor" : ""}>
                    <Typewriter
                      words={["JEDIS", "SPEED", "JEDIS"]}
                      cursor={!typingDone}
                      cursorStyle="_"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      loop={1}
                      onLoopDone={() => setTypingDone(true)}
                    />
                  </span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Sign up to learn about building on the world’s fastest data platform. 
              Our cloud and on-prem solutions help teams like yours build fast apps fast.
            </motion.p>

            {/* 🚀 Integrated START FOR FREE Button with Navigation */}
            <motion.button
              className="start-btn"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.01, duration: 0.1 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/login")} // Navigate to login page
            >
              START FOR FREE
            </motion.button>
          </div>

          <motion.div
            className="image-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Group1} alt="Tech Icons" className="group-img" />
          </motion.div>
        </div>
      </section>

      {/* Grid Section (Computer Image + Text Box) */}
      <motion.section
        className="grid-container"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-box"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h5>
            Quickly deploy faster apps on vector databases, caches, NoSQL databases, 
            and custom configurations in any environment out of the box.
          </h5>
        </motion.div>

        <motion.div
          className="image-box"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={Computer} alt="Computer" className="grid-image" />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Content;
