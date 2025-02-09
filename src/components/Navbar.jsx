import { Link } from "react-router-dom";
import Logo from "../images/logo/hisab.svg";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ width: "100%", backgroundColor: "white", transition: "all 0.3s ease-in-out" }}>
      <div className="container">
        {/* Logo on the left */}
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="logo-img" width="150" />
        </Link>

        {/* Toggle button for mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={openNav} 
          aria-controls="navbarNav" 
          aria-expanded={nav ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          <FiMenu size={28} />
        </button>

        {/* Navbar links */}
        <div className={`collapse navbar-collapse ${nav ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
          </ul>

          {/* Sign In and Register buttons */}
          <div className="navbar-buttons d-flex">
            <Link className="nav-link me-2" to="/">Sign In</Link>
            <Link className="btn1" to="/">Register</Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar (Fixed at the top) */}
      {nav && (
        <div className="mobile-navbar" style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1050,
          overflowY: "auto" // Allows scrolling inside the sidebar if needed
        }}>
          <button onClick={openNav} className="mobile-navbar__close" style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "28px",
            cursor: "pointer"
          }}>
            <FiX size={28} />
          </button>
          <ul className="mobile-navbar__links" style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
            <li><Link onClick={openNav} to="/features" style={{ color: "white", fontSize: "24px", margin: "10px 0" }}>Features</Link></li>
            <li><Link onClick={openNav} to="/contact" style={{ color: "white", fontSize: "24px", margin: "10px 0" }}>Contact</Link></li>
            <li><Link onClick={openNav} to="/" style={{ color: "white", fontSize: "24px", margin: "10px 0" }}>Sign In</Link></li>
            <li><Link onClick={openNav} to="/" style={{ color: "white", fontSize: "24px", margin: "10px 0" }}>Register</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
