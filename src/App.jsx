import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Content from "./Content";
import About from "./About"; 
import Footer from "./Footer";
import Contact from "./Contact";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const location = useLocation(); // Now it works!

  return (
    <>
      {/* Hide Navbar on Dashboard */}
      {location.pathname !== "/dashboard" && <Navbar />}

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Optional: Hide Footer on Dashboard */}
      {location.pathname !== "/dashboard" && <Footer />}
    </>
  );
}

export default App;
