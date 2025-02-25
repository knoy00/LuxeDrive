import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      
      <p>Menu</p>

      <div className="logo">
        <h2>LuxeDrive</h2>
      </div>

      <div className="user"></div>
    </nav>
  );
};

export default Navbar;
