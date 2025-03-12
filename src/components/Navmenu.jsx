import '../styles/components/Media Queries/Navmenu-mq.css'
import '../styles/components/Navmenu.css'

import { useState } from 'react';

import { FaCarSide } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { FaPalette } from 'react-icons/fa';
import { FaFlagCheckered } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

function Navmenu() {

    const [isBenzOpen, setIsBenzOpen] = useState(true);
    const [isPorscheOpen, setIsPorscheOpen] = useState(false);
    const [isBentleyOpen, setIsBentleyOpen] = useState(false);
    const [isAstonOpen, setIsAstonOpen] = useState(false);

    const [isActive, setIsActive] = useState(null);

    const handleClick = (tab) => {
        if(tab === 'Porsche'){
            setIsPorscheOpen(true);
            setIsBenzOpen(false);
            setIsBentleyOpen(false);
            setIsAstonOpen(false);
        }
        else if(tab === 'Bentley'){
            setIsBentleyOpen(true);
            setIsBenzOpen(false);
            setIsPorscheOpen(false);
            setIsAstonOpen(false);
        }
        else if(tab === 'Aston'){
            setIsAstonOpen(true);
            setIsBenzOpen(false);
            setIsPorscheOpen(false);
            setIsBentleyOpen(false);
        }
        else {
            setIsBenzOpen(true);
            setIsPorscheOpen(false);
            setIsBentleyOpen(false);
            setIsAstonOpen(false);
        }
    }

    const handleActiveTab = (tab


  return (
    <div className="nav_menu">
      <div className="nav_menu_inner">
        <div className="nav_flex_container">
            <div className="nav_flex_left">
                <div className="flex_left_header">
                    <p>Brands</p>
                    <p>Models</p>
                    <p>Service</p>
                    <p>News & Events</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>

                <div className="flex_left_content">
                    <div className="flc_brands">
                        <div className="brand_list">
                            <div className="brand_name" onClick={() => handleClick('')}>
                                <p>Mercedes Benz</p>
                                <FaAngleRight />
                            </div>
                            <div className="brand_name" onClick={() => handleClick('Porsche')}>
                                <p>Porsche</p>
                                <FaAngleRight />
                            </div>
                            <div className="brand_name" onClick={() => handleClick('Aston')}>
                                <p>Aston Martin</p>
                                <FaAngleRight />
                            </div>
                            <div className="brand_name" onClick={() => handleClick('Bentley')}>
                                <p>Bentley</p>
                                <FaAngleRight />
                            </div>
                            
                        </div>
                        <div className="brand_img_container">
                            {isBenzOpen && <div className="nav_brand_img">
                                <img src="/images/Nav Images/G63_nav.png" alt="" />
                            </div>}
                            {isPorscheOpen && <div className="nav_brand_img">
                                <img src="/images/Nav Images/Porsche-nav.png" alt="" />
                            </div>}
                            {isAstonOpen && <div className="nav_brand_img">
                                <img src="/images/Nav Images/Aston-nav.png" alt="" />
                            </div>}
                            {isBentleyOpen && <div className="nav_brand_img">
                                <img src="/images/Nav Images/Bentley-nav.png" alt="" />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>

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
                            <FaFlagCheckered color='blue'/>
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
