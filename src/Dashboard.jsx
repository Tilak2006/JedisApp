import React from "react";
import "./Dashboard.css"; // Ensure styles are applied

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">JEDIS</h1>
        <nav className="nav-menu">
          <button className="nav-button active">DASHBOARD</button>
          <button className="nav-button">LOGS</button>
          <button className="nav-button">SUBSCRIPTIONS</button>
          <button className="nav-button">SUPPORT</button>
          <button className="nav-button">DOCUMENTATION</button>
          <button className="nav-button">LOG OUT</button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <h2>JEDIS DASHBOARD</h2>
          <div className="profile-icon" src = "/login"></div>
        </header>

        {/* Sections */}
        <section className="content-section">
          <h3>INPUT FIELDS FOR KEY-VALUE PAIR</h3>
          <div className="input-group">
            <input type="text" className="input-box" placeholder="Enter Key" />
            <input type="text" className="input-box" placeholder="Enter Value" />
            <button className="red-button">Save</button>
          </div>
        </section>

        <section className="content-section">
          <h3>RETRIEVE DATA AND DISPLAY</h3>
          <div className="input-group">
            <input type="text" className="input-box" placeholder="Enter Key" />
            <button className="red-button">Get Data</button>
          </div>
        </section>

        <section className="content-section">
          <h3>DELETE KEY-VALUE PAIRS</h3>
          <div className="input-group">
            <input type="text" className="input-box" placeholder="Enter Key" />
            <input type="text" className="input-box" placeholder="Enter Value" />
            <button className="red-button">Delete</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
