import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";
import "../styles/components/Media Queries/Navbar-mq.css";
import { FaUser } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="navbar">
      
      <p>Menu</p>

      <div className="logo">
        <img src="/images/Logos/LuxeDrive_logo.png" alt="Logo" />
      </div>

      <div className="user">
        <FaUser />
      </div>
    </nav>
  );
};

export default Navbar;
