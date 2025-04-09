import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";
import "../styles/components/Media Queries/Navbar-mq.css";
import { FaUser, FaBars } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import Navmenu from '../components/Navmenu' 
import { ScreenContext } from "../ScreenProvider";
const Navbar = () => {
  const {setOpenNav} = useContext(ScreenContext)


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

  const [navClose, setNavClose] = useState(true);
  const handleNavToggle = () => {
    setNavClose(!navClose);
  };

  // const combinedFunction = () => {
  //   handleNavToggle();
  //   setOpenNav(prev => !prev); 
  // };

  return (
    <>
      <nav className={`navbar ${isScroll ? "on_scroll" : ""}`}>
      <div onClick={()=> setOpenNav(prev => !prev)}>
        <FaBars size={20} color="#fff"/>
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
      <Navmenu />
    </>
  );
};

export default Navbar;
