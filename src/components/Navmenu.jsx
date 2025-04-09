import '../styles/components/Media Queries/Navmenu-mq.css'
import '../styles/components/Navmenu.css'

import { useState, useContext, useEffect } from 'react';

import { motion } from 'framer-motion';
import { ScreenContext } from '../ScreenProvider';


import { FaCarSide } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { FaPalette } from 'react-icons/fa';
import { FaFlagCheckered } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

function Navmenu() {

    const {openNav} = useContext(ScreenContext);

    const [isBenzOpen, setIsBenzOpen] = useState(false);
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

    const handleActiveTab = (brandTab) => {
        setIsActive(brandTab)
    }
 
    const [openMenu, setOpenMenu] = useState("flc_brands");
    const handleMenuToggle = (menu) => {
        setOpenMenu(menu);
    }

    useEffect(() => {
        if(openNav){
            document.body.classList.add('no-scroll');
        }
        document.body.classList.remove('no-scroll');
    }, [openNav])
    

  return (
    <>
        {openNav && <motion.div className="nav_menu"
    initial={{opacity: 1, y: -2000}}
    animate={{opacity: 1, y: 0}}
    transition={{ duration: .8, ease: 'easeOut' }}
    >
      <div className="nav_menu_inner">
        <div className="nav_flex_container">
            <div className="nav_flex_left">
                <div className="flex_left_header">      
                    <p onClick={() => handleMenuToggle('flc_brands')}>Brands</p>
                    <p onClick={() => handleMenuToggle('flc_models')}>Models</p>
                    <p onClick={() => handleMenuToggle('flc_service')}>Service</p>
                    <p onClick={() => handleMenuToggle('flc_news')}>News & Events</p>
                    <p onClick={() => handleMenuToggle('flc_about')}>About Us</p>
                    <p onClick={() => handleMenuToggle('flc_contact')}>Contact Us</p>
                </div>

                <div className="flex_left_content">
                    <div className={`flc_brands ${openMenu !== 'flc_brands' ? 'hide_content' : ''}`}>
                        <div className={`brand_list`}>
                            {<div className={`brand_name ${isActive === 'Benz' ? 'active_brand_tab' : ''}`} onClick={() => {
                                handleClick('')
                                handleActiveTab('Benz')
                            }}>
                                <p>Mercedes Benz</p>
                                <FaAngleRight />
                            </div>}
                            <div className={`brand_name ${isActive === 'Porsche' ? 'active_brand_tab' : ''}`} onClick={() => {
                                handleClick('Porsche')
                                handleActiveTab('Porsche')
                            }}>
                                <p>Porsche</p>
                                <FaAngleRight />
                            </div>
                            <div className={`brand_name ${isActive === 'Aston' ? 'active_brand_tab' : ''}`} onClick={() => {
                                handleClick('Aston')
                                handleActiveTab('Aston')
                            }}>
                                <p>Aston Martin</p>
                                <FaAngleRight />
                            </div>
                            <div className={`brand_name ${isActive === 'Bentley' ? 'active_brand_tab' : ''}`} onClick={() => {
                                handleClick('Bentley')
                                handleActiveTab('Bentley')
                            }}>
                                <p>Bentley</p>
                                <FaAngleRight />
                            </div>
                            
                        </div>
                        <div className="brand_img_container">
                            {isBenzOpen && <motion.div 
                            className="nav_brand_img"
                            initial ={{opacity: 0, x: 190}}
                            animate = {{opacity: 1, x: 0}}
                            transition={{duration: .2, ease: 'linear'}}
                            >
                                <img src="/images/Nav Images/G63_nav.png" alt="" />
                            </motion.div>}

                            {isPorscheOpen && <motion.div 
                            className="nav_brand_img"
                            initial ={{opacity: 0, x: -220}}
                            animate = {{opacity: 1, x: 0}}
                            transition={{duration: .2, ease: 'linear'}}
                            >
                                <img src="/images/Nav Images/Porsche-nav.png" alt="" />
                            </motion.div>}

                            {isAstonOpen && <motion.div 
                            className="nav_brand_img"
                            initial ={{opacity: 0, x: 190}}
                            animate = {{opacity: 1, x: 0}}
                            transition={{duration: .2, ease: 'linear'}}
                            >
                                <img src="/images/Nav Images/Aston-nav.png" alt="" />
                            </motion.div>}

                            {isBentleyOpen && <motion.div 
                            className="nav_brand_img"
                            initial ={{opacity: 0, x: 190}}
                            animate = {{opacity: 1, x: 0}}
                            transition={{duration: .2, ease: 'linear'}}
                            >
                                <img src="/images/Nav Images/Bentley-nav.png" alt="" />
                            </motion.div>}
                            
                        </div>
                    </div>

                    <div className={`flc_models ${openMenu === 'flc_models' ? 'display_content' : ''}`}>
                        <div className="models_list_wrapper">
                            <div className="benz-list">
                                <div className="model-list-header">
                                    <h2>Mercedes Benz</h2>
                                </div>
                                <div className="model-list">
                                        <ul>
                                            <li>S-Class</li>
                                            <li>G-Class</li>
                                            <li>AMG GT</li>
                                            <li>E-Class</li>
                                            <li>C-Class</li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="aston-list">
                                <div className="model-list-header">
                                    <h2>Aston Martin</h2>
                                </div>
                                <div className="model-list">
                                        <ul>
                                            <li>Rapide</li>
                                            <li>Vantage</li>
                                            <li>Valkyrie</li>
                                            <li>DBS</li>
                                            <li>DB11</li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="porsche-list">
                                <div className="model-list-header">
                                    <h2>Porsche</h2>
                                </div>
                                <div className="model-list">
                                        <ul>
                                            <li>911 Turbo S</li>
                                            <li>Cayenne</li>
                                            <li>Taycan</li>
                                            <li>Panamera</li>
                                            <li>718 Cayman</li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="bentley-list">
                                <div className="model-list-header">
                                    <h2>Bentley</h2>
                                </div>
                                <div className="model-list">
                                        <ul>
                                            <li>Azure</li>
                                            <li>Continental GT</li>
                                            <li>Flying Spur</li>
                                            <li>Bentayga</li>
                                            <li>Mulsanne</li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`flc_services ${openMenu === 'flc_service' ? 'display_content' : ''}`}>
                        <div className="services_list_wrapper">
                            <div className="services_list_header">
                                <h2>Services</h2>
                            </div>
                            <div className="services_list">
                                <ul>
                                    <li>Service Centers</li>
                                    <li>Parts & Accessories</li>
                                    <li>Maintenance</li>
                                    <li>Insurance</li>
                                    <li>Roadside Assistance</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`flc_news_events ${openMenu === 'flc_news' ? 'display_content' : ''}`}>
                        <div className="news_events_list_wrapper">
                            <div className="news_events_list_header">
                                <h2>News & Events</h2>
                            </div>
                            <div className="news_events_list">
                                <ul>
                                    <li>Mercedes Benzs New E-Class</li>
                                    <li>Aston Martins Vantage Roadster</li>
                                    <li>Porsche 911 Turbo S Release</li>
                                    <li>Bentley Continental GT Announcement</li>
                                    <li>Roadster Celebration</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`flc_about_us ${openMenu === 'flc_about' ? 'display_content' : ''}`}>
                        <div className="about_us_wrapper">
                            <div className="about_us_header">
                                <h2>About Us</h2>
                            </div>
                            <div className="about_us_text">
                                <p>
                                    Benz, Porsche, Aston Martin, and Bentley are premier brands in the automotive industry. Our passion for driving has driven us to create innovative and sustainable solutions that meet the needs of our customers. <br /> <br />
                                    With a commitment to excellence, we blend state-of-the-art engineering with timeless design, ensuring every vehicle delivers an unparalleled driving experience. From high-performance sports cars to ultra-luxurious sedans and SUVs, we strive to push the boundaries of automotive craftsmanship. <br /> <br />
                                    Our dedication to sustainability is reflected in our pursuit of advanced electric and hybrid technologies, reducing environmental impact while maintaining the thrill of driving. As pioneers in the industry, we continue to set new standards in safety, comfort, and performance. <br /> <br />
                                    At the heart of our brand is a deep connection with our customers. We believe in delivering not just cars, but a lifestyle—one that embodies elegance, power, and innovation. Whether on the open road or in the city, our vehicles are designed to inspire and elevate every journey.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`flc_contact_us ${openMenu === 'flc_contact' ? 'display_content' : ''}`}>
                        <div className="contact_us_wrapper">
                            <div className="contact_us_header">
                                <h2>Contact Us</h2>
                            </div>
                            <div className="contact_us_text">
                                <p>
                                    For inquiries, please contact us at <a href="mailto:info@luxedrive.com">info@luxedrive.com</a> or visit our <a href="https://www.luxedrive.com/contact">contact page</a> for more information. <br /> <br />
                                    Our office is located at 123 Main Street, Anytown, USA 12345. <br /> <br />
                                    We are open daily from 9 AM to 5 PM. <br /> <br />
                                    Thank you for your interest in our brand!
                                </p>
                            </div>    
        
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
        </motion.div>}
    </>
  )
}

export default Navmenu
