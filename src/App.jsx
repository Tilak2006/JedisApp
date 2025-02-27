import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Content from "./Content";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const location = useLocation(); 

  return (
    <GoogleOAuthProvider clientId="315887135987-8bgfupft7ire7pfsa3fprqk0rtshl584.apps.googleusercontent.com">
      <>
        {/* this is tohide Navbar on Dashboard */}
        {location.pathname !== "/dashboard" && <Navbar />}

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

  
        {location.pathname !== "/dashboard" && <Footer />}
      </>
    </GoogleOAuthProvider>
  );
}

export default App;
