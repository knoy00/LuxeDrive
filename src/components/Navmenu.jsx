import '../styles/components/Media Queries/Navmenu-mq.css'
import '../styles/components/Navmenu.css'

import { FaCarSide } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { FaPalette } from 'react-icons/fa';
import { FaFlagCheckered } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

function Navmenu() {
  return (
    <div className="nav_menu">
      <div className="nav_menu_inner">
        <div className="nav_flex_container">
            <div className="nav_flex_left"></div>
            <div className="nav_flex_right">
                <div className="explore_brand">
                    <div className="explore_brand_header">
                        <div className="explore_brand_header_content">
                            <FaCarSide color='red'/>
                            <h2>Explore our Brands</h2>
                        </div>
                        <div className="angle_icon"><FaAngleRight/></div>
                    </div>
                    <div className="explore_brand_text">
                        <p>
                            Discover Benz, Porsche, Aston Martin, and Bentley
                        </p>
                    </div>
                </div>

                <div className="explore_brand">
                    <div className="explore_brand_header">
                        <div className="explore_brand_header_content">
                            <FaPalette color='blue'/>
                            <h2>Customize your car</h2>
                        </div>
                        <div className="angle_icon"><FaAngleRight/></div>
                    </div>
                    <div className="explore_brand_text">
                        <p>
                            Personalize every detail to match your style
                        </p>
                    </div>
                </div>

                <div className="explore_brand">
                    <div className="explore_brand_header">
                        <div className="explore_brand_header_content">
                            <FaSearch color='blue'/>
                            <h2>Find your dream car</h2>
                        </div>
                        <div className="angle_icon"><FaAngleRight/></div>
                    </div>
                    <div className="explore_brand_text">
                        <p>
                            Browse luxury models tailored for you
                        </p>
                    </div>
                </div>

                <div className="explore_brand">
                    <div className="explore_brand_header">
                        <div className="explore_brand_header_content">
                            <FaCarSide color='blue'/>
                            <h2>Schedule a Test Drive </h2>
                        </div>
                        <div className="angle_icon"><FaAngleRight/></div>
                    </div>
                    <div className="explore_brand_text">
                        <p>
                            Experience the thrill before you buy
                        </p>
                    </div>
                </div>

                <div className="explore_brand">
                    <div className="explore_brand_header">
                        <div className="explore_brand_header_content">
                            <FaStar color='green'/>
                            <h2>Join LuxeDrive Club</h2>
                        </div>
                        <div className="angle_icon"><FaAngleRight/></div>
                    </div>
                    <div className="explore_brand_text">
                        <p>
                            Exclusive perks, events, and VIP access
                        </p>
                    </div>
                </div>

                <div className="explore_brand">
                    <div className="explore_brand_header">
                        <div className="explore_brand_header_content">
                            <FaBuilding color='green'/>
                            <h2>LuxeDrive Business</h2>
                        </div>
                        <div className="angle_icon"><FaAngleRight/></div>
                    </div>
                    <div className="explore_brand_text">
                        <p>
                            Fleet services, corporate leasing, and partnerships
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navmenu
