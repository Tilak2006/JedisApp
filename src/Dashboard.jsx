import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      console.log("Welcome Master Jedi ⚔️", storedUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    alert("Returning to home page");
    setUser(null);
    navigate("/");
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <motion.div
      className="dashboard-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <motion.aside
  className={`sidebar ${open ? "open" : ""}`}
  initial={{ x: -200 }}
  animate={{ x: 0 }}
  transition={{ type: "spring", stiffness: 100 }}
>
  <h1 className="logo">JEDIS</h1>
  <nav className="nav-menu">
    <motion.button className="nav-button active">DASHBOARD</motion.button>
    <motion.button className="nav-button">LOGS</motion.button>
    <motion.button className="nav-button">SUBSCRIPTIONS</motion.button>
    <motion.button className="nav-button">SUPPORT</motion.button>
    <motion.button className="nav-button">DOCUMENTATION</motion.button>
    {user ? (
      <motion.button className="nav-button" onClick={logout}>
        LOG OUT
      </motion.button>
    ) : (
      <motion.button className="nav-button" onClick={login}>
        LOG IN
      </motion.button>
    )}
  </nav>
</motion.aside>


      <motion.div className="main-content">
        <header className="header">
          <h2>JEDIS DASHBOARD</h2>

          {user ? (
            <motion.img
              src={user.picture}
              alt="Profile Pic"
              className="profile-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={logout}
            />
          ) : (
            <motion.div
              className="profile-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={login}
            />
          )}
        </header>

        {/* 🔑 INPUT SECTION */}
        <section className="content-section">
          <h3>INPUT FIELDS FOR KEY-VALUE PAIR</h3>
          <div className="input-group">
            <input type="text" className="input-box" placeholder="Enter Key" />
            <input type="text" className="input-box" placeholder="Enter Value" />
            <motion.button
              className="red-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SAVE
            </motion.button>
          </div>
        </section>

        {/* 🔍 RETRIEVE SECTION */}
        <section className="content-section">
          <h3>RETRIEVE DATA AND DISPLAY</h3>
          <div className="input-group">
            <input type="text" className="input-box" placeholder="Enter Key" />
            <motion.button
              className="red-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET DATA
            </motion.button>
          </div>
        </section>

        {/* ❌ DELETE SECTION */}
        <section className="content-section">
          <h3>DELETE KEY-VALUE PAIRS</h3>
          <div className="input-group">
            <input type="text" className="input-box" placeholder="Enter Key" />
            <input type="text" className="input-box" placeholder="Enter Value" />
            <motion.button
              className="red-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DELETE
            </motion.button>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
