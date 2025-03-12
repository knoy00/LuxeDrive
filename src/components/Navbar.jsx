import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";
import "../styles/components/Media Queries/Navbar-mq.css";
import { FaUser, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScroll ? "on_scroll" : ""}`}>
      <div>
        <FaBars className="nav_icon" size={22} color="white" />
      </div>

      <div className="logo">
        <Link to="/">
          <img src="/images/Logos/LuxeDrive_logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="user">
        <FaUser className="nav_icon" size={22} color="white" />
      </div>
    </nav>
  );
};

export default Navbar;
