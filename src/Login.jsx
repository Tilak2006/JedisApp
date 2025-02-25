import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check for stored theme preference
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Integrate OAuth here
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Email:", email, "Password:", password);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="login-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="login-box"
      >
        <h2>Login to JEDIS</h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="google-login"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </motion.button>

        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <motion.button
            type="submit"
            className="email-login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login with Email"}
          </motion.button>
        </form>

        <motion.button
          className="back-btn"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back
        </motion.button>

        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </motion.div>
    </div>
  );
};

export default Login;