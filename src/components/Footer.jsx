import '../styles/components/Footer.css'

import { Link } from 'react-router-dom'

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer'>
      <div className="footer_inner">
        <div className="footer_flex">
            <div className="footer_flex_item newsletter">
                <h2>Newsletter</h2>
                <p>Latest news and updates delivered to your inbox</p>
                <button>Subscribe</button>
            </div>
            <div className="footer_flex_item location_contact">
                <h2>Location & Contact</h2>
                <p>Have a question? We&apos; d love to hear from you soon</p>
                <button>Get in touch</button>
            </div>
            <div className="footer_flex_item socials">
                <h2>Social Media</h2>
                <p>Get in touch with us through social media today</p>
                <div className="social_icons">
                    <FaFacebookF 
                        className="ico"
                        color="black" 
                        
                        size={55}
                    />
                    <FaYoutube 
                        color="black" 
                        className="ico"
                        size={55}
                    />
                    <FaInstagram 
                        color="black" 
                        className="ico"
                        size={55}

                    />
                    <FaTwitter 
                        color="black" 
                        className="ico"
                        size={55}

                    />
                    <FaTiktok 
                        color="black" 
                        className="ico"
                        size={55}

                    />
                </div>
            </div>
        </div>
        <div className="divider"></div>

        <div className="copyright">
            <p>&copy; 2025 LuxeDrive Group. All rights reserved.</p>
            <div className="footer_links">
                <Link>Privacy Policy</Link>
                <Link>Terms & Conditions</Link>
                <Link>Cookie Policy</Link>
                <Link>About Us</Link>
                <Link>Contact Us</Link>
                <Link>FAQ</Link>
                <Link>Blog</Link>
                <Link>Press</Link>
            </div>
            
        </div>

        
      </div>
        <div className="footer_logo">
            <Link to="/"><img src="/images/Logos/LuxeDrive_logo.png" alt="Luxedrive-font" border="0"/></Link>
        </div>
    </div>
  )
}

export default Footer
