import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";
import "../styles/components/Media Queries/Navbar-mq.css";
import { FaUser } from "react-icons/fa";
import { FaBars} from "react-icons/fa"



const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div>
        <FaBars
          className="nav_icon" 
          size={25}
          color="white"
        />
      </div>

      <div className="logo">
        <Link to='/'><img src="/images/Logos/LuxeDrive_logo.png" alt="Logo" /></Link>
      </div>

      <div className="user">
        <FaUser
          className="nav_icon"
          size={25}
          color="white" 
        />
      </div>
    </nav>
  );
};

export default Navbar;
