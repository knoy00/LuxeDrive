import '../styles/pages/ServiceModule.css'
import { Link } from 'react-router-dom';

const ShoppingBagIcon = () => {
    return (
      <svg
        width="100"
        height="100"
        viewBox="15 0 60 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="grey"
        strokeWidth="5"
      >
        <path d="M30 30 C35 10, 65 10, 70 30" strokeWidth="4" strokeLinecap="round" fill="none" />
        
        <rect x="20" y="30" width="60" height="60" rx="5" fill="none" strokeWidth="4"/>
      </svg>
    );
  };
  
  
  function ServiceModule() {
    return (
      <div className="service_module">
        <div className="service_module_inner">
          <div className="service_module_list">
            <div className="service_module_item">
                <ShoppingBagIcon />
                <h2>Where to buy</h2>
                <Link>Learn More</Link>
            </div>
  
            <div className="service_module_item">
                <img src="/images/icons/Headphone.svg" alt="Headphone Icon" />
                <h2>Support</h2>
                <Link>Learn More</Link>
            </div>
  
            <div className="service_module_item">
                <title>Home</title>
                <img src="/images/icons/location.svg" alt="Location icon" />
                <h2>Drive Safe</h2>
                <Link>Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default ServiceModule  
