import { motion, inView } from "framer-motion"
import { useRef } from "react"

import '../styles/pages/LuxeDrive_Auction.css';

function LuxeDrive_Auction() {
  return (
    <div className="auction_section">
        <div className="auction_inner">
            <div className="auction_header">
                <h1>Drive Your Dream Car at Unbeatable Prices!</h1>
                <p>
                Take advantage of our exclusive auctioning and bidding services, where you can secure top-quality cars at the best prices, tailored just for you.
                </p>
                
            </div>
            <div className="auction_content_wrapper">
                <div className="auction_img">
                    <img src="/public/images/Bento-Grid/bentayga.jpg" alt="Bentayga" />
                </div>
                <div className="auction_content">
                    <h2>Bid, Win, and Save Big!</h2>
                    <p>
                        Join our auction platform and get incredible deals on top-quality cars. With hundreds of bidders competing daily, you’re always in for exciting opportunities to win at the best prices!
                    </p>
                    <button>Bid Now</button>
                </div>

                <div className="auction_content">
                    <h2>Bid, Win, and Save Big!</h2>
                    <p>
                        Join our auction platform and bid your way to unbeatable prices. With exciting auctions happening daily, you have the chance to own top-quality cars at a fraction of the cost!
                    </p>
                    <button>Bid Now</button>
                </div>

                <div className="auction_img">
                    <img src="/public/images/Bento-Grid/bentayga.jpg" alt="" />
                </div>

                <div className="auction_img">
                    <img src="/public/images/Bento-Grid/bentayga.jpg" alt="" />
                </div>

                <div className="auction_content">
                    <h2>Bid, Win, and Save Big!</h2>
                    <p>
                        Join our auction platform and get incredible deals on top-quality cars. With hundreds of bidders competing daily, you’re always in for exciting opportunities to win at the best prices!
                    </p>
                    <button>Bid Now</button>
                </div>

                
            </div>
        </div>
     
    </div>
  )
}

export default LuxeDrive_Auction
