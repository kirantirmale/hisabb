import { Link } from "react-router-dom";
import Logo from "../images/logo/hisab.svg";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      ref={navbarRef} 
      className="navbar navbar-expand-lg" 
      style={{
        position: isSticky ? "fixed" : "relative",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "white",
        transition: "all 0.3s ease-in-out",
        boxShadow: isSticky ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
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
              {/* <Link className="nav-link" to="/">Home</Link> */}
            </li>
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
      
      {/* Mobile navbar */}
      {nav && (
        <div className="mobile-navbar">
          <button onClick={openNav} className="mobile-navbar__close">
            <FiX size={28} />
          </button>
          <ul className="mobile-navbar__links">
            <li>
              {/* <Link onClick={openNav} to="/">Home</Link> */}
            </li>
            <li>
              <Link onClick={openNav} to="/features">Features</Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">Contact</Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">Sign In</Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">Register</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
